---
id: philibert-fill
title: Philibert Fill Profile
sidebar_position: 31
---

# Philibert Fill Profile

The Philibert Fill task logs in to existing Philibert accounts and fills in the **delivery address and contact details** — a mandatory prerequisite before running a Buy task.

---

## Prerequisites

- A **Philibert account group** with accounts already created (via Philibert Gen or imported)
- A **profile group** — provides address data (street, city, postcode, phone)
- A **proxy group** (optional)

---

## Creating a Fill Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Philibert Fill**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Account group** | The Philibert accounts to fill |
| **Profile group** | Address and contact details to save |
| **Proxy** | Optional proxy group |

4. Launch with **Smart Start All**.

---

## How It Works

For each account, Orbit:

1. Logs in to the account at `/fr/connexion`.
2. Navigates to the address book (`/mon-compte/mes-adresses`).
3. Checks for an existing saved address — if already present, skips to avoid duplicates.
4. Fills: first name, last name, street, city, postcode, phone.
5. Saves and confirms.

---

## Task Status Labels

| Status | Meaning |
|--------|---------|
| **Profile filled** | Address saved successfully |
| **Already filled** | Account already has a saved address |
| **Login failed** | Invalid credentials or expired session |
| **Error** | Unexpected failure — check logs |

---

## Tips

:::tip Fill before drops
Run the Fill task at least a few hours before the drop so checkout only needs to select the saved address rather than enter it.
:::
