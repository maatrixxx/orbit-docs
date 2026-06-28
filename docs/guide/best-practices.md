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
Use **Smart Start** instead of **Start All** — it staggers task launches every few seconds, which is gentler on your machine and avoids sending a spike of requests to Amazon at the exact same time.
:::

---

## Proxy rotation

The right number of proxies depends on how you're using them:

**Rotating proxies (gen tasks)** — the IP changes on every request, so a single proxy endpoint can handle many tasks in parallel. One proxy group with a handful of endpoints is enough to run dozens of gen tasks simultaneously.

**Sticky proxies (invite / session / win check)** — each account must always use its own dedicated proxy. Here the ratio is **1 proxy per account**: if you have 500 accounts, you need 500 distinct sticky proxy slots. The proxy isn't shared across accounts — that's the whole point.

In practice: buy rotating proxies for gen (cheap bandwidth), and configure them with a very long session duration (see the [Sticky Proxy Guide](/guide/sticky-proxy)) so the IP stays fixed long enough to be saved on the account and reused for all future tasks.

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
