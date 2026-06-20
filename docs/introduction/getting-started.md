---
id: getting-started
title: Getting Started
sidebar_position: 1
slug: /
---

# Getting Started

:::caution
For the best experience reading this documentation, we recommend using a desktop browser.
:::

## Prerequisites

Before you begin, make sure you have:

- An **active Orbit subscription** and the member role on the Discord server.
- A **Windows PC** (Windows 10 or later, 64-bit) or a **Mac** (Intel or Apple Silicon).
- A stable internet connection for the initial Chromium download (~150 MB).

---

## Installation

### Windows

1. Download the latest version of **Orbit** (`Orbit-Setup-x.x.x.exe`) from the official Discord server.
2. Run the installer. Windows may show a SmartScreen warning — click **More info → Run anyway**. This is expected for unsigned software.
3. Choose your installation directory and complete the setup.
4. Launch **Orbit** from the desktop shortcut or Start Menu.

### Mac

1. Download the latest `.dmg` from the official Discord server.
2. Open the `.dmg` and drag **Orbit** into your Applications folder.
3. On first launch, right-click the app and select **Open** to bypass Gatekeeper's "unidentified developer" warning (the app isn't notarized).
4. If you see a "WebSocket server not connected" error on any task, run `xattr -cr /Applications/Orbit.app` in Terminal, then relaunch — this clears a quarantine flag macOS sometimes applies to a helper binary inside the app.

:::info First launch
On the very first launch, Orbit automatically downloads and installs **Chromium** (the browser engine used for automation). This takes about 1–2 minutes and only happens once. A banner will appear in the Tasks page while it's installing — do not close the app.
:::

---

## Authentication

Orbit uses **Discord** for authentication — there is no license key to enter.

1. Click **Continue with Discord**.
2. A browser window opens — log in and authorize the connection.
3. Orbit checks that you have an active subscription and the member role on the Discord server, then loads your dashboard.

:::caution Login not accepted?
This means your subscription is no longer active, or you're no longer a member of the Discord server. Contact support on Discord if you believe this is a mistake.
:::

---

## What's Next?

Once authenticated, head to **Settings** to configure your API keys (SMS, IMAP, Discord, CapGuru) before running your first task.
