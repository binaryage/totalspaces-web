(function() {
  var updateShowcase;

  updateShowcase = function(selected) {
    return $('.highlight').each(function() {
      var el, num;
      el = $(this);
      el.removeClass('active');
      num = el.data('showcase');
      if (num === selected) {
        return el.addClass('active');
      }
    });
  };

  $.fn.navigen = function(options) {
    var i, target;
    target = $(options.target);
    i = 0;
    return $(this).each(function() {
      var el, index;
      i++;
      el = $(this);
      index = i;
      return el.on('activate', function() {
        el.parent().children().css('display', 'none');
        el.css('display', 'block');
        return updateShowcase(index);
      });
    });
  };

  $.fn.showcase = function(options) {
    return $(this).each(function() {
      var el;
      el = $(this);
      return el.on('click', function() {
        var num;
        num = el.data('showcase');
        if (!num) {
          return;
        }
        return $('#screenshot-box-' + num).trigger('activate');
      });
    });
  };

}).call(this);
