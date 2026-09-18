---
id: fcfs-proxies
title: Step 1 — Proxies (SOCKS5)
sidebar_position: 11
---

# Step 1 — Proxies

## Why SOCKS5?

FCFS sites (Fnac, Philibert, King Jouet, Shopify) require **SOCKS5 proxies** — not standard HTTP/HTTPS proxies. The SOCKS5 protocol allows Orbit to handle the complex network traffic these sites use, and is mandatory for the buy flow to work correctly.

:::danger SOCKS5 only
Using HTTP/HTTPS proxies with FCFS sites will cause failures. Always use SOCKS5 proxies from a provider that explicitly offers them.
:::

---

## Recommended provider

### Flames *(recommended for FCFS sites)*
**[flameproxies.com/dashboard/new-proxies](https://flameproxies.com/dashboard/new-proxies)**

Flames is the go-to provider for FCFS sites. They offer **SOCKS5 residential proxies** that work natively with Orbit's buy flow for Fnac, Philibert, King Jouet, and Shopify.

:::tip Ask on Discord
Not sure which plan to get? Ask in the Orbit Discord — community members regularly share which Flames plans and settings give the best results for each site.
:::

---

## Proxy region

For French FCFS sites (Fnac, Philibert, King Jouet), always use **French proxies**. Using foreign IPs can trigger security checks or slow down the checkout process.

---

## How to import your proxies into Orbit

1. Purchase a SOCKS5 proxy plan from Flames (or another SOCKS5 provider)
2. Export as **`host:port:username:password`** format (one proxy per line)
3. In Orbit → **Proxies** → **Create a group** → paste or import your list
4. Orbit auto-detects SOCKS5 format from the proxy configuration

That's it. Orbit will assign proxies to your buy tasks automatically.
