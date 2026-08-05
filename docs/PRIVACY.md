# Workday Island privacy note

[中文](PRIVACY.zh-CN.md) · [English](PRIVACY.md)

Last updated: 2026-08-05

Workday Island is local-first. Core features such as todos require no account. AI Chat, realtime chat, friends, Work Cloud, Cloud Notes, Link Sharing, and Universal Translator share one signed-in Backlight account session.

## Data stored on the device

The following data is stored in `WorkdayIsland/data.json` under the user's configuration directory:

- todo titles, notes, completion state, and reminder times;
- work hours, workdays, monthly salary, and paid days per month;
- weather city, interface language, theme, English word library, currency symbol, always-on-top, compact-mode opacity and todo options, and the remembered compact-window size;
- the English Word Book and Wrong Book, including words, phonetics, meanings, English examples, library source, learning modes used, view/error counts, recent answers, and record times;
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

After account sign-in, the app connects to `admin.asbacklight.cn`. It requests `/user/info` to refresh the current account's nickname, avatar URL, role codes, and role names; membership role codes are used only to select the matching local badge style. Chat content, sender/recipient user IDs and nicknames, timestamps, delivery/read states, friend requests and relationships, online status, and shake/flash commands pass through the realtime service and may be retained server-side. Shake and flash actions are also kept as interaction records in recent local conversation history. Blocking network access does not affect local core features outside chat.

Opening Notification Center uses the current account to retrieve system, business, security, and announcement messages visible to that user. While signed in, the app performs a lightweight unread-count request every 45 seconds. Marking one or all messages as read and deletion are sent only after an explicit user action. The notification list and unread count remain in the running process and are not written to the local data file.

When AI Chat is used, conversation titles, system prompts, selected models, thinking settings, user messages, AI responses, token usage, and creation/modification times are sent to the Backlight AI service and associated with the current account. Responses stream to the desktop and generation can be stopped; conversations can be archived or deleted. The app does not automatically attach todos, salary, or other local data. Only content explicitly entered by the user or sent from Cloud Notes is submitted.

Opening Cloud Notes uses the current account to retrieve folders, note bodies, favourite/pinned states, word counts, versions, recycle-bin entries, and reading-password status. Creating, editing, moving, restoring, deleting, setting a reading password, exporting, translating, or sending a note to AI is user-initiated; edited content autosaves to the Backlight Cloud Notes service. Reading passwords are submitted over HTTPS for server-side verification, while the unlock token remains only in the running session.

Creating a note share sends its title, description, snapshot or source-note reference, password status, validity period, copy/comment policies, and view statistics to the Backlight sharing service. The dedicated manager can inspect, edit, revoke, regenerate, or delete links. Anyone holding a public link and any required access password may be able to view it, so sensitive information should not be shared.

When Universal Translator is used, the source text and selected source/target languages are sent to the Backlight translation service. The service counts daily characters per account and stores source text, translated text, languages, and translation time so the user can search, delete, or export translation history. The app keeps the account token and current page results only in the running process; the token is cleared on sign-out or exit.

Opening compact English learning requests words, phonetics, meanings, examples, and choices from the selected public Backlight word library, and submits per-question results. Words actually shown are written to the local Word Book; mistakes in EN → CN, CN → EN, and spelling modes are written to the local Wrong Book and are not synced to other devices. In Example Sentences mode, the English sentence is sent to the translation endpoint for a Chinese translation. The Chinese example translation is cached only in the running process and is not written to the local data file.

Opening Work Cloud uses the current account token to read folders and storage quota. The app reads and uploads a local file only after the user selects it, using an object-storage URL issued by the service. Downloads are also explicitly initiated by the user. The Backlight service stores file metadata such as name, size, content type, folder relationships, and object key, while file contents live in the configured object storage. The app does not crawl or scan local files that the user did not select.

Requests from Workday Island to account, AI Chat, realtime chat, notifications, Cloud Notes, Link Sharing, English, translation, and Work Cloud business endpoints on `admin.asbacklight.cn` include `X-Client-Source: workday-island` and the current application version. These fields identify the client for compatibility and troubleshooting. Presigned object-storage upload/download requests do not receive these headers.

When the user explicitly submits feedback from About, the app sends the selected type, subject, details, optional contact, app version, and operating-system platform to the public Backlight feedback service. The service records the submitting IP for rate limiting and abuse prevention. No sign-in is required, and the app never automatically attaches todos, salary, chat, notes, files, or other local business data.

## Operating-system capabilities

The app uses system notifications, file open/save dialogs, alert sounds, and foreground-window activation for reminders, cloud transfers, and user-initiated window interactions. It contains no telemetry, behavioural analytics, advertising SDK, contacts/calendar access, or scanning of files the user did not select.

## Contact

For privacy questions, email [asbacklight@gmail.com](mailto:asbacklight@gmail.com).
