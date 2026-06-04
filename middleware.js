// Vercel Edge Middleware — protects all docs pages with Discord auth
export default async function middleware(request) {
  const url = new URL(request.url)
  const { pathname } = url

  // Skip: auth endpoints + static assets (JS, CSS, images, fonts)
  if (
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/img/') ||
    pathname.startsWith('/assets/') ||
    /\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|js|css|map|txt|xml|json)$/.test(pathname)
  ) {
    return // pass through
  }

  // Check session cookie
  const cookieHeader = request.headers.get('cookie') || ''
  const match = cookieHeader.match(/orbit_docs_session=([^;]+)/)
  const token = match ? match[1] : null

  if (token) {
    const valid = await verifyToken(token)
    if (valid) return // pass through — user is authenticated
  }

  // Not authenticated → redirect to login page
  const loginUrl = new URL('/api/auth/login', request.url)
  loginUrl.searchParams.set('redirect', pathname + url.search)
  return Response.redirect(loginUrl.toString(), 302)
}

async function verifyToken(token) {
  try {
    const secret = process.env.SESSION_SECRET
    if (!secret) return false

    const lastDot = token.lastIndexOf('.')
    if (lastDot === -1) return false
    const payload = token.slice(0, lastDot)
    const sig = token.slice(lastDot + 1)

    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    )

    const sigBytes = base64urlToBytes(sig)
    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(payload))
    if (!valid) return false

    const data = JSON.parse(new TextDecoder().decode(base64urlToBytes(payload)))
    return data.exp > Date.now()
  } catch {
    return false
  }
}

function base64urlToBytes(str) {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/')
  const padded = b64.padEnd(Math.ceil(b64.length / 4) * 4, '=')
  return Uint8Array.from(atob(padded), c => c.charCodeAt(0))
}

export const config = {
  matcher: ['/((?!api/auth|_next).*)']
}
