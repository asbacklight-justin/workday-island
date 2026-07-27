package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"regexp"
	"strconv"
	"strings"
	"time"
)

const stockQuoteURL = "https://push2.eastmoney.com/api/qt/ulist.np/get"

var stockCodePattern = regexp.MustCompile(`^\d{6}$`)

func defaultStockWatchlist() []string {
	return []string{"1.000001", "0.399001", "0.399006"}
}

func normaliseStockWatchlist(symbols []string) []string {
	seen := make(map[string]bool, len(symbols))
	result := make([]string, 0, min(len(symbols), 12))
	for _, value := range symbols {
		symbol, err := normaliseStockSymbol(value)
		if err != nil || seen[symbol] || len(result) >= 12 {
			continue
		}
		seen[symbol] = true
		result = append(result, symbol)
	}
	return result
}

func normaliseStockSymbol(value string) (string, error) {
	value = strings.ToLower(strings.TrimSpace(value))
	value = strings.ReplaceAll(value, " ", "")
	if strings.HasPrefix(value, "1.") || strings.HasPrefix(value, "0.") {
		parts := strings.SplitN(value, ".", 2)
		if len(parts) == 2 && stockCodePattern.MatchString(parts[1]) {
			return parts[0] + "." + parts[1], nil
		}
	}
	if strings.HasPrefix(value, "sh") && stockCodePattern.MatchString(value[2:]) {
		return "1." + value[2:], nil
	}
	if strings.HasPrefix(value, "sz") && stockCodePattern.MatchString(value[2:]) {
		return "0." + value[2:], nil
	}
	if !stockCodePattern.MatchString(value) {
		return "", errors.New("请输入 6 位 A 股代码，例如 600519")
	}
	if strings.ContainsRune("569", rune(value[0])) {
		return "1." + value, nil
	}
	return "0." + value, nil
}

func (a *App) GetStockQuotes() StockSnapshot {
	return a.refreshStockQuotes(a.store.Snapshot().StockWatchlist)
}

func (a *App) AddStock(value string) (StockSnapshot, error) {
	symbol, err := normaliseStockSymbol(value)
	if err != nil {
		return StockSnapshot{}, err
	}
	current := a.store.Snapshot().StockWatchlist
	for _, existing := range current {
		if existing == symbol {
			return a.refreshStockQuotes(current), nil
		}
	}
	if len(current) >= 12 {
		return StockSnapshot{}, errors.New("最多关注 12 个指数或股票")
	}
	validation, err := a.fetchStockQuotes([]string{symbol})
	if err != nil {
		return StockSnapshot{}, err
	}
	if len(validation.Quotes) != 1 || validation.Quotes[0].Name == "" {
		return StockSnapshot{}, errors.New("未找到该股票，请检查代码")
	}
	current = append(current, symbol)
	if _, err := a.store.SaveStockWatchlist(current); err != nil {
		return StockSnapshot{}, err
	}
	return a.refreshStockQuotes(current), nil
}

func (a *App) RemoveStock(symbol string) (StockSnapshot, error) {
	normalised, err := normaliseStockSymbol(symbol)
	if err != nil {
		return StockSnapshot{}, err
	}
	current := a.store.Snapshot().StockWatchlist
	filtered := make([]string, 0, len(current))
	for _, existing := range current {
		if existing != normalised {
			filtered = append(filtered, existing)
		}
	}
	if _, err := a.store.SaveStockWatchlist(filtered); err != nil {
		return StockSnapshot{}, err
	}
	return a.refreshStockQuotes(filtered), nil
}

func (a *App) refreshStockQuotes(symbols []string) StockSnapshot {
	a.stockMu.Lock()
	defer a.stockMu.Unlock()
	snapshot, err := a.fetchStockQuotes(symbols)
	if err == nil {
		a.stockCache = snapshot
		return snapshot
	}
	if len(a.stockCache.Quotes) > 0 {
		cached := a.stockCache
		cached.Stale = true
		cached.Error = err.Error()
		return cached
	}
	return StockSnapshot{Quotes: []StockQuote{}, UpdatedAt: time.Now(), Source: "东方财富", Stale: true, Error: err.Error()}
}

