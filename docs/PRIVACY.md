# Workday Island privacy note

[中文](PRIVACY.zh-CN.md) · [English](PRIVACY.md)

Last updated: 2026-07-21

Workday Island is local-first. It does not require an account and has no first-party cloud service.

## Data stored on the device

The following data is stored in `WorkdayIsland/data.json` under the user's configuration directory:

- todo titles, notes, completion state, and reminder times;
- work hours, workdays, monthly salary, and paid days per month;
- weather city, interface language, theme, currency symbol, always-on-top, compact-mode opacity and todo options, and the remembered compact-window size;
- the most recent successful weather result, used only as an offline fallback;
- the last successful update-check time, used to limit automatic checks to once per day;
- the current focus session's start, end, and running state.

The app does not intentionally upload this data. The uninstaller does not delete the data file so a reinstall can continue where you left off. To erase it completely, quit the app and remove the `WorkdayIsland` configuration directory manually.

## Network access

Weather sends the configured city name to Open-Meteo's geocoding service and uses the resolved coordinates to request current conditions. Update checks access this project's public GitHub Releases API to read the version, release notes, and package URLs; no todos, salary values, or other local business data are sent. Automatic update checks run at most once per day and can also be triggered manually from About. Blocking network access does not affect todos, reminders, countdowns, or focus sessions.

## Operating-system capabilities

The app uses system notifications, alert sounds, and foreground-window activation to deliver reminders. It contains no telemetry, behavioural analytics, advertising SDK, account login, contacts/calendar access, or general file scanning.

## Contact

For privacy questions, email [asbacklight@gmail.com](mailto:asbacklight@gmail.com).
