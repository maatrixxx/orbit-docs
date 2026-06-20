---
id: amazon-invite
title: Amazon Invite Task
sidebar_position: 3
---

# Amazon Invite Task

The Amazon Invite task automates requesting an invitation for **invite-only products** on Amazon — limited-edition or high-demand items marked "Available by invitation" that require a request before you can purchase them.

Orbit does this over plain HTTP requests (no browser) across all your accounts, one task per account, so you maximise your chances of getting purchase access when the product drops.

---

## Supported Regions

| Region | Marketplace |
|--------|-------------|
| FR | amazon.fr |
| UK | amazon.co.uk |
| JP | amazon.co.jp |

Detection of "already requested" and "request invite" works in English, French, and Japanese, matching whatever language the account's Amazon locale is set to.

---

## Prerequisites

- An **account group** for the selected region, ideally with saved session cookies
- A **proxy group** (optional, but recommended)
- The **ASIN(s)** of the invite-only product(s) — picked from your catalog or entered manually

---

## Creating an Invite Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Amazon Invites** (under the Amazon category).
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Region** | FR, UK, or JP |
| **Product ASINs** | Select from your catalog, or click **Manual input** to paste ASINs directly |
| **Account group to use** | The accounts that will request invitations — filtered to groups tagged for the selected region |
| **Proxies** | No proxy, or a proxy group |
| **Include session check** | See below |

One task is created per account in the selected group.

4. Click **Create task** then **Start**.

---

## Include Session Check

This checkbox controls how Orbit handles each account's session before requesting invitations:

- **Unchecked (default)** — Orbit makes a lightweight HTTP check to confirm the account's saved cookies are still valid. If they're expired, the task stops immediately with a **No session** status instead of wasting requests on a dead session.
- **Checked** — if the session is invalid, Orbit logs back in via a real (headless) browser first, refreshes the cookies, then proceeds — handling banned accounts and OTP prompts along the way (see [Amazon Session](/tasks/amazon-session)).

---

## How It Works

For each ASIN, on each account, Orbit:

1. Fetches the product page over HTTP and looks for a request-invite button (a `contractId` embedded in the page).
2. If not found on the main page, falls back to the "Other sellers" offer listing — some products only expose the invite button there.
3. Checks the page for an exact "already requested" confirmation (in the account's page language) before assuming a missing button means anything else.
4. If a button is found, sends the invitation request directly.
5. There is no retry on ambiguous pages — a single check resolves to **Sent**, **Already registered**, or **Error**, so a flaky page is reported clearly instead of silently retried.

---

## Task Status / Result Labels

| Result | Meaning |
|--------|---------|
| **Sent** | Invitation successfully requested |
| **Already registered** | This account already requested this product |
| **Not found** | Product not found (404) — check the ASIN |
| **Error** | No invite button and no "already requested" confirmation found — needs investigation |
| **No session** | No active session for this account — enable "Include session check" or run a Session task first |

---

## Discord Notifications

When an invitation is successfully sent, Orbit posts a webhook embed to your configured Discord channel with the product image, the ASIN, the Amazon region, and the account email.

---

## Tips

:::tip Fresh sessions = higher success rate
Run a **Session task** on your account group before running Invite tasks, or enable **Include session check** on the Invite task itself.
:::

:::info Already registered
If an account has already requested an invitation for a product, Orbit marks it automatically — no duplicate requests.
:::
