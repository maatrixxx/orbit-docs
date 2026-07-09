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
| **Amazon Gen** | Creates new Amazon accounts from scratch |
| **Amazon Invites** | Requests invitations on invite-only products |
| **Amazon Session** | Logs in and refreshes account session cookies |
| **Amazon Win Check** | Checks whether an account got invited/selected on a product |
| **iCloud Gen** | Generates iCloud Hide My Email aliases |
| **iCloud Delete** | Deletes existing Hide My Email aliases |
| **iCloud Extract** | Extracts all existing Hide My Email aliases into a mail list |
| **Fnac Gen** | Creates new Fnac member accounts |
| **Fnac Fill Profile** | Logs into existing Fnac accounts and fills the address book |
| **Fnac Buy** | Logs in and completes a 1-click purchase on Fnac |

Task types are organized into categories in the **+ Create** menu: **Amazon**, **iCloud**, and **Fnac**.

---

## Task Groups

Tasks can be organized into color-coded **groups** (folders) shown in a sidebar on the left of the Tasks page.

- Click **+ New group** to create one — it's automatically given the next color in rotation.
- Click a group to make it active; new tasks are created inside the currently active group.
- Rename a group by clicking its pencil icon, or delete it (and optionally its tasks) with the X icon.
- Drag and drop groups to reorder them.

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
| **Start** | Start or resume a task |
| **Stop** | Halt the task immediately |
| **Delete** | Remove the task (does not delete accounts) |

You can also select multiple tasks (checkboxes) and use **Start Selected**, **Stop Selected**, **Edit Selected**, or **Delete Selected** for bulk actions, or **Restart Errors** to relaunch every failed task at once.

---

## Real-Time Logs

Each task card shows a live log of steps as they happen — captcha solving, SMS verification, errors, and results. Logs are streamed in real time via SSE (Server-Sent Events).

---

## Running Multiple Tasks

You can run multiple tasks simultaneously. Orbit manages concurrency automatically. For tasks that open a real browser (Amazon Gen, iCloud Gen/Delete, Session fallback), use the **Kill Browsers** button if you ever notice orphaned browser processes lingering after tasks finish.

:::tip
For best results when generating accounts, run 2–5 tasks in parallel with rotating residential proxies. Running too many tasks at once on limited proxies increases the risk of IP overlap.
:::

---

## Launch Modes

### Smart Start All

Launches all pending tasks using a fixed concurrency pool. You set a **max simultaneous tasks** limit in Settings — Smart Start fills that pool and as soon as one task finishes, it immediately pulls the next one from the queue. This keeps the number of active browsers under control and is recommended when you care about not overloading your machine or your proxy quota.

The progress counter on the button (`4/20`) shows how many tasks have **completed**, not how many are currently running.

### Relay

Relay launches tasks one after another with a **configurable delay between each launch**, regardless of how many tasks are already running. There is no concurrency cap — every launched task runs in parallel with all the others.

**When to use it:** invite tasks, session tasks, and win-check tasks are lightweight (HTTP-based, no real browser). You can safely launch hundreds in a row without hitting memory limits. Relay is the right mode for these.

**Configuring the delay:**

Click the **Relay** button to open the delay picker:

| Mode | How it works |
|------|-------------|
| **Fixed** | Same delay between every launch — e.g. `60` launches one task every 60 seconds |
| **Range** | A random delay is picked at each step — e.g. `30–90` waits between 30 and 90 seconds, chosen randomly each time to simulate human pacing |

All values are in **seconds**.

Once running, the button shows a live countdown (`42s`) to the next launch, along with the number of tasks already launched (`12/50`). Click the button again to stop the relay loop at any time — tasks already launched keep running normally.
