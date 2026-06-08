---
id: amazon-invite
title: Amazon Invite Task
sidebar_position: 3
---

# Amazon Invite Task

The Amazon Invite task automates requesting an invitation for **invite-only products** on Amazon. These are limited-edition or high-demand items that require you to click **"Demander une invitation"** (FR) / **"Request an invitation"** (UK) / **"招待をリクエスト"** (JP) before being able to purchase them.

Orbit does this automatically across all your accounts so you maximise your chances of getting purchase access when the product drops.

---

## Supported Regions

| Region | Marketplace |
|--------|-------------|
| 🇫🇷 FR | amazon.fr |
| 🇬🇧 UK | amazon.co.uk |
| 🇯🇵 JP | amazon.co.jp |

---

## Prerequisites

- ✅ An **account group** with saved session cookies (run a Session task first if needed)
- ✅ A **proxy group** with residential proxies
- ✅ The **ASIN(s)** of the invite-only product(s) — found in the product URL: `amazon.fr/dp/`**`B0XXXXXXXX`**

---

## Creating an Invite Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **Amazon Invite**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task |
| **Region** | FR, UK, or JP |
| **ASINs / URLs** | One ASIN per line (FR/UK), or full product URLs (JP) |
| **Account group** | The accounts that will request invitations |
| **Proxy group** | Proxies to use during the task |

4. Click **Create task** then **▶ Start**.

---

## How It Works

For each account in the group, Orbit:

1. Opens a headless browser with the account's saved cookies
2. Navigates to each product page
3. Waits for the **"Demander une invitation"** button to appear
4. Clicks it and waits up to **20 seconds** for the confirmation message **"Invitation demandée, merci !"** to appear
5. If confirmed → marks the ASIN as ✅ and sends a Discord webhook notification
6. If already requested on this account → skips (marked as ℹ️ Already registered)
7. Moves to the next ASIN

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `✅ ASIN: invitation sent!` | Invitation successfully requested |
| `ℹ️ ASIN: already registered` | This account already requested this product |
| `✅ ASIN: already ordered on this account` | Account already purchased this product |
| `❌ session not saved` | Cookies are stale — run a Session task first |
| `❌ confirmation not received` | Button was clicked but confirmation didn't appear |
| `🚫 Browser window closed` | Task stopped because the browser was closed |

---

## Discord Notifications

When an invitation is successfully sent, Orbit posts a webhook embed to your configured Discord channel with:
- The product image
- The ASIN
- The Amazon region
- The account email (spoiler-tagged)

---

## Tips

:::tip Fresh sessions = higher success rate
Always run a **Session task** on your account group before running Invite tasks. Stale cookies cause redirects to the login page, wasting time and proxies.
:::

:::info Already registered
If an account has already requested an invitation for a product, Orbit skips it automatically — no duplicate clicks.
:::

:::caution Amazon overload
During product drops or high-demand periods, Amazon's servers may be slow to respond. Orbit handles this by retrying page loads (up to 3 times per ASIN) before moving on.
:::
