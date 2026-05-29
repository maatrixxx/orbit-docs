---
id: amazon-checkout
title: Amazon Checkout Task
sidebar_position: 5
---

# Amazon Checkout Task

The Amazon Checkout task automates purchasing a product on Amazon across multiple accounts. Orbit logs into each account, navigates to the target product, and completes the checkout.

---

## Prerequisites

- ✅ An **account group** with active accounts and valid cookies
- ✅ A **proxy group**
- ✅ Payment method pre-saved on each account (or gift card balance loaded)
- ✅ The **product URL** you want to buy

---

## Creating a Checkout Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **Amazon Checkout**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task |
| **Product URL** | The full Amazon product URL |
| **Account group** | Accounts that will make the purchase |
| **Proxy group** | Proxies to use |
| **Quantity** | Number of units to buy per account |
| **Max price** | Skip if the price exceeds this amount |

4. Click **Create task** then **▶ Start**.

---

## How It Works

For each account in the group, Orbit:

1. Opens a browser session using saved cookies
2. Navigates to the product URL
3. Checks the price against your **Max price** setting
4. Adds the item to the cart
5. Proceeds to checkout
6. Confirms the order

---

## Checkout Results

| Result | Meaning |
|--------|---------|
| ✅ **Order placed** | Purchase successful — order ID saved |
| ❌ **Price too high** | Product exceeded your max price limit |
| ❌ **Out of stock** | Product unavailable at checkout |
| ❌ **Session expired** | Cookies are stale — run a Session task first |
| ❌ **Payment failed** | No valid payment method on the account |

---

## Tips

:::tip
Always run a **Session task** on the account group before a Checkout task to ensure cookies are fresh. Stale sessions are the most common cause of checkout failures.
:::

:::caution
Amazon monitors purchasing patterns. Buying the same product on many accounts in rapid succession may trigger fraud checks. Use delays between accounts where possible.
:::
