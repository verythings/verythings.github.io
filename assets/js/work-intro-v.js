window.onload = function () {

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
    $("mark").hide();
    $(".img-wrapper").show();
    $(this).hide();
  });
});
$(function () {
  $("mark").on("click", function () {
    $(this).hide();
    $(".img-wrapper").show();
    $("#intro-v").hide();
  });
});
