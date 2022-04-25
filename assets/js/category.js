
$(function () {
  $(".category-view-1").on("click", function () {
    $(".img-wrapper:nth-child(3)")
      .animate({ opacity: "0.5" }, "slow")
      .css({
        background: "url(../img/files/1/content-3.jpg)",
        "background-size": "cover",
        "background-repeat": "no-repeat",
      })

      .animate({ opacity: "1" }, "slow");
    $(".branding-2").fadeIn(1000).css({
      background: "url(../img/files/1/content-7.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".branding-3").fadeIn(1000).css({
      background: "url(../img/files/1/content-12.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".branding-4").fadeIn(1000).css({
      background: "url(../img/files/1/content-13.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".branding-5").fadeIn(1000).css({
      background: "url(../img/files/1/content-17.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".branding-6").fadeIn(1000).css({
      background: "url(../img/files/1/content-19.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
  });
});

/////

$(function () {
  $(".category-view-2").on("click", function () {
    $(".space-1").css({
      background: "url(../img/files/1/content-1.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".space-3").css({
      background: "url(../img/files/1/content-6.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".space-4").css({
      background: "url(../img/files/1/content-8.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".space-5").css({
      background: "url(../img/files/1/content-11.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".space-6").css({
      background: "url(../img/files/1/content-12.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".space-7").css({
      background: "url(../img/files/1/content-13.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".space-8").css({
      background: "url(../img/files/1/content-17.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".space-9").css({
      background: "url(../img/files/1/content-19.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
    $(".space-10").css({
      background: "url(../img/files/1/content-20.jpg)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
    });
  });
});
