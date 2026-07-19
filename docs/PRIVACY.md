# Workday Island privacy note

[中文](PRIVACY.zh-CN.md) · [English](PRIVACY.md)

Last updated: 2026-07-19

Workday Island is local-first. It does not require an account and has no first-party cloud service.

## Data stored on the device

The following data is stored in `WorkdayIsland/data.json` under the user's configuration directory:

- todo titles, notes, completion state, and reminder times;
- work hours, workdays, monthly salary, and paid days per month;
- weather city, interface language, always-on-top, and compact-mode settings;
- the current focus session's start, end, and running state.

The app does not intentionally upload this data. The uninstaller does not delete the data file so a reinstall can continue where you left off. To erase it completely, quit the app and remove the `WorkdayIsland` configuration directory manually.

## Network access

Only the weather feature requires a network connection. The configured city name is sent to Open-Meteo's geocoding service, and the resolved coordinates are used to request current weather. Those requests are governed by Open-Meteo's privacy practices. Leaving the city empty or blocking network access does not affect todos, reminders, countdowns, or focus sessions.

## Operating-system capabilities

The app uses system notifications, alert sounds, and foreground-window activation to deliver reminders. It contains no telemetry, behavioural analytics, advertising SDK, account login, contacts/calendar access, or general file scanning.

## Contact

For privacy questions, email [asbacklight@gmail.com](mailto:asbacklight@gmail.com).
