---
id: capguru
title: CapGuru
sidebar_position: 6
---

# CapGuru

CapGuru is the captcha solving service used by Orbit to bypass **Arkose Labs / FunCaptcha** puzzles that appear during Amazon account registration.

---

## How Arkose Captcha Works

When Amazon detects a new account being registered, it may trigger an **Arkose puzzle challenge** — a series of image-based puzzles (e.g. "rotate the 3D object to match"). These puzzles cannot be solved programmatically without a solving service.

Orbit integrates with CapGuru's API to:
1. Detect when the Arkose challenge appears
2. Wait up to **1 minute** for the puzzle to load
3. Submit the puzzle to CapGuru for solving
4. Automatically enter the solution and continue registration

:::tip If the puzzle doesn't appear within 1 minute
Orbit will automatically **refresh the page** and wait another minute. If the puzzle still doesn't appear after the second attempt, the task fails and you should retry with a fresh proxy.
:::

---

## Manual Mode

If you don't have a CapGuru key, or prefer to solve captchas yourself, select **Manual (default)** in the task creation form. The browser window will stay open and pause at the captcha — solve it manually, and Orbit will continue automatically.

---

## Balance & Costs

- Check your CapGuru balance at [cap.guru](https://cap.guru).
- Arkose solves typically cost **€0.01 – €0.05** each.
- If your balance runs out mid-run, tasks will fail at the captcha step. Top up before large runs.
