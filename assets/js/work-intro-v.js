window.onload = function () {
  setTimeout(function () {
    $("body").css("overflow", "auto");
  }, 4000);

  setTimeout(function () {
    $("#intro-v").fadeOut(250);
  }, 4000);

  setTimeout(function () {
    $("mark").hide();
  }, 4000);

  setTimeout(function () {
    $(".img-wrapper").fadeIn(800);
  }, 4200);
};

$(function () {
  $("#intro-v").on("click", function () {
    $("body").css("overflow", "auto");
    $("mark").hide();
    $(".img-wrapper").show();
    $(this).hide();
  });
});
$(function () {
  $("mark").on("click", function () {
    $("body").css("overflow", "auto");
    $(".img-wrapper").show();
    $("#intro-v").hide();
    $(this).hide();
  });
});
