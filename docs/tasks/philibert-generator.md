---
id: philibert-generator
title: Philibert Account Generator
sidebar_position: 9
---

# Philibert Account Generator

The **Philibert Generator** creates accounts on **philibert.com** automatically. It handles the full registration flow: form filling, password setup, and confirmation — all without any manual steps.

---

## Prerequisites

- A **Philibert account group** to save the created accounts
- A **profile group** (optional — random French identity data is used if none selected)
- A **proxy group** (optional)

:::info No captcha or IMAP required
Philibert's registration page currently has no captcha and no email verification step. The account is created instantly after form submission.
:::

---

## Creating a Generator Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Philibert Gen**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Account group** | Where to save successfully created accounts |
| **Profile group** | Source of identity data (name, birthdate). Optional — random French data is used if not set |
| **Proxy group** | Proxy to route traffic through (optional) |
| **Number of tasks** | How many accounts to create |

4. Click **Create tasks** — they appear in the task list.
5. Click **Start** to begin.

---

## What Happens Step by Step

### 1. Load Registration Page
Orbit opens an invisible Electron browser session and navigates to the Philibert registration page.

### 2. Fill Registration Form
The following fields are filled automatically:

| Field | Source |
|-------|--------|
| First name | Profile `firstname` or random French name |
| Last name | Profile `lastname` or random French name |
| Email | Generated automatically |
| Password | Randomly generated secure password |
| Date of birth | Profile `birthdate` (YYYY-MM-DD) or random |

### 3. Submit
Orbit submits the registration form.

### 4. Confirm Success
After submission, Orbit waits for the redirect to `/mon-compte` to confirm the account was created.

### 5. Save Account
Email, password, name, and birthdate are saved to the chosen Philibert account group.

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `Loading registration page...` | Browser opened, navigating to signup |
| `Filling form...` | Filling in identity fields |
| `Form filled (Prénom Nom) — submitting...` | Form complete, submitting |
| `Waiting for confirmation...` | Waiting for post-submit redirect |
| `Account created! Saving...` | Account confirmed and being saved |

---

## Notes

- Philibert accounts **do not require email verification** at creation. They are immediately usable.
- To complete a purchase, you'll need to also run **Philibert Fill** (to add a delivery address) before running **Philibert Buy**.
- Use a profile group for consistent identity data, especially if you plan to fill addresses later with the same profiles.
