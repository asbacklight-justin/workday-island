# Realtime chat and window interactions

[中文](REALTIME_CHAT.zh-CN.md) · [English](REALTIME_CHAT.md)

## How to use it

1. Select the chat button in the main window.
2. Optionally change the display nickname, then choose **Go Online**. The app never asks for a username or password.
3. Copy your user ID after the first connection and share it with the peer through a trusted channel.
4. Enter the peer's user ID to send text, shake their window, or flash their window. A window interaction may include an optional prompt of up to 120 characters.
5. **Go Offline** closes the realtime connection but keeps the anonymous identity on this device. **Reset identity** removes the local identity and chat history; the next connection receives a new user ID.

When the peer is offline, the service records messages and window interactions for delivery on their next connection. The chat page automatically selects the latest sender when a new message arrives. An incoming window interaction restores and raises Workday Island, displays the sender's prompt, and then performs a brief shake or colour flash that the user can stop immediately.

## One-click identity and security

On the first connection, Workday Island generates an Ed25519 key pair locally and registers an anonymous device identity with the Backlight realtime service:

- the server receives only the public key, device ID, device name, and display nickname;
- the private key never leaves the device;
- macOS stores the private key in Keychain;
- Windows encrypts the private key with DPAPI for the current user;
- later connections sign a random server challenge, without storing or transmitting a username or password.

Local business data—including todos, reminders, salary, work schedules, weather settings, and focus records—is never sent to the realtime service.

## Network and troubleshooting

The desktop client opens an encrypted WebSocket at `wss://admin.asbacklight.cn/api/realtime/ws` and performs the initial anonymous-device registration through `https://admin.asbacklight.cn/api/realtime/bootstrap`.

If the UI reports that the realtime WebSocket gateway is unavailable, the HTTPS gateway is not forwarding the WebSocket Upgrade correctly; this is not a one-click identity or password error. An Nginx proxy needs at least:

```nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

After non-authentication failures the app reconnects after 1, 2, 4, 8, 16, and then 30 seconds. It does not reconnect after an explicit offline action.

See the [privacy note](PRIVACY.md) for complete data handling details.
