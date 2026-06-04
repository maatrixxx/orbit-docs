---
id: best-practices
title: Tips & Best Practices
sidebar_position: 6
---

# Tips & Best Practices

A few recommendations to get the best results without running into issues.

---

## Don't overload your machine

Orbit opens a real browser window per task. Each browser uses RAM and CPU.

**Recommended maximum: 15–20 tasks simultaneously.**

Running 50+ tasks at once on a standard machine will cause slowdowns, crashes, and failed accounts. It's better to run 15 tasks cleanly and queue the rest than to hammer your machine.

:::tip
Use **⚡ Smart Start** instead of **▶ Start All** — it staggers task launches every few seconds, which is gentler on your machine and avoids sending a spike of requests to Amazon at the exact same time.
:::

---

## Proxy rotation

Make sure your proxy group has **enough proxies** for the number of tasks you're running. Orbit rotates through them automatically, but if you only have 5 proxies for 20 tasks, each proxy gets hammered — increasing ban risk.

A good ratio: **at least 1 proxy per 2–3 simultaneous tasks**.

---

## Keep your balances topped up

Mid-run failures happen when SMS or CapGuru credits run dry. Before a big run, check:
- Your **Hero SMS balance**
- Your **CapGuru balance**

Both can be checked directly in Orbit → **Settings**.

---

## Test before scaling

Always run **5 tasks first** to make sure everything is working (proxies connecting, SMS receiving, CAPTCHA solving, IMAP catching OTPs). Only scale up once you've confirmed a clean end-to-end run.

---

## Need help?

The best place to ask questions, share tips, or find out which proxies are working best right now is the **Orbit Discord** — which you already have access to!

The community is active and members are happy to help newcomers get their setup working.
