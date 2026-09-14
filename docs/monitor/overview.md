---
id: overview
title: Discord Monitor
sidebar_position: 1
---

# Discord Monitor

The **Discord Monitor** connects Orbit to your personal Discord account and listens to channels in real time. When a message matching your filter appears, Orbit automatically triggers all buy tasks that are waiting for it — without you having to do anything manually.

This is the recommended way to run buy tasks on product drops announced in Discord.

---

## How It Works

```
Discord message → Monitor detects match → Buy tasks fire automatically
```

1. You set up the Monitor with your Discord user token and the channel(s) to watch.
2. You configure filters (keywords or phrases) that identify a real drop announcement.
3. When you launch buy tasks (Philibert Buy, Fnac Buy, Shopify Buy, King Jouet Buy), you select **Monitor** as the trigger instead of pasting a URL manually.
4. The tasks pause on a blue **MONITORING** badge and wait.
5. When a matching Discord message arrives, all waiting tasks fire simultaneously.

---

## Step 1 — Get Your Discord User Token

:::danger Your user token is sensitive
Your Discord user token gives full access to your Discord account. Never share it with anyone. Orbit uses it only locally to listen to messages — it is never sent to any external server.
:::

The video below shows how to extract your token from the Discord desktop app:

**[▶ Watch the tutorial on YouTube](https://www.youtube.com/watch?v=dmjNAW8McLU)**

**Quick steps (written version):**

1. Open the **Discord desktop app** (not the browser version).
2. Press **Ctrl + Shift + I** (Windows) or **Cmd + Option + I** (Mac) to open DevTools.
3. Go to the **Network** tab.
4. In Discord, do anything that makes a network request — for example, switch to a different channel.
5. In the Network tab, click on any request that goes to `discord.com/api/...`.
6. Scroll down to the **Request Headers** section.
7. Find the **Authorization** header — the value next to it is your user token.
8. Copy the token (it starts with `MTI...` or similar — a long string of characters).

:::tip Use the desktop app
The token extraction method requires the Discord desktop app with DevTools. The web version may not expose the same headers in the same way.
:::

---

## Step 2 — Enable Discord Developer Mode

To add channels to the Monitor, you need their **Channel ID** — a unique number Discord assigns to every channel. To copy a Channel ID, you must enable Developer Mode in Discord first.

1. Open Discord and go to **User Settings** (click the gear icon next to your username, bottom-left).
2. In the left sidebar, scroll down to **App Settings** → **Advanced**.
3. Toggle **Developer Mode** to **on**.

Once Developer Mode is enabled:

- **Right-click any channel** in the server sidebar.
- Select **Copy Channel ID** from the context menu.
- The Channel ID is now in your clipboard — paste it into Orbit.

---

## Step 3 — Connect the Monitor in Orbit

1. Go to **Settings → Monitor** in Orbit.
2. Paste your Discord user token into the **Token** field.
3. Click **Connect**.

The status indicator will show:

| Status | Meaning |
|--------|---------|
| **Connected** | Monitor is active and listening |
| **Connecting...** | Establishing connection to Discord |
| **Reconnecting...** | Temporary disconnect — automatically reconnecting |
| **Disconnected** | Not connected — check your token |
| **Error** | Connection failed — see the error message |

Once connected, the monitor stays active as long as Orbit is running. It automatically reconnects if the connection drops temporarily.

:::info The monitor runs in the background
You do not need to keep the Settings page open. Once connected, the monitor runs in the background and continues listening even while you work on other tabs.
:::

---

## Step 4 — Add Channels and Filters

### Adding a Channel

In the Monitor section, click **+ Add channel** and fill in:

| Field | Description |
|-------|-------------|
| **Site** | Which site's buy tasks this channel is tied to (Philibert, Fnac, Shopify, King Jouet) |
| **Channel ID** | The Discord channel ID you copied in Step 2 |
| **Filter** | A keyword or phrase that must appear in the message to trigger |

Click **Save** to confirm. You can add multiple channels for different sites.

---

### How Filters Work

A filter is a **text match** applied to every message in the channel. If the message contains the filter text (case-insensitive), the trigger fires.

**Examples:**

| Filter | What it matches |
|--------|----------------|
| `restock` | Any message containing the word "restock" |
| `https://www.philibert.fr` | Any message containing a Philibert product URL |
| `https://discord.gg/orbitbot` | Any message containing that specific invite link |
| `DROP` | Any message containing "drop", "DROP", "Drop", etc. |

:::tip Match something specific
If the channel is active and noisy, use a filter that only matches drop announcements — for example, a specific URL pattern or a unique keyword used only for drops. If the filter is too broad, a regular message may accidentally trigger your tasks.
:::

You can set a different filter per channel. Each channel's filter is independent.

---

## Step 5 — Configure Buy Tasks to Use Monitor

When creating a buy task (Philibert Buy, Fnac Buy, Shopify Buy, or King Jouet Buy):

1. In the task creation form, look for the **Trigger** or **Monitor** option.
2. Select the **Monitor filter** that corresponds to the channel you set up.
3. Create the tasks normally.

Once the tasks are running, they will display a blue **MONITORING** badge instead of a progress step:

```
● Waiting for Discord trigger...
```

This means the task is paused and waiting for the monitor to fire. As soon as a matching message arrives in the configured Discord channel, all waiting tasks start simultaneously.

After the trigger fires, the tasks continue with their normal buy flow (login → add to cart → checkout → payment).

---

## Full Setup Checklist

- [ ] Discord user token extracted from the desktop app
- [ ] Developer Mode enabled in Discord settings
- [ ] Channel ID(s) copied from the relevant Discord server(s)
- [ ] Token pasted in Settings → Monitor and status shows **Connected**
- [ ] Channel(s) added with the correct Site and Filter
- [ ] Accounts ready (with delivery addresses filled for Philibert/Fnac)
- [ ] Payment cards assigned to buy tasks
- [ ] Buy tasks created with Monitor as the trigger
- [ ] Tasks show the blue **MONITORING** badge — ready for the drop

---

## Troubleshooting

**Status stays on "Connecting..." for a long time**
Your token may be invalid or your network is blocking the Discord WebSocket connection. Try re-copying the token from DevTools and pasting it again.

**Status shows "Error: Auth failed (code 4004)"**
The token is invalid. Discord returns code 4004 for authentication failures. Extract a fresh token from DevTools.

**Messages arrive in Discord but tasks don't fire**
Check that the **Site** selected in the channel config matches the type of buy tasks you created. Each channel is tied to one site — a Philibert channel will only trigger Philibert Buy tasks. Also make sure the filter text actually appears in the drop message.

**Tasks show MONITORING badge but then stop without an order**
The trigger fired but the buy flow encountered an issue (out of stock, login error, etc.). Check the task status message that appears after the MONITORING badge disappears.

**I don't want tasks to start on every message — the filter is too broad**
Edit the channel in Settings → Monitor and use a more specific filter string, such as the exact URL format used for drops.