func (a *App) fetchStockQuotes(symbols []string) (StockSnapshot, error) {
	symbols = normaliseStockWatchlist(symbols)
	if len(symbols) == 0 {
		return StockSnapshot{Quotes: []StockQuote{}, UpdatedAt: time.Now(), Source: "东方财富"}, nil
	}
	query := url.Values{
		"fltt":   {"2"},
		"secids": {strings.Join(symbols, ",")},
		"fields": {"f2,f3,f4,f12,f13,f14,f15,f16,f17,f18,f124"},
	}
	request, err := http.NewRequest(http.MethodGet, stockQuoteURL+"?"+query.Encode(), nil)
	if err != nil {
		return StockSnapshot{}, err
	}
	request.Header.Set("Accept", "application/json")
	request.Header.Set("User-Agent", "Workday-Island/"+appVersion)
	response, err := a.httpClient.Do(request)
	if err != nil {
		return StockSnapshot{}, fmt.Errorf("获取行情失败: %w", err)
	}
	defer response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return StockSnapshot{}, fmt.Errorf("行情服务返回 HTTP %d", response.StatusCode)
	}
	var envelope struct {
		Code int `json:"rc"`
		Data *struct {
			Diff []stockQuoteWire `json:"diff"`
		} `json:"data"`
	}
	if err := json.NewDecoder(response.Body).Decode(&envelope); err != nil {
		return StockSnapshot{}, fmt.Errorf("解析行情失败: %w", err)
	}
	if envelope.Code != 0 || envelope.Data == nil {
		return StockSnapshot{}, errors.New("行情服务暂不可用")
	}
	quotes := make([]StockQuote, 0, len(envelope.Data.Diff))
	for _, item := range envelope.Data.Diff {
		updatedAt := time.Unix(item.UpdatedAt.Int64(), 0)
		if item.UpdatedAt.Int64() <= 0 {
			updatedAt = time.Now()
		}
		quotes = append(quotes, StockQuote{
			Symbol:        fmt.Sprintf("%d.%s", item.Market.Int64(), item.Code),
			Code:          item.Code,
			Name:          item.Name,
			Price:         item.Price.Float64(),
			Change:        item.Change.Float64(),
			ChangePercent: item.ChangePercent.Float64(),
			Open:          item.Open.Float64(),
			High:          item.High.Float64(),
			Low:           item.Low.Float64(),
			PreviousClose: item.PreviousClose.Float64(),
			UpdatedAt:     updatedAt,
		})
	}
	order := make(map[string]int, len(symbols))
	for index, symbol := range symbols {
		order[symbol] = index
	}
	sortStockQuotes(quotes, order)
	return StockSnapshot{Quotes: quotes, UpdatedAt: time.Now(), Source: "东方财富"}, nil
}

type stockQuoteWire struct {
	Price         quoteNumber `json:"f2"`
	ChangePercent quoteNumber `json:"f3"`
	Change        quoteNumber `json:"f4"`
	Code          string      `json:"f12"`
	Market        quoteNumber `json:"f13"`
	Name          string      `json:"f14"`
	High          quoteNumber `json:"f15"`
	Low           quoteNumber `json:"f16"`
	Open          quoteNumber `json:"f17"`
	PreviousClose quoteNumber `json:"f18"`
	UpdatedAt     quoteNumber `json:"f124"`
}

type quoteNumber float64

func (number *quoteNumber) UnmarshalJSON(data []byte) error {
	value := strings.Trim(strings.TrimSpace(string(data)), `"`)
	if value == "" || value == "-" || value == "null" {
		*number = 0
		return nil
	}
	parsed, err := strconv.ParseFloat(value, 64)
	if err != nil {
		return err
	}
	*number = quoteNumber(parsed)
	return nil
}

func (number quoteNumber) Float64() float64 {
	return float64(number)
}

func (number quoteNumber) Int64() int64 {
	return int64(number)
}

func sortStockQuotes(quotes []StockQuote, order map[string]int) {
	for left := 0; left < len(quotes); left++ {
		for right := left + 1; right < len(quotes); right++ {
			if order[quotes[right].Symbol] < order[quotes[left].Symbol] {
				quotes[left], quotes[right] = quotes[right], quotes[left]
			}
		}
	}
}
