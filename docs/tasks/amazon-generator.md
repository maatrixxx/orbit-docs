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

- An **email list** with available emails (see [Creating an Email List](/emails/creating-a-list))
- A **proxy group** with rotating residential proxies (see [Creating a Proxy Group](/proxies/creating-a-group))
- An **account group** to receive the new accounts (see [Creating an Account Group](/accounts/creating-a-group))
- A **CapGuru API key** configured in Settings (see [CapGuru Setup](/settings/capguru))
- An **SMS provider** configured in Settings (see [SMS Settings](/settings/sms))

---

## Supported Regions

| Region | Marketplace |
|--------|-------------|
| **FR** | amazon.fr |
| **UK** | amazon.co.uk |
| **JP** | amazon.co.jp |
| **US** | amazon.com |

---

## Creating a Generator Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Amazon Gen**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Region** | FR, UK, JP, or US |
| **Number of tasks** | How many accounts to create |
| **Proxy group** | Which proxy group to route traffic through |
| **Stick proxy to account** | See [Sticky Proxy](/guide/sticky-proxy) — attaches the assigned proxy permanently to each created account |
| **Profile group** | Profiles to use for names/addresses (or leave on "Random") |
| **Email list** | The list of emails to use for registration |
| **Mailbox for OTP** | IMAP account to read the email verification code from (optional) |
| **SMS country** | Must match the target marketplace (FR, UK, JP, or US) |
| **Account group** | Where to save successfully created accounts |

4. Click **Create tasks** — they appear in the list.
5. Click **Start** (or **Smart Start** to stagger launches).

---

## Sticky Proxy Option

When **Stick proxy to account** is checked, the proxy assigned to each gen task is saved permanently on the created account. All future tasks (invite, session, win check) can then use that same proxy by selecting **Sticky** mode — ensuring the account is always seen from the same IP.

See the full [Sticky Proxy Guide](/guide/sticky-proxy) for the recommended workflow.

---

## What Happens Step by Step

### 1. Pick an Email
Orbit pulls the next unused email from your selected email list.

### 2. Open Amazon Signup
Orbit launches a Chromium browser, applies the proxy, and navigates to the registration page for the chosen region (`amazon.fr`, `amazon.co.uk`, `amazon.co.jp`, or `amazon.com`).

### 3. Fill in Registration Details
Orbit fills in name, email, and password. For US accounts, the name and address are generated with American conventions.

### 4. Verify Email (OTP)
Amazon sends a one-time code to the email address. Orbit reads it automatically via IMAP and enters it on the page.

### 5. Solve Arkose Captcha
Amazon's Arkose/FunCaptcha challenge appears. Orbit sends it to **CapGuru** for solving. If it fails, the task retries with a new proxy.

:::info
Arkose captchas are challenging and sometimes require multiple attempts. A ~70–85% success rate per attempt is normal. US captchas tend to be stricter — good residential proxies matter more there.
:::

### 6. Add a Phone Number
Orbit requests a virtual number from Hero SMS for the correct country, waits for the verification SMS, and enters the code.

### 7. Detect Unusual Activity
If Amazon returns an "unusual activity" or "account creation failed" page after the captcha (common on US), Orbit automatically marks the proxy or email as flagged and retries with a new one.

### 8. Save the Account
Once registration is complete, Orbit saves the account with email, password, name, phone, and session cookies. If **Stick proxy to account** was enabled, the proxy is also saved at this point.

---

## Task Status Messages

| Message | Meaning |
|---------|---------|
| `Using email: ...` | Email picked from the list |
| `Opening Amazon registration...` | Browser launched |
| `Filling in registration form...` | Name, email, password entered |
| `Waiting for OTP...` | Checking inbox for email verification code |
| `Solving captcha...` | Arkose challenge sent to CapGuru |
| `Requesting SMS number...` | Asking SMS provider for a phone number |
| `Waiting for SMS code...` | Polling for the verification text |
| `Account created!` | Registration successful, account saved |
| `Email already used` | This email already has an Amazon account |
| `SMS timeout` | No SMS received within the timeout window |
| `Captcha failed` | CapGuru couldn't solve the challenge |
| `Unusual activity detected` | Amazon blocked registration — proxy/email flagged, retrying |

---

## Handling "Email Already Used"

If Amazon says the email is already registered, Orbit marks the task, shows a **Delete** button to remove that email from your list, and stops.

---

## Tips for Higher Success Rates

- **Use rotating residential proxies** — datacenter IPs are almost always flagged
- **Use iCloud Hide My Email aliases** — very high inbox delivery rates
- **Keep CapGuru balance topped up** — failed solves waste time and proxies
- **Run 2–4 tasks in parallel** — enough for throughput without overwhelming proxies
- **Use the correct SMS country** — phone numbers must match the Amazon marketplace
- **For US**: use strong residential proxies — Amazon US has stricter bot detection

---

## Recommended Settings Summary

| Setting | Recommended Value |
|---------|-------------------|
| Proxies | Rotating residential |
| Email source | iCloud Hide My Email |
| Captcha solver | CapGuru |
| SMS provider | Hero-SMS |
| Parallel tasks | 2–4 |
