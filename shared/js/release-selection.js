(function() {
  var hashToSelector, isVersion, selectRelease, selectReleaseAfterTabsGetInitialized, selectTab, selectVersion;

  hashToSelector = function(h) {
    return h.replace(/\./g, "\\.");
  };

  isVersion = function(s) {
    return s.match(/[0-9.]+/);
  };

  selectTab = function(name) {
    var index, tab, tabs;
    tabs = $(".product-tabs");
    tab = tabs.find("a[href=\"#" + name + "\"]");
    if (!(tab.length > 0)) {
      return;
    }
    index = tab.parent().index();
    if (index !== tabs.tabs("option", "active")) {
      tabs.data("ignoreActivate", true);
      return tabs.tabs("option", "active", index);
    }
  };

  selectVersion = function(version) {
    var $release, $tabPanel, tabName;
    $release = $(hashToSelector("#v" + version));
    if (!($release.length > 0)) {
      return;
    }
    $tabPanel = $release.parents('.ui-tabs-panel');
    if (!$tabPanel.is(":visible")) {
      tabName = $tabPanel.attr('id');
      if (tabName) {
        selectTab(tabName);
      }
    }
    $release.addClass('highlighted');
    return $(document.body).animate({
      scrollTop: $release.offset().top - 10
    }, 1000);
  };

  selectRelease = function() {
    var $releases, version;
    $releases = $(".changelog .release").removeClass('highlighted');
    version = location.hash.slice(1);
    if (version === "latest") {
      version = $(".changelog .release").first().attr("id").slice(1);
    }
    if (!isVersion(version)) {
      return;
    }
    return selectVersion(version);
  };

  selectReleaseAfterTabsGetInitialized = function() {
    return $(selectRelease);
  };

  $(window).on("hashchange", selectReleaseAfterTabsGetInitialized);

  $(window).on("changelog-rendered", selectReleaseAfterTabsGetInitialized);

}).call(this);
