---
id: overview
title: Tasks Overview
sidebar_position: 1
---

# Tasks

The **Tasks** page is the operational core of Orbit. Each task represents an automated job — creating accounts, running invites, opening sessions, or completing checkouts.

---

## Task Types

| Task | Description |
|------|-------------|
| **Amazon Generator** | Creates new Amazon accounts from scratch |
| **Amazon Invite** | Sends Prime invitations to generated accounts |
| **Amazon Session** | Opens a session and refreshes account cookies |
| **Amazon Checkout** | Completes a purchase on an Amazon account |
| **Email Generator (iCloud)** | Generates iCloud Hide My Email aliases |
| **Email Generator (Outlook)** | Creates new Outlook email addresses |

---

## Task Lifecycle

```
Created → Running → Completed / Failed / Stopped
```

- **Created** — task exists but hasn't started
- **Running** — actively executing
- **Completed** — finished successfully
- **Failed** — encountered an unrecoverable error
- **Stopped** — manually stopped by the user

---

## Task Controls

| Button | Action |
|--------|--------|
| ▶ **Start** | Start or resume a task |
| ⏹ **Stop** | Halt the task immediately |
| 🗑 **Delete** | Remove the task (does not delete accounts) |

---

## Real-Time Logs

Each task card shows a live log of steps as they happen — browser actions, captcha solving, SMS verification, errors, and results. Logs are streamed in real time via SSE (Server-Sent Events).

---

## Running Multiple Tasks

You can run multiple tasks simultaneously. Each task gets its own browser instance and proxy. Orbit manages concurrency automatically.

:::tip
For best results when generating accounts, run 2–5 tasks in parallel with rotating residential proxies. Running too many tasks at once on limited proxies increases the risk of IP overlap.
:::
