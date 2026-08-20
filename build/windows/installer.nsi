Unicode true

!ifndef VERSION
  !define VERSION "0.0.0"
!endif
!ifndef VERSION_INFO
  !define VERSION_INFO "0.0.0.0"
!endif

Name "Workday Island ${VERSION}"
OutFile "..\\bin\\Workday-Island-v${VERSION}-windows-x64-Setup.exe"
InstallDir "$LOCALAPPDATA\\Workday Island"
RequestExecutionLevel user
SetCompressor /SOLID lzma
BrandingText "Workday Island"
Icon "appicon.ico"

VIProductVersion "${VERSION_INFO}"
VIAddVersionKey "ProductName" "Workday Island"
VIAddVersionKey "ProductVersion" "${VERSION}"
VIAddVersionKey "FileDescription" "Workday Island installer"
VIAddVersionKey "CompanyName" "Backlight Studio"

Page directory
Page instfiles
UninstPage uninstConfirm
UninstPage instfiles

Section "Install Workday Island"
  SetOutPath "$INSTDIR"
  File /oname=WorkdayIsland.exe "..\\bin\\Workday-Island-windows-amd64.exe"
  Rename "$INSTDIR\\WorkdayIsland.exe" "$INSTDIR\\Workday Island.exe"
  File /oname=LICENSE.txt "..\\..\\LICENSE"
  WriteUninstaller "$INSTDIR\\Uninstall.exe"

  CreateDirectory "$SMPROGRAMS\\Workday Island"
  CreateShortCut "$SMPROGRAMS\\Workday Island\\Workday Island.lnk" "$INSTDIR\\Workday Island.exe" "" "$INSTDIR\\Workday Island.exe" 0
  CreateShortCut "$DESKTOP\\Workday Island.lnk" "$INSTDIR\\Workday Island.exe" "" "$INSTDIR\\Workday Island.exe" 0

  WriteRegStr HKCU "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\WorkdayIsland" "DisplayName" "Workday Island"
  WriteRegStr HKCU "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\WorkdayIsland" "DisplayVersion" "${VERSION}"
  WriteRegStr HKCU "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\WorkdayIsland" "Publisher" "Backlight Studio"
  WriteRegStr HKCU "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\WorkdayIsland" "DisplayIcon" "$INSTDIR\\Workday Island.exe"
  WriteRegStr HKCU "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\WorkdayIsland" "UninstallString" "$\"$INSTDIR\\Uninstall.exe$\""
  WriteRegDWORD HKCU "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\WorkdayIsland" "NoModify" 1
  WriteRegDWORD HKCU "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\WorkdayIsland" "NoRepair" 1
SectionEnd

Section "Uninstall"
  Delete "$DESKTOP\\Workday Island.lnk"
  Delete "$SMPROGRAMS\\Workday Island\\Workday Island.lnk"
  RMDir "$SMPROGRAMS\\Workday Island"
  DeleteRegKey HKCU "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\WorkdayIsland"
  Delete "$INSTDIR\\Workday Island.exe"
  Delete "$INSTDIR\\LICENSE.txt"
  Delete "$INSTDIR\\Uninstall.exe"
  RMDir "$INSTDIR"
SectionEnd
