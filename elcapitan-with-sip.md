---
layout: ts2-doc
title: Running TotalSpaces2 on El Capitan with SIP fully enabled
subtitle: TotalSpaces2 with SIP fully enabled
---

Under OS X 10.11 (El Capitan), TotalSpaces2 cannot install itself on a normally configured machine due to System Integrity Protection.

You can [find details here](/elcapitan) of how to partially disable System Integrity Protection to install and run TotalSpaces2 under El Capitan and higher.

## What if you need to keep SIP fully enabled?

There is a way, but it has some major drawbacks. This article is for technical users who need to run TotalSpaces2 with fully enabled SIP.

This technique does not require you to disable SIP, but it requires you to modify system files in Recovery OS.

It requires technical knowledge how to mount file-systems and manipulate files using command-line.
With any TotalSpaces2 update, you will have to repeat this installation.
With any system update, TotalSpaces2 files are likely to be removed from system folders and you would have to repeat this installation.

## Technical details

TotalSpaces2 needs to inject code into Dock.app. It uses mechanism called Scripting Additions. A Scripting Addition is a special code bundle which can be injected into running applications.

Scripting Additions have 'osax' file extension. Historically there are three places where scripting addtions can be placed:

* ``~/Library/ScriptingAdditions``
* ``/Library/ScriptingAdditions``
* ``/System/Library/ScriptingAdditions``

The original idea was to keep user-specific additions in the first location, system-wide admin-installed additions in the second one and Apple's own system additions in the third location. There are various restrictions what is considered a valid OSAX and those restrictions evolved over time between OS versions. El Capitan is the most strict and it does not allow Scripting Additions placed in ``/Library/ScriptingAdditions`` to inject into system processes (processes with Apple's code signature).

However it is possible to put an addition into ``/System/Library/ScriptingAdditions`` and it can then freely inject into system processes. The problem is that ``/System/Library/ScriptingAdditions`` is a system folder protected by SIP. You can manipulate it only with SIP fully disabled or from within Recovery OS.

By default TotalSpaces2 installs its scripting addition into ``/Library/ScriptingAddtions``. But you can manually install it in ``/System/Library/ScriptingAdditions``. TotalSpaces2 is aware of this setup since version 2.3.9.

But you should be aware of the drawbacks:

``/System/Library/ScriptingAdditions`` is owned by Apple, any system update can decide to remove non-Apple files from there.

``/System/Library/ScriptingAdditions`` is under SIP protection, which means that TotalSpaces2 updates cannot modify TotalSpaces.osax located there. Any TotalSpaces2 update will refuse to run until you have booted into Recovery OS and copied the new osax into place.

## Installation steps

1. Install TotalSpaces2 (or update TotalSpaces2)
2. Reboot into Recovery OS (reboot and hold cmd-R)
3. Open Terminal from Utilities menu
4. Mount your main system disk if needed - this depends on your setup, see explanation below
5. Move TotalSpaces.osax from inside ``/Applications/TotalSpaced2.app`` to ``/System/Library/ScriptingAdditions`` on your system disk
6. Fix rights on the newly moved folder

### STEPS 1-3

These should be straightforward (I'm assuming you are technically minded).

### STEP 4: mount your main system disk

If you don't use FileVault, your main disk may have be mounted automatically, or if not you can easily use Disk Utility to mount it. In case of FileVault you have to use ``disktutil corestorage unlockVolume`` command.

In either case you should end up with your main system disk mounted at ``/Volumes/[NAME]`` where [NAME] is some name you gave to your disk during formatting (potentially includes spaces - mine is 'Macintosh HD').

### STEPS 5-6: copy and fix rights

My system disk was mounted as ``/Volumes/Macintosh HD``, so here are commands relevant to my situation:

    cd "/Volumes/Macintosh HD/System/Library/ScriptingAdditions"
    cp -R "../../../Applications/TotalSpaces2.app/Contents/Resources/TotalSpaces.osax" .
    chown -R root:wheel TotalSpaces.osax

## Final words

As you can see, it's not that difficult if you know what you are doing. The main problems are TotalSpaces2 and system updates. You may have to repeat this installation over and over again.

And lastly, thanks to the SIMBL developers for [investigating this mechanism](https://github.com/norio-nomura/EasySIMBL/issues/26#issuecomment-117028426).
