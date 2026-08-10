---
id: philibert-fill-profile
title: Philibert Fill Profile
sidebar_position: 10
---

# Philibert Fill Profile

The **Philibert Fill Profile** task logs into existing Philibert accounts and adds a **delivery address** — required before any purchase can be completed.

---

## Prerequisites

- A **Philibert account group** with existing accounts (created by Philibert Gen)
- A **profile group** (optional — random data is used if none selected)
- A **proxy group** (optional)

---

## Creating a Fill Profile Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Philibert Fill**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Account group** | The Philibert account group to pull accounts from |
| **Profile group** | Profiles to use for address and phone number (optional) |
| **Proxy group** | Proxy to route traffic through (optional) |
| **Number of accounts** | How many accounts to fill |

4. Click **Create tasks** — they appear in the task list.
5. Click **Start** to begin.

---

## What Happens Step by Step

### 1. Login
Orbit opens an invisible browser and logs into the Philibert account using the saved email and password.

### 2. Navigate to Profile Page
After login, Orbit navigates to the account's address/profile management page.

### 3. Open Address Form
Orbit clicks the button to add a new delivery address.

### 4. Fill Address Fields
The following fields are filled from the profile group (or generated randomly if none is set):

| Field | Source |
|-------|--------|
| First name | Profile `first_name` |
| Last name | Profile `last_name` |
| Street address | Profile `address` |
| Postal code | Profile `zip_code` |
| City | Profile `city` |
| Mobile phone | Profile `phone` |

### 5. Submit
Orbit submits the address form and confirms it was saved.

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `Logging in as email@...` | Starting login flow |
| `Logging in...` | Submitting credentials |
| `Navigating to profile page...` | Navigating to address management |
| `Opening address form...` | Clicking the add-address button |
| `Filling address form (Prénom Nom)...` | Filling in address fields |
| `Submitting form...` | Submitting the address |

---

## Notes

- If no profile group is selected, identity data (name, address, phone) is generated randomly using French locale data.
- A filled delivery address is required before running **Philibert Buy**.
- Each task processes one account. Set the count to match how many accounts you want to fill.
