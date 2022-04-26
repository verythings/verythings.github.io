$("li").click(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  }
});

// $(document).on('touchstart', function() {
//   documentClick = true;
// });
// $(document).on('touchmove', function() {
//   documentClick = false;
// });
// $(function () {
//   $(".top").on("click touchend", function () {
//     $("body").animate({ scrollTop: $(this).offset().top }, 200);
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
