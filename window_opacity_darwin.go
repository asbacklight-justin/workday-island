//go:build darwin && cgo

package main

/*
#cgo CFLAGS: -x objective-c
#cgo LDFLAGS: -framework AppKit
#include <AppKit/AppKit.h>
#include <dispatch/dispatch.h>
#include <stdlib.h>

typedef struct {
    double opacity;
} WorkdayOpacityRequest;

static void set_workday_island_opacity_on_main(void *raw) {
    WorkdayOpacityRequest *request = (WorkdayOpacityRequest *)raw;
    CGFloat opacity = (CGFloat)request->opacity;
    free(request);
    for (NSWindow *window in [NSApp windows]) {
        [window setAlphaValue:opacity];
    }
}

static void set_workday_island_opacity(double opacity) {
    WorkdayOpacityRequest *request = malloc(sizeof(WorkdayOpacityRequest));
    request->opacity = opacity;
    dispatch_async_f(dispatch_get_main_queue(), request, set_workday_island_opacity_on_main);
}
*/
import "C"

func setWindowOpacity(opacity float64) {
	if opacity < 0.3 {
		opacity = 0.3
	}
	if opacity > 1 {
		opacity = 1
	}
	C.set_workday_island_opacity(C.double(opacity))
}
