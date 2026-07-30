---
id: opening-sessions
title: Opening Browser Sessions
sidebar_position: 3
---

# Opening Browser Sessions

Orbit can open a browser session logged into any Amazon account using its saved **cookies**. This lets you manually browse, verify an account, check wins, or complete a purchase.

---

## Opening a Session

1. Go to **Accounts** and find the account (or open a group).
2. Click **Open session** on the account row.
3. A Chromium browser window opens, already logged into Amazon.

---

## Proxy Mode for Open Session

Before opening sessions, you can choose how the browser routes its traffic using the **Open sessions with** panel:

| Mode | Description |
|------|-------------|
| **Local IP** | No proxy — your machine's real IP is used |
| **Proxy** | A random proxy from the selected group is used |
| **Sticky** | Uses the proxy permanently attached to the account (📌 PROXY badge) |

**Sticky mode is recommended** when accounts have attached proxies — it keeps the account's browsing consistent with the IP used during generation and invite tasks.

---

## Opening Multiple Sessions

You can open sessions on multiple accounts simultaneously. Each account gets its own browser window. Use **Open all sessions** to open every account in a group at once.

:::tip
Use a different proxy for each session to avoid Amazon linking accounts based on IP. With sticky proxies, this is handled automatically.
:::

---

## Session Cookies and Validity

Cookies expire over time or when Amazon invalidates them. If a session fails to open:

- The account may be **banned** — check its status.
- The cookies may have **expired** — re-run a Session task to refresh them.

:::caution
Do not close Orbit while a session is open. Closing Orbit terminates the browser window.
:::
