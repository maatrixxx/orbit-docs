---
id: opening-sessions
title: Opening Browser Sessions
sidebar_position: 3
---

# Opening Browser Sessions

Orbit can open a browser session logged into any Amazon account using its saved **cookies**. This lets you manually browse, verify an account, or perform actions that require a logged-in state.

---

## What Are Cookies?

When Orbit creates an Amazon account, it saves the session cookies from the registration. These cookies allow a browser to resume the session without re-entering credentials.

Cookies are shown in the account card and stored automatically — you don't need to manage them manually.

---

## Opening a Session

1. Go to **Accounts** and find the account you want to open.
2. Click **Open session** (browser icon) on the account card.
3. A Chromium browser window will open, already logged into the Amazon account.

You can now browse Amazon as that account — check the inbox, complete purchases, update profile details, or verify account status.

:::caution
Do not close Orbit while a session is open. Closing Orbit terminates the browser window.
:::

---

## Session Cookies and Validity

Cookies expire over time or when Amazon invalidates them (e.g. after a password change or suspicious activity detection). If a session fails to open:

- The account may be **banned** — check its status.
- The cookies may have **expired** — re-run a Session task to refresh them.
- The account's email may no longer be accessible for re-verification.

---

## Opening Multiple Sessions

You can open sessions on multiple accounts simultaneously. Each account gets its own browser window.

:::tip
Use a different proxy for each session to avoid Amazon linking accounts based on IP.
:::
