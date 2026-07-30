---
id: tasks-kingdultes
title: KingDultes Buy Task
sidebar_position: 6
---

# KingDultes Buy Task

The **KingDultes Buy** task automates guest checkout on [KingDultes](https://www.kingdultes.com), a Shopify-based sneaker and streetwear store. One task = one checkout attempt, using one email and one identity profile.

---

## Prerequisites

- An **email list** with available emails (see [Creating an Email List](/emails/creating-a-list))
- A **profile group** with shipping/billing identities (see [Identity Profiles](/profiles/overview))
- A **payment card** configured per task after creation (each task has its own card field)
- A **proxy group** (optional but recommended)
- The **product URL** from KingDultes (e.g. `https://www.kingdultes.com/products/...`)

---

## Creating KingDultes Tasks

1. Go to **Tasks** and click **+ Create**.
2. Select **KingDultes Buy** (under the KingDultes category).
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Product URL** | Full URL of the product page. Can be entered now, or left for after task creation (see below). |
| **Email list** | The list of emails to use — one email per task. |
| **Profile group** | The group of identities to use for shipping/billing — one profile per task. |
| **Proxy** | Optional — toggle on to select a proxy group. |
| **Number of tasks** | How many checkout tasks to create. Shortcut: click the email count link to match the number to available emails. |

4. Click **Create tasks**.
5. After creation, assign a **payment card** to each task via the card icon on the task row.

---

## URL Timing

| Mode | Description |
|------|-------------|
| **URL now** | You paste the product URL immediately. All tasks use this URL. |
| **URL after creation** | Tasks are created without a URL — you can paste it later, right before starting. Useful for drops where the exact URL isn't known in advance. |

---

## Payment Cards

Each task must have a payment card assigned before it can run. Cards are added per-task via the task row's card field after creation. You can assign different cards to different tasks to spread checkout across multiple payment methods.

---

## How It Works

Orbit opens a headless Chromium browser and:

1. Navigates to the product page
2. Adds the item to cart
3. Proceeds to checkout (guest)
4. Fills in shipping details from the assigned profile (name, address, phone)
5. Enters the email from the selected email list
6. Fills in payment card details
7. Submits the order

---

## Tips

:::tip Assign cards quickly
After creating a batch of tasks, use the card field on each task row to assign payment cards before hitting Start.
:::

:::tip URL after creation for drops
Use **URL after creation** mode when the exact product URL won't be known until the drop goes live — create and prepare your tasks in advance, then paste the URL right before clicking Start.
:::
