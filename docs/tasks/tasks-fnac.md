---
id: tasks-fnac
title: Fnac Tasks
sidebar_position: 7
---

# Fnac Tasks

Orbit includes three distinct task types for Fnac (fnac.com): **Fnac Gen**, **Fnac Fill**, and **Fnac Buy**. Together they cover the full workflow from account creation to purchase.

---

## Fnac Gen — Account Generator

Creates Fnac accounts automatically from an email list or profile group.

### Prerequisites

- An **email list** or **profile group**
- An **account group** (destination for created accounts)
- A **proxy group** (optional)

### Creating a Fnac Gen Task

1. Go to **Tasks → + Create → Fnac Gen**.
2. Configure the source:
   - **Email list** — uses random names with the email from your list
   - **Profile group** — uses a full identity from your profile group
3. Select a **destination account group**.
4. Optionally assign a **proxy group**.
5. Set the number of tasks and click **Create**.

---

## Fnac Fill — Profile Filler

Fills in saved shipping/billing information on existing Fnac accounts — name, address, phone, etc. — using identity profiles. Run this after generating accounts to prepare them for checkout.

### Prerequisites

- A **Fnac account group** (accounts already created)
- A **profile group** (identities to fill in)
- An **IMAP account** (for any OTP/2FA challenges during login)
- A **proxy group** (optional)

### Creating a Fnac Fill Task

1. Go to **Tasks → + Create → Fnac Fill**.
2. Select the **account group** to fill.
3. Select the **profile group** to pull identities from.
4. Select an **IMAP account** for any login verification codes.
5. Set the number of tasks and click **Create**.

---

## Fnac Buy — Purchase Task

Automates purchasing a product on Fnac with existing logged-in accounts.

### Prerequisites

- A **Fnac account group** with filled profiles (run Fnac Fill first)
- A **product URL** from fnac.com
- An **IMAP account** for any OTP/2FA during checkout
- A **proxy group** (optional)

### Creating a Fnac Buy Task

1. Go to **Tasks → + Create → Fnac Buy**.
2. Enter the **product URL**.
3. Select the **account group** to use.
4. Select an **IMAP account**.
5. Optionally assign a **proxy group**.
6. Set the number of tasks and click **Create**.

### Captcha (DataDome)

Fnac uses DataDome for bot protection. Orbit integrates with **CapSolver** to bypass DataDome challenges automatically during Fnac Buy tasks. Make sure your CapSolver key is configured in **Settings → API Keys**.

---

## Recommended Workflow

```
Email List ──▶  Fnac Gen  ──▶  Fnac Account Group
                                      │
                                      ▼
Profile Group ──▶  Fnac Fill  (adds shipping info)
                                      │
                                      ▼
                              Fnac Buy  (checkout)
```

1. Generate accounts with **Fnac Gen**
2. Fill profiles with **Fnac Fill**
3. Run **Fnac Buy** on drop day
