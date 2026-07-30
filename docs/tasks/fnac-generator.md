---
id: fnac-generator
title: Fnac Account Generator
sidebar_position: 6
---

# Fnac Account Generator

The Fnac Generator creates Fnac member accounts automatically on **secure.fnac.com**. It handles the full registration flow: email submission, captcha solving, OTP verification, and password setup — all without any manual steps.

---

## Prerequisites

Before running your first Fnac Gen task, make sure you have:

- An **email list** or **profile group** with available emails
- A **CapSolver API key** configured in Settings (for hCaptcha / reCAPTCHA solving)
- An **IMAP account** configured in Settings (for OTP email verification)
- A **Fnac account group** to receive the created accounts
- A **proxy group** (recommended but optional)

---

## Creating a Generator Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Fnac Gen**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Email source** | Choose **Profiles** (uses profile group emails) or **Email list** |
| **Profile group / Email list** | The source of emails and identity data |
| **Proxy group** | Proxy to route traffic through (optional) |
| **Account group** | Where to save successfully created accounts |
| **Number of tasks** | How many accounts to create |
| **Delete email after creation** | Removes the email from the list once the account is created (only shown when using an email list) |

4. Click **Create tasks** — they appear in the task list.
5. Click **Start** to begin.

---

## What Happens Step by Step

### 1. Pick an Email
Orbit pulls the next available email from the selected profile group or email list.

### 2. Open Fnac Registration
Orbit opens a dedicated Electron browser session with a fresh, isolated cookie store and navigates to the Fnac registration page.

### 3. Fill Registration Form
Name, email, gender, and password are filled in automatically. Identity data comes from the profile group or is generated via Faker if no profile is available.

### 4. Solve Captcha (if present)
If hCaptcha or reCAPTCHA appears during registration, Orbit sends it to **CapSolver** for automated solving.

### 5. Verify Email (OTP)
Fnac sends a one-time code to the email address. Orbit reads it automatically via IMAP and enters it on the page.

### 6. Complete OAuth Flow
After registration, Fnac initiates a ForgeRock/OpenAM OAuth redirect. Orbit handles the full OAuth flow and lands on the authenticated account page.

### 7. Save the Account
The account (email, password, name) is saved to the chosen account group.

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `Chargement Fnac...` | Browser session opened, navigating to Fnac |
| `Remplissage formulaire...` | Registration form being filled |
| `Résolution captcha...` | Sending captcha to CapSolver |
| `Attente OTP IMAP...` | Waiting for verification email |
| `OTP reçu (123456)` | Code received and entered |
| `OAuth via SPA...` | Completing the ForgeRock login redirect |
| `Compte créé ✓` | Account successfully created and saved |

---

## Tips

- **CapSolver** is required if captcha appears — keep your balance topped up.
- Use **rotating residential proxies** for better success rates.
- The **delete email after creation** toggle is useful for email lists to avoid reusing the same address.
- Use **profile groups** when you want consistent real-looking identity data (name, gender) paired with emails.
