#!/usr/bin/env bash
set -euo pipefail

project_dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
version="$(tr -d '[:space:]' < "$project_dir/VERSION")"

IFS=. read -r major minor patch <<< "$version"
version_info="${major}.${minor}.${patch}.0"

"$project_dir/scripts/build-windows.sh"
makensis -DVERSION="$version" -DVERSION_INFO="$version_info" "$project_dir/build/windows/installer.nsi"
echo "$project_dir/build/bin/Workday-Island-v${version}-windows-x64-Setup.exe"
