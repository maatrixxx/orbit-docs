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

### Other

| Task | Description |
|------|-------------|
| **Nike Gen** | Creates Nike FR accounts from an email list or profile group |
| **Funko** | Automates Funko Pop releases |

### iCloud

| Task | Description |
|------|-------------|
| **iCloud Gen** | Generates iCloud Hide My Email aliases |
| **iCloud Delete** | Deletes existing Hide My Email aliases |
| **iCloud Extract** | Extracts all existing Hide My Email aliases into a mail list |

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

## Smart Start & Relay

Two advanced launch modes are available in the Tasks toolbar for running large numbers of tasks without opening hundreds of browsers simultaneously.

### Smart Start All

**Smart Start All** starts tasks one by one from the queue, launching the next task only when a previous one completes (or stops). This keeps concurrency under control and works especially well with virtual queue batches.

- While running, the button shows **N/Total** progress.
- Click again to **stop** the Smart Start loop (already-running tasks are not interrupted).
- Tasks stopped by a captcha/SMS "Stop" action are automatically requeued by Smart Start.

### Relay

**Relay** launches tasks in timed waves — a configurable delay between each launch (or each batch of launches).

Click **Relay** to open the config panel:

| Setting | Description |
|---------|-------------|
| **Fixed delay** | Wait a fixed number of seconds between each launch (e.g. `60s`) |
| **Random delay** | Wait a random amount between min and max seconds (e.g. `30–90s`) |
| **Batch size** | How many tasks to launch at each interval (default: 1) |

- While running, the button shows **N/Total** progress and a countdown timer for the next launch.
- Click again to **stop** the Relay loop.

:::tip
Relay is ideal for drops where you want tasks to start at human-looking intervals rather than all simultaneously. Use a random delay of 30–90s with batch size 1 for the most natural pattern.
:::

---

## Kill Browsers

The **Kill Browsers** button in the toolbar forcefully terminates all Playwright Chromium processes opened by Orbit. Use this if you notice orphaned browser windows lingering after tasks finish.

---

## Real-Time Logs

Each task card shows a live log of steps as they happen — captcha solving, SMS verification, errors, results. Logs are streamed in real time.

---

## Running Multiple Tasks

You can run multiple tasks simultaneously. For tasks that open a real browser (Amazon Gen, iCloud Gen/Delete, Session fallback), each task opens its own Chromium window.

:::tip
For best results when generating accounts, run **2–5 tasks in parallel** with rotating residential proxies. Too many parallel tasks on limited proxies increases the risk of IP overlap.
:::
