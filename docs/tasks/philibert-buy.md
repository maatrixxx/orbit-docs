---
id: philibert-buy
title: Philibert Buy
sidebar_position: 32
---

# Philibert Buy

The Philibert Buy task purchases a product on **philibertnet.com** the moment it goes live. It uses existing Philibert accounts with saved addresses, navigates the product page, adds to cart, and completes checkout.

---

## Prerequisites

- A **Philibert account group** — accounts with saved delivery addresses (run Fill first)
- A **card group** — payment card(s) for checkout
- The **product URL** — the full philibertnet.com URL of the item to buy
- A **proxy group** (recommended — residential proxies)
- Delivery method configured (home delivery or relay point)

---

## Creating a Buy Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Philibert Buy**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Account group** | Philibert accounts to buy with |
| **Card group** | Payment cards — one card per task |
| **Product URL** | Full URL of the product to purchase |
| **Delivery method** | Home delivery or relay point (Chronopost / Mondial Relay) |
| **Relay point** | If relay: postal code to search, then select a point from the list |
| **Proxy group** | Recommended |

4. Click **Create tasks** and launch with **Smart Start All** at drop time.

---

## Checkout Flow

Orbit follows the natural guest-first checkout flow:

1. Visits the product page and adds to cart via a direct HTTP request (instant ATC).
2. Proceeds to checkout and clicks **"Je commande"**.
3. On the login screen (`/commande/inscription`), selects **"J'ai déjà un compte"** and signs in with the account's credentials.
4. Selects the saved delivery address.
5. Picks the delivery method (home or relay point).
6. Enters card details and confirms payment.

---

## Delivery Methods

| Method | How it works |
|--------|-------------|
| **Home delivery** | Uses the address saved during the Fill task |
| **Chronopost relay** | Searches relay points by postcode and selects the configured one |
| **Mondial Relay** | Same — searches by postcode and picks the closest point |

---

## Task Status Labels

| Status | Meaning |
|--------|---------|
| **Order placed** | Checkout completed successfully |
| **Out of stock** | Product sold out before checkout finished |
| **Login failed** | Credentials or session invalid |
| **Card declined** | Payment rejected — check card details |
| **Error** | Unexpected failure — check task logs |

---

## Discord Notifications

When an order is placed, Orbit posts a webhook embed with the product name, account email, and order total.

---

## Tips

:::tip Stagger launches
If running 10+ Buy tasks simultaneously, Orbit may hit Philibert's rate limit. Use **Smart Start All** with a small concurrency cap (3–5) or add a startup delay to spread requests over a few seconds.
:::

:::tip Fill in advance
Always run the Fill task before the drop so the saved address is already in the account. A missing address during checkout adds critical seconds.
:::

:::tip Residential proxies required
Philibert fingerprints browser sessions. Use rotating residential proxies — datacenter proxies typically get blocked.
:::
