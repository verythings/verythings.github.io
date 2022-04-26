$(document).ready(function () {
  $(".header").fadeIn(400).css("display", "grid");
  $(".category-view").fadeIn(400).css("display", "grid");
  
  $(".ipgs-next-page").mouseover(function () {
    $(".click").show();
  });
  $(".ipgs-next-page").mouseout(function () {
    $(".click").hide();
  });
});

$(document).ready(function () {
  $(".ipgs-prev-page").mouseover(function () {
    $(".click").show();
  });
  $(".ipgs-prev-page").mouseout(function () {
    $(".click").hide();
  });
});

$(window).mousemove(function (event) {
  $(".click").css({ left: event.pageX + 65, top: event.pageY - 5});
});

$(function () {
  $(".ipgs-next-page").on("click", function () {
    $(
      ".click"
    ).css("filter", "invert(1)");
    $(
      ".ipgs-theme-default .ipgs-next-page, .ipgs-theme-default .ipgs-prev-page"
    ).css("transform", "translate3D(0, -50%, 0)");
  });
});