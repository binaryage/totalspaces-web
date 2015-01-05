(function() {
  var normalizeHash, tabPrefix, transformContentIntoTabsAndPanes;

  tabPrefix = "tab-";

  normalizeHash = function(raw) {
    return raw.replace(/[-]+/, "-").match(/^[-]*(.*?)[-]*$/)[1];
  };

  transformContentIntoTabsAndPanes = function(contentSelector, tabsSelector) {
    var cur, items, selectTab, selectTabWhenInitialized, tabs, ul;
    tabs = $(tabsSelector);
    if (!tabs.length) {
      return;
    }
    ul = tabs.find("ul");
    cur = void 0;
    items = $(contentSelector);
    items.each(function() {
      var a, el, id, li, name, tag;
      el = $(this);
      if (el.hasClass("panes") || el.hasClass("tabs")) {
        return;
      }
      tag = el.prop("tagName");
      if (tag === "SCRIPT" || tag === "NOSCRIPT" || tag === "STYLE") {
        return;
      }
      if (tag === "H2") {
        name = el.html();
        id = tabPrefix + normalizeHash(name.toLowerCase().replace(/[^a-z0-9]/g, "-"));
        li = $("<li/>");
        a = $("<a/>").attr("href", "#" + id).html(name);
        li.append(a);
        a.append("<div class=\"shadow\"/>");
        ul.append(li);
        cur = $("<div/>").addClass(id).addClass("page-content").prop("id", id);
        tabs.append(cur);
        return el.remove();
      } else {
        if (cur) {
          return cur.append(el);
        }
      }
    });
    tabs.tabs({
      activate: function(event, ui) {
        var hash;
        if (tabs.data("ignoreActivate")) {
          tabs.data("ignoreActivate", false);
          return;
        }
        if (ui.newTab.index() > 0) {
          hash = normalizeHash(ui.newPanel.attr("id").slice(tabPrefix.length));
        }
        if (hash) {
          hash = "#" + hash;
        } else {
          hash = window.location.pathname;
        }
        if (history.pushState) {
          return history.pushState(null, null, hash);
        } else {
          return window.location.hash = hash;
        }
      }
    });
    selectTab = function(hash) {
      var index, name, tab;
      name = normalizeHash(hash.slice(1));
      if (name === "") {
        tab = tabs.find("a").first();
      } else {
        tab = tabs.find("a[href=\"#" + tabPrefix + name + "\"]");
      }
      if (!(tab.length > 0)) {
        return;
      }
      index = tab.parent().index();
      if (index !== tabs.tabs("option", "active")) {
        tabs.data("ignoreActivate", true);
        return tabs.tabs("option", "active", index);
      }
    };
    selectTabWhenInitialized = function() {
      return $(selectTab(location.hash));
    };
    $(window).on("hashchange", selectTabWhenInitialized);
    $('html').addClass('product-tabs-present');
    tabs.show();
    return selectTab(location.hash);
  };

  $(function() {
    return transformContentIntoTabsAndPanes(".product-content .container > *", ".product-tabs");
  });

}).call(this);
