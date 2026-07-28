# Realtime chat and window interactions

[中文](REALTIME_CHAT.zh-CN.md) · [English](REALTIME_CHAT.md)

## How to use it

1. Select the chat button in the main window.
2. If signed out, use the account entry to sign in with username/password or open registration to create an account; the invite code is optional.
3. Once online, send a friend request by exact username or user ID. Incoming requests can be accepted or rejected, and the friend list shows current online status.
4. Select a friend to open a conversation, or continue entering a user ID manually. Text, shake, and flash events support offline delivery; a window interaction may include an optional prompt of up to 120 characters and is written into conversation history.
5. Signing out from the account centre closes realtime chat and signs out of Work Cloud. The password and access token are cleared from process memory, so online services require a new sign-in next time.

When the peer is offline, the service records messages and window interactions for delivery on their next connection. The chat page automatically selects the latest sender when a new message arrives. An incoming window interaction restores and raises Workday Island, prefers the sender nickname when displaying its prompt, falls back to the user ID when necessary, and performs a brief shake or colour flash that the user can stop immediately.

## Authentication and security

The unified account authenticates after the server challenge:

- registration reuses the Backlight account service and collects a username, nickname, password, confirmation, plus optional email, mainland-China phone number, and invite code;
- usernames must contain 3–20 letters, numbers, or underscores; nicknames are 2–20 characters and passwords are 6–20 characters;
- the request is encrypted in transit to `https://admin.asbacklight.cn/api/user/register` and identifies its source as `workday-island`;
- after success the app fills only the new username into Sign In, then immediately clears both registration password fields;
- credentials are sent only inside the encrypted `wss://` WebSocket and never in URL query parameters;
- the password and Work Cloud access token are held only in memory for the running session and temporary reconnects;
- they are cleared after sign-out, authentication failure, or application exit, and are never written to `data.json`, Keychain, or a DPAPI file;
- the username may be remembered locally for convenience.

Friend relationships and requests are persisted by the realtime service. After every successful authentication or reconnect, the client reloads pending requests and friends, while realtime pushes merge additions, removals, and request decisions idempotently.

Local business data—including todos, reminders, salary, work schedules, weather settings, and focus records—is never sent to the realtime service.

## Network and troubleshooting

The desktop client opens an encrypted WebSocket at `wss://admin.asbacklight.cn/api/realtime/ws`. Account sign-in uses `https://admin.asbacklight.cn/api/user/login`, while registration uses `https://admin.asbacklight.cn/api/user/register`.

If the UI reports that the realtime WebSocket gateway is unavailable, the HTTPS gateway is not forwarding the WebSocket Upgrade correctly; this is not an account-password error. An Nginx proxy needs at least:

```nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

After non-authentication failures the app reconnects after 1, 2, 4, 8, 16, and then 30 seconds. It does not reconnect after an explicit offline action.

See the [privacy note](PRIVACY.md) for complete data handling details.
