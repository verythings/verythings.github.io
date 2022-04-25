// $(document).on("touchstart", function () {
//   documentClick = true;
// });
// $(document).on("touchmove", function () {
//   documentClick = false;
// });
$(function () {
  $(".top").on("click touchstart", function () {
    $("body").animate({ scrollTop: $(this).offset().top }, 200);
  });
});

// $(function () {
//   $(".top").on("click", function () {
//     $.mobile.silentScroll(0);
//   });
// });

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
