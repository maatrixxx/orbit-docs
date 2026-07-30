---
id: amazon-generator
title: Amazon Account Generator
sidebar_position: 2
---

# Amazon Account Generator

The Amazon Generator is Orbit's primary task type. It automates the full Amazon account registration flow — from opening the signup page to verifying email and phone number — and saves the resulting account into your chosen group.

---

## Supported Regions

| Region | Marketplace |
|--------|-------------|
| **FR** | amazon.fr |
| **UK** | amazon.co.uk |
| **JP** | amazon.co.jp |
| **BE** | amazon.com.be |

---

## Prerequisites

Before running your first Generator task, make sure you have:

- An **email list** or **profile group** with available entries (see [Creating an Email List](/emails/creating-a-list) or [Identity Profiles](/profiles/overview))
- A **proxy group** with rotating residential proxies (see [Creating a Proxy Group](/proxies/creating-a-group))
- An **account group** tagged for the target region (see [Creating an Account Group](/accounts/creating-a-group))
- A **CapGuru API key** in Settings if you want automatic captcha solving (see [CapGuru Setup](/settings/capguru))
- An **SMS provider** in Settings if you want automatic phone verification (see [SMS Settings](/settings/sms))

---

## Creating a Generator Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Amazon Generator** (under the Amazon category).
3. Fill in the form (see sections below).
4. Click **Create task**.
5. Click **Start** to begin.

---

## Form Fields

### Email Source

Choose how Orbit fills in the name and email for each account:

| Option | Description |
|--------|-------------|
| **Email list** | Picks one email at a time from your selected mail list. Name is randomly generated. |
| **Profiles** | Uses a full identity profile (name, address, phone, etc.) from a profile group — ideal for consistent identities across tasks. See [Identity Profiles](/profiles/overview). |
| **None** | No email pre-loaded — for special flows where the email comes from another source. |

### IMAP / OTP

| Option | Description |
|--------|-------------|
| **With IMAP** | Orbit automatically reads the Amazon OTP email from your inbox via IMAP. Select which IMAP account to use. |
| **Manual** | You enter the OTP code yourself when prompted. The browser window stays open waiting for your input. |

### Proxies

| Option | Description |
|--------|-------------|
| **With proxy** | Route traffic through the selected proxy group. Strongly recommended. |
| **No proxy** | No proxy used (not recommended for large runs). |

**Stick proxy to account** — when enabled, the proxy assigned to each task is permanently attached to the resulting account and reused automatically for all subsequent Invite, Session, and Win Check tasks on that account. Useful when accounts need a consistent IP identity.

### Region

Select the Amazon marketplace: **FR**, **UK**, **JP**, or **BE**.

The account group dropdown filters automatically to show only groups tagged for the selected region.

### Account Group (destination)

Required. The account group where successfully created accounts will be saved.

### Password

| Option | Description |
|--------|-------------|
| **Random** | A unique secure password is generated per account. |
| **Custom** | All accounts in this batch use the same password you specify (minimum 6 characters). |

### Delete Email After Creation

When using an email list source, enabling this toggle removes the email from the list as soon as the account is created — preventing it from being used again in a future run.

---

## Captcha & SMS Actions

These settings control what Orbit does when it hits a captcha or phone verification step.

### On Captcha Detected

| Option | Description |
|--------|-------------|
| **Solve** | Attempt to solve automatically. Sub-options: **Manual** (you solve in the open browser window) or **CapGuru** (automatic API solving). |
| **Stop** | Stop the task immediately when a captcha appears. **Smart Start All** will requeue it so it retries later. |
| **Rotate proxy** | Stop the current attempt and restart on a fresh proxy IP (up to 3 retries). |

### On SMS Step Detected

| Option | Description |
|--------|-------------|
| **Solve** | Request a virtual number from your SMS provider and enter the code automatically. Configure country and max price per number. |
| **Stop** | Stop the task immediately when the phone verification page appears. Task shows status **Stopped — SMS detected**. |
| **Rotate proxy** | Restart on a new proxy IP (up to 3 retries) — useful if you want to try to skip the SMS step by landing on a cleaner session. |

