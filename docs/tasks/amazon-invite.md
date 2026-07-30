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
| US | amazon.com |

---

## Prerequisites

- An **account group** for the selected region, ideally with saved session cookies
- A **proxy group** (optional, but recommended)
- The **ASIN(s)** of the invite-only product(s) — picked from your catalog or entered manually

---

## Creating an Invite Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Amazon Invites**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Region** | FR, UK, JP, or US |
| **Product ASINs** | Select from your catalog, or click **Manual input** to paste ASINs directly |
| **Account group** | The accounts that will request invitations |
| **Proxies** | No proxy, with a proxy group, or **Sticky** (see below) |
| **Include session check** | See below |

One task is created per account in the selected group.

4. Click **Create task** then **Start**.

---

## Proxy Modes

| Mode | Description |
|------|-------------|
| **No proxy** | Requests go through your local IP |
| **With proxy** | A random proxy from the selected group is used |
| **Sticky** | Uses the proxy permanently attached to each account — the same IP that was used during generation (recommended when accounts were generated with sticky proxy) |

When **Sticky** is selected, you can optionally add a fallback proxy group used if an account has no attached proxy yet.

---

## Include Session Check

This option controls what happens when an account's session is expired:

- **Unchecked (default)** — Orbit makes a lightweight HTTP check. If the session is expired, the task stops with a **No session** status.
- **Checked** — if the session is invalid, Orbit logs back in via a real browser first, refreshes the cookies, then proceeds with the invite requests.

### "No Session" — Run Session Button

If a task stops with **No session** and you did **not** check "Include session check", a **Run Session** button appears on the task card. Clicking it:

1. Runs a full session refresh for that account (same as running a Session task)
2. **Automatically relaunches the invite** once the session is successfully refreshed — no manual re-start needed

---

## How It Works

For each ASIN, on each account, Orbit:

1. Fetches the product page over HTTP and looks for a request-invite button (a `contractId` embedded in the page).
2. If not found on the main page, falls back to the "Other sellers" offer listing.
3. Checks for an "already requested" confirmation before assuming a missing button means anything else.
4. If a button is found, sends the invitation request directly.

---

## Task Status / Result Labels

| Result | Meaning |
|--------|---------|
| **Sent** | Invitation successfully requested |
| **Already registered** | This account already requested this product |
| **Not found** | Product not found (404) — check the ASIN |
| **Error** | No invite button and no "already requested" confirmation found |
| **No session** | Expired session — click **Run Session** to refresh and auto-relaunch |

---

## Discord Notifications

When an invitation is successfully sent, Orbit posts a webhook embed to your configured Discord channel with the product image, ASIN, region, and account email.

---

## Tips

:::tip Fresh sessions = higher success rate
Run a **Session task** on your account group before running Invite tasks, or enable **Include session check** on the Invite task itself.
:::

:::tip Use Sticky Proxy
If your accounts were generated with the **Sticky Proxy** option, select **Sticky** mode in the invite task to reuse the same IP — this looks more natural to Amazon and reduces the risk of session invalidation.
:::
