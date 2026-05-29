---
id: tracker
title: Vinted Tracker
sidebar_position: 3
---

# Vinted Tracker

The Vinted Tracker monitors a **search query** or **seller profile** and sends an alert (via Discord) every time a new listing appears that matches your criteria.

---

## Creating a Tracker Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **Vinted Tracker**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task |
| **Mode** | **Search** (keyword/filter) or **Seller** (specific profile) |
| **URL** | The Vinted search URL or seller profile URL |
| **Max price** | Only alert if the listing is at or below this price |
| **Size filter** | Only alert for matching sizes (optional) |
| **Discord webhook** | Where to send notifications |
| **Marketplace** | The Vinted regional site |

4. Click **Create task** then **▶ Start**.

---

## Tracking Modes

### Search Mode

Paste a Vinted search URL (with all your filters already applied from the Vinted website). Orbit will poll this URL and alert you to any new listing that wasn't there on the previous check.

**Example URL:**
```
https://www.vinted.fr/catalog?search_text=jordan+1+retro&size_id[]=1&price_to=120
```

### Seller Mode

Paste a Vinted seller profile URL. Orbit monitors their listings and alerts you the moment they post anything new.

**Example URL:**
```
https://www.vinted.fr/member/123456-username
```

---

## Discord Alerts

When a new listing is found, Orbit sends a Discord embed with:

- 📸 Listing photo
- 📦 Item title and brand
- 💶 Price
- 📏 Size
- 🔗 Direct link to buy

---

## Tips

:::tip
For high-competition items, combine the Tracker (for awareness) with the Sniper (for instant purchase). Monitor with the Tracker, then launch a targeted Sniper when you spot the right listing.
:::

- Poll intervals are set to avoid Vinted rate limits
- You can run multiple Tracker tasks simultaneously for different searches
- Tracker tasks run continuously until you stop them manually
