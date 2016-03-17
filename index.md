---
layout: product-home
title: TotalSpaces brings grid spaces to your Mac and more!
product: totalspaces
product_title: TotalSpaces2
product_subtitle: the ultimate grid spaces manager for your Mac
product_icon: /shared/img/icons/totalspaces2-256.png
subtitle: TotalSpaces2 brings grid spaces to your Mac and more!
download: http://downloads.binaryage.com/TotalSpaces2-2.3.9.dmg
downloadtitle: Download v2.3.9
meta_title: TotalSpaces2 brings grid spaces to you Mac and more!
meta_keywords: totalspaces,mac,dock,spaces,osx,software,plugin,apple,extension,utility,macosx,apps,tools,tabs,productivity,app,hacks,application,utilities,yosemite,binaryage
meta_description: TotalSpaces2 is a desktop manager aims to re-create the classic 2D 'spaces' grid functionality on OS X Mavericks and Yosemite.
meta_image: /shared/img/icons/totalspaces-128.png
pray: spaces mac, dock plugin
ogmeta: {
    site_name: "BinaryAge website",
    description: "TotalSpaces2 brings grid spaces to your Mac and more!",
    email: "support@binaryage.com",
    type: "product",
    title: "TotalSpaces2",
    url: "http://totalspaces.binaryage.com",
    image: "http://totalspaces.binaryage.com/shared/img/icons/totalspaces2-256.png"
}
shots: [{
    title: "Manage your desktops",
    thumb: "/images/showcase/showcase-overview-grid.png",
    full: "/images/showcase/showcase-overview-grid.png",
    klass: "tf-shadow"
},    {
    title: "Define your grid",
    thumb: "/images/showcase/showcase-layout-preferences-2.png",
    full: "/images/showcase/showcase-layout-preferences-2.png",
    klass: "tf-shadow"
},    {
    title: "Choose your transitions",
    thumb: "/images/showcase/cube-transition.png",
    full: "/images/showcase/cube-transition.png",
    klass: "tf-shadow"
},    {
    title: "Swipe between desktops",
    thumb: "/images/showcase/swipe.png",
    full: "/images/showcase/swipe.png",
    klass: "tf-shadow"
},    {
    title: "Hotcorners",
    thumb: "/images/showcase/hotcorners.png",
    full: "/images/showcase/hotcorners.png",
    klass: "tf-shadow"
},    {
    title: "App assignments",
    thumb: "/images/showcase/app-assignments.png",
    full: "/images/showcase/app-assignments.png",
    klass: "tf-shadow"
}]

highlights: [{
  title: "Manage your desktops",
  description: "Display an overview of desktops and drag windows between them.",
  style: "background: transparent url('/images/showcase/showcase-overview-grid.png') no-repeat -192px -122px / 650px 430px",
  screenshot: 1
},{
  title: "Define your grid",
  description: "Navigate left, right, up and down between your desktops.",
  style: "background: transparent url('/images/showcase/showcase-layout-preferences-2.png') no-repeat -242px -152px / 650px 430px",
  screenshot: 2
},{
  title: "Choose your transitions",
  description: "Fully customizable transitions and hotkeys.",
  style: "background: transparent url('/images/showcase/cube-transition.png') no-repeat -229px -2px / 650px 430px",
  screenshot: 3
},{
  title: "Swipe between desktops",
  description: "Moving around your grid has never been easier.",
  style: "background: transparent url('/images/thumb-swipe.png') no-repeat 0px 0px / 60px 60px",
  screenshot: 4
},{
  title: "Hotcorners",
  description: "Trigger the overview grid just by moving your mouse.",
  style: "background: transparent url('/images/showcase/hotcorners.png') no-repeat -262px -162px / 650px 430px",
  screenshot: 5
},{
  title: "App assignments",
  description: "Keep your apps where you want them. Assign apps to desktops.",
  style: "background: transparent url('/images/showcase/app-assignments.png') no-repeat -162px -162px / 650px 430px",
  screenshot: 6
}]

---

<div class="row">
  <div class="col-md-4 col-md-offset-1">
    <div class="manual-button-box">
      <a href="/documentation2" class="button product-button-doc">
        <div><i class="fa fa-book"></i> Read more in manual pages</div>
      </a>
    </div>
  </div>
  <div class="col-md-7">
    <div class="teaser-button-box">
      <a href="http://cdn.binaryage.com/totalspaces2-intro.mp4" id="o-teaser" rel="#teaser" class="button product-button-teaser">
        <div><i class="fa fa-play-circle"></i> Watch video preview</div>
      </a>
    </div>
  </div>
</div>

{% contentfor product-buttons %}
<div class="product-buttons">
  <div class="button-container">
    <a href="{{page.download}}" id="o-download-button" class="button product-button-download">
      <span><i class="fa fa-download fa-lg"></i>{{page.downloadtitle}}</span><span class="trial-note">14-day trial</span>
    </a>
    <div class="button-note">
      <i class="fa fa-laptop"></i> Compatible with OS X 10.9, 10.10, &amp; <a href="/elcapitan" target="_blank">10.11 <i class="fa fa-info-circle"></i></a><br>
      <a href="/older-versions">Looking for an older version?</a><br>
    </div>
  </div>
  <div class="button-container">
    <a id="o-buy-ts2" class="button product-button-buy-ts2" href="https://sites.fastspring.com/binaryage-store/instant/totalspaces2">
      <span><i class="fa fa-heart fa-lg"></i>Buy TotalSpaces2</span><span class="price-note">$11.99</span>
    </a>
  </div>
</div>
{% endcontentfor %}

{% contentfor overlays %}
<div id="totalspaces-teaser" class="overlay" style="display:none">
  <OBJECT CLASSID="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" width="864" height="560" CODEBASE="http://www.apple.com/qtactivex/qtplugin.cab">
    <PARAM name="SRC" VALUE="http://cdn.binaryage.com/totalspaces2-intro.mp4">
    <PARAM name="AUTOPLAY" VALUE="true">
    <EMBED SRC="http://cdn.binaryage.com/totalspaces2-intro.mp4" width="864" height="560" AUTOPLAY="true" PLUGINSPAGE="http://www.apple.com/quicktime/download/"></EMBED>
  </OBJECT>
</div>

{% endcontentfor %}

<script>
  $(function() {
    $("#o-teaser").fancybox({
      "href": "#totalspaces-teaser",
      "autoScale": false,
    });
    $("#o-buy").fancybox({
      href: "#totalspaces-buy"
    });
    $("#o-download-button").bind('click', function(e) {
      ga('send', 'pageview', '/overlays/o-download');
    });
    $('.screenshot').fancybox();
    $('.screenshot-box').navigen({
      target: $(".navi")
    });
    $('.highlight').showcase();
  });
</script>
