---
id: amazon-checkout
title: Amazon Win Check Task
sidebar_position: 5
---

# Amazon Win Check Task

The Amazon Win Check task tells you which accounts have been invited/selected to buy a high-demand, invite-only product. Orbit fetches the product page over HTTP for each account and checks whether a purchase button is now available — that's the signal an invitation was accepted ("the win").

This does not complete a purchase by itself — it tells you which accounts won, so you can check out manually or with a follow-up task while stock lasts.

---

## Prerequisites

- An **account group** with valid sessions (run a Session task first, or use the classic mode's own session handling)
- A **proxy group** (optional)
- The **ASIN(s)** or product URL(s) to check

---

## Creating a Win Check Task

1. Go to **Tasks** and click **+ Create**.
2. Select **Amazon Win Check** (under the Amazon category).
3. Choose a mode:

| Mode | Description |
|------|-------------|
| **Win Check (Request)** | Fetches each product page per account over HTTP and looks for a purchase button — no proxy strictly required, but recommended |
| **Email Scan (Free)** | Scans an IMAP mailbox for Amazon's win notification emails instead — no proxy or account session needed at all |

4. Fill in the rest of the form (region, ASINs/URLs, account group or IMAP account) and click **Create task** then **Start**.

---

## How "Win Check (Request)" Works

For each account in the group, for each ASIN, Orbit:

1. Fetches the product page over HTTP using the account's saved session.
2. Looks for a purchase button (e.g. "Add to Cart").
3. If found → reports a **WIN**.
4. If not found → reports no win on this account for this product (it likely doesn't have an accepted invite yet, or is out of stock for them specifically).

---

## Email Scan Mode (IMAP Scan)

Instead of running browser sessions, the **Email Scan** mode scans one or more IMAP mailboxes for Amazon invite emails and extracts the results automatically — no proxy, no browser required.

### Supported Regions

| Region | Marketplace | Email window |
|--------|-------------|--------------|
| FR | amazon.fr | Last **72 hours** |
| JP | amazon.co.jp | Last **48 hours** |

### How to create an Email Scan task

1. Go to **Tasks → Amazon Win Check → Create**.
2. Choose the **Email Scan (Free)** mode.
3. Choose your **Region** (FR or JP).
4. Select one or more **IMAP accounts** to scan — you can pick multiple accounts and Orbit will scan all of them in sequence and merge the results.
5. Optionally enter a **Discord webhook** to receive the recap automatically.
6. Click **Create task** then **Start**.

### What it detects

**FR:** emails with subject containing *"invité à passer commande"* or *"Félicitations"*

**JP:** emails with subject containing *「おめでとうございます。招待者に選ばれました」* (Japanese) or *"Congrats, you're invited"* (English). Request-confirmation emails (*「招待リクエストを受け付けました」*) are **automatically ignored**.

### Multi-mailbox scanning

When you select **multiple IMAP accounts**, Orbit scans each inbox sequentially and merges all results into a single recap — one entry per product, with all winning emails grouped together.

---

## Win Check Scan Recap

After an **Email Scan** task completes, Orbit automatically shows a **Recap modal** summarising all scanned items.

### What it shows

- **Product image** for each item
- **×N count** — how many wins were detected for that product
- **Email list** — the accounts associated with each item (with a toggle to hide them for screenshots)

### How to use it

- The recap appears automatically when the scan finishes.
- Close it — it will stay available as long as the task is not deleted.
- To **reopen** the recap at any time, click the **Recap** button on the task row.
- The recap is **cleared when the task is deleted**.

:::tip Hide emails for screenshots
Use the **Hide emails** toggle to hide all email addresses before sharing a screenshot — great for showing results without exposing account details.
:::

---

## Tips

:::tip
Run a **Session task** on the account group before a Win Check task to ensure cookies are fresh. Stale sessions are the most common cause of missed wins.
:::

:::tip Kill Browsers
If you notice orphaned browser processes lingering after tasks finish, use the **Kill Browsers** button in the Tasks toolbar to forcefully close all Playwright Chromium processes opened by Orbit.
:::
