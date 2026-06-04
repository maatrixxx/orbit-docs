---
id: icloud-generator
title: iCloud Email Generator
sidebar_position: 3
---

# iCloud Email Generator

The iCloud Generator automatically creates **iCloud+ Hide My Email** aliases and saves them to an email list. These aliases are real, deliverable addresses that forward to your main iCloud inbox — perfect for Amazon registrations.

:::info
This feature requires an active **iCloud+** subscription (paid iCloud storage plan). Free iCloud accounts cannot generate Hide My Email aliases.
:::

---

## Prerequisites

Before running the iCloud generator:

1. Go to **Settings → iCloud Account** and connect your iCloud account by clicking **Connect iCloud account**.
2. A real Chromium browser window will open — log in to iCloud with your Apple ID and complete 2FA.
3. Once logged in, click **✅ Save session now** in Orbit.
4. The browser minimizes to the background. Settings will show **iCloud account connected**.
5. Ensure your iCloud account has an active iCloud+ plan.

:::warning Keep the browser running
The browser session must stay open in the background for the generator to work. If you close the browser window, Orbit will detect it within seconds and mark the task as failed. You will need to reconnect from Settings.
:::

---

## Creating an iCloud Generator Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **iCloud Gen**.
3. Fill in:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task (e.g. `iCloud gen — main`) |
| **Email list** | The list where generated aliases will be saved |
| **Interval** | Time between alias creations (minimum 10 min, recommended **12 min**) |

4. Click **Create task**, then click **▶ Start**.

:::info
If the iCloud browser is not connected when you click Start, Orbit will block the launch and show an error. Go to **Settings → iCloud** to reconnect first.
:::

---

## Apple Rate Limits

Apple enforces a limit of approximately **5 aliases per hour** per iCloud account. The recommended interval of 12 minutes ensures you stay within this limit.

Setting the interval too low may cause Apple to temporarily block alias generation for your account.

---

## How It Works — Full Flow

Each generation cycle follows these steps automatically:

### 1. Navigation
Orbit uses the open Chromium browser (already logged in) and navigates directly to:
```
https://www.icloud.com/icloudplus/hidemyemail/
```
No credentials are re-entered — the existing session is reused.

### 2. iFrame detection
iCloud loads its Hide My Email app inside an embedded `<iframe>`. Orbit detects this iframe and waits for it to fully load before interacting with it.

### 3. Clicking "Configurer une nouvelle adresse"
- **First alias:** Orbit clicks the **"Configurer une nouvelle adresse e-mail"** item in the sidebar — this is the first-time setup button.
- **Subsequent aliases:** Once at least one alias exists, the sidebar shows a **"+"** button instead. Orbit clicks that.

### 4. Alias generation (API interception)
When the generation dialog opens, iCloud immediately calls its internal API (`/v1/hme/generate`) to create a new random alias. Orbit intercepts this network response in the background to capture the generated email address without needing to read it from the page.

Example alias format: `firstname.wordword@icloud.com`

### 5. Label & save
Orbit fills in the label field with **"orbit"** (all aliases share the same label — iCloud allows multiple aliases with the same label), then clicks **"Créer une adresse e-mail"** to confirm.

### 6. Save to email list
The captured alias is immediately saved to your selected email list in Orbit via the backend API.

### 7. Wait
Orbit displays a countdown timer on the task card (e.g. `⏱ Next in 11m 43s`) and waits for the configured interval before starting the next cycle.

---

## Task Card — What You See

While the generator is running, the task card shows:

| Element | Description |
|---------|-------------|
| **RUNNING** badge | The task is active |
| `Generating iCloud alias...` | A cycle is in progress |
| `⏱ Next in Xm XXs` | Countdown to the next generation |
| `▼ Logs (N)` | Click to expand the log of all generated aliases with timestamps |

Clicking **▼ Logs** opens a dropdown listing every alias generated in this session, with the time of creation and a `#N` counter.

---

## Browser Connection Status

Orbit polls the browser connection every **5 seconds**:

- **Settings shows ✅ "iCloud account connected"** → browser is alive and running.
- **Settings shows ⚠️ "iCloud browser closed"** → the browser was closed. Click **Reconnect** to open a new session.
- **Task shows error "iCloud browser was closed"** → the browser closed while a task was running. Stop the task, reconnect in Settings, and restart.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "iCloud browser not connected" when starting | Go to Settings → iCloud and reconnect |
| "iCloud browser was closed" on a running task | Browser was closed manually. Reconnect in Settings, then restart the task. |
| "Button Configurer not found" | The iCloud page didn't load correctly. The task will retry automatically in 2 minutes. |
| "HME generate API not intercepted" | The alias dialog opened but the API response wasn't captured. Automatic retry in 2 min. |
| Aliases not saved to list | Check that the selected email list still exists in **Emails**. |
| Apple blocks generation | You may have exceeded 5 aliases/hour. Increase the interval to 15–20 min. |
