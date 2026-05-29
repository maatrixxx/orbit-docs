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

Orbit is designed to work with **rotating residential proxies**. Each time a task connects, it gets a fresh IP address automatically — no manual rotation needed.

:::tip
Rotating residential proxies are the most effective for Amazon account generation. Datacenter proxies have high ban rates and are not recommended.
:::

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
