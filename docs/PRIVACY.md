# Workday Island privacy note

[中文](PRIVACY.zh-CN.md) · [English](PRIVACY.md)

Last updated: 2026-07-28

Workday Island is local-first. Core features such as todos require no account. Chat, friends, and Work Cloud share one signed-in Backlight account session.

## Data stored on the device

The following data is stored in `WorkdayIsland/data.json` under the user's configuration directory:

- todo titles, notes, completion state, and reminder times;
- work hours, workdays, monthly salary, and paid days per month;
- weather city, interface language, theme, English word library, currency symbol, always-on-top, compact-mode opacity and todo options, and the remembered compact-window size;
- the most recent successful weather result, used only as an offline fallback;
- stock watchlist symbols; the latest quote response is cached only in the running process for brief network outages;
- the last successful update-check time, used to limit automatic checks to once per day;
- the current focus session's start, end, and running state.
- the realtime user ID, username, display nickname, and up to 500 recent realtime messages and window-interaction records.
- the last entered account username may be stored by the embedded WebView; account passwords and Work Cloud access tokens are never persisted.

The app never uploads todos, salary, work schedules, or focus records. The uninstaller does not delete the data file so a reinstall can continue where you left off. To erase it completely, quit the app and remove the `WorkdayIsland` configuration directory.

## Network access

Weather sends the configured city name to Open-Meteo's geocoding service and uses the resolved coordinates to request current conditions. The floating stock ticker sends public watchlist symbols to Eastmoney's public quote service to retrieve the latest price, change, percentage change, and quote time; it does not send names, accounts, todos, or salary data, and quotes are for reference only. Update checks access this project's public GitHub Releases API to read the version, release notes, and package URLs; no todos, salary values, or other local business data are sent. Automatic update checks run at most once per day and can also be triggered manually from About. Blocking network access does not affect todos, reminders, countdowns, or focus sessions.

When the user submits the registration form, the app sends the username, nickname, password, confirmation, and any voluntarily entered email, phone number, or invite code to `https://admin.asbacklight.cn/api/user/register`; the invite code is optional. Sign-in sends the username and password to the account service over HTTPS and uses them to establish the encrypted WebSocket session. After registration, only the username may be remembered by the embedded WebView. Passwords and access tokens stay only in process memory, are cleared on sign-out or exit, and are never written to app configuration, Keychain, or a DPAPI file.

After account sign-in, the app connects to `admin.asbacklight.cn`. Chat content, sender/recipient user IDs and nicknames, timestamps, delivery/read states, friend requests and relationships, online status, and shake/flash commands pass through the realtime service and may be retained server-side. Shake and flash actions are also kept as interaction records in recent local conversation history. Blocking network access does not affect local core features outside chat.

Opening English learning requests words, phonetics, meanings, examples, and choices from the selected public Backlight word library, and submits per-question results. In Example Sentences mode, the English sentence is sent to the translation endpoint for a Chinese translation. Retrieved translations are cached only in the running process and are not written to the local data file.

Opening Work Cloud uses the current account token to read folders and storage quota. The app reads and uploads a local file only after the user selects it, using an object-storage URL issued by the service. Downloads are also explicitly initiated by the user. The Backlight service stores file metadata such as name, size, content type, folder relationships, and object key, while file contents live in the configured object storage. The app does not crawl or scan local files that the user did not select.

## Operating-system capabilities

The app uses system notifications, file open/save dialogs, alert sounds, and foreground-window activation for reminders, cloud transfers, and user-initiated window interactions. It contains no telemetry, behavioural analytics, advertising SDK, contacts/calendar access, or scanning of files the user did not select.

## Contact

For privacy questions, email [asbacklight@gmail.com](mailto:asbacklight@gmail.com).
