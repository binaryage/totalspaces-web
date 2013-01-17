---
layout: ts-doc
title: TotalSpaces Questions
subtitle: Questions and answers
---

0. [What systems will TotalSpaces run on?](#system-requirements)
0. [Where is TotalSpaces?](#finding-totalspaces)
0. [Help, I can't see the menu bar icon!](#menubar-icon)
0. [How can I make a particular app stay on a particular desktop in the grid?](#app-assignments)
0. [Why is there black blocking on the screen when you change desktop?](#black-blocking)
0. [How can I uninstall TotalSpaces?](#uninstall)
0. [Why are there no diagonal transitions?](#diagonal-transitions)
0. [How can I turn on growl notifications?](#growl-notifications)
0. [How can I make the transitions even faster than the slider allows?](#faster-transitions)
0. [How can I make the notification graphic stay on the screen longer?](#longer-notifications)
0. [How can I adjust the mouse-at-edge switch timing?](#mouse-edge-timings)

## <a id="system-requirements"></a>What systems will TotalSpaces run on?

TotalSpaces is tested on **OSX Lion 10.7.5**, and **OSX Mountain Lion 10.8.2**, and should work on any mac that can run these operating systems. We also try to keep compatibility with earlier versions of Lion and Mountain Lion, and we add support for new versions as soon as the betas are available.

## <a id="finding-totalspaces"></a>Where is TotalSpaces?

TotalSpaces runs without an icon in the Dock, but instead an icon like this should appear in your menu bar.

<img src="/images/menubar-icon.png">

## <a id="menubar-icon"></a>Help, I can't see the menu bar icon!

There is an option to hide the menu bar icon, and perhaps this is turned on for some reason. In order to re-show the menu bar icon, double click on TotalSpaces in your Applications folder (as if to launch the app). This should tell the app to show the menu bar icon again.

## <a id="app-assignments"></a>How can I make a particular app stay on a particular desktop in the grid?

You can now do this from the [Apps preferences](/apps)

## <a id="black-blocking"></a>Why is there black blocking on the screen when you change desktop?

Sometimes you see these blocks because OSX is not quick enough at redrawing the screen windows and desktop. We do hope to find a fix for this minor problem.

Note that it doesn't happen if you have transitions turned off.

## <a id="uninstall"></a>How can I uninstall TotalSpaces?

Use [the uninstaller](http://downloads.binaryage.com/UninstallTotalSpaces.app.zip).

TotalSpaces is a normal app that can be dragged to the Trash, except for one additional file that must be removed from /Library/ScriptingAdditions.

The uninstaller will remove this file along with the app itself, as well as restarting Dock so that no trace of TotalSpaces remains running in the system.

Note: TotalSpaces is built on top of Mission Control. Underneath TotalSpaces, the desktops are normal OSX desktops. The uninstaller will not remove any desktops you have created whilst running TotalSpaces, you must adjust your desktops how you like them in Mission Control once you have uninstalled TotalSpaces.
**TotalSpaces does not make any changes whatsoever to the system software or to OSX - once you have uninstalled it the system will be running only the original OSX software.**

Final note: If you wish to be super-clean you can also remove the preferences files in ~/Library/Preferences/com.binaryage.TotalSpaces.plist and ~/Library/Preferences/com.binaryage.totalspacescrashwatcher.plist

## <a id="diagonal-transitions"></a>Why are there no diagonal transitions?

In Lion, the core graphics routines we are using do not support diagonal transitions for both diagonal axes. However, we may experiment with making our own transitions in future.

## <a id="growl-notifications"></a>How can I turn on growl notifications?

Use this command at the command line:

<code>defaults write com.binaryage.TotalSpaces sendGrowlNotifications YES</code>

then restart TotalSpaces.

Note that once you have turned on the notifications, then you can fully control them with the Growl app.

There are two types of notification, one on space change, and one on circulation. They may be useful to play sound effects while navigating your grid.

## <a id="faster-transitions"></a>How can I make the transitions even faster than the slider allows?

Use this command at the command line:

<code>defaults write com.binaryage.TotalSpaces transitionSpeed 115</code>

then restart TotalSpaces. 

The normal preferences slider goes to 110, but 130 is the hard limit; do not set it higher - anyway you won't even see the transitions at that speed. 

Note that there is a small built in delay after you press the hotkey that is unavoidable with transitions - they take a little time to set up.

## <a id="longer-notifications"></a>How can I make the notification graphic stay on the screen longer?

Starting with version 1.0 you will use this command at the command line:

<code>defaults write com.binaryage.TotalSpaces notificationDuration 1.0</code>

then restart TotalSpaces. 

The value is in seconds, and should be between 0.25 and 3.0. The default value is 0.85.

## <a id="mouse-edge-timings"></a>How can I adjust the mouse-at-edge switch timing?

Starting with version 1.1 you can adjust the dwell and repeat period for triggering [space changes by bringing your mouse to the edge of the screen](/mouse-edges).

Here are the settings:

<code>defaults write com.binaryage.TotalSpaces sideSwitchDelay 1.5</code>

The range is 0.1 - 3.5, the default is 1.1 seconds.

<code>defaults write com.binaryage.TotalSpaces sideSwitchDelayWithModkeys 0.5</code>

The range is 0.1 - 3.5, the default is 0.3 seconds.

<code>defaults write com.binaryage.TotalSpaces sideSwitchRepeatDelay 1.2</code>

The range is 0.5 - 3.5, the default is 1.0 seconds.

Don't forget to restart TotalSpaces after you have changed these settings.
