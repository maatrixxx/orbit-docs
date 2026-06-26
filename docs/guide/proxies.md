---
id: proxies
title: Step 1 — Proxies
sidebar_position: 2
---

# Step 1 — Proxies

## What is a residential proxy?

A **residential proxy** (or "resi") routes your traffic through real home IP addresses. From Amazon's point of view, each request looks like it comes from a regular home internet user — not a data center. This dramatically reduces the risk of bans.

:::info Why not datacenter proxies?
Datacenter proxies are cheap but easily detected and blocked by Amazon. Always use **residential** proxies for account generation.
:::

---

## Recommended providers

### Flame Proxies *(cheapest option)*
**[flameproxies.com/dashboard/new-proxies](https://flameproxies.com/dashboard/new-proxies)**

The most affordable option on the market. Great for getting started without spending much. Well-suited for Amazon gen and invites.

### Resilab *(good price/quality ratio)*
**[resilab.vip/dashboard](https://www.resilab.vip/dashboard)**

A solid resi provider with a good price/quality ratio. Well-suited for Amazon gen.

### Mars Proxies *(premium quality)*
**[dashboard.marsproxies.com](https://dashboard.marsproxies.com/products/ultra-residential-proxies)**

More expensive but one of the most reliable options on the market. If you plan on running a high volume, worth the extra cost.

:::tip Other options
Not sure which to pick? Ask in the Orbit Discord — community members regularly share their experience with different providers.
:::

---

## Proxy region — important

The region of your proxies **must match** the Amazon marketplace you are generating on.

| Region | Required proxy country |
|--------|----------------------|
| 🇫🇷 **FR** | France only — always use French proxies |
| 🇬🇧 **UK** | United Kingdom only — always use UK proxies |
| 🇯🇵 **JP** | Any country works — no restriction |

:::warning FR & UK — region mismatch = instant bans
For French and UK Amazon, using proxies from the wrong country greatly increases the risk of blocks and bans during generation. Make sure your proxy group contains only proxies from the correct country before starting your tasks.
:::

---

## How much bandwidth do I need?

As a rough estimate: **~5 GB per 100 accounts**.

Start small (1–2 GB) while you're getting set up, then scale once you have a working flow.

---

## How to get your proxy list into Orbit

Once you've purchased a plan on your provider's dashboard:

1. Find the **"Export"** or **"Download list"** section (usually under "My Proxies" or "Proxy List")
2. Export as **`host:port:username:password`** format (one proxy per line)
3. In Orbit → **Proxies** → **Create a group** → paste or import your list

That's it. Orbit will rotate through your proxies automatically during generation.
