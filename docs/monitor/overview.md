---
id: overview
title: Discord Monitor
sidebar_position: 1
---

# Discord Monitor

The **Discord Monitor** lets Orbit listen to one or more Discord channels in real time and automatically launch tasks the moment a product is announced — no manual URL copy-paste, no missed drops.

When a message arrives in a monitored channel, Orbit extracts the product URL from the embed and fires every task that is waiting for it.

---

## How it works

1. Orbit connects to Discord using your **user token** (not a bot token).
2. It listens to the channels you configure via **Monitor filters**.
3. When a message arrives that matches your filter, Orbit extracts the URL and sends it to all tasks configured to receive it.
4. Tasks that were in **monitoring / waiting** state instantly start the checkout or ATC flow with the detected URL.

This entire flow happens in milliseconds — as fast as the message appears in Discord.

---

## Setup

### Step 1 — Get your Discord user token

Your Discord user token is required to connect Orbit to Discord. It is different from a bot token — it is your personal account token.

:::warning Keep your token private
Your user token gives full access to your Discord account. Never share it with anyone. Orbit uses it only to read messages from the channels you configure.
:::

To find your token, follow this video tutorial:

**[▶ How to get your Discord token (YouTube)](https://www.youtube.com/watch?v=dmjNAW8McLU)**

### Step 2 — Enter the token in Orbit

1. Go to **Settings → Discord Monitor**.
2. Paste your token in the **User Token** field.
3. Click **Save**. Orbit will connect immediately.

The connection status indicator turns green when the connection is established.

### Step 3 — Create a Monitor Filter

A **Monitor Filter** tells Orbit which channel to listen to and what to look for.

1. Go to **Settings → Discord Monitor → Filters**.
2. Click **+ Add filter**.
3. Fill in:

| Field | Description |
|-------|-------------|
| **Channel ID** | The ID of the Discord channel to monitor. Right-click the channel in Discord → **Copy Channel ID** (Developer Mode must be enabled in Discord settings). |
| **Site** | The site this filter applies to — Orbit will only trigger tasks for that site when a match is found. |
| **Filter name** | A label for your own reference. |
| **Keywords** *(optional)* | One or more keywords that must appear in the message for it to trigger. Useful when a channel covers multiple products and you only want specific ones. |
| **Synonyms** *(optional)* | Alternative spellings or names for the same keyword — see [Synonyms](#synonyms) below. |

4. Click **Save**.

---

## Synonyms

Synonyms let you match a keyword even when it appears under a different name in the Discord message.

**Example:** if your keyword is `Jordan 4` but some channels post it as `AJ4` or `Air Jordan 4`, add those as synonyms — Orbit will trigger on any of them.

Each keyword can have multiple synonyms. Synonyms are case-insensitive.

---

## Monitor Mode on tasks

For a task to receive URLs from the Discord Monitor, it must be created with **Monitor Mode** enabled.

### URL via Discord

When creating a task, enable **Monitor Mode → URL via Discord**. The task will be created in a waiting state and start automatically when a matching URL is detected in a monitored channel.

On the task card, these tasks show **📡 URL via Discord** instead of a product URL — they are not waiting for a URL to be set manually, they are listening for one.

### ATC URL mode

For sites like Fnac where the ATC link is embedded directly in the Discord message, Orbit automatically extracts the **ATC URL** from the embed (the `[Add to Cart](url)` link) and uses it to skip directly to cart — bypassing the product page entirely for maximum speed.

---

## Supported sites

| Site | Monitor support | ATC URL extraction |
|------|----------------|--------------------|
| Fnac Buy | ✓ | ✓ (ATC link from embed) |
| Philibert Buy | ✓ | — |
| King Jouet Buy | ✓ | — |
| Shopify Buy | ✓ | — |
| KingDultes Buy | ✓ | — |
| Amazon Invite | ✓ | — |

---

## Tips

- **One filter per site per channel** — if a channel posts drops for multiple sites, create one filter for each site, pointing to the same channel ID.
- **Use keywords** to avoid false triggers if a channel posts many products you are not interested in.
- **Test your filter** by checking the Monitor debug log in Settings — it shows the last 20 messages received and whether each one matched a filter.
- **Keep tasks in waiting state** — tasks in monitor mode stay idle and consume no resources until a URL is detected. You can safely create dozens of them in advance.
