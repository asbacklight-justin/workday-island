$ErrorActionPreference = "Stop"

$projectDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$version = (Get-Content (Join-Path $projectDir "VERSION") -Raw).Trim()
$env:WORKDAY_ISLAND_VERSION = $version

Push-Location $projectDir
try {
    & (Join-Path $projectDir "scripts/build-windows.ps1")

    $compiler = "${env:ProgramFiles(x86)}\Inno Setup 6\ISCC.exe"
    if (-not (Test-Path $compiler)) {
        throw "Inno Setup 6 was not found at $compiler"
    }
    & $compiler (Join-Path $projectDir "build/windows/installer.iss")
} finally {
    Pop-Location
}
