---
id: discord
title: Discord
sidebar_position: 5
---

# Discord

Orbit can send real-time notifications to a Discord channel via a **webhook** whenever an Amazon account is successfully created.

---

## Setup

1. In your Discord server, go to the channel where you want notifications.
2. Click **Edit Channel → Integrations → Webhooks → New Webhook**.
3. Copy the webhook URL.
4. In Orbit, go to **Settings → Discord**, paste the URL, and click **Save**.

---

## What Gets Notified

When a task successfully creates and saves an Amazon account, Orbit sends a Discord embed containing:

- ✅ Account email
- 🔑 Password
- 📱 Phone number used
- 👤 Name
- 🏷️ Account group

This lets you monitor success rates in real-time without keeping the Orbit window open.
