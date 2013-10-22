---
layout: ts2-doc
title: Differences from TotalSpaces
subtitle: How TotalSpaces2 is different from TotalSpaces
---

TotalSpaces2 is a substantial rewrite of TotalSpaces. It focuses on the grid, and the most important idea is that all spaces participate in the grid, whether regular desktops, fullscreens, or the dashboard.

There is support for both multi-monitor modes provided by OSX Mavericks (Mission Control's "Displays have separate Spaces" setting), and a more active overview grid that allows you to move your spaces to where you want them.

The space transitions have also been rewritten, and there is a new preferences pane for the layout allowing you to easily choose the grid you want.

Here is a brief list of changes so you can review whether TotalSpaces2 will do everything you need. **Please <a href="/changes2">download and test TotalSpaces2</a> before you pay for the upgrade.**

* Everything in the grid - dashboard and fullscreen apps are part of the grid. Newly created fullscreens are added to the bottom of the grid, making a new row if needed.
* Multi-monitor modes - respects the new "Displays have separate Spaces" setting. When displays have separate spaces there is a separate grid on each screen. When displays do not have separate spaces, TotalSpaces2 works the same as TotalSpaces did.
* Spaces can freely be dragged into new positions in the overview grid.
* New transition "Inside cube". Swap transition has been dropped in TotalSpaces2.
* New whole grid zoom transition to the overview grid.
* New hotkey setting for taking the current window with you when moving to an adjacent space.
* Dragging an item to another space via a hotcorner and the overview grid can be done in TotalSpaces2 (just hover over the destination space).
* No API at the present time, the API is being redesigned to support Mavericks.
* For single row users, if you define just one row of spaces you can add additional empty columns, and they will be filled by fullscreen apps.
* Notification graphic now smoothly floats above desktop transition.
* TotalSpaces2 does not support dragging windows up and down to a vertically adjacent space. Use the new hotkey setting to move a window with you to a new space.
* TotalSpaces Advanced preferences pane is no longer needed, you can reserve space in the grid for fullscreen apps directly in the Layout preferences.
