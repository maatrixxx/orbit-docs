---
id: fcfs-first-tasks
title: Step 3 — Creating Your First Tasks
sidebar_position: 13
---

# Step 3 — Creating Your First Tasks

You've set up your proxies and CapSolver. Here's how to prepare Orbit for a drop on FCFS sites.

---

## 1. Configure Settings

Open Orbit → **Settings** and fill in:

### API Keys
- **CapSolver key** — paste the key from [capsolver.com](https://www.capsolver.com/)

### Discord Webhook *(optional)*
Paste a Discord webhook URL to receive a notification when a task completes a purchase.

---

## 2. Import your proxies

Go to **Proxies** → **Create a group**:
1. Name your group (e.g. `Flames SOCKS5 FR`)
2. Paste your SOCKS5 proxy list (format: `host:port:user:pass`, one per line)
3. Click **Import**

---

## 3. Set up accounts

FCFS sites require accounts with **delivery addresses pre-filled**. Before a drop, make sure your accounts are ready:

1. Go to **Tasks** → **[Site] Generator** (e.g. Fnac Generator, Philibert Generator)
2. Generate accounts for the site you're targeting
3. Then run **[Site] Fill Profile** to fill in the delivery address for each account
4. Verify accounts show delivery information in the **Accounts** tab

:::warning Fill profiles before the drop
FCFS sites require the full checkout flow to complete in seconds. An account without a delivery address will fail at checkout. Always fill profiles in advance.
:::

---

## 4. Set up payment cards

Go to **Payment Cards** and make sure your cards are added and assigned to accounts. During a buy task, Orbit will automatically use the card assigned to that account.

---

## 5. Create buy tasks

When a drop is happening:

1. Go to **Tasks** → **+ Create** → select **[Site] Buy** (e.g. Fnac Buy, Philibert Buy, King Jouet Buy, Shopify Buy)
2. Fill in the form:

| Field | What to enter |
|-------|---------------|
| **URL** | The product URL (from Discord announcements) — or select **Monitor** to wait for a trigger |
| **Account group** | Select the group with filled profiles |
| **Proxy group** | Select your SOCKS5 proxy group |
| **Quantity** | 1 per task (one task = one purchase attempt) |

3. Click **Create tasks**
4. Click **Start All**

---

## 6. Using Monitor as trigger

Instead of pasting a URL manually, you can configure the Discord Monitor to fire your tasks automatically when a drop link is posted. See the [Monitor section](/guide/fcfs-monitor) for setup details.

:::tip Use Monitor for simultaneous start
The Monitor ensures all your tasks start **at the exact same moment** as the Discord announcement — which is critical for FCFS drops where stock sells out in seconds.
:::

---

## 7. Relay points

For sites that require selecting a pickup point (Fnac, Philibert, King Jouet), Orbit can automatically select a relay point. Configure your preferred relay in **Settings → Relay Points** before the drop.
