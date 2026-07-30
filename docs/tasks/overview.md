---
id: overview
title: Tasks Overview
sidebar_position: 1
---

# Tasks

The **Tasks** page is the operational core of Orbit. Each task represents one automated job — creating an account, running an invite, checking a win, buying a product, etc.

---

## Task Types

### Amazon

| Task | Description |
|------|-------------|
| **Amazon Gen** | Creates new Amazon accounts from scratch (FR, UK, JP, BE) |
| **Amazon Invites** | Requests invitations on invite-only products across your accounts |
| **Amazon Session** | Logs in and refreshes account session cookies |
| **Amazon Win Check** | Checks whether accounts have been selected on an invite-only product |

### Fnac

| Task | Description |
|------|-------------|
| **Fnac Gen** | Creates Fnac accounts from an email list or profile group |
| **Fnac Fill** | Fills shipping/billing info on existing Fnac accounts using profiles |
| **Fnac Buy** | Purchases a product on fnac.com with existing accounts (uses CapSolver for DataDome) |

### KingDultes

| Task | Description |
|------|-------------|
| **KingDultes Buy** | Guest checkout on KingDultes (Shopify) — email list + profile + card per task |

### iCloud

| Task | Description |
|------|-------------|
| **iCloud Gen** | Generates iCloud Hide My Email aliases |
| **iCloud Delete** | Deletes existing Hide My Email aliases |
| **iCloud Extract** | Extracts all existing Hide My Email aliases into a mail list |

Task types are organized into categories in the **+ Create** menu: **Amazon**, **iCloud**, **Fnac**, and **KingDultes**.

---

## Task Groups

Tasks can be organised into colour-coded **groups** (folders) shown in the sidebar on the left of the Tasks page.

- Click **+ New group** to create one — it's automatically given the next colour in rotation.
- Click a group to make it active; new tasks are created inside the active group.
- **Rename** a group by clicking its pencil icon.
- **Delete** a group (and optionally all its tasks) with the × icon.
- **Drag and drop** groups to reorder them.

---

## Task Lifecycle

```
Created → Running → Completed / Failed / Stopped
```

| Status | Meaning |
|--------|---------|
| **Created** | Task exists but hasn't started |
| **Running** | Actively executing |
| **Completed** | Finished successfully |
| **Failed** | Encountered an unrecoverable error |
| **Stopped** | Manually stopped, or automatically stopped (captcha/SMS stop action) |

---

## Task Controls

| Button | Action |
|--------|--------|
| **Start** | Start or resume a task |
| **Stop** | Halt the task immediately |
| **Delete** | Remove the task (does not delete accounts) |

### Bulk Actions

Select multiple tasks using the checkboxes (or click and drag) and use the bulk buttons:

| Button | Action |
|--------|--------|
| **Start Selected** | Start all selected tasks |
| **Stop Selected** | Stop all selected tasks |
| **Edit Selected** | Edit settings on all selected tasks at once |
| **Delete Selected** | Delete all selected tasks |
| **Restart Errors** | Relaunch every failed task at once |

---

## Launch Modes

### Smart Start All

Launches all pending tasks using a fixed concurrency pool — as soon as one task finishes, it immediately pulls the next one from the queue. This keeps the number of active browsers under control and is recommended for Amazon Gen tasks and any flow that opens real browser windows.

The progress counter on the button (`4/20`) shows how many tasks have **completed**, not how many are currently running. Tasks stopped by a captcha/SMS "Stop" action are automatically requeued.

### Relay

Relay launches tasks one after another with a **configurable delay between each launch**, regardless of how many tasks are already running. There is no concurrency cap — every launched task runs in parallel with all the others.

**When to use it:** Invite, Session, and Win Check tasks are lightweight (HTTP-based, no real browser). You can safely launch hundreds in a row. Relay is the right mode for these.

Click the **Relay** button to open the delay picker:

| Mode | How it works |
|------|-------------|
| **Fixed** | Same delay between every launch — e.g. `60` launches one task every 60 seconds |
| **Range** | A random delay is picked at each step — e.g. `30–90` waits between 30 and 90 seconds, simulating human pacing |
| **Batch size** | How many tasks to launch at each interval (default: 1) |

All values are in **seconds**. Once running, the button shows a live countdown (`42s`) to the next launch and the number of tasks already launched (`12/50`). Click again to stop.

---

## Kill Browsers

The **Kill Browsers** button forcefully terminates all Playwright Chromium processes opened by Orbit. Use this if you notice orphaned browser windows lingering after tasks finish.

---

## Real-Time Logs

Each task card shows a live log of steps as they happen — captcha solving, SMS verification, errors, results. Logs are streamed in real time.

---

## Running Multiple Tasks

You can run multiple tasks simultaneously. For tasks that open a real browser (Amazon Gen, iCloud Gen/Delete, Session fallback), each task opens its own Chromium window.

:::tip
For best results when generating accounts, run **2–5 tasks in parallel** with rotating residential proxies. Too many parallel tasks on limited proxies increases the risk of IP overlap.
:::
