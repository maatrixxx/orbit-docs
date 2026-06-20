---
id: captcha
title: Step 3 — Anti-Captcha (CapGuru)
sidebar_position: 4
---

# Step 3 — Anti-Captcha

Amazon uses **Arkose Labs** CAPTCHA challenges during registration. Without an automatic solver, every task pauses and waits for you to solve it manually — which completely kills automation at scale.

---

## Recommended — CapGuru

**[cap.guru/en](https://cap.guru/en/)**

CapGuru is the captcha solver integrated directly into Orbit. It specialises in Arkose challenges and is by far the most cost-effective option available.

| Detail | Info |
|--------|------|
| Price | ~$0.10 per 1000+ accounts solved |
| First-time bonus | **3 cents credited for free** on signup — enough to start |
| Minimum top-up | $0.10 is enough for hundreds of solves |
| Supported by Orbit | Yes (native integration) |

:::tip Extremely cheap
At these prices, anti-captcha is essentially free. $0.10 on CapGuru will comfortably cover your first 1000+ account generations.
:::

---

## How to get your API key

1. **Create an account** at [cap.guru/en](https://cap.guru/en/)
2. Once logged in, your **API key is displayed directly on the dashboard homepage**
3. Copy it
4. In Orbit → **Settings** → **CapGuru** → paste your key and click **Save**

That's it. No further configuration needed. Orbit will automatically use CapGuru whenever a CAPTCHA appears during generation.

---

## What if I don't add CapGuru?

Tasks will still run, but they'll **pause and wait for you to solve each CAPTCHA manually** in the browser window. This is fine for 1–2 tasks but becomes unmanageable at scale. CapGuru is strongly recommended for any serious generation.
