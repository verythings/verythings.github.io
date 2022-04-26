// $("li").click(function () {
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     $("html, body").animate(
//       {
//         scrollTop: 0,
//       },
//       400
//     );
//   }
// });

$(document).ready(function () //When the page is ready, load function
{
  $("summary").click(function () // When arrow is clicked
  {
    $("body").animate(
      {
        scrollTop: $(this).offset().top + "px",
      },
      400
    ); //how fast the scrolling animation will be in miliseconds
  });
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
