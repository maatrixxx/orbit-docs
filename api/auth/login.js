const REDIRECT_URI = 'https://docs.orbit-tool.com/api/auth/callback'

const LOGIN_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Orbit Docs — Login</title>
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
      border: 1px solid #1e2030;
      border-radius: 20px;
      padding: 48px 40px;
      width: 420px;
      max-width: 90vw;
      text-align: center;
    }
    .logo {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #eeeef8;
      margin-bottom: 8px;
    }
    .logo span { color: #a78bfa; }
    .subtitle {
      font-size: 14px;
      color: #62638a;
      margin-bottom: 40px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      background: #5865F2;
      color: #fff;
      border: none;
      border-radius: 12px;
      padding: 14px 28px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      width: 100%;
      transition: background 0.15s;
    }
    .btn:hover { background: #4752C4; }
    .btn svg { flex-shrink: 0; }
    .note {
      margin-top: 20px;
      font-size: 12px;
      color: #46476a;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">OR<span>B</span>IT</div>
    <p class="subtitle">Documentation &amp; Beginner Guide</p>
    <a href="__DISCORD_URL__" class="btn">
      <svg width="22" height="16" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.1 4.9A58.6 58.6 0 0 0 45.5.4a40 40 0 0 0-1.8 3.7 54.2 54.2 0 0 0-16.3 0A38.5 38.5 0 0 0 25.6.4 58.5 58.5 0 0 0 11 5C1.6 19.7-1 34 .3 48.1a59 59 0 0 0 18 9.1 44.4 44.4 0 0 0 3.8-6.2 38.3 38.3 0 0 1-6-2.9l1.4-1.1a42 42 0 0 0 36 0l1.5 1.1a38.4 38.4 0 0 1-6 2.9 44.2 44.2 0 0 0 3.8 6.2 58.8 58.8 0 0 0 18-9.1C72.5 31.8 68.3 17.5 60.1 4.9ZM23.8 39.4c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2Zm23.4 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2Z" fill="white"/>
      </svg>
      Connect with Discord
    </a>
    <p class="note">Access is reserved for members of the Orbit Discord server.</p>
  </div>
</body>
</html>`

module.exports = function handler(req, res) {
  const redirect = req.query.redirect || '/'

  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'identify guilds',
    state: redirect,
  })

  const discordUrl = `https://discord.com/api/oauth2/authorize?${params}`
  const html = LOGIN_HTML.replace('__DISCORD_URL__', discordUrl)

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.status(200).send(html)
}
