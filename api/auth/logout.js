module.exports = function handler(req, res) {
  res.setHeader('Set-Cookie', 'orbit_docs_session=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/')
  res.redirect(302, '/api/auth/login')
}
