(function ($) {
  $(document).ready(function () {
    var $win = $(window);
    var elementTop, elementBottom, viewportTop, viewportBottom;

    function isScrolledIntoView(elem) {
      elementTop = $(elem).offset().top;
      elementBottom = elementTop + $(elem).outerHeight();
      viewportTop = $win.scrollTop();
      viewportBottom = viewportTop + $win.height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    if ($("video").length) {
      var loadVideo;

      $("video").each(function () {
        $(this).attr("webkit-playsinline", "");
        $(this).attr("playsinline", "");

        $(this).attr("id", "loadvideo");
        loadVideo = document.getElementById("loadvideo");
        loadVideo.load();
      });

      $win.scroll(function () {
        // video to play when is on viewport

        $("video").each(function () {
          if (isScrolledIntoView(this) == true) {
            $(this)[0].play();
          } else {
            $(this)[0].pause();
          }
        });
      }); // video to play when is on viewport
    } // end .field--name-field-video
  });
})(jQuery);
