---
id: overview
title: Identity Profiles
sidebar_position: 1
---

# Identity Profiles

The **Identity Profiles** page lets you create and manage reusable identity profiles — full sets of personal information (name, address, phone, birthdate, etc.) used by Orbit tasks that require real-looking data at checkout or registration.

Profiles are organised into **groups** and can be assigned to tasks that need identity data, such as [KingDultes Buy](/tasks/tasks-kingdultes), [Fnac Fill](/tasks/tasks-fnac), and [Amazon Generator](/tasks/amazon-generator) (when using the Profiles source type).

---

## What a Profile Contains

| Field | Description |
|-------|-------------|
| **First name** | First name |
| **Last name** | Last name |
| **Gender** | Male / Female — used to generate culturally correct names |
| **Birthdate** | Date of birth |
| **Phone** | Phone number |
| **Email** | Email address (optional — overridden by the task's email list if applicable) |
| **Password** | Password (optional — overridden by the task's password setting if applicable) |
| **Address** | Street address line 1 |
| **Address 2** | Street address line 2 (optional) |
| **City** | City |
| **ZIP code** | Postal code |
| **Country** | Country (default: France) |

---

## Profile Groups

Profiles are organised into groups (e.g. `FR Profiles — Batch 1`). Each group can hold any number of profiles.

### Creating a Group

1. Go to **Profiles** in the sidebar.
2. Click **+ New group**.
3. Enter a group name and confirm.

### Deleting a Group

Click the delete icon next to the group name. This deletes the group **and all profiles inside it**. This action is permanent.

---

## Creating Profiles

### Manual Entry

1. Select a group from the sidebar.
2. Click **+ Add profile**.
3. Fill in the form — name, address, phone, birthdate, etc.
4. Optionally enable **Random name** to have Orbit generate a French name automatically (picks from a curated name pool, culturally appropriate).
5. Optionally enable **Random phone** to auto-generate a phone number.
6. Click **Save**.

### Bulk Import

You can import multiple profiles at once by pasting a JSON array:

1. Select a group.
2. Click **Bulk import**.
3. Paste your JSON array (one object per profile).
4. Select the target group and click **Import**.

#### JSON Format

```json
[
  {
    "first_name": "Léa",
    "last_name": "Martin",
    "gender": "female",
    "birthdate": "1995-06-14",
    "phone": "0612345678",
    "email": "lea.martin@example.com",
    "address": "12 rue de la Paix",
    "city": "Paris",
    "zip_code": "75001",
    "country": "France"
  }
]
```

All fields except `first_name` or `last_name` are optional.

---

## Editing & Deleting Profiles

- Click the **pencil icon** on a profile row to edit it inline.
- Click the **×** button to delete a single profile.
- **Multi-select** by clicking and dragging across rows — a selected range is highlighted. Use **Delete selected** to remove multiple profiles at once.

---

## Using Profiles in Tasks

When creating an Amazon Generator, Fnac Gen, Nike Gen, Funko, or KingDultes task, choose **Profiles** as the email/identity source and select the profile group. Orbit assigns one profile per task in sequence.

---

## Jig (Address Variation)

Some tasks support **Jig** — a technique where Orbit applies small, undetectable variations to the address (e.g. adding `Apt. 1A` or a suite number) so each task's shipping address looks slightly different while still being deliverable. This helps avoid duplicate-address detection on platforms that flag it.

Three jig levels are available:
- **Easy** — minimal variation
- **Intermediate** — moderate variation
- **Hard** — maximum variation
