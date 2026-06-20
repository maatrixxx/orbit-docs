---
id: troubleshooting
title: Troubleshooting
sidebar_position: 99
---

# Troubleshooting

This page covers the most common issues and how to resolve them.

---

## Installation

### Orbit won't open after installation (Windows)

- Make sure you're on **Windows 10 or 11** (64-bit)
- Try right-clicking the installer and selecting **Run as administrator**
- Check that your antivirus is not blocking Orbit — add an exception for the Orbit installation folder
- If Windows shows a SmartScreen warning, click **More info → Run anyway**

### "WebSocket server not connected" error on any task (Mac)

This means a helper binary inside the app got blocked by macOS Gatekeeper, even though the main app was allowed to open. Run this in Terminal, then relaunch Orbit:

```
xattr -cr /Applications/Orbit.app
```

### Chromium is stuck "installing"

On first launch, Orbit downloads and installs Chromium automatically. This can take 1–3 minutes depending on your connection. Do not close the app during this process.

If it appears stuck for more than 5 minutes:
1. Close Orbit
2. Delete the folder: `C:\Users\<you>\AppData\Local\ms-playwright`
3. Relaunch Orbit — it will reinstall Chromium

---

## Amazon Generator

### "SMS timeout" — no code received

- Check your **SMS provider balance** — you may be out of credit
- Verify your **SMS API key** in Settings → SMS
- Try a different SMS country or provider
- Some numbers are of poor quality — the task will retry automatically

### "Captcha failed" — CapGuru not solving

- Check your **CapGuru balance** in Settings → CapGuru
- Verify your **CapGuru API key** is correct
- CapGuru may be experiencing high load — wait a few minutes and retry

### "Email already used" on every email

- Your email list may be exhausted — all emails already have Amazon accounts
- Generate more emails using the iCloud generator
- Check that your IMAP settings are correct so OTPs can be received

### OTP email never arrives

- Check **Settings → IMAP** — the connection may be failing
- Ensure your iCloud or email account allows IMAP access
- For iCloud: make sure you're using an **app-specific password**, not your Apple ID password
- The email inbox must be accessible — test it with an IMAP client like Thunderbird

### Accounts created but showing as "Unknown" status

Status is not automatically checked after creation. Run a **Session task** on the account group to verify and update account statuses.

---

## Proxies

### All proxies showing as "Dead"

- Your proxy credentials may have expired — check with your proxy provider
- Ensure the proxy format is correct: `host:port:username:password`
- Test a proxy manually with a curl command or browser extension
- Residential proxies may rotate — "dead" at test time doesn't mean dead in production

### Tasks failing with connection errors

- The proxy may be rate-limited by Amazon — try a different proxy group
- Ensure the proxy country matches the Amazon marketplace (e.g. French proxies for `amazon.fr`)

---

## Emails

### Can't delete an email (red error)

- The email may be referenced by a task — Orbit automatically removes the reference, but if the error persists, check that the backend is online
- Try refreshing the page and retrying

### iCloud generator not creating aliases

- Check that you're logged into iCloud in **Settings → iCloud Account**
- Ensure your iCloud account has an active **iCloud+ subscription**
- Apple may have temporarily rate-limited your account — wait 30–60 minutes and retry
- The minimum interval is 10 minutes — setting it lower will cause Apple to block generation

---

## General

### The app shows a blank white screen

This usually means the local server failed to start. Try:
1. Close Orbit completely
2. Wait 10 seconds and relaunch
3. If another application is using port 3001, close it first

### "Port 3001 is already in use" error

Another Orbit instance (or another app) is using port 3001. Close all other running copies of Orbit and restart.

### Tasks are not updating in real time

The real-time log uses SSE (Server-Sent Events). If logs appear frozen:
- Scroll to the bottom of the task log
- Refresh the page — running tasks will continue in the background
- Check that the local server is running (no error dialog on launch)

---

## Still stuck?

If your issue isn't listed here, please contact support with:
- A description of what you expected vs. what happened
- The task type and settings you used
- Any error messages shown in the task log
