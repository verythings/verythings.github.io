window.onload = function () {
  setTimeout(function () {
    $("body").css("overflow", "auto");
  }, 4200);

  setTimeout(function () {
    $("#intro-v").fadeOut(250);
  }, 4200);

  setTimeout(function () {
    $("mark").hide();
  }, 4200);

  setTimeout(function () {
    $(".img-wrapper").fadeIn(1200);
  }, 4500);
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
