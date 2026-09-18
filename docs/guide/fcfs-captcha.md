---
id: fcfs-captcha
title: Step 2 — Anti-Captcha (CapSolver)
sidebar_position: 12
---

# Step 2 — Anti-Captcha

Some FCFS sites (particularly Shopify-based stores and King Jouet) display CAPTCHA challenges during checkout. Without an automatic solver, your tasks would pause and require manual intervention — killing your speed advantage on a drop.

---

## Recommended — CapSolver

**[capsolver.com](https://www.capsolver.com/)**

CapSolver is the anti-captcha service integrated into Orbit for FCFS sites. It supports the types of challenges used by Shopify, King Jouet, and similar sites.

| Detail | Info |
|--------|------|
| Price | Very cheap — a few dollars covers thousands of solves |
| Supported challenges | Cloudflare Turnstile, hCaptcha, reCAPTCHA |
| Native integration | Yes — built into Orbit |

:::tip
Even if your target site doesn't always show a CAPTCHA, having CapSolver configured means your tasks handle it automatically if one appears during a high-traffic drop.
:::

---

## How to get your API key

1. **Create an account** at [capsolver.com](https://www.capsolver.com/)
2. Top up your balance (a few dollars is more than enough to start)
3. Go to your **dashboard** → find the **API Key** section
4. Copy your API key
5. In Orbit → **Settings** → **CapSolver** → paste your key and click **Save**

Orbit will automatically use CapSolver whenever a CAPTCHA appears during a buy task.
