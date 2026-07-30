---
id: fnac-fill-profile
title: Fnac Fill Profile
sidebar_position: 7
---

# Fnac Fill Profile

The **Fnac Fill Profile** task logs into existing Fnac accounts and fills in the **address book** (carnet d'adresses) — adding a delivery address with name, phone number, and full postal address.

---

## Prerequisites

- A **Fnac account group** with existing accounts (created by Fnac Gen)
- An **IMAP account** configured in Settings (for OTP if Fnac requests it during login)
- A **profile group** (optional — random data is used if none selected)
- A **proxy group** (optional)

---

## Creating a Fill Profile Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Fnac Fill Profile**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Account group** | The Fnac account group to pull accounts from |
| **Profile group** | Profiles to use for addresses and phone numbers (optional) |
| **Proxy group** | Proxy to route traffic through (optional) |
| **IMAP** | IMAP account for OTP if Fnac requests login verification |
| **Number of accounts** | How many accounts to fill |

4. Click **Start fill tasks**.

---

## What Happens Step by Step

### 1. Login
Orbit authenticates the account through Fnac's ForgeRock/OpenAM OAuth system:
- Submits email via Fnac's JSON auth API
- Completes password and OTP steps in the browser renderer (required for session cookies)
- Handles captcha via CapSolver if it appears
- Resolves the full OAuth flow and lands on `secure.fnac.com`

### 2. Navigate to Address Book
After login, Orbit navigates to `secure.fnac.com/account/personalinfos/address-book`.

### 3. Open "Add Address" Popup
Orbit clicks the "Ajouter une adresse de livraison" button to open the address form.

### 4. Fill in Address Fields
The following fields are filled from the profile group (or generated randomly if none is set):

| Field | Source |
|-------|--------|
| Civility (M. / Mme) | Profile gender |
| Last name | Profile `last_name` |
| First name | Profile `first_name` |
| Street address | Profile `address` |
| Postal code | Profile `zip_code` |
| City | Profile `city` |
| Mobile phone | Profile `phone` |

### 5. Submit
Orbit clicks "Ajouter cette adresse" to save the delivery address.

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `Connexion email@...` | Starting login flow for the account |
| `Login: step 1...` | Initiating ForgeRock auth session |
| `Login: email...` | Submitting email to Fnac auth |
| `Login: auth step N...` | Progressing through auth steps |
| `Login: OTP IMAP...` | Waiting for OTP email |
| `Login: OAuth via SPA...` | Completing the OAuth redirect |
| `Fill: carnet d'adresses...` | Navigated to address book |
| `Fill: ouverture popup adresse...` | Clicking the Add Address button |
| `Fill: validation adresse...` | Submitting the address form |
| `Adresse ajoutée ✓` | Address saved successfully |

---

## Notes

- If no profile group is selected, identity data (name, address, phone) is generated randomly using Faker.
- IMAP is optional — if Fnac doesn't request an OTP during login, it won't be used.
- Each task processes one account. Set the count to match how many accounts you want to fill.
