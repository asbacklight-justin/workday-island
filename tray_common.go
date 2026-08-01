package main

const (
	trayShowCommand      = 1001
	trayQuitCommand      = 1002
	trayChatCommand      = 1003
	trayEnglishCommand   = 1004
	trayAICommand        = 1005
	trayCloudCommand     = 1006
	trayTranslateCommand = 1007
	trayStocksCommand    = 1008
)

type trayMenuLabels struct {
	tooltip   string
	show      string
	chat      string
	english   string
	ai        string
	cloud     string
	translate string
	stocks    string
	quit      string
}

func normaliseTrayLanguage(language string) string {
	if language == "en" {
		return "en"
	}
	return "zh"
}

func trayLabels(language string) trayMenuLabels {
	if normaliseTrayLanguage(language) == "en" {
		return trayMenuLabels{
			tooltip: "Workday Island", show: "Show Workday Island", chat: "Chat",
			english: "English Learning", ai: "AI Chat", cloud: "Work Cloud",
			translate: "Translator", stocks: "Stocks", quit: "Quit",
		}
	}
	return trayMenuLabels{
		tooltip: "工位岛", show: "显示工位岛", chat: "聊天", english: "英语学习",
		ai: "AI 对话", cloud: "工作云盘", translate: "翻译", stocks: "股市", quit: "退出",
	}
}

func trayPageForCommand(command int) (string, bool) {
	switch command {
	case trayChatCommand:
		return "chat", true
	case trayEnglishCommand:
		return "english", true
	case trayAICommand:
		return "ai", true
	case trayCloudCommand:
		return "cloud", true
	case trayTranslateCommand:
		return "translator", true
	case trayStocksCommand:
		return "stocks", true
	default:
		return "", false
	}
}
