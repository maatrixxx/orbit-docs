---
id: overview
title: Order Tracking
sidebar_position: 1
---

# Order Tracking

The **Order Tracking** page centralises all your Amazon orders in one place. Orbit scans your connected IMAP inboxes automatically for Amazon order and shipping emails and extracts the key information — no manual entry needed.

---

## How It Works

Orbit runs an **automatic email scan every 2 minutes** across all configured IMAP accounts, parsing Amazon order confirmation, shipping, and delivery emails. Detected orders are stored locally and displayed as cards on this page.

You can also trigger a **manual scan** at any time by clicking the **Scan now** button.

---

## Order Statuses

| Status | Meaning |
|--------|---------|
| **Ordered** | Order confirmed by Amazon, not yet shipped |
| **Shipped** | Shipped — carrier tracking active (Colissimo or other) |
| **Delivered** | Delivered to the delivery address |
| **Locker** | Delivered to an Amazon Locker or Mondial Relay locker — code shown on the card |
| **Relay** | Ready for pickup at a Mondial Relay relay point |
| **Relay Unavail.** | Relay point unavailable — a link to choose another relay point is shown |
| **Canceled** | Order canceled |

---

## Order Cards

Each order card displays:

- **Status badge** — colour-coded (blue = ordered, green = shipped/delivered, orange = pickup, red = canceled)
- **Order number** — Amazon reference
- **Account email** — the Amazon account associated with the order
- **Product images + prices** — one thumbnail per item, with its individual price
- **Estimated delivery date** — when provided by Amazon (Colissimo shipments)
- **Progress bar** — visual step indicator: Ordered → Shipped → Delivered (or a pickup variant for locker/relay orders)
- **Last updated** timestamp

---

## Pickup Orders (Locker & Mondial Relay)

When a package is directed to a locker or Mondial Relay relay point:

**Locker** — the card shows the locker name and the **unlock code** (large, easy to copy).

**Relay** — the card shows the relay point name and address.

**Relay Unavailable** — if the chosen relay point is unavailable, a **Choose a pickup point →** button appears linking directly to Amazon's relay selection page.

For locker and relay orders that have been picked up, click **Mark delivered** to update the status and remove the progress bar.

---

## Pending Refunds

If any canceled orders are detected, a **Pending refunds: X.XX €** banner appears at the top of the page — a running total of the prices of all canceled items, so you know at a glance how much Amazon owes you.

---

## Filter Tabs

Use the filter tabs to view orders by status:

- **All** — every order regardless of status
- **Ordered**, **Shipped**, **Locker**, **Relay**, **Unavail.**, **Delivered**, **Canceled**

Each tab shows the count of orders in that state.

---

## Bulk Actions

**Multi-select** — click and drag across cards to select multiple orders at once. Selected cards are highlighted in purple. Click **Delete N selected** to remove them all at once.

**Mark delivered** — available on each non-delivered card. Updates the status immediately without waiting for an email scan.

**Delete** — removes an individual order from the tracking list (the ×  button on the card). Does not affect the actual Amazon order.

---

## IMAP Configuration

Order Tracking reads emails from the IMAP accounts configured in **Settings → IMAP**. Any inbox connected there is automatically scanned every 2 minutes.

For best results, use the **same Gmail IMAP account** that receives Amazon order confirmation emails. If you buy with multiple Amazon accounts across multiple inboxes, connect all of them in Settings — Orbit will scan all of them.

See [IMAP Accounts](/settings/imap) for setup instructions.

---

:::tip Nickname
Orders show a truncated email address. If you have many accounts, adding a **nickname** to your IMAP account (in Settings) helps identify which inbox an order came from at a glance.
:::
