---
id: sms
title: SMS
sidebar_position: 3
---

# SMS

Amazon requires a **phone number verification** during account creation. Orbit integrates with SMS rental services to automatically rent a number, receive the verification code, and enter it — without any manual action.

---

## Supported Providers

| Provider | Website |
|----------|---------|
| **Hero-SMS** | [hero-sms.com](https://hero-sms.com) |
| **5SIM** | [5sim.net](https://5sim.net) |
| **SMSMan** | [sms-man.com](https://sms-man.com) |
| **SMSPool** | [smspool.net](https://smspool.net) |
| **GrizzlySMS** | [grizzlysms.com](https://grizzlysms.com) |
| **SMS Bower** | [smsbower.com](https://smsbower.com) |

---

## Configuration

Go to **Settings → SMS** and fill in:

| Field | Description |
|-------|-------------|
| **Provider** | Select your SMS provider from the dropdown |
| **API Key** | Your API key from the provider's dashboard |

Click **Test** to verify the key is valid and check your balance. Click **Save**.

---

## Per-Task SMS Settings

When creating an Amazon Generator task, you configure SMS settings per task:

| Field | Description |
|-------|-------------|
| **Country** | The country of the phone number to rent (e.g. France +33) |
| **Max Price (€)** | Maximum price you're willing to pay per number. If no number is available below this price, the task will wait or fail. |

:::tip
France (+33) numbers are typically the cheapest and most reliably accepted on Amazon.fr. Recommended max price: **€0.50**.
:::

---

## How It Works

1. When Orbit reaches the phone verification step, it calls your SMS provider's API to rent a number.
2. Amazon sends an SMS to that number.
3. Orbit polls the provider for the incoming code and automatically enters it.
4. The number is released after use.

If no number is available at or below your max price, the task will fail at the SMS step. Increase your max price or try again later.
