---
id: what-is-orbit
title: What is Orbit?
sidebar_position: 2
---

# What is Orbit?

Orbit is a desktop automation tool built for resellers. It handles the time-consuming, repetitive tasks involved in managing large volumes of accounts and high-demand product drops — so you can focus on what matters.

## What Orbit Automates

### Amazon
- **Account Generation** — Creates Amazon accounts automatically (FR, UK, JP, BE marketplaces): fills in name, email, password, handles OTP verification via IMAP, phone verification via SMS, and solves Arkose captchas via CapGuru.
- **Invite** — Requests invitations on high-demand, invite-only products across your accounts via pure HTTP (no browser).
- **Session** — Logs back into accounts and refreshes their cookies so they stay active.
- **Win Check** — Checks whether any account has been invited/selected on a given product (HTTP or email scan mode).

### Fnac
- **Fnac Gen** — Creates Fnac accounts from email lists or profile groups.
- **Fnac Fill** — Fills shipping/billing info on Fnac accounts using identity profiles.
- **Fnac Buy** — Automates checkout on fnac.com with DataDome bypass via CapSolver.

### KingDultes
- **KingDultes Buy** — Guest checkout on KingDultes (Shopify): email list + identity profile + payment card per task.

### Order Tracking
- Automatically scans IMAP inboxes every 2 minutes for Amazon order, shipping, and delivery emails. Tracks statuses (ordered, shipped, delivered, locker, relay), shows Mondial Relay codes and relay points, and calculates pending refunds.

---

## Core Concepts

### Tasks
A **Task** is a single automation job. Each task has its own proxy, account, and configuration. Tasks run in parallel — you can run many simultaneously and use Smart Start All or Relay to control throughput.

### Account Groups
Accounts created by Orbit are saved into **Account Groups**, tagged by platform (Amazon, Fnac, etc.) and region (FR, UK, JP, BE). Groups are used as the target for Invite, Session, Win Check, and Buy tasks.

### Identity Profiles
A **Profile** is a reusable identity (name, address, phone, birthdate, etc.) used by tasks that need real-looking shipping/billing data. Profiles are organised into groups and assigned to KingDultes, Fnac, Nike, and Amazon Gen tasks.

### Email Lists
Orbit uses email addresses from your **Email Lists** to register accounts. Emails are consumed one by one. You can generate fresh iCloud aliases automatically using the iCloud Generator.

### Proxy Groups
Rotating residential proxies are assigned to tasks to avoid detection. Each task can use a different IP from your **Proxy Group**.

---

## How a Typical Amazon Workflow Looks

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

## How a KingDultes Workflow Looks

```
Email List ──┐
Profile Group ──┤──▶  KingDultes Buy Tasks  ──▶  Checkout
Payment Cards ──┘
```

1. Prepare email list + profile group
2. Create KingDultes Buy tasks
3. Assign a payment card per task
4. Start on drop time
