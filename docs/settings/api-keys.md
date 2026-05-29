---
id: api-keys
title: API Keys
sidebar_position: 2
---

# API Keys

The **API Keys** section is where you configure your CapGuru key, used for automatic captcha solving during Amazon account generation.

---

## CapGuru

[CapGuru](https://cap.guru) is a captcha solving service that Orbit uses to automatically solve **Arkose / FunCaptcha** challenges that appear during Amazon registration.

### Setup

1. Create an account on [cap.guru](https://cap.guru) and add credits.
2. Go to your CapGuru dashboard and copy your **API Key**.
3. In Orbit, go to **Settings → API Keys** and paste it into the CapGuru field.
4. Click **Save**.

### Usage

When creating an Amazon Generator task, enable **🤖 CapGuru (auto)** in the Captcha section. If CapGuru is not configured, you must solve captchas manually by watching the browser window.

:::info Cost
Arkose captchas typically cost between €0.01 and €0.05 per solve depending on difficulty. Monitor your CapGuru balance to avoid task failures mid-run.
:::

---

## Discord Webhook

The Discord webhook is configured in **Settings → Discord** (separate section). See the [Discord](./discord) page.
