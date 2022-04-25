window.onload = function () {
  setTimeout(function () {
    $(".grid").fadeIn("slow");
  }, 4500);
};

setTimeout(function () {
  $("#intro-v").fadeOut();
}, 4500);
setTimeout(function () {
  $("mark").hide();
}, 4500);

$(function () {
  $("#intro-v").on("click", function () {
    $("mark").hide();
    $(".grid").show();
    $(this).hide();
  });
});
$(function () {
  $("mark").on("click", function () {
    $("mark").hide();
    $(".grid").show();
    $("#intro-v").hide();
  });
});
