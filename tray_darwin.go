//go:build darwin

package main

/*
#cgo CFLAGS: -x objective-c
#cgo LDFLAGS: -framework Cocoa
#import <Cocoa/Cocoa.h>
#include <stdlib.h>

extern void WorkdayIslandTrayNavigate(int command);

enum {
    WorkdayTrayShow = 1001,
    WorkdayTrayQuit = 1002,
    WorkdayTrayChat = 1003,
    WorkdayTrayEnglish = 1004,
    WorkdayTrayAI = 1005,
    WorkdayTrayCloud = 1006,
    WorkdayTrayTranslate = 1007,
    WorkdayTrayStocks = 1008
};

static NSStatusItem *workdayStatusItem = nil;
static NSMenu *workdayTrayMenu = nil;
static BOOL workdayWindowHidden = NO;

@interface WorkdayIslandTrayTarget : NSObject
- (void)handleStatusItemClick:(id)sender;
- (void)showWindow:(id)sender;
- (void)openPage:(id)sender;
- (void)quitApplication:(id)sender;
- (void)applicationDidBecomeActive:(NSNotification *)notification;
@end

static WorkdayIslandTrayTarget *workdayTrayTarget = nil;

static NSImage *create_workday_island_template_icon(void) {
    NSImage *image = [[NSImage alloc] initWithSize:NSMakeSize(18, 18)];
    [image lockFocus];
    [[NSColor blackColor] setStroke];
    [[NSColor blackColor] setFill];

    // A compact monochrome Workday Island mark: rounded desktop screen,
    // floating island wave, status light and stand. Template rendering lets
    // macOS choose the correct menu-bar colour automatically.
    NSBezierPath *screen = [NSBezierPath bezierPathWithRoundedRect:NSMakeRect(1.75, 3.75, 14.5, 11.75)
                                                           xRadius:3.1
                                                           yRadius:3.1];
    screen.lineWidth = 1.55;
    [screen stroke];

    NSBezierPath *island = [NSBezierPath bezierPath];
    island.lineWidth = 1.45;
    island.lineCapStyle = NSLineCapStyleRound;
    [island moveToPoint:NSMakePoint(4.4, 8.0)];
    [island curveToPoint:NSMakePoint(13.1, 8.0)
           controlPoint1:NSMakePoint(6.0, 6.7)
           controlPoint2:NSMakePoint(10.9, 6.7)];
    [island stroke];

    [[NSBezierPath bezierPathWithOvalInRect:NSMakeRect(11.7, 11.15, 1.75, 1.75)] fill];

    NSBezierPath *stand = [NSBezierPath bezierPath];
    stand.lineWidth = 1.45;
    stand.lineCapStyle = NSLineCapStyleRound;
    [stand moveToPoint:NSMakePoint(6.3, 1.9)];
    [stand lineToPoint:NSMakePoint(11.7, 1.9)];
    [stand stroke];

    [image unlockFocus];
    image.template = YES;
    image.size = NSMakeSize(18, 18);
    return image;
}

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

- (void)openPage:(id)sender {
    showWorkdayIslandWindow();
    WorkdayIslandTrayNavigate((int)[sender tag]);
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

        NSMenuItem *showItem = [[NSMenuItem alloc] initWithTitle:@"显示工位岛"
                                                          action:@selector(showWindow:)
                                                   keyEquivalent:@""];
        showItem.target = workdayTrayTarget;
        showItem.tag = WorkdayTrayShow;
        [workdayTrayMenu addItem:showItem];
        [showItem release];
        [workdayTrayMenu addItem:[NSMenuItem separatorItem]];

        NSArray *shortcutTitles = @[@"聊天", @"英语学习", @"AI 对话", @"工作云盘", @"翻译", @"股市"];
        NSArray *shortcutTags = @[@(WorkdayTrayChat), @(WorkdayTrayEnglish), @(WorkdayTrayAI),
                                  @(WorkdayTrayCloud), @(WorkdayTrayTranslate), @(WorkdayTrayStocks)];
        for (NSUInteger index = 0; index < shortcutTitles.count; index++) {
            NSMenuItem *item = [[NSMenuItem alloc] initWithTitle:shortcutTitles[index]
                                                          action:@selector(openPage:)
                                                   keyEquivalent:@""];
            item.target = workdayTrayTarget;
            item.tag = [shortcutTags[index] integerValue];
            [workdayTrayMenu addItem:item];
            [item release];
        }
        [workdayTrayMenu addItem:[NSMenuItem separatorItem]];

        NSMenuItem *quitItem = [[NSMenuItem alloc] initWithTitle:@"退出"
                                                          action:@selector(quitApplication:)
                                                   keyEquivalent:@""];
        quitItem.target = workdayTrayTarget;
        quitItem.tag = WorkdayTrayQuit;
        [workdayTrayMenu addItem:quitItem];
        [quitItem release];

		workdayStatusItem = [[[NSStatusBar systemStatusBar] statusItemWithLength:NSSquareStatusItemLength] retain];
        workdayStatusItem.autosaveName = @"com.backlight.workday-island.status-item";
        workdayStatusItem.visible = YES;
        NSStatusBarButton *button = workdayStatusItem.button;
        NSImage *image = create_workday_island_template_icon();
        button.image = image;
        [image release];
        button.toolTip = @"工位岛";
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
		if (hidden) {
			// Match Windows close-to-tray behaviour: remove the Dock/taskbar entry
			// while keeping the process, reminders and menu-bar item alive.
			[NSApp setActivationPolicy:NSApplicationActivationPolicyAccessory];
		} else {
			[NSApp setActivationPolicy:NSApplicationActivationPolicyRegular];
			[NSApp activateIgnoringOtherApps:YES];
		}
    });
}

static NSString *copy_workday_tray_string(const char *value) {
    if (value == NULL) {
        return [@"" copy];
    }
    return [[NSString alloc] initWithUTF8String:value];
}

static void set_workday_island_tray_language(const char *tooltip,
                                              const char *show,
                                              const char *chat,
                                              const char *english,
                                              const char *ai,
                                              const char *cloud,
                                              const char *translate,
                                              const char *stocks,
                                              const char *quit) {
    NSString *tooltipValue = copy_workday_tray_string(tooltip);
    NSString *showValue = copy_workday_tray_string(show);
    NSString *chatValue = copy_workday_tray_string(chat);
    NSString *englishValue = copy_workday_tray_string(english);
    NSString *aiValue = copy_workday_tray_string(ai);
    NSString *cloudValue = copy_workday_tray_string(cloud);
    NSString *translateValue = copy_workday_tray_string(translate);
    NSString *stocksValue = copy_workday_tray_string(stocks);
    NSString *quitValue = copy_workday_tray_string(quit);
    dispatch_async(dispatch_get_main_queue(), ^{
        if (workdayStatusItem != nil) {
            workdayStatusItem.button.toolTip = tooltipValue;
        }
        if (workdayTrayMenu != nil) {
            [workdayTrayMenu itemWithTag:WorkdayTrayShow].title = showValue;
            [workdayTrayMenu itemWithTag:WorkdayTrayChat].title = chatValue;
            [workdayTrayMenu itemWithTag:WorkdayTrayEnglish].title = englishValue;
            [workdayTrayMenu itemWithTag:WorkdayTrayAI].title = aiValue;
            [workdayTrayMenu itemWithTag:WorkdayTrayCloud].title = cloudValue;
            [workdayTrayMenu itemWithTag:WorkdayTrayTranslate].title = translateValue;
            [workdayTrayMenu itemWithTag:WorkdayTrayStocks].title = stocksValue;
            [workdayTrayMenu itemWithTag:WorkdayTrayQuit].title = quitValue;
        }
        [tooltipValue release];
        [showValue release];
        [chatValue release];
        [englishValue release];
        [aiValue release];
        [cloudValue release];
        [translateValue release];
        [stocksValue release];
        [quitValue release];
    });
}
*/
import "C"

import "unsafe"

func startTray(app *App) {
	setDarwinTrayApp(app)
	C.start_workday_island_tray()
	setTrayLanguage(app.store.Snapshot().Settings.Language)
}

func stopTray() {
	C.stop_workday_island_tray()
	setDarwinTrayApp(nil)
}

func setTrayWindowHidden(hidden bool) {
	value := C.int(0)
	if hidden {
		value = 1
	}
	C.set_workday_island_tray_hidden(value)
}

func setTrayLanguage(language string) {
	labels := trayLabels(language)
	values := []*C.char{
		C.CString(labels.tooltip), C.CString(labels.show), C.CString(labels.chat),
		C.CString(labels.english), C.CString(labels.ai), C.CString(labels.cloud),
		C.CString(labels.translate), C.CString(labels.stocks), C.CString(labels.quit),
	}
	defer func() {
		for _, value := range values {
			C.free(unsafe.Pointer(value))
		}
	}()
	C.set_workday_island_tray_language(
		values[0], values[1], values[2], values[3], values[4],
		values[5], values[6], values[7], values[8],
	)
}
