---
id: creating-a-group
title: Creating a Proxy Group
sidebar_position: 2
---

# Creating a Proxy Group

## 1. Open the Proxies Page

Click **Proxies** in the left navigation.

## 2. Create a New Group

Click **+ New Group**, enter a name (e.g. `Residential FR`), and click **Create**.

## 3. Import Your Proxies

Click on the group, then paste your proxies — **one per line** — in the format:

```
host:port:username:password
```

Click **Import**. The count badge on the group will update.

---

## Testing Proxies

Click **Test** on a proxy group to verify connectivity. Each proxy is checked against Amazon and marked as:

- ✅ **Active** — proxy works
- ❌ **Dead** — proxy is unreachable or banned

Dead proxies are skipped automatically when tasks run.

---

## Proxy Assignment in Tasks

When you create tasks with a proxy group selected, proxies are assigned in a loop:
- Task 1 → Proxy 1
- Task 2 → Proxy 2
- Task N → Proxy (N mod total)

Since rotating residential proxies automatically change IP on each new connection, even assigning the same proxy entry to multiple tasks effectively gives each task a different IP.
