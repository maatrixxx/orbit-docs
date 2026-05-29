---
id: amazon-invite
title: Amazon Invite Task
sidebar_position: 3
---

# Amazon Invite Task

The Amazon Invite task sends **Prime membership invitations** from one Amazon account to the accounts in a group. This is used to transfer Prime benefits across accounts using Amazon's "Invite a friend" programme.

---

## Prerequisites

- ✅ A **source account** with an active Prime membership and invite credits
- ✅ A **target account group** (the accounts that will receive invites)
- ✅ Valid **session cookies** on the source account

---

## Creating an Invite Task

1. Go to **Tasks** and click **+ New Task**.
2. Select **Amazon Invite**.
3. Fill in the form:

| Field | Description |
|-------|-------------|
| **Task name** | A label for this task |
| **Source account** | The Prime account that sends invitations |
| **Target group** | The account group that will receive invitations |
| **Proxy group** | Proxies to use during the task |

4. Click **Create task** then **▶ Start**.

---

## How It Works

1. Orbit opens a browser session using the **source account's cookies**.
2. It navigates to the Amazon Prime invite page.
3. For each account in the target group, it:
   - Enters the account's email address
   - Sends the invitation
   - Waits for confirmation
4. The target account receives an email with an invite link.

---

## Accepting Invitations

Invited accounts must accept the invitation via the email link. Orbit does not automatically accept invites — this step is done manually or via the **Session task** if the workflow supports it.

---

## Invite Limits

Amazon limits how many invitations a Prime account can send per month. Check your invite balance before running large batches.

:::caution
Sending too many invites too quickly from one account may trigger Amazon's fraud detection. Space out invite tasks or use multiple source accounts.
:::
