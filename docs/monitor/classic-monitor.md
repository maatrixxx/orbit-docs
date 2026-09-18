---
id: classic-monitor
title: Classic Monitor
sidebar_position: 2
---

# Classic Monitor

The **Classic Monitor** checks product pages directly on FCFS sites and alerts you (or triggers your tasks) as soon as a product comes back in stock. It works independently of Discord — it polls site pages on a schedule and detects availability changes automatically.

This is useful for **restocks** where there's no Discord announcement, or as a backup layer alongside the Discord Monitor.

---

## Supported Sites

| Site | Status |
|------|--------|
| Fnac | ✅ Supported |
| King Jouet | ✅ Supported |
| Philibert | ✅ Supported |

---

## How It Works

```
Monitor polls product URL → detects in-stock → notifies / triggers tasks
```

1. You add a product URL to monitor along with its site.
2. Orbit checks the page periodically using its stock detection system.
3. When the product becomes available, the monitor triggers — either sending a notification or firing your waiting buy tasks.

---

## Setting Up a Monitor Entry

Go to **Tasks → Monitor** tab.

Click **+ Add** and fill in:

| Field | Description |
|-------|-------------|
| **Site** | Select the site (Fnac, King Jouet, Philibert) |
| **URL** | The product page URL to monitor |
| **Name** | A label to identify this monitor entry |

Click **Save** and then **Start** on the monitor row to begin polling.

---

## Monitor Status

| Status | Meaning |
|--------|---------|
| **MONITORING** | Actively polling — waiting for stock |
| **IN STOCK** | Product detected as available — trigger fired |
| **Stopped** | Monitor paused |
| **Error** | Could not reach the product page |

---

## Linking Monitor to Buy Tasks

When creating a buy task, select **Stock Monitor** as the trigger and choose the corresponding monitor entry. The buy tasks will start automatically the moment the monitor detects availability.

This ensures your buy tasks fire the instant stock appears — without you needing to watch the page manually.

---

## Notes

- The Classic Monitor does not require a Discord account.
- Use it for products that restock without announcements, or in parallel with the Discord Monitor for maximum coverage.
- Polling interval is configured automatically based on the site.
