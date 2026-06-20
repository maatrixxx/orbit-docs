---
id: what-is-orbit
title: What is Orbit?
sidebar_position: 2
---

# What is Orbit?

Orbit is a desktop automation tool built for resellers. It handles the time-consuming, repetitive tasks involved in managing large volumes of Amazon accounts — so you can focus on what matters.

## What Orbit Automates

### Amazon
- **Account Generation** — Creates Amazon accounts automatically (FR, UK, and JP marketplaces): fills in name, email, password, handles OTP verification via IMAP, phone verification via SMS, and solves Arkose captchas via CapGuru.
- **Invite** — Requests invitations on high-demand, invite-only products across your accounts.
- **Session** — Logs back into accounts and refreshes their cookies so they stay active.
- **Win Check** — Checks whether any account in a group has been invited/selected on a given product, using accounts with active sessions.

---

## Core Concepts

### Tasks
A **Task** is a single automation job. Each task has its own proxy, account, and configuration. Tasks run in parallel — you can run hundreds simultaneously.

### Account Groups
Accounts created by Orbit are saved into **Account Groups**, tagged by region (FR, UK, or JP). You can open browser sessions or run Session, Invite, or Win Check tasks across an entire group at once.

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
                                              Session / Invite / Win Check Tasks
```

1. Import emails → create a proxy group → configure IMAP + SMS
2. Run **Amazon Generator** tasks → accounts saved to a group
3. Use those accounts for **Session**, **Invite**, or **Win Check** tasks on drop day
