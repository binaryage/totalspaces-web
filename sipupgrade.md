---
layout: ts2-doc
title: Upgrading to TotalSpaces2 v2.6.1 and above
subtitle: How to upgrade TotalSpaces2
---

These instructions apply to [TotalSpaces2 v.2.6.1 and above](/changes-beta) on OSX 10.11 and above.

TotalSpaces2 requires temporary changes to your security settings to be upgraded. [Read more about the settings here.](/sip-details)

<b>NOTE: If you already have SIP disabled, please just upgrade as normal, this process is not required.</b>

Note you should only need to do this once to allow running the 2.6 series of TotalSpaces2, future upgrades should not need this process.

<ul class="steps-list">
<li><a href="#step1">Step 1 &mdash; Upgrade TotalSpaces2</a></li>
<li><a href="#step2">Step 2 &mdash; Turn off System Integrity Protection</a></li>
<li><a href="#step3">Step 3 &mdash; Run TotalSpaces2</a></li>
<li><a href="#step4">Step 4 &mdash; Turn System Integrity Protection back on</a></li>
</ul>

<a id="step1"></a>
# Step 1

Upgrade TotalSpaces2 to the latest version as prompted by the upgrade dialog.

After you have upgraded, TotalSpaces2 will warn you that it needs to upgrade its system component, which requires the next step.

<img src="/images/upg-sip-required.png">

<a id="step2"></a>
# Step 2

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

<a id="step3"></a>
# Step 3

## Run TotalSpaces2

Run TotalSpaces2 from your Applications folder. It will ask for your password in order to install its plugin component.

<img src="/images/install-plugin.png">

When the plugin has been installed successfully, TotalSpaces2 will tell you that you can turn SIP back on.

<img src="/images/plugin-installed.png">

<a id="step4"></a>
# Step 4 (optional)

## Turn System Integrity Protection back on

Once again restart your machine, holding&nbsp;&nbsp; <img src="/images/cmd-r.png" title="cmd-r"> &nbsp;&nbsp;down until the Apple logo appears.

Then select Terminal from the Utilities menu.

In the window that opens, type
<code>csrutil enable</code>
and press return. This turns on System Integrity Protection so your machine is fully protected.

<img src="/images/csrutil-enable.jpg">

Choose restart from apple menu to complete.
