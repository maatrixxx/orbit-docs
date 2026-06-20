---
id: first-tasks
title: Step 4 — Creating Your First Tasks
sidebar_position: 5
---

# Step 4 — Creating Your First Tasks

You've set up your proxies, SMS, and CapGuru. Now let's configure Orbit and launch your first generation.

---

## 1. Configure Settings

Open Orbit → **Settings** and fill in each section:

### API Keys
- **CapGuru key** — paste the key from [cap.guru](https://cap.guru/en/)

### SMS
- **Provider** → select **Hero SMS**
- **API Key** → paste your Hero SMS key
- Click **Test connection** — you should see your balance appear

### IMAP *(optional but recommended)*
An IMAP mailbox lets Orbit automatically catch the email verification code Amazon sends during registration. Without it, you'll need to enter codes manually.

- Click **Add an IMAP account**
- Select **Gmail** as provider (recommended — faster and more reliable than iCloud IMAP)
- Enter your Gmail address and an **app password** (generate one at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords))
- Click **Test connection** → Save

:::tip Use Gmail
Even if your emails are iCloud aliases, set them to forward to a Gmail address. Then use that Gmail as your IMAP account. It's faster and more reliable.
:::

### Discord Webhook *(optional)*
If you want to receive a notification every time an account is successfully created, paste a Discord webhook URL here.

---

## 2. Import your proxies

Go to **Proxies** → **Create a group**:
1. Give the group a name (e.g. `Resilab FR`)
2. Paste your proxy list (format: `host:port:user:pass`, one per line)
3. Click **Import** → your proxies are saved

---

## 3. Set up profiles *(optional but recommended)*

Profiles give each account a realistic name, address, and birthdate. Without profiles, Orbit generates random data automatically — profiles are better for quality accounts.

Go to **Profiles** → **Import** → paste a list of profiles or use the bulk generator.

---

## 4. Create an email list

Go to **Email Lists** → **Create a group**:
1. Name your group (e.g. `Amazon FR`)
2. Paste your list of email addresses (one per line)
3. Click **Import**

Each email will be used for one account.

---

## 5. Create Amazon Gen tasks

Go to **Tasks** → click **+ Create** → select **Amazon Gen**.

Fill in the form:

| Field | What to enter |
|-------|---------------|
| **Region** | FR (France), UK, or JP (Japan) |
| **Number of tasks** | Start with 5–10 to test |
| **Proxy group** | Select the group you created |
| **Profile group** | Select your profile group (or leave on "Random") |
| **Email list** | Select your email group |
| **Mailbox for OTP** | Select your IMAP account |
| **SMS country** | France (FR) or UK |
| **Account group** | Create a new group — created accounts will be saved here |

Click **Create tasks** — the tasks appear in the list.

---

## 6. Launch

Click **Start All** (or **Smart Start** to stagger launches and avoid spikes).

Each task card shows the current step in real time. A typical flow:
1. Opening browser
2. Filling registration form
3. Solving CAPTCHA (CapGuru)
4. Phone verification (Hero SMS — automatic)
5. Email OTP (IMAP — automatic)
6. Account created and saved

---

## 7. Find your created accounts

Go to **Accounts** → select the group you specified → all successfully created accounts are listed with their credentials and cookies.
