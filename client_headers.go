package main

import "net/http"

const clientSource = "workday-island"

func setBacklightClientHeaders(header http.Header) {
	header.Set("X-Client-Source", clientSource)
	header.Set("X-Client-Version", appVersion)
}
