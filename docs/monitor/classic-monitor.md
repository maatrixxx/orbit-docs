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

## Requirements

The Classic Monitor requires **SOCKS5 proxies** to function correctly. Monitoring without proxies will expose your IP to repeated requests and will likely result in a ban on the target site.

Make sure you have a proxy group configured in **Settings → Proxies** before creating a monitor entry. Orbit will warn you if you attempt to start without proxies.

---

## Setting Up a Monitor Entry

Go to **Tasks → Monitor** tab.

Click **+ Add** and fill in:

| Field | Description |
|-------|-------------|
| **Site** | Select the site (Fnac, King Jouet, Philibert) |
| **URL** | The product page URL to monitor |
| **Proxy Group** | Select a SOCKS5 proxy group — required for reliable monitoring |
| **Delay (ms)** | Time between each check, in milliseconds (e.g. `2000` = 2 seconds) |

Click **Save** and then **Start** on the monitor row to begin polling.

---

## Monitor Status

| Status | Meaning |
|--------|---------|
| 🔵 **MONITORING** | Actively polling — waiting for stock |
| 🟢 **IN STOCK** | Product detected as available — trigger fired |
| ⚪ **Stopped** | Monitor paused manually |
| 🔴 **Error** | Could not reach the product page or unexpected response |

---

## Linking Monitor to Buy Tasks

When creating a buy task, select **Stock Monitor** as the trigger and choose the corresponding monitor entry. The buy tasks will start automatically the moment the monitor detects availability.

This ensures your buy tasks fire the instant stock appears — without you needing to watch the page manually.

---

## Notes

- The Classic Monitor does not require a Discord account.
- **Always use a SOCKS5 proxy group** — running without proxies risks getting your IP banned on the site.
- Use it for products that restock without announcements, or in parallel with the Discord Monitor for maximum coverage.
- Lower delay values mean more frequent checks but higher proxy usage — `2000ms` is a good starting point.
