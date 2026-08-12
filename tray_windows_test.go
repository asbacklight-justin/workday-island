//go:build windows

package main

import (
	"strings"
	"testing"
)

func TestWindowsTrayLabelsFollowOneLanguage(t *testing.T) {
	t.Parallel()

	zh := windowsTrayLabels("zh")
	if zh.show != "显示工位岛" || zh.chat != "聊天" || zh.english != "英语学习" ||
		zh.ai != "AI 对话" || zh.cloud != "工作云盘" || zh.translate != "翻译" ||
		zh.stocks != "股市" || zh.quit != "退出" {
		t.Fatalf("unexpected Chinese tray labels: %+v", zh)
	}
	if strings.Contains(zh.show, "/") || strings.Contains(zh.quit, "/") {
		t.Fatalf("Chinese tray labels contain mixed-language separators: %+v", zh)
	}

	en := windowsTrayLabels("en")
	if en.show != "Show Workday Island" || en.chat != "Chat" || en.english != "English Learning" ||
		en.ai != "AI Chat" || en.cloud != "Work Cloud" || en.translate != "Translator" ||
		en.stocks != "Stocks" || en.quit != "Quit" {
		t.Fatalf("unexpected English tray labels: %+v", en)
	}
	if strings.Contains(en.show, "/") || strings.Contains(en.quit, "/") {
		t.Fatalf("English tray labels contain mixed-language separators: %+v", en)
	}
}

func TestNormaliseTrayLanguageDefaultsToChinese(t *testing.T) {
	t.Parallel()

	if got := normaliseTrayLanguage("en"); got != "en" {
		t.Fatalf("English language = %q", got)
	}
	for _, language := range []string{"zh", "system", "", "fr"} {
		if got := normaliseTrayLanguage(language); got != "zh" {
			t.Fatalf("language %q normalised to %q", language, got)
		}
	}
}

func TestWindowsTrayNotifyFlagsRequestVisibleTooltip(t *testing.T) {
	t.Parallel()
	flags := windowsTrayNotifyFlags()
	if flags&trayNIFTip == 0 || flags&trayNIFShowTip == 0 {
		t.Fatalf("tray flags must include tip and show-tip: %#x", flags)
	}
}
