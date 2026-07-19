$ErrorActionPreference = "Stop"

$projectDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$iconPath = Join-Path $projectDir "build/windows/appicon.ico"
$resourcePath = Join-Path $projectDir "resource_windows_amd64.syso"
$outputPath = Join-Path $projectDir "build/bin/Workday-Island-windows-amd64.exe"

New-Item -ItemType Directory -Force (Split-Path $outputPath) | Out-Null
Push-Location $projectDir
try {
    go run ./cmd/iconpack build/appicon.png $iconPath
    go install github.com/akavel/rsrc@v0.10.2
    $rsrc = Join-Path (go env GOPATH) "bin/rsrc.exe"
    & $rsrc -arch amd64 -ico $iconPath -manifest build/windows/wails.exe.manifest -o $resourcePath
    $env:GOOS = "windows"
    $env:GOARCH = "amd64"
    $env:CGO_ENABLED = "0"
    go build -buildvcs=false -tags "desktop,wv2runtime.download,production" -ldflags "-H windowsgui -w -s" -o $outputPath .
} finally {
    if (Test-Path $resourcePath) {
        Remove-Item $resourcePath
    }
    Pop-Location
}

Write-Output $outputPath
