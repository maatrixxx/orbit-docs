---
id: how-sites-work
title: How Each Site Works
sidebar_position: 2
---

# How Each Site Works

Understanding how each platform releases limited products will help you understand why Orbit is built the way it is — and why simply being fast isn't always enough.

---

## Amazon — Invitation System

Amazon uses an **invitation-based system** for its most limited drops (Pokémon 30th anniversary sets, gaming collectibles, limited editions, etc.).

**How it works:**

1. Amazon lists the product on its website with a button saying **"Request an invitation"**
2. You click it — Amazon adds you to a pool of candidates
3. Amazon selects a portion of applicants (at random or by priority) and **sends them an invitation by email**
4. If selected, you have **72 hours** to complete your purchase at the listed price
5. If not selected, you get nothing

:::warning The catch
Amazon receives **tens of thousands of invitation requests** for popular drops. The stock might be only a few thousand units. Your odds with a single account are extremely low.

**This is exactly why Orbit exists**: it lets you request invitations across dozens or hundreds of accounts simultaneously — multiplying your chances proportionally.
:::

**What Orbit automates:**
- Creating Amazon accounts in bulk (with real email addresses and phone verification)
- Requesting invitations on all accounts the moment the product page goes live
- Monitoring email inboxes for the invitation, then completing checkout automatically

---

## Fnac — Real-Time Stock Drops

Fnac does not use an invitation system. Their limited drops work like a classic **ATC race** (Add To Cart):

1. A product is listed on fnac.com at a set date and time
2. The moment it goes live, **thousands of people simultaneously try to add it to their cart**
3. First come, first served — whoever adds to cart and completes checkout fastest wins

**What Orbit automates:**
- The instant the product URL is live, Orbit fires an **HTTP request directly to Fnac's cart API** (faster than a browser click)
- It detects the cart confirmation and immediately moves to checkout
- It handles delivery selection, payment, and order confirmation

:::info Why HTTP and not just clicking?
A browser click takes 200–500ms to process visually before anything is sent to the server. Orbit's HTTP approach bypasses the browser entirely and hits Fnac's database directly — this is why it's significantly faster than doing it by hand.
:::

---

## Philibert — Click & Collect Drops

Philibert is France's largest board game retailer. They regularly drop **limited or back-in-stock** items that sell out instantly.

Their system is similar to Fnac — a direct ATC race — but they also offer **click & collect** (pick up in store), which sometimes has separate, slightly larger stock.

**What Orbit automates:**
- ATC at the moment of drop
- Checkout with delivery or relay point selection

---

## Shopify — Brand-Specific Drops

Many brands (streetwear, sneakers, collectibles) run their online store on **Shopify**, a common e-commerce platform. Drops on these stores typically:

1. Announce a release date and time in advance
2. Go live all at once — everyone refreshes simultaneously
3. Sell out in seconds (sometimes milliseconds for highly hyped items)

Some Shopify stores add a **queue system** (you enter a virtual waiting room) — Orbit handles this as well.

**What Orbit automates:**
- Monitoring the product page for stock
- Instant ATC and checkout the moment stock is detected

---

## Summary

| Site | Drop type | Orbit's approach |
|------|-----------|-----------------|
| **Amazon** | Invitation lottery | Request invitations on many accounts |
| **Fnac** | Real-time ATC race | Direct HTTP ATC, instant checkout |
| **Philibert** | Real-time ATC race | Direct HTTP ATC, relay point selection |
| **Shopify** | Real-time ATC race | Stock monitoring + instant ATC |

Now that you understand how these sites work, let's talk about **why you need multiple IP addresses** — and what happens if you don't have them.
