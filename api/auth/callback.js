const crypto = require('crypto')

const REDIRECT_URI = 'https://docs.orbit-tool.com/api/auth/callback'
const SESSION_DURATION = 7 * 24 * 60 * 60 // 7 days in seconds

const ACCESS_DENIED_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Orbit Docs — Access Denied</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #0c0d13;
      color: #eeeef8;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      background: #13141f;
      border: 1px solid #2a1a1a;
      border-radius: 20px;
      padding: 48px 40px;
      width: 420px;
      max-width: 90vw;
      text-align: center;
    }
    .icon { font-size: 48px; margin-bottom: 20px; }
    h1 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
    p { font-size: 14px; color: #62638a; line-height: 1.6; margin-bottom: 28px; }
    a {
      display: inline-block;
      background: #5865F2;
      color: #fff;
      border-radius: 10px;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
    }
    a:hover { background: #4752C4; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">🚫</div>
    <h1>Access Denied</h1>
    <p>You need to be a member of the Orbit Discord server to access the documentation.</p>
    <a href="https://discord.gg/orbit">Join the Discord</a>
  </div>
</body>
</html>`

function createSession(userId, username) {
  const exp = Date.now() + SESSION_DURATION * 1000
  const payload = Buffer.from(JSON.stringify({ userId, username, exp })).toString('base64url')
  const sig = crypto.createHmac('sha256', process.env.SESSION_SECRET).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

module.exports = async function handler(req, res) {
  const { code, state } = req.query

  if (!code) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.status(400).send('<h1>Missing authorization code</h1>')
  }

  try {
    // 1. Exchange code for Discord access token
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: String(code),
        redirect_uri: REDIRECT_URI,
      })
    })
    const tokenData = await tokenRes.json()

    if (!tokenData.access_token) {
      console.error('[auth] Token exchange failed:', tokenData)
      return res.status(401).send('Authentication failed — please try again.')
    }

    // 2. Get Discord user info
    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    })
    const user = await userRes.json()

    // 3. Check if user is in the Orbit guild
    const guildsRes = await fetch('https://discord.com/api/users/@me/guilds', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    })
    const guilds = await guildsRes.json()

    const isMember = Array.isArray(guilds) && guilds.some(g => g.id === process.env.DISCORD_GUILD_ID)

    if (!isMember) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      return res.status(403).send(ACCESS_DENIED_HTML)
    }

    // 4. Create signed session + set cookie
    const session = createSession(user.id, user.username)
    const redirectTo = (state && state.startsWith('/')) ? state : '/'

    res.setHeader('Set-Cookie', [
      `orbit_docs_session=${session}; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_DURATION}; Path=/`
    ])
    res.redirect(302, redirectTo)

  } catch (err) {
    console.error('[auth] Callback error:', err)
    res.status(500).send('Internal authentication error. Please try again.')
  }
}
