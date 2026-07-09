---
id: fnac-buy
title: Fnac Buy
sidebar_position: 8
---

# Fnac Buy

The **Fnac Buy** task logs into a Fnac account, waits for a product URL, then completes a **1-click purchase** using the payment card already registered on the account.

---

## Prerequisites

- A **Fnac account group** with accounts that have a registered payment card (CB)
- An **IMAP account** (optional — for OTP during login if Fnac requests it)
- A **proxy group** (optional)

---

## Creating a Buy Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Fnac Buy**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Account group** | Fnac accounts to use for purchasing |
| **Proxy group** | Proxy to route traffic through (optional) |
| **IMAP** | IMAP account for OTP if required during login (optional) |
| **Number of accounts** | How many buy tasks to create |

4. Click **Create buy tasks**.
5. After the tasks start, **assign a payment card** to each task in the task interface.
6. When you're ready to buy, **paste the product URL** into the task — it immediately proceeds to checkout.

---

## What Happens Step by Step

### 1. Login
Orbit authenticates the account using Fnac's ForgeRock/OpenAM OAuth system (same as Fill Profile). OTP via IMAP is handled automatically if requested.

### 2. Clear Cart
Any existing items in the account's cart are removed before adding the target product.

### 3. Wait for Product URL
The task pauses and waits for you to provide the product URL. This lets you prepare and then trigger all tasks simultaneously when a product drops.

### 4. Add to Cart
Orbit navigates to the product page and adds it to the cart.

### 5. 1-Click Checkout
Orbit proceeds through the Fnac checkout flow using the registered payment card on the account.

### 6. Confirm Purchase
Order confirmation is captured and the task completes.

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `Connexion...` | Logging into the account |
| `Panier vidé` | Cart cleared |
| `Attente URL produit...` | Waiting for you to provide the product URL |
| `Ajout au panier...` | Adding product to cart |
| `Paiement CB...` | Processing card payment |
| `Commande confirmée ✓` | Purchase completed successfully |

---

## Important Notes

:::tip Assign payment cards before starting
Each buy task needs a payment card assigned. Do this in the task interface after creation, before you submit the product URL.
:::

:::info Tasks wait indefinitely
Buy tasks stay in "waiting for URL" state until you provide a product URL. This is intentional — it lets you pre-login all accounts and fire the buy simultaneously when a product becomes available.
:::

- **1 task = 1 account**. Set the count to match how many accounts you want to use for the buy.
- The registered CB must have sufficient funds and be authorized for online purchases.
- Tasks can be left running in background while you wait for a product drop.
