---
id: overview
title: Proxies Overview
sidebar_position: 1
---

# Proxies

Proxies route your task traffic through different IP addresses, preventing Amazon from detecting and blocking automated registrations.

---

## Why Proxies Matter

Amazon flags registrations that come from the same IP address. Without proxies:
- Multiple accounts from one IP get flagged or soft-banned
- Account creation success rate drops significantly
- Existing accounts may be suspended

---

## Recommended Proxy Type

Orbit is designed to work with **residential proxies**. For most FCFS sites, **SOCKS5 proxies are required** (see below).

:::tip Recommended providers
- **[Flames](https://flameproxies.com/dashboard/new-proxies)** — SOCKS5 residential proxies, required for FCFS sites (Fnac, Philibert, Shopify, King Jouet, KingDultes)
- **[Proxy Baron](https://proxybaron.com)** — top residential proxies, best choice for Amazon gen and invites

Datacenter proxies have high ban rates and are not recommended.
:::

## SOCKS5 requirement for FCFS sites

Fnac, Philibert, Shopify, King Jouet, and KingDultes require **SOCKS5 proxies**. HTTP proxies will not work correctly with these sites. Make sure your proxy group uses SOCKS5 proxies (format: `socks5://host:port:user:pass` or plain `host:port:user:pass` from a SOCKS5 provider like Flames).

---

## Proxy Format

Orbit accepts proxies in the following format:

```
host:port:username:password
```

Example:
```
gate.residential.example.com:10000:myuser:mypassword
```

---

## Proxy Groups

Proxies are organised into **groups**. When creating a task, you select which proxy group to use. Proxies within a group are distributed across tasks in round-robin order.
