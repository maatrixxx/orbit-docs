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

:::tip Use Gmail IMAP instead of iCloud IMAP
While iCloud IMAP works in Orbit, we **recommend connecting a Gmail account** instead. Here's why:

iCloud Hide My Email aliases all **forward to your main iCloud inbox** (or to any address you configure). If you set that forwarding address to a Gmail account, you can then connect that Gmail inbox via IMAP in Orbit — which is generally more stable and faster than iCloud's IMAP server.

**Recommended setup:**
1. In iCloud Settings → Hide My Email, set your forwarding address to a Gmail account you control.
2. In Orbit → Settings → IMAP, add that Gmail account with an application password.
3. When creating Amazon Gen tasks, select the Gmail IMAP account for OTP interception.

This way, all verification emails sent to any iCloud alias arrive in Gmail, and Orbit reads them instantly via Gmail IMAP.
:::

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

### Amazon Generator (OTP interception)

When creating an **Amazon Generator** task, select your IMAP account in the **Mailbox for OTP** section. Orbit will automatically catch codes for the email address used in that task.

If no IMAP account is selected, OTP codes must be entered **manually** when prompted.

### Amazon Checkout — Email Scan

IMAP accounts are also used in **Checkout Email Scan** tasks. Orbit scans your inbox for Amazon invite emails (FR or JP) and extracts winning accounts automatically — no browser needed.

You can select **multiple IMAP accounts** at once to scan all mailboxes in a single task and get a combined recap.
