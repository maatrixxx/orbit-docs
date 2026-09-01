---
id: shopify-buy
title: Shopify Buy Experimental
sidebar_position: 13
---

# Shopify Buy Experimental

The **Shopify Buy Experimental** task automates guest checkout on any Shopify store. It uses an email list, a profile group, and a payment card to complete a full purchase — optionally selecting a relay delivery point automatically.

:::info Experimental
This task is under active development. Compatibility may vary across Shopify stores. Test on a single task before scaling.
:::

---

## Prerequisites

- An **email list** with available emails (see [Creating an Email List](/emails/creating-a-list))
- A **profile group** with shipping/billing identities (see [Identity Profiles](/profiles/overview))
- A **payment card** — assigned per task after creation, or from a card group
- A **proxy group** (optional)
- For relay delivery: **Relay Points** configured with at least one favorite per carrier (see [Relay Points](/tasks/relay-points))

---

## Creating Shopify Buy Tasks

1. Go to **Tasks** and click **+ Create**.
2. Select **Shopify Buy Experimental** (under the Shopify category).
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Product URL** | Full URL of the product page, ideally with `?variant=` |
| **Email list** | One email is used per task |
| **Profile group** | One identity profile is assigned per task |
| **Delivery type** | Home delivery or relay point (see below) |
| **Mode** | Standard, Sneakers, or Clothes (see below) |
| **Payment card** | Assign manually after creation, or auto-assign from a card group |
| **Proxy** | Optional — select a proxy group |
| **Number of tasks** | How many checkout tasks to create |

4. Click **Create tasks**.
5. If you chose **Assign manually**, assign a payment card to each task via the card icon on the task row.
6. When the product drops, paste the product URL — all tasks proceed to checkout immediately.

---

## URL Timing

| Mode | Description |
|------|-------------|
| **URL now** | Paste the product URL immediately — all tasks use this URL. |
| **URL after creation** | Tasks are created without a URL — paste it later right before starting. Useful for drops where the exact URL isn't known in advance. |

:::tip Include the variant
If the product URL includes `?variant=12345678`, the bot uses that variant directly. Without a variant, it extracts the first available variant from the product page.
:::

---

## Delivery Types

| Type | Description |
|------|-------------|
| **Home** | Standard home delivery using the profile's address. |
| **Auto relay** | The bot detects the carrier offered at checkout (Mondial Relay, Colissimo, Chronopost…) and automatically selects your configured favorite relay point from **Relay Points**. |

For auto relay to work, you must have at least one favorite relay point saved in the **Relay Points** page for each carrier the store may offer.

---

## Modes

### Standard
Default mode — fills the checkout form with name, address, and card. No size selection.

### Sneakers
Adds a size selection step before checkout. Choose your size system (EU / US / UK) and the target size. The bot selects the matching variant on the product page.

| Size system | Example |
|-------------|---------|
| EU | 42, 42.5, 43… |
| US | 8.5, 9, 9.5… |
| UK | 8, 8.5, 9… |

### Clothes
Adds a clothes size selection (XS to 5XL, or numeric sizes 34–52). The bot selects the matching variant on the product page.

---

## Payment Cards

| Mode | Description |
|------|-------------|
| **Assign manually** | A card field appears on each task row after creation — fill it in before starting. |
| **Auto from group** | Cards are pulled from the selected card group and cycled across tasks. If the group has fewer cards than tasks, cards repeat. |

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `Loading product page...` | Navigating to the product URL |
| `Adding to cart...` | Clicking the add-to-cart button |
| `Proceeding to checkout...` | Moving to the checkout flow |
| `Filling contact info...` | Entering email and profile details |
| `Selecting delivery...` | Choosing delivery method / relay point |
| `Filling payment form...` | Entering card details |
| `Submitting order...` | Clicking the order confirmation button |
| `Order confirmed!` | Purchase completed successfully |

---

## Important Notes

:::tip Assign payment cards before starting
If using manual card assignment, fill in each task's card field before pasting the product URL.
:::

:::info Relay Points must be configured
For **Auto relay** delivery, at least one favorite relay point must be saved per carrier in the **Relay Points** page. The bot reads the carrier offered at checkout and picks the matching favorite automatically.
:::

- **1 task = 1 account**. Set the count to match how many emails you want to use.
- Shopify stores vary — checkout flow and field names differ across stores. If a task fails consistently on a specific store, check the task logs for details.
- A Discord webhook can be configured in Settings to receive an order confirmation notification.
