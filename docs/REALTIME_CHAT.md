# Realtime chat and window interactions

[中文](REALTIME_CHAT.zh-CN.md) · [English](REALTIME_CHAT.md)

## How to use it

1. Select the chat button in the main window.
2. Choose **One-click login** to create an anonymous device identity with an optional nickname, or choose **Username & password** to use an existing account. Select **Create one** if you need a new account.
3. Once online, send a friend request by exact username or user ID. Incoming requests can be accepted or rejected, and the friend list shows current online status.
4. Select a friend to open a conversation, or continue entering a user ID manually. Text, shake, and flash events support offline delivery; a window interaction may include an optional prompt of up to 120 characters.
5. **Go Offline** closes the connection. Anonymous identity remains on the device; an account password is cleared from session memory and must be entered again. **Reset identity** applies only to anonymous-device mode.

When the peer is offline, the service records messages and window interactions for delivery on their next connection. The chat page automatically selects the latest sender when a new message arrives. An incoming window interaction restores and raises Workday Island, displays the sender's prompt, and then performs a brief shake or colour flash that the user can stop immediately.

## Authentication and security

On the first connection, Workday Island generates an Ed25519 key pair locally and registers an anonymous device identity with the Backlight realtime service:

- the server receives only the public key, device ID, device name, and display nickname;
- the private key never leaves the device;
- macOS stores the private key in Keychain;
- Windows encrypts the private key with DPAPI for the current user;
- later connections sign a random server challenge.

Username/password mode also authenticates after the server challenge:

- registration reuses the Backlight account service and collects a username, nickname, password, confirmation, plus optional email, mainland-China phone number, and invite code;
- usernames must contain 3–20 letters, numbers, or underscores; nicknames are 2–20 characters and passwords are 6–20 characters;
- the request is encrypted in transit to `https://admin.asbacklight.cn/api/user/register` and identifies its source as `workday-island`;
- after success the app fills only the new username into Sign In, then immediately clears both registration password fields;
- credentials are sent only inside the encrypted `wss://` WebSocket and never in URL query parameters;
- the password is held only in memory for the current online session and temporary reconnects;
- it is cleared after explicit offline, authentication failure, or application exit, and is never written to `data.json`, Keychain, or a DPAPI file;
- the username may be remembered locally for convenience.

Friend relationships and requests are persisted by the realtime service. After every successful authentication or reconnect, the client reloads pending requests and friends, while realtime pushes merge additions, removals, and request decisions idempotently.

Local business data—including todos, reminders, salary, work schedules, weather settings, and focus records—is never sent to the realtime service.

## Network and troubleshooting

The desktop client opens an encrypted WebSocket at `wss://admin.asbacklight.cn/api/realtime/ws`. Anonymous mode additionally performs initial device registration through `https://admin.asbacklight.cn/api/realtime/bootstrap`, while account registration uses `https://admin.asbacklight.cn/api/user/register`.

If the UI reports that the realtime WebSocket gateway is unavailable, the HTTPS gateway is not forwarding the WebSocket Upgrade correctly; this is not a one-click identity or password error. An Nginx proxy needs at least:

```nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

After non-authentication failures the app reconnects after 1, 2, 4, 8, 16, and then 30 seconds. It does not reconnect after an explicit offline action.

See the [privacy note](PRIVACY.md) for complete data handling details.
