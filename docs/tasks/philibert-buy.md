---
id: philibert-buy
title: Philibert Buy
sidebar_position: 11
---

# Philibert Buy

The **Philibert Buy** task logs into a Philibert account, waits for a product URL, then completes a full checkout — selecting a delivery method, filling in card details, and confirming the order.

---

## Prerequisites

- A **Philibert account group** with accounts that have a **delivery address filled** (run Philibert Fill first)
- A **payment card** assigned to each task (card number, expiry, CVV)
- A **proxy group** (optional)

:::warning Fill profile first
Philibert requires a saved delivery address to complete checkout. Run **Philibert Fill** on your accounts before launching Buy tasks.
:::

---

## Creating a Buy Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Philibert Buy**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Account group** | Philibert accounts to use for purchasing |
| **Delivery method** | Choose how the order will be shipped (see below) |
| **Proxy group** | Proxy to route traffic through (optional) |
| **Number of accounts** | How many buy tasks to create |

4. Click **Create buy tasks**.
5. After the tasks appear, **assign a payment card** to each task in the task interface.
6. When the product drops, **paste the product URL** — all tasks immediately proceed to checkout.

---

## Delivery Methods

| Method | Description |
|--------|-------------|
| **Chronopost Express** | Home delivery by Chronopost. Uses the address filled during Philibert Fill. |
| **Chronopost Relay** | Drop-off at a Chronopost relay point. Use the relay picker to choose a point by postal code. |
| **Mondial Relay** | Drop-off at a Mondial Relay point. Use the relay picker to choose a point by postal code. |

For **relay deliveries**, a **relay picker** appears in the task creation form. Enter a postal code to search the pre-built dataset of French relay points and select one. The same relay point is used for all tasks in that batch.

---

## What Happens Step by Step

### 1. Login
Orbit opens an invisible browser and logs into the Philibert account.

### 2. Clear Cart
Any items already in the cart are removed before adding the target product.

### 3. Wait for Product URL
The task pauses and waits for you to paste the product URL. This lets you pre-login all accounts and fire all buys simultaneously when a product becomes available.

### 4. Load Product Page
Orbit navigates to the product URL.

### 5. Add to Cart
Orbit clicks the add-to-cart button. If the product is out of stock, it retries automatically.

### 6. Verify Cart
Orbit checks that the correct product is in the cart (by name matching). If the wrong product is present, it clears the cart and retries.

### 7. Proceed to Checkout
Orbit navigates through the checkout flow to the delivery page.

### 8. Select Delivery Method
Orbit selects the carrier configured in the task (Chronopost Express, Chronopost Relay, or Mondial Relay). For relay methods, it also selects the pre-configured relay point.

### 9. Confirm Delivery
Orbit confirms the delivery selection and proceeds to the payment page.

### 10. Fill Payment Form
Orbit fills in the card number, expiry date, and CVV from the assigned payment card.

### 11. Submit Order
Orbit clicks the order confirmation button.

### 12. Handle 3DS (if required)
If the bank requires 3D Secure authentication, the browser window becomes **visible** so you can complete the 3DS step manually. Once confirmed, Orbit continues automatically.

### 13. Order Confirmed
Order confirmation is captured and a Discord notification is sent if a webhook is configured.

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `Logging in as email@...` | Starting login |
| `Logging in...` | Submitting credentials |
| `Clearing cart...` | Removing existing cart items |
| `Loading product page...` | Navigating to the product URL |
| `Adding to cart...` | Clicking the add-to-cart button |
| `Out of stock — retrying...` | Product unavailable, retrying |
| `Verifying cart...` | Checking that the right product is in cart |
| `Wrong product in cart — clearing and retrying...` | Cart mismatch, retrying |
| `Proceeding to checkout...` | Moving to the checkout flow |
| `Selecting delivery method...` | Choosing the carrier |
| `Searching relay point...` | Locating the selected relay point |
| `Confirming delivery...` | Confirming delivery selection |
| `Loading payment page...` | Navigating to payment |
| `Filling payment form...` | Entering card details |
| `Submitting order...` | Clicking order confirmation |
| `Waiting for order confirmation...` | Waiting for the confirmation page |
| `3DS required — please confirm in the window...` | Manual 3DS step needed |
| `Order confirmed!` | Purchase completed successfully |

---

## Important Notes

:::tip Assign payment cards before starting
Each buy task needs a payment card assigned. Do this in the task interface after creation, before pasting the product URL.
:::

:::info Tasks wait indefinitely for the product URL
Buy tasks stay in "waiting" state until you paste a product URL. This lets you pre-login all accounts and trigger all buys simultaneously on a drop.
:::

- **1 task = 1 account**. Set the count to match how many accounts you want to use.
- The payment card must be valid and authorized for online purchases.
- If 3DS is triggered, the window becomes visible — complete the bank confirmation manually, then Orbit continues.
- A Discord webhook can be configured in Settings to receive an order confirmation notification.
