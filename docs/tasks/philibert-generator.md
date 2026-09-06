---
id: philibert-generator
title: Philibert Generator
sidebar_position: 30
---

# Philibert Generator

The Philibert Generator creates accounts on **philibertnet.com**, the leading French board game retailer. Philibert drops limited-edition and pre-order products that sell out within seconds. Having multiple accounts ready before a drop maximises your chances.

---

## Prerequisites

- A **mail list** — one email per account
- An **IMAP account** — for email confirmation
- A **profile group** — provides first name, last name, date of birth, address
- A **proxy group** (recommended — residential proxies preferred)

:::info Password
Orbit auto-generates a secure password for each account and stores it in the account group.
:::

---

## Creating a Generator Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Philibert Gen**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Mail list** | Emails to register — one account per email |
| **Account group** | Where the created accounts will be stored |
| **IMAP account** | Reads the confirmation email to activate the account |
| **Profile group** | Identity data for the registration form |
| **Proxy group** | Recommended for anti-detection |

4. Click **Create tasks** and launch with **Smart Start All**.

---

## How It Works

For each email, Orbit:

1. Opens the Philibert registration page (`/fr/creation-compte`) in a hidden browser.
2. Fills: email, first name, last name, date of birth, password.
3. Submits and waits for the confirmation email via IMAP.
4. Clicks the activation link to confirm the account.
5. Verifies login succeeds on `/mon-compte`.

---

## Task Status Labels

| Status | Meaning |
|--------|---------|
| **Account created** | Registration and email activation successful |
| **Already exists** | Email already registered on Philibert |
| **IMAP error** | Confirmation email not received in time |
| **Error** | Registration failed — check proxy or profile data |

---

## Tips

:::tip Run well ahead of drops
Philibert detects mass account creation near a drop. Create your pool at least a few days in advance.
:::

:::tip Residential proxies
Philibert applies fingerprinting and rate-limiting. Use rotating residential proxies, keep concurrency low (3–5 tasks), and run tasks with Smart Start All.
:::
