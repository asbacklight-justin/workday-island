package main

import (
	"io"
	"net/http"
	"path/filepath"
	"strings"
	"testing"
)

func TestNormaliseStockSymbol(t *testing.T) {
	tests := map[string]string{
		"600519":   "1.600519",
		"000001":   "0.000001",
		"sh000001": "1.000001",
		"sz399006": "0.399006",
		"1.000001": "1.000001",
	}
	for input, want := range tests {
		got, err := normaliseStockSymbol(input)
		if err != nil || got != want {
			t.Fatalf("normaliseStockSymbol(%q) = %q, %v; want %q", input, got, err, want)
		}
	}
	if _, err := normaliseStockSymbol("AAPL"); err == nil {
		t.Fatal("non-A-share code should be rejected")
	}
}

func TestStockQuotesMapAndPreserveWatchlistOrder(t *testing.T) {
	app := NewApp()
	app.httpClient = &http.Client{Transport: roundTripFunc(func(request *http.Request) (*http.Response, error) {
		body := `{"rc":0,"data":{"diff":[` +
			`{"f2":14148.73,"f3":2.72,"f4":374.05,"f12":"399001","f13":0,"f14":"深证成指","f15":14148.73,"f16":13689.01,"f17":13768.6,"f18":13774.68,"f124":1785139905},` +
			`{"f2":3858.25,"f3":1.15,"f4":44.05,"f12":"000001","f13":1,"f14":"上证指数","f15":3858.31,"f16":3793.45,"f17":3808.9,"f18":3814.2,"f124":1785139892}]}}`
		return &http.Response{
			StatusCode: http.StatusOK,
			Header:     make(http.Header),
			Body:       io.NopCloser(strings.NewReader(body)),
		}, nil
	})}
	snapshot, err := app.fetchStockQuotes([]string{"1.000001", "0.399001"})
	if err != nil {
		t.Fatal(err)
	}
	if len(snapshot.Quotes) != 2 || snapshot.Quotes[0].Symbol != "1.000001" || snapshot.Quotes[1].ChangePercent != 2.72 {
		t.Fatalf("unexpected stock snapshot: %#v", snapshot)
	}
}

func TestStockWatchlistPersists(t *testing.T) {
	path := filepath.Join(t.TempDir(), "data.json")
	store := NewStore(path)
	if _, err := store.SaveStockWatchlist([]string{"1.000001", "1.600519", "1.600519"}); err != nil {
		t.Fatal(err)
	}
	reloaded := NewStore(path)
	if err := reloaded.Load(); err != nil {
		t.Fatal(err)
	}
	got := reloaded.Snapshot().StockWatchlist
	if len(got) != 2 || got[1] != "1.600519" {
		t.Fatalf("unexpected persisted watchlist: %#v", got)
	}
}
