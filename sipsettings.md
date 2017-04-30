---
layout: ts2-doc
title: Installing TotalSpaces2 v2.5.4 and above
subtitle: How to install TotalSpaces2
---

These instructions apply to [TotalSpaces2 v.2.5.4 and above](/changes-beta) on OSX 10.11 El Capitan and macOS 10.12 Sierra.

TotalSpaces2 requires temporary changes to your security settings to be installed. [Read more about it here.](/sip-details)

<ul class="steps-list">
<li><a href="#step1">Step 1 &mdash; Turn off System Integrity Protection</a></li>
<li><a href="#step2">Step 2 &mdash; Install and run TotalSpaces2</a></li>
<li><a href="#step3">Step 3 &mdash; Turn System Integrity Protection back on</a></li>
</ul>

<a id="step1"></a>
# Step 1

##Turn off System Integrity Protection (SIP)

This requires rebooting your maching into recovery mode.

Restart your machine, holding&nbsp;&nbsp; <img src="/images/cmd-r.png" title="cmd-r"> &nbsp;&nbsp;down until the Apple logo appears.

Then select Terminal from the Utilities menu. It looks like this:

<img src="/shared/img/recovery-utilities-terminal.png">

In the window that opens, type
<code>csrutil disable</code>
and press return. This turns off System Integrity Protection so that TotalSpaces2 can be installed.

<img src="/images/csrutil-disable.jpg">

Choose restart from apple menu (top left).

<a id="step2"></a>
# Step 2

## Install and run TotalSpaces2

Double click on the DMG file you downloaded with TotalSpace2 in it. Drag TotalSpaces2 into your Applications folder.

<img src="/images/install-from-dmg.png">

Run TotalSpaces2 from your Applications folder. It will ask for your password in order to install its plugin component.

<img src="/images/install-plugin.png">

When the plugin has been installed successfully, TotalSpaces2 will tell you that you can turn SIP back on.

<img src="/images/plugin-installed.png">

<a id="step3"></a>
# Step 3 (optional)

## Turn System Integrity Protection back on

Once again restart your machine, holding&nbsp;&nbsp; <img src="/images/cmd-r.png" title="cmd-r"> &nbsp;&nbsp;down until the Apple logo appears.

Then select Terminal from the Utilities menu.

In the window that opens, type
<code>csrutil enable</code>
and press return. This turns on System Integrity Protection so your machine is fully protected.

<img src="/images/csrutil-enable.jpg">

Choose restart from apple menu to complete.

