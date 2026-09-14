---
id: dreamland-invite
title: Dreamland Invite
sidebar_position: 21
---

# Dreamland Invite

The Dreamland Invite task automates submitting invite requests for **limited-access products** on dreamland.be, dreamland.nl, and the French-language storefront (`/fr/`). Items gated by invitation (Pokémon, exclusive LEGO sets, Funko exclusives) require an approved invite before you can purchase.

---

## Supported Regions

| Region | Domain / Path | Language |
|--------|---------------|----------|
| NL | dreamland.nl | Dutch |
| BE | dreamland.be/nl | Dutch |
| FR | dreamland.be/fr | French |

---

## Prerequisites

- A **Dreamland account group** — accounts already created via the Dreamland Gen task
- A **profile group** — provides address data for the invite form (first name, last name, zip, city, address)
- A **proxy group** (optional, but recommended for large runs)
- **Items configured** in the admin panel at `orbit-admin-iota.vercel.app` → Dreamland tab, or entered manually

---

## Configuring Items in the Admin Panel

Before creating invite tasks, add the target products:

1. Open **orbit-admin-iota.vercel.app** and go to the **Dreamland** tab.
2. Click **+ Add** and provide:
   - **Name** — display name for the item (e.g. "Pikachu ex Box NL")
   - **Product URL** — full URL including `/nl/` or `/fr/` path segment; Orbit uses this to auto-detect the region
   - **Image URL** — optional thumbnail
3. Save. Items appear in the task creation form, grouped by language tab (NL / FR).

---

## Creating an Invite Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Dreamland Invite**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Items** | Select one or more products from the NL or FR catalog tab, or paste URLs manually |
| **Account group** | Dreamland accounts that will submit invite requests |
| **Profile group** | Address details filled in the invite form |
| **Region** | NL or BE (controls which domain is used) |
| **Proxy** | No proxy, proxy group, or disabled |
| **Count** | Number of tasks — one task per account |

4. Click **Create tasks** then **Start** or **Smart Start All**.

---

## How It Works

For each account and each selected item, Orbit:

1. Logs in to the Dreamland account.
2. Navigates to the product's invite page (`/uitnodigingen/aanvragen`).
3. Fills the invite form: name, address, postcode, city.
4. Submits the request and reads the confirmation.

Each account uses the **same profile** across all its invite requests — the profile is selected deterministically based on the account email so results are consistent if the task is re-run.

---

## Task Status Labels

| Status | Meaning |
|--------|---------|
| **Invite sent** | Request submitted successfully |
| **Already requested** | This account already submitted for this product |
| **Login failed** | Account credentials or session invalid |
| **Error** | Unexpected failure — check logs for details |

---

## Discord Notifications

When an invite is successfully submitted, Orbit posts a webhook embed with the product name, region, and account email.

---

## Tips

:::tip Profile consistency
Orbit assigns the same profile to the same email address across multiple runs. You don't need to worry about the same account submitting different addresses each time.
:::

:::tip Use Relay mode
Invite tasks are lightweight (no real browser). Use **Relay mode** with a 1–3 s delay to launch hundreds of tasks in sequence without overloading Dreamland's servers.
:::

:::tip Regional items
Items added via the admin panel are auto-detected as NL or FR from their URL (`/nl/` path → NL, `/fr/` path → FR). Make sure your product URLs are correct — an NL URL will not appear in the FR tab and vice versa.
:::
