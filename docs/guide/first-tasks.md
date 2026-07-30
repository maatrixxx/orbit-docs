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
If you want to receive a notification every time an account is successfully created or an invite is sent, paste a Discord webhook URL here.

---

## 2. Import your proxies

Go to **Proxies** → **Create a group**:
1. Give the group a name (e.g. `Resilab FR`)
2. Paste your proxy list (format: `host:port:user:pass`, one per line)
3. Click **Import** → your proxies are saved

---

## 3. Create an email list

Go to **Email Lists** → **Create a group**:
1. Name your group (e.g. `Amazon FR`)
2. Paste your list of email addresses (one per line)
3. Click **Import**

Each email will be used for one account.

---

## 4. Create Amazon Gen tasks

Go to **Tasks** → click **+ Create** → select **Amazon Gen**.

Fill in the form:

| Field | What to enter |
|-------|---------------|
| **Region** | FR (France), UK, JP (Japan), or US |
| **Number of tasks** | Start with 5–10 to test |
| **Proxy group** | Select the group you created |
| **Stick proxy to account** | Check this to permanently attach the proxy to each account — recommended (see [Sticky Proxy Guide](/guide/sticky-proxy)) |
| **Email list** | Select your email group |
| **Mailbox for OTP** | Select your IMAP account |
| **SMS country** | Match the region (FR, UK, JP, or US) |
| **Account group** | Create a new group — created accounts will be saved here |

Click **Create tasks** — the tasks appear in the list.

---

## 5. Launch

Click **Start All** (or **Smart Start** to stagger launches and avoid spikes).

Each task card shows the current step in real time. A typical flow:
1. Opening browser
2. Filling registration form
3. Solving CAPTCHA (CapGuru)
4. Phone verification (Hero SMS — automatic)
5. Email OTP (IMAP — automatic)
6. Account created and saved

---

## 6. Find your created accounts

Go to **Accounts** → select the group you specified → all successfully created accounts are listed with their credentials and cookies.

If you checked **Stick proxy to account**, each account will show a **📌 PROXY** badge — the proxy is now permanently attached.

---

## 7. Run invites

Once you have accounts with valid sessions, go to **Tasks → Amazon Invites**:

1. Select the region and ASIN(s) of the invite-only product
2. Select your account group
3. In the **Proxy** section, select **Sticky** if your accounts have attached proxies — this reuses the same IP per account
4. Click **Create task** then **Start**

If an account's session is expired when the invite runs, click **Run Session** on the task card — Orbit will refresh the session and **automatically relaunch the invite** right after.

---

## Next step

Now that you have a working gen + invite flow, read the **[Sticky Proxy Guide](/guide/sticky-proxy)** for the full recommended setup — including how to configure your proxies for long session durations.
