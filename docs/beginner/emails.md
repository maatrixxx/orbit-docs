---
id: emails-beginner
title: Why You Need Multiple Emails
sidebar_position: 4
---

# Why You Need Multiple Emails

## One account = one email

Every Amazon, Fnac, or Philibert account requires a **unique email address**. You can't create 50 accounts with the same email — each one needs its own.

This means if you want to request 50 Amazon invitations, you need **50 different email addresses**.

---

## Option 1: iCloud (built into Orbit)

Orbit has a built-in **iCloud email generator** that creates real `@icloud.com` addresses automatically.

These are genuine Apple iCloud accounts — not fake disposable emails. Amazon and Fnac accept them without issues.

**How it works:**
- Orbit logs into Apple's infrastructure and creates iCloud accounts one by one
- Each account gets a real `@icloud.com` address
- Orbit stores them and uses them automatically when creating site accounts
- IMAP inbox monitoring is built in — Orbit reads OTP codes and confirmation emails directly

:::tip Best option for beginners
If you're just getting started, iCloud is the simplest path. No extra setup, no external service needed.

→ See **[Emails — iCloud Generator](../emails/icloud-generator)** in the Docs section for setup.
:::

---

## Option 2: Catchall emails

A **catchall** is a custom domain email setup where *any* address ending in `@yourdomain.com` is valid and lands in the same inbox. For example:

- `abc123@yourdomain.com` ✓
- `xyz789@yourdomain.com` ✓
- `anything@yourdomain.com` ✓

You can generate thousands of unique addresses instantly with no extra cost per address — as long as you own the domain.

**Why it's powerful:**
- Unlimited unique addresses from a single domain
- Very low cost at scale (a domain is ~€10/year)
- Works with Amazon, Fnac, and Philibert

**The catch:**
- Requires owning a domain and configuring it (DNS records, mail routing)
- Slightly more technical to set up than iCloud

:::info Catchall tutorial — private Discord
A full step-by-step tutorial for setting up a catchall is available on the **Orbit private Discord server** (members only).

If you're not in the server yet, check the link in your license confirmation email.
:::

---

## Which should you use?

| | iCloud | Catchall |
|--|--------|----------|
| **Setup difficulty** | Easy (built-in) | Medium (requires a domain) |
| **Cost** | Free | ~€10/year for a domain |
| **Scale** | Limited (Apple rate-limits creation) | Unlimited |
| **Best for** | Getting started, small runs | Large-scale operations |

For most beginners: **start with iCloud**, switch to catchall once you're comfortable and want to scale up.

---

## Summary

- Each site account needs a unique email address
- iCloud: easiest, built into Orbit, great for starting out
- Catchall: unlimited scale, low cost, requires a domain (tutorial on Discord)
- Orbit handles email monitoring (OTP codes, invitations) automatically via IMAP

You now understand the three pillars: **sites, proxies, and emails**. Time to put it all into practice.
