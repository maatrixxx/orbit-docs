---
id: icloud-generator
title: iCloud Email Generator
sidebar_position: 3
---

# iCloud Email Generator

The iCloud Generator automatically creates **iCloud+ Hide My Email** aliases and saves them to an email list. These aliases are real, deliverable addresses that forward to your main iCloud inbox — perfect for Amazon registrations.

:::info
This feature requires an active **iCloud+** subscription (paid iCloud storage plan). Free iCloud accounts cannot generate Hide My Email aliases.
:::

---

## Prerequisites

Before running the iCloud generator:

1. Go to **Settings → iCloud Account** and connect your iCloud account by logging in through the browser window.
2. Ensure your iCloud account has an active iCloud+ plan.

---

## Creating an iCloud Generator Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **Email Generator → iCloud**.
3. Fill in:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task (e.g. `iCloud gen — main`) |
| **Email list** | The list where generated aliases will be saved |
| **Interval** | Time between alias creations (minimum 10 min, recommended **12 min**) |

4. Click **Create task** and then **▶ Start**.

---

## Apple Rate Limits

Apple enforces a limit of approximately **5 aliases per hour** per iCloud account. The recommended interval of 12 minutes ensures you stay within this limit.

Setting the interval too low may cause Apple to temporarily block alias generation for your account.

---

## How It Works

1. Orbit logs into your iCloud account using the saved session.
2. It navigates to the Hide My Email section and generates a new alias.
3. The alias is saved to your selected email list.
4. Orbit waits for the configured interval, then repeats.

The task runs continuously until you stop it manually or a maximum count is reached.
