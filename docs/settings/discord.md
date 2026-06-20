---
id: discord
title: Discord
sidebar_position: 5
---

# Discord

Orbit can send real-time notifications to Discord channels via **webhooks**. There are three separate webhooks, each tied to a different event:

| Webhook | Triggered when |
|---------|----------------|
| **Account gen webhook** | An Amazon account is successfully created |
| **Raffle entry webhook** | An invitation is successfully requested (Amazon Invite task) |
| **Raffle win webhook** | A win is detected (Amazon Win Check task) |

Each one is configured independently — you can use the same channel for all three, or split them across different channels.

---

## Setup

1. In your Discord server, go to the channel where you want notifications.
2. Click **Edit Channel → Integrations → Webhooks → New Webhook**.
3. Copy the webhook URL.
4. In Orbit, go to **Settings → Discord**, paste the URL into the relevant field, and click **Save**. Use the **Test** button to send a sample notification before relying on it.

---

## What Gets Notified

**Account gen webhook** — when a task successfully creates and saves an Amazon account, Orbit sends an embed containing the account email, password, phone number, name, and account group.

**Raffle entry / Raffle win webhooks** — an embed containing the product image, ASIN, Amazon region, and the account email.

This lets you monitor activity in real-time without keeping the Orbit window open.
