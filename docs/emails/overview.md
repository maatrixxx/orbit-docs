---
id: overview
title: Emails Overview
sidebar_position: 1
---

# Emails

The **Emails** section is where you manage the email addresses Orbit uses to register Amazon accounts.

Emails are organised into **lists** (also called groups). Each list contains a set of email addresses that tasks can consume one by one during generation runs.

---

## How Emails Are Used

When you create an Amazon Generator task with the **Email list** source, Orbit picks one email from your selected list per task. After the account is successfully created, the email can optionally be **removed from the list automatically** (enable the "Delete email after creation" toggle).

If an email address is already associated with an existing Amazon account, Orbit detects this and marks the task as **❌ Email already used**, with a button to delete it from the list.

---

## Email Sources

| Source | Description |
|--------|-------------|
| **Email List** | A manually imported list of email addresses |
| **Detailed Profiles** | Full profiles with name + address — email is taken from the profile |
| **iCloud Generator** | Generates fresh iCloud+ aliases automatically |

---

## Best Practices

- Use **catchall domains** (e.g. `@yourdomain.com`) or **iCloud aliases** for best deliverability.
- Remove used emails regularly to avoid wasting tasks on already-registered addresses.
- Keep lists in separate groups by campaign or date for easy management.
