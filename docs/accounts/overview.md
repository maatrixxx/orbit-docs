---
id: overview
title: Accounts Overview
sidebar_position: 1
---

# Accounts

The **Accounts** page is where all Amazon accounts created by Orbit are stored and managed.

---

## Account Information

Each account row shows:

| Field | Description |
|-------|-------------|
| **Email** | The email address used to register the account |
| **Password** | The generated password |
| **Name** | First and last name used during registration |
| **Phone** | Phone number verified during registration |
| **Group** | The account group it belongs to |
| **Status** | Current account health (active, banned, etc.) |
| **Cookies** | Session cookies — used to open browser sessions |
| **📌 PROXY** | Badge shown when a sticky proxy is attached to the account |

---

## Account Statuses

| Status | Meaning |
|--------|---------|
| **Active** | Account is in good standing |
| **Banned** | Account has been suspended by Amazon |
| **Unknown** | Status not yet checked |

---

## Account Groups

Accounts are organised into **groups** (e.g. `Amazon FR — Batch 1`), each tagged with a region (FR, UK, JP, or US). Groups are used when running Session, Invite, or Win Check tasks — you target an entire group at once, filtered to groups matching the task's region.

---

## Sticky Proxy

A **sticky proxy** is a proxy permanently attached to a specific account. It is used by invite, session, and win check tasks when set to **Sticky** mode — ensuring the account is always seen from the same IP address.

### Viewing a sticky proxy

Accounts with a sticky proxy show a **📌 PROXY** badge next to their email. Click the badge to see:
- The proxy host and port
- The username and password
- A **Remove proxy** button to detach the proxy

### Adding a sticky proxy manually

If an account does not have a sticky proxy attached (no badge), a small **+ proxy** button appears next to the email. Click it to open a form where you can enter the proxy details (host, port, username, password) and save it.

This is useful for accounts that were created before the sticky proxy feature was introduced, or when you want to manually assign a specific proxy to an account.

:::tip
The recommended way to attach sticky proxies to accounts is to enable **Stick proxy to account** during generation — Orbit then handles the assignment automatically for each new account. See the [Sticky Proxy Guide](/guide/sticky-proxy).
:::

---

## Wins Dashboard

Accounts track which invite-only products they have won. Click an account to see its win history — product, ASIN, and date.
