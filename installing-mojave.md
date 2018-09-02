---
layout: ts2-doc
title: Installing TotalSpaces2 v2.7.2 and above
subtitle: How to install TotalSpaces2
---

These instructions apply to [TotalSpaces2 v.2.7.2 and above](/changes-beta) on macOS 10.14 and above. If you are upgrading from High Sierra to Mojave, note that __TotalSpaces2 can no longer work with SIP turned on due to changes made by Apple__. 

These instructions are for macOS 10.14 Mojave - [see here if you are running High Sierra or earlier.](/sipsettings)

TotalSpaces2 requires changes to your security settings to be installed. [Carefully read more about it here.](/sip-details)

<ul class="steps-list">
<li><a href="#step1">Step 1 &mdash; Turn off System Integrity Protection</a></li>
<li><a href="#step2">Step 2 &mdash; Install and run TotalSpaces2</a></li>
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

Note: Advanced users who want to only partially disable SIP may use the command
<code>csrutil enable --without debug --without fs</code>
However, csrutil will warn that this configuration is unsupported.

<a id="step2"></a>
# Step 2

## Install and run TotalSpaces2

Double click on the DMG file you downloaded with TotalSpace2 in it. Drag TotalSpaces2 into your Applications folder.

<img src="/images/install-from-dmg.png">

Run TotalSpaces2 from your Applications folder. It will ask for your password in order to install its plugin component.

<img src="/images/install-plugin.png">

TotalSpaces2 will notify you when the plugin has been successfully installed.

<a id="step3"></a>
# Step 3

## There is no step 3

If you are installing on macOS 10.14 Mojave or later then unfortunately SIP must remain disabled or partially disabled for TotalSpaces2 to work.

Note that if you are installing on versions of macOS prior to 10.14 Mojave then there is an optional step 3 to turn SIP back on, [see here.](/sipsettings)

