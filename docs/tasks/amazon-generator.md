---
id: amazon-generator
title: Amazon Account Generator
sidebar_position: 2
---

# Amazon Account Generator

The Amazon Generator is Orbit's primary task type. It automates the full Amazon account registration flow — from opening the signup page to verifying the phone number — and saves the resulting account into your chosen group.

---

## Prerequisites

Before running your first Generator task, make sure you have:

- ✅ An **email list** with available emails (see [Creating an Email List](/emails/creating-a-list))
- ✅ A **proxy group** with rotating residential proxies (see [Creating a Proxy Group](/proxies/creating-a-group))
- ✅ An **account group** to receive the new accounts (see [Creating an Account Group](/accounts/creating-a-group))
- ✅ A **CapGuru API key** configured in Settings (see [CapGuru Setup](/settings/capguru))
- ✅ An **SMS provider** (5sim or GetSMS) configured in Settings (see [SMS Settings](/settings/sms))

---

## Creating a Generator Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **Amazon Generator**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task (e.g. `Amazon FR — Batch 3`) |
| **Amazon marketplace** | The target Amazon site (e.g. `amazon.fr`, `amazon.de`) |
| **Email list** | The list of emails to use for registration |
| **Proxy group** | Which proxy group to route traffic through |
| **Account group (destination)** | Where to save successfully created accounts |
| **Number of accounts** | How many accounts to create before stopping |

4. Click **Create task**.
5. Click **▶ Start** to begin.

---

## What Happens Step by Step

Here is exactly what Orbit does for each account:

### 1. Pick an Email
Orbit pulls the next unused email from your selected email list. If the email has already been used, it skips to the next one.

### 2. Open Amazon Signup
Orbit launches a Chromium browser, applies the proxy, and navigates to `amazon.fr/ap/register` (or your chosen marketplace).

### 3. Fill in Registration Details
Orbit fills in:
- **First name** and **last name** — randomly generated, culturally appropriate for the marketplace locale
- **Email address** — from your email list
- **Password** — securely generated and saved

### 4. Submit the Form
Orbit clicks **Continue** and waits for the next step.

### 5. Verify Email (OTP)
Amazon sends a one-time code to the email address. Orbit:
1. Connects to the email inbox via IMAP (configured in Settings)
2. Waits for Amazon's email to arrive (up to 2 minutes)
3. Reads the OTP code from the email body
4. Enters the code on the Amazon verification page

### 6. Solve Arkose Captcha
Amazon's Arkose/FunCaptcha challenge appears. Orbit:
1. Waits up to **1 minute** for the challenge to fully load
2. Sends the page token to **CapGuru** for solving
3. If CapGuru returns a solution, it is injected into the page
4. If the challenge doesn't load within 1 minute, Orbit refreshes the page and tries again for another minute
5. If it still fails, the task retries with a new proxy

:::info
Arkose captchas are challenging and sometimes require multiple attempts. A ~70–85% success rate per attempt is normal. The retry logic is designed to maximise throughput.
:::

### 7. Add a Phone Number
Orbit requests a virtual phone number from your SMS provider (5sim or GetSMS) for the marketplace country. Amazon texts a verification code to this number. Orbit:
1. Requests a number
2. Enters it on the phone verification page
3. Polls for the incoming SMS (up to 3 minutes)
4. Enters the received code

:::tip
If SMS codes aren't arriving, check your 5sim / GetSMS balance and ensure your API key is correct in Settings.
:::

### 8. Save the Account
Once registration is complete, Orbit saves the account to your selected account group with:
- Email, password, name, phone
- Session cookies (for future sessions)
- Status: **Active**

---

## Task Status Messages

You'll see live log entries in the task card:

| Message | Meaning |
|---------|---------|
| `📧 Using email: ...` | Email picked from the list |
| `🌐 Opening Amazon registration...` | Browser launched |
| `📝 Filling in registration form...` | Name, email, password entered |
| `📨 Waiting for OTP...` | Checking inbox for email verification code |
| `🧩 Solving captcha...` | Arkose challenge sent to CapGuru |
| `📱 Requesting SMS number...` | Asking SMS provider for a phone number |
| `⏳ Waiting for SMS code...` | Polling for the verification text |
| `✅ Account created!` | Registration successful, account saved |
| `❌ Email already used` | This email already has an Amazon account |
| `❌ SMS timeout` | No SMS received within the timeout window |
| `❌ Captcha failed` | CapGuru couldn't solve the challenge |

---

## Handling "Email Already Used"

If Amazon says the email is already registered, Orbit:
1. Marks the task step as `❌ Email already used`
2. Shows a **🗑 Supprimer** button on the task card
3. Clicking it removes that email from your email list so it won't be tried again

---

## Tips for Higher Success Rates

- **Use rotating residential proxies** — datacenter IPs are almost always flagged
- **Use iCloud Hide My Email aliases** — they have very high inbox delivery rates
- **Keep CapGuru balance topped up** — failed solves waste time and proxies
- **Run 2–4 tasks in parallel** — enough for throughput without overwhelming your proxies
- **Use the correct marketplace country** — 5sim numbers must match the Amazon locale
- **Check IMAP settings** — OTP emails not arriving = wrong IMAP configuration

---

## Recommended Settings Summary

| Setting | Recommended Value |
|---------|-------------------|
| Proxies | Rotating residential |
| Email source | iCloud Hide My Email |
| Captcha solver | CapGuru |
| SMS provider | 5sim |
| Parallel tasks | 2–4 |
