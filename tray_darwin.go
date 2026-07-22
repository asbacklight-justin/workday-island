//go:build darwin

package main

/*
#cgo CFLAGS: -x objective-c
#cgo LDFLAGS: -framework Cocoa
#import <Cocoa/Cocoa.h>

static NSStatusItem *workdayStatusItem = nil;
static NSMenu *workdayTrayMenu = nil;
static BOOL workdayWindowHidden = NO;

@interface WorkdayIslandTrayTarget : NSObject
- (void)handleStatusItemClick:(id)sender;
- (void)showWindow:(id)sender;
- (void)quitApplication:(id)sender;
- (void)applicationDidBecomeActive:(NSNotification *)notification;
@end

static WorkdayIslandTrayTarget *workdayTrayTarget = nil;

static void showWorkdayIslandWindow(void) {
    workdayWindowHidden = NO;
    [NSApp setActivationPolicy:NSApplicationActivationPolicyRegular];
    for (NSWindow *window in [NSApp windows]) {
        if (![window isKindOfClass:[NSPanel class]]) {
            [window makeKeyAndOrderFront:nil];
            break;
        }
    }
    [NSApp activateIgnoringOtherApps:YES];
}

@implementation WorkdayIslandTrayTarget
- (void)handleStatusItemClick:(id)sender {
	NSEvent *event = [NSApp currentEvent];
	if (event.type == NSEventTypeRightMouseUp) {
		[NSMenu popUpContextMenu:workdayTrayMenu withEvent:event forView:workdayStatusItem.button];
		return;
	}
    [self showWindow:nil];
}

- (void)showWindow:(id)sender {
    showWorkdayIslandWindow();
}

- (void)quitApplication:(id)sender {
    [NSApp terminate:nil];
}

- (void)applicationDidBecomeActive:(NSNotification *)notification {
    if (workdayWindowHidden) {
        showWorkdayIslandWindow();
    }
}
@end

static void start_workday_island_tray(void) {
    dispatch_async(dispatch_get_main_queue(), ^{
        if (workdayStatusItem != nil) {
            return;
        }

        workdayTrayTarget = [[WorkdayIslandTrayTarget alloc] init];
		[[NSNotificationCenter defaultCenter] addObserver:workdayTrayTarget
		                                         selector:@selector(applicationDidBecomeActive:)
		                                             name:NSApplicationDidBecomeActiveNotification
		                                           object:NSApp];
        workdayTrayMenu = [[NSMenu alloc] initWithTitle:@"Workday Island"];

        NSMenuItem *showItem = [[NSMenuItem alloc] initWithTitle:@"显示工位岛 / Show Workday Island"
                                                          action:@selector(showWindow:)
                                                   keyEquivalent:@""];
        showItem.target = workdayTrayTarget;
        [workdayTrayMenu addItem:showItem];
        [showItem release];
        [workdayTrayMenu addItem:[NSMenuItem separatorItem]];

        NSMenuItem *quitItem = [[NSMenuItem alloc] initWithTitle:@"退出 / Quit"
                                                          action:@selector(quitApplication:)
                                                   keyEquivalent:@""];
        quitItem.target = workdayTrayTarget;
        [workdayTrayMenu addItem:quitItem];
        [quitItem release];

		workdayStatusItem = [[[NSStatusBar systemStatusBar] statusItemWithLength:NSSquareStatusItemLength] retain];
		workdayStatusItem.autosaveName = @"com.backlight.workday-island.status-item";
		workdayStatusItem.visible = YES;
        NSStatusBarButton *button = workdayStatusItem.button;
        NSImage *image = [NSImage imageWithSystemSymbolName:@"timer" accessibilityDescription:@"Workday Island"];
        image.template = YES;
        button.image = image;
        button.toolTip = @"工位岛 · Workday Island";
        button.target = workdayTrayTarget;
        button.action = @selector(handleStatusItemClick:);
        [button sendActionOn:(NSEventMaskLeftMouseUp | NSEventMaskRightMouseUp)];
    });
}

static void stop_workday_island_tray(void) {
    dispatch_async(dispatch_get_main_queue(), ^{
		if (workdayStatusItem != nil) {
			[[NSStatusBar systemStatusBar] removeStatusItem:workdayStatusItem];
			[workdayStatusItem release];
			workdayStatusItem = nil;
        }
        [workdayTrayMenu release];
        workdayTrayMenu = nil;
		if (workdayTrayTarget != nil) {
			[[NSNotificationCenter defaultCenter] removeObserver:workdayTrayTarget];
		}
        [workdayTrayTarget release];
        workdayTrayTarget = nil;
		workdayWindowHidden = NO;
    });
}

static void set_workday_island_tray_hidden(int hidden) {
    dispatch_async(dispatch_get_main_queue(), ^{
        workdayWindowHidden = hidden != 0;
		// Keep the regular activation policy so the Dock remains a recovery path.
		// macOS may obscure newly-created status items when the active app's menus
		// and a crowded status area overlap.
		[NSApp setActivationPolicy:NSApplicationActivationPolicyRegular];
		if (!hidden) {
			[NSApp activateIgnoringOtherApps:YES];
		}
    });
}
*/
import "C"

func startTray(_ *App) {
	C.start_workday_island_tray()
}

func stopTray() {
	C.stop_workday_island_tray()
}

func setTrayWindowHidden(hidden bool) {
	value := C.int(0)
	if hidden {
		value = 1
	}
	C.set_workday_island_tray_hidden(value)
}
