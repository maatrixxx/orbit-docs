---
id: mobile-overview
title: Mobile App
sidebar_position: 1
---

# Mobile App

Orbit Mobile lets you monitor and control the bot from your phone in real time. It is a **Progressive Web App (PWA)** — there is no App Store or Play Store listing. You install it directly from your browser in under 30 seconds.

:::caution
**Your PC must be running Orbit** for the mobile app to work. The app connects through a relay to your local bot — if the PC is off or Orbit is closed, the app will show as disconnected.
:::

---

## What You Can Do

- View tasks and their status in real time
- Start, stop, or delete tasks remotely
- Create new tasks (all 21 task types supported)
- Browse accounts, proxies, profiles, and email lists
- Track orders and drops

---

## Installation

### iPhone / iPad (iOS)

:::info
You **must use Safari**. Chrome, Firefox, and other browsers on iOS cannot install PWAs.
:::

1. Open **Safari** and go to `mobile-nine-sandy.vercel.app`
2. Log in with your Orbit credentials
3. Tap the **Share** button — the square with an arrow pointing up, at the bottom of the screen
4. Scroll down in the share sheet and tap **"Add to Home Screen"**
5. Keep the name **Orbit** and tap **"Add"** in the top-right corner

The Orbit icon will appear on your home screen. Launching it opens a full-screen experience, just like a native app.

:::tip iPad
On iPad, the Share button is in the top-right corner of the address bar, not at the bottom.
:::

---

### Android

:::info
**Chrome** is recommended. Samsung Internet and Microsoft Edge also work on most devices.
:::

1. Open **Chrome** and go to `mobile-nine-sandy.vercel.app`
2. Log in with your Orbit credentials
3. Chrome may display a banner at the bottom: **"Add Orbit to Home Screen"** — tap it to install
4. If no banner appears, tap the **three-dot menu ⋮** in the top-right corner, then select **"Add to Home Screen"** or **"Install app"**
5. Confirm by tapping **"Add"** or **"Install"** in the popup

The Orbit icon will appear on your home screen and open full-screen like a native app.

---

## Connecting to Your PC

Once the app is installed and open, you need to link it to your Orbit instance running on your PC.

### Step 1 — Generate a connection code (PC)

1. Open **Orbit** on your PC
2. Go to **Settings → Mobile App**
3. Click **"Generate a connection code"**
4. A large numeric code appears — it is **valid for 10 minutes**

### Step 2 — Enter the code (Mobile)

1. Open the **Orbit** app on your phone
2. Enter the connection code displayed on your PC
3. Tap **Connect**

The app will pair with your PC and load your tasks in real time. You only need to do this once — the connection is saved for future sessions.

:::caution Code expired?
If the 10-minute window has passed, go back to **Settings → Mobile App** on your PC and generate a new code.
:::

---

## Notes

- **No App Store required** — installation is done entirely through your browser.
- **Auto-updates** — the app updates itself silently every time you open it. No manual action needed.
- **Session is saved** — you stay logged in between sessions. You should not need to re-authenticate each time.
- **App URL**: `mobile-nine-sandy.vercel.app`
