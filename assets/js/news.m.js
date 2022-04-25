// $(function () {
//   $(".top").on("click", function () {
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//       $("body").animate({ scrollTop: $(this).offset().top + 100 }, 200);
//       return false;
//     }
//     });

// });

$(function () {
  $(".top").on("click", function () {
    $.mobile.silentScroll(0);
  });
});

window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("details").forEach(function (item) {
    item.addEventListener("toggle", (event) => {
      let toggled = event.target;
      if (toggled.attributes.open) {
        document.querySelectorAll("details[open]").forEach(function (opened) {
          if (toggled != opened) opened.removeAttribute("open");
        });
      }
    });
  });
});
