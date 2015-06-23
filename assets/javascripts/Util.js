(function() {
  var Util, util;

  Util = (function() {
    function Util() {}

    Util.prototype.clickMove = function() {
      return $('a[href^=#]').click(function() {
        var href, position, speed, target;
        speed = 500;
        href = $(this).attr('href');
        target = $(href === '#' || href === '' ? 'html' : href);
        position = target.offset().top;
        $('html, body').animate({
          scrollTop: position
        }, speed, 'swing');
        false;
      });
    };

    return Util;

  })();

  util = new Util();

  util.clickMove();

}).call(this);
