---
id: overview
title: Settings Overview
sidebar_position: 1
---

# Settings

The Settings page is where you configure all the external services Orbit connects to. Most features require at least one setting to be configured before they will work.

## Sections

| Section | Purpose |
|---------|---------|
| **API Keys** | CapGuru key for automatic Arkose captcha solving during Amazon Gen tasks |
| **CapSolver** | CapSolver key for DataDome bypass during Fnac Buy tasks |
| **SMS** | Phone number rental for Amazon account phone verification |
| **IMAP** | Email inbox access for OTP code reading and order tracking |
| **Discord** | Webhook URLs for success/failure notifications |

---

## Global Save

All settings are saved **per-section** when you click the Save button in that section. Changes are not applied until saved.

Settings are stored locally on your machine and persist across app restarts and updates.

---

## Which Service Does What?

| Task | Requires |
|------|---------|
| Amazon Gen — captcha | CapGuru (or manual) |
| Amazon Gen — phone | SMS provider |
| Amazon Gen — OTP email | IMAP account |
| Fnac Buy — DataDome bypass | CapSolver |
| Win Check email scan | IMAP account |
| Order Tracking auto-scan | IMAP account |
| Discord notifications | Discord webhook |