:::tip Stop + Smart Start
"Stop" on captcha or SMS pairs perfectly with **Smart Start All**: stopped tasks are requeued and relaunched automatically, so you don't need to restart them manually.
:::

---

## What Happens Step by Step

### 1. Pick an Email / Profile
Orbit pulls the next unused email from your list, or the next profile from your profile group. Emails already linked to an Amazon account are automatically skipped.

### 2. Open Amazon Signup
Orbit launches a Chromium browser, applies the proxy, and navigates to the registration page for your chosen region.

### 3. Fill in Registration Details
Orbit fills in:
- **First name** and **last name** — randomly generated (culturally appropriate for the locale) or from the profile
- **Email address** — from your email list or profile
- **Password** — randomly generated or your custom password

### 4. Submit the Form
Orbit clicks **Continue** and waits for the next step.

### 5. Verify Email (OTP)
Amazon sends a one-time code to the email address. Orbit:
1. Connects to the email inbox via IMAP (if configured)
2. Waits for Amazon's email to arrive (up to 2 minutes)
3. Reads the OTP code from the email body
4. Enters the code on the Amazon verification page

If no IMAP is configured, the browser window pauses waiting for you to enter the code manually.

### 6. Solve Arkose Captcha
Amazon's Arkose/FunCaptcha challenge may appear. Orbit:
1. Waits up to **1 minute** for the challenge to fully load
2. Sends the page token to **CapGuru** for solving (if enabled)
3. If CapGuru returns a solution, it is injected into the page and the flow continues
4. If the challenge doesn't load within 1 minute, Orbit refreshes and waits another minute
5. If it still fails, behaviour follows your **captcha action** setting

:::info
Arkose captchas are challenging. A ~70–85% success rate per attempt is normal.
:::

### 7. Add a Phone Number
Amazon requires phone verification. Orbit:
1. Requests a virtual number from your SMS provider for the target country
2. Enters it on the phone verification page
3. Polls for the incoming SMS code (up to 3 minutes)
4. Enters the received code

Behaviour when this step is reached depends on your **SMS action** setting.

### 8. Save the Account
Once registration is complete, Orbit saves the account with:
- Email, password, first name, last name, phone number
- Session cookies (for future sessions)
- Status: **Active**

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
| `Stopped — SMS detected` | SMS action was set to "Stop" |
| `Stopped — captcha detected` | Captcha action was set to "Stop" |

---

## Handling "Email Already Used"

If Amazon says the email is already registered, the task step shows `Email already used`. A **Delete** button appears on the task card — click it to remove that email from your list so it won't be tried again.

---

## Large Batches & Virtual Queues

When creating more than ~50 tasks, Orbit creates a **virtual queue** (batch). Instead of spawning hundreds of browser windows at once, **Smart Start All** pulls tasks from the queue one by one as previous tasks complete — keeping concurrency controlled. See [Smart Start & Relay](/tasks/overview#smart-start--relay) for details.

---

## Tips for Higher Success Rates

- **Use rotating residential proxies** — datacenter IPs are almost always flagged
- **Use iCloud Hide My Email aliases** — they have very high inbox delivery rates
- **Keep CapGuru balance topped up** — failed solves waste time and proxies
- **Run 2–4 tasks in parallel** — enough for throughput without overwhelming your proxies
- **Use the correct marketplace country for SMS** — phone numbers must match the Amazon locale
- **Check IMAP settings** — OTP emails not arriving = wrong IMAP configuration

---

## Recommended Settings

| Setting | Recommended Value |
|---------|-------------------|
| Proxies | Rotating residential |
| Email source | iCloud Hide My Email |
| Captcha action | Solve (CapGuru) |
| SMS action | Solve (Hero-SMS, France +33) |
| Max SMS price | €0.50 |
| Parallel tasks | 2–4 |
