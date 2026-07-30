---
id: overview
title: Accounts Overview
sidebar_position: 1
---

# Accounts

The **Accounts** page is where all accounts created by Orbit are stored and managed, organised into groups.

---

## Account Information

Each account card shows:

| Field | Description |
|-------|-------------|
| **Email** | The email address used to register the account |
| **Password** | The generated or custom password |
| **Name** | First and last name used during registration |
| **Phone** | Phone number verified during registration |
| **Group** | The account group it belongs to |
| **Status** | Current account health (active, suspended, etc.) |
| **Sessions** | Number of saved browser sessions (cookies) |

---

## Account Statuses

| Status | Meaning |
|--------|---------|
| **Active** | Account is in good standing |
| **Suspended** | Account has been suspended by Amazon |
| **Unknown** | Status not yet checked |

---

## Account Groups

Accounts are organised into **groups** (e.g. `Amazon FR — Batch 1`), each tagged with a platform (Amazon, Fnac, etc.) and region (FR, UK, JP, BE). Groups are targeted as a whole when running Session, Invite, Win Check, or Buy tasks — the task dropdown filters groups by platform and region automatically.

Each group card shows:
- Total number of accounts
- Number of active sessions
- A duplicate-email warning if any account appears more than once in the group

---

## Suspension Scan

Orbit automatically scans all Amazon accounts in the background every few minutes to detect suspensions. When suspended accounts are detected, a **red banner** appears at the top of the Accounts page showing:

- How many accounts are suspended
- The email address and group of each one

### Banner Actions

| Button | Action |
|--------|--------|
| **Show accounts / Hide** | Toggle the list of suspended account emails |
| **Export** | Download the full list of suspended emails as a `.txt` file (one per line) |
| **Delete all** | Permanently delete all suspended accounts from all groups |
| **×** (per account) | Delete a single suspended account |
| **Ignore** | Remove the suspension flag without deleting the account (marks it as acknowledged) |
| **→** (arrow) | Navigate directly to that account in its group |

:::tip Export before deleting
Use **Export** to download the list before deleting, so you have a record of which accounts were suspended.
:::

---

## Search & Filter

At the top of the Accounts page:

- **Search by group name** — filters the group cards by name
- **Platform filter** — show only groups for a specific platform (Amazon, Fnac, etc.)
- **Search accounts across all groups** — search by email, name, or phone across every group. Results show the email, group, and status.

---

## Viewing Accounts in a Group

Click **View Accounts →** on a group card to open the full account list for that group. Each account row shows email, password (hidden by default — click the eye icon), name, phone, and session count.

Use the **Edit** (pencil) and **Delete** (×) buttons per row to modify or remove individual accounts.
