---
id: dreamland-generator
title: Dreamland Generator
sidebar_position: 20
---

# Dreamland Generator

The Dreamland Generator creates verified accounts on **dreamland.be** and **dreamland.nl** — the Belgian and Dutch toy and game retailer. Dreamland regularly drops limited Pokémon, LEGO, and collectible items exclusively accessible to invited account holders.

---

## Supported Regions

| Region | Domain | Language |
|--------|--------|----------|
| NL | dreamland.nl | Dutch |
| BE | dreamland.be | Dutch / French |

---

## Prerequisites

- A **mail list** — one email address per account to create
- An **IMAP account** — to auto-confirm the registration email
- A **profile group** — provides first name, last name, date of birth, address
- A **proxy group** (recommended)

---

## Creating a Generator Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Dreamland Gen**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Region** | NL (dreamland.nl) or BE (dreamland.be) |
| **Mail list** | The email addresses to register |
| **IMAP account** | Used to capture the confirmation email and activate the account |
| **Profile group** | Provides identity data for the registration form |
| **Proxy group** | Recommended — residential proxies preferred |
| **Count** | Number of accounts to create (one task per account) |

4. Click **Create tasks** then **Start** or **Smart Start All**.

---

## How It Works

For each email in the list, Orbit:

1. Opens the Dreamland registration page (`/registreer`) in a hidden browser.
2. Fills the registration form: first name, last name, email, date of birth, password.
3. Submits the form and waits for the confirmation email.
4. Reads the activation link via IMAP and opens it to activate the account.
5. Confirms the account is active on `/mijn-account`.

---

## Task Status Labels

| Status | Meaning |
|--------|---------|
| **Account created** | Registration and email confirmation successful |
| **Already exists** | This email is already registered on Dreamland |
| **IMAP error** | Confirmation email not received within the timeout |
| **Error** | Registration failed — check proxy and profile data |

---

## Discord Notifications

When an account is successfully created, Orbit posts a webhook embed with the email, region, and profile used.

---

## Tips

:::tip Use residential proxies
Dreamland applies rate-limiting per IP. Use a residential proxy group and avoid running too many tasks simultaneously on a narrow proxy pool.
:::

:::tip Run Gen before drops
Create your Dreamland account pool well in advance. Only existing accounts can request invitations — you cannot create and invite in the same session.
:::
