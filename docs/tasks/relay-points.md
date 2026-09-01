---
id: relay-points
title: Relay Points
sidebar_position: 14
---

# Relay Points

The **Relay Points** page lets you configure a favorite relay point for each carrier. These favorites are used automatically by the **Shopify Buy Experimental** task (in Auto relay mode) and the relay delivery options in **Fnac Buy** and **Philibert Buy**.

---

## Supported Carriers

| Carrier | Dataset |
|---------|---------|
| **Mondial Relay** | OpenStreetMap dataset — France métropolitaine |
| **Chronopost** | OpenStreetMap dataset — France métropolitaine |
| **Colissimo** | Scraped dataset — 13,671 relay points in France |
| **DHL** | Manual entry only |
| **GLS** | Manual entry only |
| **Relais Colis** | Manual entry only |
| **UPS** | Manual entry only |

Mondial Relay, Chronopost, and Colissimo include searchable pre-built datasets. Other carriers require manual entry.

---

## Adding a Carrier

1. Click the **+ Add carrier** button.
2. Select a carrier from the list.
3. The carrier tab appears and is immediately active.

---

## Searching and Saving a Relay Point

For carriers with a dataset (Mondial Relay, Chronopost, Colissimo):

1. Open the carrier tab.
2. Enter a **postal code** in the search field and press Enter.
3. A list of nearby relay points appears — each one shows the name, address, and city.
4. Click a result to **save it** as your favorite for that carrier.

The saved relay point appears at the top of the tab. Only one favorite is stored per carrier — saving a new one replaces the previous one.

---

## Adding a Relay Point Manually

For carriers without a dataset (DHL, GLS, Relais Colis, UPS), or to override a dataset result:

1. Open the carrier tab and scroll to **Manual entry**.
2. Fill in: **Name**, **Address**, **City**, **Postal code**, and optionally a **Carrier ID** (the internal point ID, if known).
3. Click **Save manual point**.

---

## Carrier Priority Order

The carrier order on the Relay Points page defines the **priority** used during Auto relay in Shopify Buy tasks. When the bot detects multiple carriers at checkout, it picks the one ranked highest in your list.

To reorder carriers:
- Use the **↑** and **↓** arrows on each carrier tab to move it up or down.

---

## How Auto Relay Works in Shopify Buy

When a Shopify Buy task is set to **Auto relay** delivery:

1. The bot reaches the delivery step at checkout.
2. It reads the list of available carriers offered by the store.
3. It compares that list against your **Relay Points carrier order** and picks the highest-priority match.
4. It selects the corresponding saved relay point automatically.

If no favorite relay point is found for any of the offered carriers, the task will pause or fail at the delivery step.

:::warning Configure relay points before running Auto relay tasks
Make sure you have at least one relay point saved per carrier you expect to encounter at checkout. For Shopify stores in France, Mondial Relay and Colissimo are the most common.
:::

---

## Tips

:::tip Search by partial postal code
Entering only the first 2 digits of a postal code returns results for the entire department — useful for rural areas with few relay points.
:::

:::tip Relay points for Fnac Buy and Philibert Buy
Fnac Buy and Philibert Buy use a built-in relay picker at task creation rather than the Relay Points page. Relay Points favorites are used only for **Shopify Buy Experimental** in Auto relay mode.
:::
