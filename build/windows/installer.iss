#define MyAppName "Workday Island"
#define MyAppVersion GetEnv("WORKDAY_ISLAND_VERSION")
#define MyAppPublisher "Backlight Studio"
#define MyAppURL "https://github.com/asbacklight-justin/workday-island"
#define MyAppExeName "Workday Island.exe"

[Setup]
AppId={{2D29C950-40DF-4DA6-AF9A-F057BDE4A67D}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}/issues
AppUpdatesURL={#MyAppURL}/releases/latest
DefaultDirName={autopf}\Workday Island
DefaultGroupName=Workday Island
DisableProgramGroupPage=yes
LicenseFile=..\..\LICENSE
OutputDir=..\..\build\bin
OutputBaseFilename=Workday-Island-v{#MyAppVersion}-windows-x64-Setup
SetupIconFile=..\..\build\windows\appicon.ico
UninstallDisplayIcon={app}\{#MyAppExeName}
ArchitecturesAllowed=x64compatible
ArchitecturesInstallIn64BitMode=x64compatible
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=dialog
VersionInfoVersion={#MyAppVersion}.0
VersionInfoCompany={#MyAppPublisher}
VersionInfoDescription=Workday Island installer
VersionInfoProductName={#MyAppName}
VersionInfoProductVersion={#MyAppVersion}

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"
Name: "chinesesimplified"; MessagesFile: "ChineseSimplified.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "..\..\build\bin\Workday-Island-windows-amd64.exe"; DestDir: "{app}"; DestName: "{#MyAppExeName}"; Flags: ignoreversion
Source: "..\..\build\windows\appicon.ico"; DestDir: "{app}"; DestName: "appicon.ico"; Flags: ignoreversion

[Icons]
Name: "{autoprograms}\Workday Island"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\appicon.ico"
Name: "{autodesktop}\Workday Island"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\appicon.ico"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,Workday Island}"; Flags: nowait postinstall skipifsilent
