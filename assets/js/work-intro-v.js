window.onload = function () {
  $(".grid").hide();

  setTimeout(function () {
    $("#intro-v").fadeOut(250);
  }, 4200);
  setTimeout(function () {
    $("mark").hide();
  }, 4200);
  setTimeout(function () {
    $(".grid").fadeIn(1200);
  }, 4500);
};

$(function () {
  $("#intro-v").on("click", function () {
    $("mark").hide();
    $(".grid").show();
    $(this).hide();
  });
});
$(function () {
  $("mark").on("click", function () {
    $(this).hide();
    $(".grid").show();
    $("#intro-v").hide();
  });
});
