---
id: amazon-session
title: Amazon Session Task
sidebar_position: 4
---

# Amazon Session Task

The Amazon Session task opens a logged-in browser session for accounts in a group and **refreshes their cookies**. Use this to keep session data up to date or to perform bulk actions across multiple accounts.

---

## Why Refresh Sessions?

Cookies expire over time. If you try to open a session with stale cookies, Amazon will redirect to the login page. Running a Session task periodically keeps your accounts ready to use.

---

## Creating a Session Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **Amazon Session**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task |
| **Account group** | The group of accounts to process |
| **Proxy group** | Proxies to use for the sessions |
| **Action** | What to do after opening the session (e.g. refresh cookies, accept invite) |

4. Click **Create task** then **▶ Start**.

---

## What It Does

For each account in the group, Orbit:

1. Launches a browser with the account's saved cookies
2. Navigates to Amazon to verify the session is active
3. If logged in: saves updated cookies back to the account
4. If not logged in: marks the account as **Unknown** (cookies may have expired)

---

## Session Task vs. Opening Manually

| | Session Task | Manual Open |
|--|--|--|
| Runs on all accounts in a group | ✅ | ❌ (one at a time) |
| Refreshes cookies automatically | ✅ | ❌ |
| Requires manual interaction | ❌ | ✅ |

---

## Recommended Frequency

Run Session tasks every **7–14 days** to keep cookies fresh. If accounts will be used for Checkout tasks, refresh cookies within 24 hours beforehand for best results.
