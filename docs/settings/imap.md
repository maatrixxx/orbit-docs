---
id: imap
title: IMAP Accounts
sidebar_position: 4
---

# IMAP Accounts

The **IMAP Accounts** tab lets you connect your email inbox to Orbit so it can automatically read and extract OTP (One-Time Password) and 2FA verification codes sent during Amazon account registration.

When Amazon sends a code to your email, Orbit intercepts it in real-time and feeds it into the registration flow — **without any manual action from you**.

:::info Basics
Think of IMAP as Orbit having read-only access to your inbox, watching for specific emails in real-time. It never sends or deletes emails.
:::

---

## Supported Providers

| Provider | Notes |
|----------|-------|
| **Gmail** | Requires an **application password** (standard Google account password will not work) |
| **iCloud Mail** | Requires an Apple app-specific password |
| **Outlook / Hotmail** | Standard Microsoft account password (or app password if 2FA enabled) |
| **Custom** | Any IMAP server — enter host and port manually |

---

## Setting Up an IMAP Account

### 1. Click "Add an IMAP Account"

A new account card will appear. Give it a descriptive name (e.g. *Gmail perso* or *Outlook catchall*).

### 2. Choose Your Provider

Select your email provider from the dropdown. The placeholder in the email field will update to reflect the expected format.

### 3. Enter Your Email Address

Type the full email address associated with the inbox you want Orbit to monitor.

### 4. Enter Your Application Password

This is **not** your regular email login password. Application passwords are special passwords generated specifically for third-party app access.

**Gmail — How to generate an application password:**
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) and sign in.
2. Under "App name", type anything (e.g. *Orbit*).
3. Click **Create** and copy the generated 16-character password.
4. Paste it into Orbit.

:::caution Gmail 2FA Required
Google application passwords require that **2-Step Verification** is enabled on your Google account. If it is not enabled, you will not see the App Passwords option.
:::

**iCloud — How to generate an application password:**
1. Go to [appleid.apple.com](https://appleid.apple.com) and sign in.
2. Under "Sign-In and Security", select "App-Specific Passwords".
3. Generate a new password, copy it, and paste it into Orbit.

**Outlook / Hotmail:**
You can use your regular Microsoft account password if your account does not have two-factor authentication enforced. If it does, generate an app password from your Microsoft account security settings.

### 5. Test the Connection

Click **Test connection** to verify Orbit can reach your inbox before saving.

### 6. Save

Click **Save**. A green dot next to the account name confirms the connection is active.

---

## Custom IMAP

When your provider isn't a built-in option, pick **Custom** and enter the full server settings inline:

```
ssl://imap.example.com:993
```

| Field | Example |
|-------|---------|
| Host | `imap.gmail.com` |
| Port | `993` (SSL) or `143` (STARTTLS) |

---

## Using IMAP in Tasks

When creating an **Amazon Generator** task, select your IMAP account in the **Mailbox for OTP** section. Orbit will automatically catch codes for the email address used in that task.

If no IMAP account is selected, OTP codes must be entered **manually** when prompted.
