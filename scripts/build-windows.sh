#!/usr/bin/env bash
set -euo pipefail

project_dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
mkdir -p "$project_dir/build/bin"
cd "$project_dir"

icon_path="$project_dir/build/windows/appicon.ico"
resource_path="$project_dir/resource_windows_amd64.syso"
tool_dir="$(mktemp -d "${TMPDIR:-/tmp}/workday-island-rsrc.XXXXXX")"
env GOCACHE="${TMPDIR:-/tmp}/workday-island-go-cache-tools" \
  go run ./cmd/iconpack "$project_dir/build/appicon.png" "$icon_path"
GOBIN="$tool_dir" GOCACHE="${TMPDIR:-/tmp}/workday-island-go-cache-tools" \
  go install github.com/akavel/rsrc@v0.10.2
"$tool_dir/rsrc" \
  -arch amd64 \
  -ico "$icon_path" \
  -manifest "$project_dir/build/windows/wails.exe.manifest" \
  -o "$resource_path"

cleanup() { rm -f "$resource_path"; rm -rf "$tool_dir"; }
trap cleanup EXIT
env GOOS=windows GOARCH=amd64 CGO_ENABLED=0 GOCACHE="${TMPDIR:-/tmp}/workday-island-go-cache-windows-amd64" \
  go build -buildvcs=false -tags "desktop,wv2runtime.download,production" -ldflags "-H windowsgui -w -s" \
  -o "build/bin/Workday-Island-windows-amd64.exe" .
echo "$project_dir/build/bin/Workday-Island-windows-amd64.exe"
