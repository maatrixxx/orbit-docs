---
id: import-export
title: Importing & Exporting Accounts
sidebar_position: 4
---

# Importing & Exporting Accounts

Orbit lets you export accounts for backup or transfer, and import accounts — with or without their active sessions.

---

## Exporting Accounts

1. Go to **Accounts** and open the group you want to export.
2. Click **Export**:
   - **CSV** — spreadsheet-compatible, one account per row (email + password only)
   - **JSON + Sessions** — full export including **session cookies**, so accounts stay logged in after import

:::tip
Use **JSON + Sessions** when moving accounts between machines or sharing with a team member. Imported accounts will have their sessions ready — no need to reconnect.
:::

---

## Importing Accounts

1. Go to **Accounts**.
2. Open or create the target group.
3. In the **Add accounts** section, select the **JSON** tab.
4. Click **Choose file** and select your `.json` file.
5. Click **Import JSON**.

Orbit imports all accounts from the file. If session cookies are included, they are restored automatically — the accounts will show as **active** without needing a new login.

---

### JSON Format

The expected format is an array of account objects:

```json
[
  {
    "email": "example@icloud.com",
    "password": "MyPass123",
    "cookies": [
      { "name": "session-id", "value": "...", "domain": ".amazon.fr" }
    ]
  }
]
```

The `cookies` field is optional. If omitted or empty, the account is imported without a session.

---

### CSV Format

```
email,password
example@icloud.com,MyPass123
```

CSV import does not support sessions. Use JSON + Sessions for full transfers.

---

## Use Cases

| Use Case | Recommendation |
|----------|----------------|
| Transfer accounts with active sessions | Export / Import as **JSON + Sessions** |
| Backup before deleting a group | Export as **JSON + Sessions** |
| Share account list (no sessions) | Export as **CSV** |
| Add accounts manually or from another tool | Import **CSV** |
