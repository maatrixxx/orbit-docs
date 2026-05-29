---
id: import-export
title: Importing & Exporting Accounts
sidebar_position: 4
---

# Importing & Exporting Accounts

Orbit lets you export accounts for backup or external use, and import accounts that were created outside Orbit.

---

## Exporting Accounts

1. Go to **Accounts** and open the group you want to export.
2. Click **Export**.
3. Choose a format:
   - **CSV** — spreadsheet-compatible, one account per row
   - **JSON** — full data including cookies

The exported file contains: email, password, name, phone, status, and cookies (if available).

---

## Importing Accounts

1. Go to **Accounts**.
2. Open or create the target group.
3. Click **Import**.
4. Upload a CSV or JSON file.

### CSV Format

```
email,password,first_name,last_name,phone
example@icloud.com,MyPass123,Jean,Dupont,+33612345678
```

All columns except `email` are optional. Missing fields will be left blank.

### JSON Format

```json
[
  {
    "email": "example@icloud.com",
    "password": "MyPass123",
    "first_name": "Jean",
    "last_name": "Dupont",
    "phone": "+33612345678",
    "cookies": []
  }
]
```

---

## Use Cases

| Use Case | Recommendation |
|----------|----------------|
| Backup before deleting | Export as JSON (preserves cookies) |
| Share account list | Export as CSV |
| Migrate from another tool | Import CSV or JSON |
| Restore from backup | Import JSON |
