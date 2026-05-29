---
id: search
title: Vinted Search
sidebar_position: 2
---

# Vinted Search

The Vinted Search feature lets you monitor any Vinted search and receive **instant Discord alerts** when a new listing matching your criteria appears.

---

## Creating a Search Monitor

1. Go to **Vinted** in the left navigation.
2. Click **+ New Search**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Name** | A label for this monitor (e.g. `Jordan 1 FR < 120€`) |
| **Search URL** | The full Vinted search URL with your filters already applied |
| **Max price** | Only alert if the listing price is at or below this amount |
| **Discord webhook** | The webhook URL to send notifications to |
| **Marketplace** | The Vinted regional site to monitor |

4. Click **Create** then **▶ Start**.

---

## Setting Up the Search URL

Build your search directly on Vinted's website with all the filters you want (category, brand, size, condition, price range), then copy the URL from your browser and paste it into Orbit.

**Example:**
```
https://www.vinted.fr/catalog?search_text=jordan+1&size_id[]=1&price_to=120&order=newest_first
```

:::tip
Always add `order=newest_first` to your Vinted URL so Orbit always checks the most recent listings first.
:::

---

## Discord Alerts

When a new listing is detected, Orbit sends a Discord embed containing:

- 📸 Listing photo
- 📦 Item title and brand
- 💶 Price
- 📏 Size and condition
- 🔗 Direct link to the listing

---

## How It Works

Orbit polls your search URL at regular intervals. On each check, it compares new results against the ones seen previously. Any listing that wasn't there on the last check triggers an alert — as long as its price is within your **Max price** limit.

---

## Tips

- Run multiple search monitors simultaneously for different keywords or sizes
- Monitors run continuously until you stop them manually
- If you update your Vinted filters, just edit the search URL in Orbit
