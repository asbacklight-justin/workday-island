#!/usr/bin/env bash
set -euo pipefail

project_dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
version="${VERSION:-$(tr -d '[:space:]' < "$project_dir/VERSION")}"
app_bundle="$project_dir/build/bin/Workday Island.app"
dmg_path="$project_dir/build/bin/Workday-Island-v${version}-macOS-universal.dmg"
stage_dir="$(mktemp -d "${TMPDIR:-/tmp}/workday-island-dmg.XXXXXX")"

cleanup() { rm -rf "$stage_dir"; }
trap cleanup EXIT

"$project_dir/scripts/build-macos.sh"
cp -R "$app_bundle" "$stage_dir/Workday Island.app"
ln -s /Applications "$stage_dir/Applications"
hdiutil create \
  -volname "Workday Island" \
  -srcfolder "$stage_dir" \
  -ov \
  -format UDZO \
  "$dmg_path"

echo "$dmg_path"
