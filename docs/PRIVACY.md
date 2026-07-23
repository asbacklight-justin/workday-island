# Workday Island privacy note

[中文](PRIVACY.zh-CN.md) · [English](PRIVACY.md)

Last updated: 2026-07-23

Workday Island is local-first. Core features such as todos require no account. Optional realtime chat uses a one-click anonymous device identity and never asks for a username or password.

## Data stored on the device

The following data is stored in `WorkdayIsland/data.json` under the user's configuration directory:

- todo titles, notes, completion state, and reminder times;
- work hours, workdays, monthly salary, and paid days per month;
- weather city, interface language, theme, currency symbol, always-on-top, compact-mode opacity and todo options, and the remembered compact-window size;
- the most recent successful weather result, used only as an offline fallback;
- the last successful update-check time, used to limit automatic checks to once per day;
- the current focus session's start, end, and running state.
- the anonymous realtime user ID, device ID, public credential ID, display nickname, and up to 500 recent realtime messages and window-interaction records.

The Ed25519 device private key is not stored in this JSON file: macOS uses Keychain, while Windows stores a DPAPI-encrypted value in the user's configuration directory. The app never uploads todos, salary, work schedules, focus records, or the device private key. The uninstaller does not delete the data file so a reinstall can continue where you left off. To erase it completely, reset the realtime identity in the app, quit it, and remove the `WorkdayIsland` configuration directory.

## Network access

Weather sends the configured city name to Open-Meteo's geocoding service and uses the resolved coordinates to request current conditions. Update checks access this project's public GitHub Releases API to read the version, release notes, and package URLs; no todos, salary values, or other local business data are sent. Automatic update checks run at most once per day and can also be triggered manually from About. Blocking network access does not affect todos, reminders, countdowns, or focus sessions.

Only after the user chooses **Go Online** does the app connect to `admin.asbacklight.cn`. On first use it sends the nickname, device ID, device name, and Ed25519 public key to create an anonymous device identity. Subsequent connections use device-signature authentication. Chat content, sender/recipient user IDs, timestamps, delivery/read states, and shake/flash commands pass through the realtime service and may be retained server-side for offline delivery. The user can go offline or reset the local realtime identity at any time. Blocking network access does not affect core features outside chat.

## Operating-system capabilities

The app uses system notifications, alert sounds, and foreground-window activation for reminders and user-initiated window interactions. It contains no telemetry, behavioural analytics, advertising SDK, username/password login, contacts/calendar access, or general file scanning.

## Contact

For privacy questions, email [asbacklight@gmail.com](mailto:asbacklight@gmail.com).
