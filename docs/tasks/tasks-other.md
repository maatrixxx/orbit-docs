---
id: tasks-other
title: Nike & Funko Tasks
sidebar_position: 8
---

# Nike & Funko Tasks

Orbit includes task types for **Nike** account creation and **Funko** pop releases.

---

## Nike Gen — Account Generator

Creates Nike accounts (nike.com/fr) from an email list or profile group.

### Prerequisites

- An **email list** or **profile group**
- An **IMAP account** for email verification (required)
- An **account group** (destination)
- A **proxy group** (optional)
- An **SMS provider** (optional — enable if Nike requests phone verification)

### Creating a Nike Gen Task

1. Go to **Tasks → + Create → Nike Gen**.
2. Choose source: **Email list** or **Profile group**.
3. Select your **IMAP account** for OTP interception.
4. Select a **destination account group**.
5. Optionally enable **SMS** and configure country + max price.
6. Set the number of tasks and click **Create**.

### What It Does

Orbit navigates to the Nike FR registration page, fills in the identity, handles email OTP verification via IMAP, and optionally handles phone verification via your SMS provider. Created accounts are saved to your chosen group.

---

## Funko Pop — Task

Automates purchasing limited Funko Pop releases.

### Prerequisites

- An **email list** or **profile group**
- An **IMAP account** for any verification
- An **account group** (destination)
- A **proxy group** (optional)

### Creating a Funko Task

1. Go to **Tasks → + Create → Funko**.
2. Choose source: **Email list** or **Profile group**.
3. Select your **IMAP account**.
4. Select a **destination account group**.
5. Set the number of tasks and click **Create**.

---

:::info Availability
Nike Gen and Funko tasks run on browser automation (Chromium). Make sure Playwright/Chromium is installed before running — Orbit installs it automatically on first launch.
:::
