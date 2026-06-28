---
id: amazon-session
title: Amazon Session Task
sidebar_position: 4
---

# Amazon Session Task

The Amazon Session task keeps accounts in a group logged in and **refreshes their cookies**. Use this before running Invite or Win Check tasks, or to confirm an account's session is still valid.

---

## Why Refresh Sessions?

Cookies expire over time. If you try to use stale cookies, Amazon will redirect to the login page. Running a Session task periodically keeps your accounts ready to use.

---

## Supported Regions

FR, UK, JP, and US — select the region that matches your account group.

---

## Creating a Session Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Amazon Session**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Region** | FR, UK, JP, or US |
| **Account group** | The group of accounts to process |
| **Proxies** | No proxy, with a proxy group, or **Sticky** |
| **IMAP (OTP email)** | Optional — used if Amazon asks for an email verification code during login |

4. Click **Create task** then **Start**.

---

## Proxy Modes

| Mode | Description |
|------|-------------|
| **No proxy** | Sessions go through your local IP |
| **With proxy** | A random proxy from the selected group is used per account |
| **Sticky** | Uses the proxy permanently attached to each account — recommended if accounts were generated with sticky proxy |

---

## What It Does

For each account in the group, Orbit:

1. Makes a lightweight HTTP check using the account's saved cookies. If still active, re-saves the cookies and stops there — no browser needed.
2. If the session is invalid or missing, opens a headless browser and logs in for real, handling:
   - One-time password / 2FA prompts (via IMAP — automatic if configured)
   - Email OTP codes (rare, but handled automatically with IMAP)
   - "Not now" interstitials
   - Suspended/banned account detection
   - Accounts Amazon no longer recognizes — flagged separately from a regular login failure
3. On a successful login, saves the fresh cookies back to the account.

If a login attempt hits a transient Amazon error, Orbit retries automatically (up to 4 attempts) with a fresh proxy before giving up.

---

## Task Status / Result Labels

| Result | Meaning |
|--------|---------|
| **Session saved** | Cookies confirmed valid or refreshed successfully |
| **Suspended** | The account has been banned by Amazon |
| **No account** | Amazon no longer recognizes this email as a registered account |
| **Error** | Login failed for another reason — see the task log for details |

---

## Recommended Frequency

Run Session tasks every **7–14 days** to keep cookies fresh. If accounts will be used for Invite or Win Check tasks, refresh cookies within 24 hours beforehand — or just enable **Include session check** directly on those tasks instead.
