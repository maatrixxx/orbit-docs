---
id: sticky-proxy
title: Step 5 — Sticky Proxy Workflow
sidebar_position: 6
---

# Step 5 — Sticky Proxy Workflow

The **sticky proxy** feature lets you permanently attach a specific proxy to each Amazon account. Every task that uses this account — generation, session refresh, invite request, win check — routes through the **same IP address**.

This is the recommended approach for building a reliable account pool. Amazon links behavioral signals to IP addresses over time; using a consistent IP per account makes each one look like a normal household user, not a bot cycling through random IPs.

---

## Why It Matters

Without sticky proxies:
- Each task (gen today, invite tomorrow) may use a completely different IP
- Amazon can detect the inconsistency and flag or invalidate the session

With sticky proxies:
- Account creation, session refresh, invite requests, and win checks all come from the same IP
- Sessions stay valid longer and invite success rates are higher

---

## Step 1 — Get the Right Proxies

Sticky proxy only makes sense if the proxy IP is **stable over time**. Most residential proxy providers offer two types:

| Type | Description |
|------|-------------|
| **Rotating** | IP changes on every request or every few minutes — **not suitable** for sticky proxy |
| **Sticky session** | Same IP is kept for a configurable duration — **what you need** |

When purchasing / configuring your proxies, set the **session duration to a very large value** — for example **1,000,000 minutes**. This ensures the same IP is kept across all your tasks without expiring.

Most providers let you set the session duration in the proxy credentials or on the dashboard (look for "sticky session", "session duration", or "rotation interval").

:::tip Provider setup
- **Flame Proxies / Resilab / Mars Proxies**: look for "sticky session" or "rotation time" when generating your proxy list — set it to the maximum value available
- When in doubt, ask in the **Orbit Discord** — community members can share the exact setting for each provider
:::

---

## Step 2 — Gen with Sticky Proxy

When creating an **Amazon Gen** task:

1. Select your proxy group
2. Check **Stick proxy to account**

Orbit assigns one proxy from the group to each gen task (cycling through them). When the account is successfully created, that proxy is **permanently saved** on the account.

You'll see a **📌 PROXY** badge next to the account's email on the Accounts page once it's saved.

:::info
The proxy is saved at the moment the account is created — before the task moves on. If you don't check the box, no proxy is attached and all tasks will behave as before.
:::

---

## Step 3 — Session with Sticky Proxy

When creating an **Amazon Session** task:

1. Select **Sticky** in the proxy section
2. Optionally add a fallback proxy group (used if an account has no sticky proxy)

Each account in the group will log in using its own attached proxy — the same IP that was used when the account was created.

---

## Step 4 — Invite with Sticky Proxy

When creating an **Amazon Invite** task:

1. Select **Sticky** in the proxy section

Same principle — each account's invite requests go through its dedicated IP.

:::tip
If an account has an expired session when an invite task runs, click **Run Session** on the task card. Orbit will refresh the session (using the sticky proxy) and **automatically relaunch the invite** right after — no manual re-start needed.
:::

---

## Step 5 — Win Check with Sticky Proxy

Same as session and invite: select **Sticky** in the proxy section when creating the win check task.

---

## Managing Sticky Proxies on the Accounts Page

### View / Remove

Click the **📌 PROXY** badge on any account to:
- See the proxy host, port, username and password
- Click **Remove proxy** to detach the proxy from that account

### Add manually

If an account has no sticky proxy (no badge), a small **+ proxy** button appears next to the email. Click it to fill in the proxy details and attach one manually.

This is useful for accounts created before the sticky proxy feature was introduced.

---

## Summary

| Step | What to do |
|------|-----------|
| **1. Buy proxies** | Get sticky-session proxies, set duration to 1,000,000 min |
| **2. Gen** | Check "Stick proxy to account" |
| **3. Session** | Select Sticky mode |
| **4. Invite** | Select Sticky mode |
| **5. Win Check** | Select Sticky mode |
