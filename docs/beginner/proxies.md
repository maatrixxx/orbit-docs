---
id: proxies-beginner
title: Why You Need Proxies
sidebar_position: 3
---

# Why You Need Proxies

## What is an IP address?

Every device connected to the internet has an **IP address** — a unique identifier that websites use to know *where* a request is coming from. Think of it like a return address on a letter.

When you visit Amazon, Amazon sees your IP address. When you request an invitation, that request is tied to your IP.

---

## The problem with a single IP

If you try to run **50 Amazon accounts from the same home IP address**, Amazon immediately knows something is wrong:

- No normal person has 50 Amazon accounts
- All 50 requests come from the same address
- Amazon flags your IP → all 50 accounts get banned → you wasted your time

The same logic applies to Fnac, Philibert, and Shopify — any site will detect and block suspicious behavior tied to a single IP.

:::danger Don't skip proxies
Running Orbit without proxies on your home IP is the fastest way to get your accounts banned. It also risks getting your personal IP blacklisted from the site entirely.
:::

---

## The solution: residential proxies

A **proxy** is an intermediary server that routes your traffic through a *different* IP address. A **residential proxy** specifically uses IP addresses assigned to real homes by internet service providers — making your traffic look like it comes from regular users.

With residential proxies:
- Each account can use a **different IP address**
- Amazon sees 50 different home IPs instead of one → no red flag
- Your personal IP stays completely clean and separate

---

## What kind of proxies do you need?

| Type | Good for | Notes |
|------|----------|-------|
| **Residential (rotating)** | Amazon GEN, Amazon invites | Must be **French IPs** for Amazon FR |
| **Residential (sticky)** | Fnac, Philibert, Shopify checkout | Same IP held for the full session |
| **Datacenter** | ❌ Not recommended | Easily detected and blocked |

:::tip Proxy region matters
For **Amazon France**, always use **French residential proxies**. Using proxies from another country dramatically increases ban rates. For Fnac and Philibert, French proxies are also recommended but less strict.
:::

---

## How much do proxies cost?

Pricing is based on **bandwidth** (data transferred), not time.

As a rough estimate:
- Amazon GEN: ~5 GB per 100 accounts
- Amazon invites (per run): ~0.5–1 GB
- Fnac/Philibert BUY: very little data (seconds per task)

You don't need to buy a huge plan to start. 2–3 GB is enough to learn the ropes.

---

## Where to buy proxies

See the **[Step 1 — Proxies](../guide/proxies)** page in the Guide section for recommended providers and a step-by-step setup.

---

## Summary

- Every request you make online is tied to your IP address
- Running multiple accounts from one IP = instant detection and bans
- Residential proxies give each account a different, legitimate-looking IP
- French proxies required for Amazon FR; recommended for Fnac & Philibert

Next: let's talk about **email addresses** — why you need more than one, and which types to use.
