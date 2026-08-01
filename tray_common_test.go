package main

import (
	"strings"
	"testing"
)

func TestTrayLabelsFollowOneLanguage(t *testing.T) {
	t.Parallel()

	zh := trayLabels("zh")
	if zh.show != "显示工位岛" || zh.chat != "聊天" || zh.english != "英语学习" ||
		zh.ai != "AI 对话" || zh.cloud != "工作云盘" || zh.translate != "翻译" ||
		zh.stocks != "股市" || zh.quit != "退出" {
		t.Fatalf("unexpected Chinese tray labels: %+v", zh)
	}
	if strings.Contains(zh.show, "/") || strings.Contains(zh.quit, "/") {
		t.Fatalf("Chinese tray labels contain mixed-language separators: %+v", zh)
	}

	en := trayLabels("en")
	if en.show != "Show Workday Island" || en.chat != "Chat" || en.english != "English Learning" ||
		en.ai != "AI Chat" || en.cloud != "Work Cloud" || en.translate != "Translator" ||
		en.stocks != "Stocks" || en.quit != "Quit" {
		t.Fatalf("unexpected English tray labels: %+v", en)
	}
}

func TestTrayCommandRoutesMatchAllShortcuts(t *testing.T) {
	t.Parallel()

	want := map[int]string{
		trayChatCommand: "chat", trayEnglishCommand: "english", trayAICommand: "ai",
		trayCloudCommand: "cloud", trayTranslateCommand: "translator", trayStocksCommand: "stocks",
	}
	for command, page := range want {
		if got, ok := trayPageForCommand(command); !ok || got != page {
			t.Fatalf("command %d routed to %q, %v", command, got, ok)
		}
	}
	for _, command := range []int{0, trayShowCommand, trayQuitCommand} {
		if got, ok := trayPageForCommand(command); ok || got != "" {
			t.Fatalf("non-navigation command %d routed to %q, %v", command, got, ok)
		}
	}
}
