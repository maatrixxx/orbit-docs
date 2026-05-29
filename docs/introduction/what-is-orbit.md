---
id: what-is-orbit
title: What is Orbit?
sidebar_position: 2
---

# What is Orbit?

Orbit is a desktop automation tool built for resellers. It handles the time-consuming, repetitive tasks involved in managing large volumes of Amazon accounts and Vinted activity — so you can focus on what matters.

## What Orbit Automates

### Amazon
- **Account Generation** — Creates Amazon.fr accounts automatically: fills in name, email, password, handles OTP verification via IMAP, phone verification via SMS, and solves Arkose captchas via CapGuru.
- **Invite (Raffle)** — Enters your accounts into Amazon invitation/raffle programs for high-demand products.
- **Session Refresh** — Logs back into accounts and refreshes their cookies so they stay active.
- **Checkout** — Performs fast checkout on a given ASIN across a group of accounts.

### Vinted
- **Sniper** — Monitors a seller's profile and instantly purchases new items matching your criteria.
- **Tracker** — Monitors search results for a keyword and auto-buys matching items.

---

## Core Concepts

### Tasks
A **Task** is a single automation job. Each task has its own browser window, proxy, email, and configuration. Tasks run in parallel — you can run hundreds simultaneously.

### Account Groups
Accounts created by Orbit are saved into **Account Groups**. You can open browser sessions, run checkouts, or enter raffles across an entire group at once.

### Email Lists
Orbit uses email addresses from your **Email Lists** to register Amazon accounts. Emails are consumed one by one. You can generate fresh iCloud aliases automatically using the iCloud Generator.

### Proxy Groups
Rotating residential proxies are assigned to tasks to avoid detection. Each task can use a different IP from your **Proxy Group**.

---

## How a Typical Workflow Looks

```
Email List  ──┐
Proxy Group ──┤──▶  Amazon Generator Tasks  ──▶  Account Group
IMAP Account ─┤                                       │
SMS Config  ──┘                                       ▼
                                              Amazon Checkout / Invite Tasks
```

1. Import emails → create a proxy group → configure IMAP + SMS
2. Run **Amazon Generator** tasks → accounts saved to a group
3. Use those accounts for **Checkout** or **Invite** tasks on drop day
