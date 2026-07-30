---
id: capsolver
title: CapSolver
sidebar_position: 7
---

# CapSolver

CapSolver is the captcha solving service used by Orbit to bypass **DataDome** bot protection challenges that appear on Fnac Buy tasks.

---

## What is DataDome?

DataDome is a bot-detection platform used by Fnac (and other retailers). It fingerprints browsers and blocks automated requests. Orbit integrates with CapSolver's API to automatically solve DataDome challenges during Fnac Buy checkout flows.

---

## Setup

1. Create an account at [capsolver.com](https://capsolver.com) and add credits.
2. Copy your **API Key** from the CapSolver dashboard.
3. In Orbit, go to **Settings → API Keys** and paste your CapSolver key.
4. Click **Save**.

---

## Usage

CapSolver is used automatically by **Fnac Buy** tasks when a DataDome challenge is detected. No extra configuration is needed per-task — as long as your key is saved in Settings, it will be used.

---

## Cost

- DataDome solves are priced per token — check [capsolver.com](https://capsolver.com) for current rates.
- Keep your balance topped up before large Fnac Buy runs to avoid task failures at the challenge step.

---

:::info CapSolver vs CapGuru
**CapGuru** is used for Amazon Arkose/FunCaptcha challenges (account generation).  
**CapSolver** is used for DataDome challenges (Fnac Buy).  
They are separate services with separate keys — you need both if you run both task types.
:::
