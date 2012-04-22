---
layout: tf-doc
title: Uninstalling TotalFinder
subtitle: Uninstall TotalFinder
---

## Removal is just two clicks away

TotalFinder comes with a convenient uninstaller script which safely removes TotalFinder from your computer.

Under TotalFinder's Menu icon select `Uninstall TotalFinder`:

<div style="position:relative; margin-bottom: 20px;">
    <img src="/images/uninstall-menu.png" class="doc-inline-image" style="left: 0px; top: -60px">
    <img src="/images/really-uninstall.png" class="doc-inline-image" style="width: 340px; left: 260px; top: 68px; position: absolute">
    <img src="/images/uninstaller.png" class="doc-inline-image" style="width: 346px; left: 320px; top: -46px">
</div>

If you have trouble running the menu command you may alternatively run (in Terminal.app): 
    
    open "/Applications/TotalFinder.app/Contents/Resources/TotalFinder Uninstaller.app"
    
Or download and open the latest archive from [http://totalfinder.binaryage.com](http://totalfinder.binaryage.com) and launch TotalFinder Uninstaller.

## Purging the configuration

By default the uninstaller does not remove your configuration settings from `/Users/<user>/Library/Preferences/com.apple.finder.plist`. 

<img src="/images/property-list-editor.png" style="width:400px; float: right; position: relative; top: -10px; margin-left: 40px">
    
It is just a few extra bytes we leave in case you need to temporarily uninstall TotalFinder and decide to reinstall later. 

<br clear="both"/>

In some future version uninstaller will offer to remove the configuration. Right now you have to do it by hand. If you want to clean the TotalFinder trail completely, remove all TotalFinder prefixed keys from that file. You can use plist editor to do that:

    open ~/Library/Preferences/com.apple.finder.plist