#!/usr/bin/env bash
set -euo pipefail

project_dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
app_bundle="$project_dir/build/bin/Workday Island.app"
contents_dir="$app_bundle/Contents"
macos_dir="$contents_dir/MacOS"
resources_dir="$contents_dir/Resources"
work_dir="$(mktemp -d "${TMPDIR:-/tmp}/workday-island-universal.XXXXXX")"

cleanup() { rm -rf "$work_dir"; }
trap cleanup EXIT
mkdir -p "$macos_dir" "$resources_dir"

cd "$project_dir"
build_arch() {
  local go_arch="$1"
  local clang_arch="$2"
  echo "Building macOS $clang_arch..."
  env GOOS=darwin GOARCH="$go_arch" CGO_ENABLED=1 CC="clang -arch $clang_arch" \
    CGO_CFLAGS="-arch $clang_arch -mmacosx-version-min=12.0" \
    CGO_LDFLAGS="-arch $clang_arch -framework UniformTypeIdentifiers -mmacosx-version-min=12.0" \
    MACOSX_DEPLOYMENT_TARGET=12.0 GOCACHE="${TMPDIR:-/tmp}/workday-island-go-cache-$go_arch" \
    go build -buildvcs=false -tags "desktop,wv2runtime.download,production" -ldflags "-w -s" \
    -o "$work_dir/Workday Island-$clang_arch" .
}

build_arch amd64 x86_64
build_arch arm64 arm64
lipo -create "$work_dir/Workday Island-x86_64" "$work_dir/Workday Island-arm64" -output "$macos_dir/Workday Island"
cp "$project_dir/build/darwin/Info.plist" "$contents_dir/Info.plist"
env GOCACHE="${TMPDIR:-/tmp}/workday-island-go-cache-tools" \
  go run ./cmd/iconpack "$project_dir/build/appicon.png" "$resources_dir/iconfile.icns"
codesign --force --deep --sign - "$app_bundle" >/dev/null
lipo -info "$macos_dir/Workday Island"
echo "$app_bundle"
