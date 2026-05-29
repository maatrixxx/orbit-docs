---
id: sniper
title: Vinted Sniper
sidebar_position: 2
---

# Vinted Sniper

The Vinted Sniper monitors a target listing and **instantly purchases it** the moment it becomes available or drops to your target price. It's designed for limited items, sought-after brands, and restocks.

---

## Creating a Sniper Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **Vinted Sniper**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task |
| **Vinted account** | Your logged-in Vinted session |
| **Item URL** | The direct URL of the Vinted listing |
| **Max price** | Only buy if the price is at or below this amount |
| **Size filter** | Only buy if the size matches (optional) |
| **Marketplace** | The Vinted regional site |

4. Click **Create task** then **▶ Start**.

---

## How It Works

1. Orbit opens a session using your Vinted account cookies.
2. It monitors the target listing at a fast polling interval.
3. When the item becomes **available** and the price is **≤ Max price**:
   - Orbit adds it to the basket
   - Proceeds to checkout
   - Completes the purchase
4. A **Discord notification** is sent with the result (if configured).

---

## Sniper vs. Tracker

| | Sniper | Tracker |
|--|--|--|
| Buys automatically | ✅ | ❌ |
| Sends alerts | ✅ | ✅ |
| Works on a specific listing | ✅ | ❌ |
| Works on a search / seller | ❌ | ✅ |

---

## Tips

:::tip
Set your **Max price** slightly above the expected listing price to account for small variations, while still protecting against overpriced relists.
:::

:::caution
Vinted's terms of service prohibit automated purchasing. Use this tool at your own risk. Orbit spaces requests to avoid detection, but accounts may be flagged for unusual activity.
:::
