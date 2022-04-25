$(document).ready(function () {
  $("li p").hide();
  $("ul li:nth-child(1) p").show();
  $(".img-container-2").hide();
});

$(function () {
  $("ul li:nth-child(1)").on("click", function () {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    $("ul li:nth-child(1) p").toggle();
    $("ul li:not(:nth-child(1)) p").hide();
    
    $(".img-container-1").show();
    $(".img-container-2").hide();
  });
});
$(function () {
  $("ul li:nth-child(2)").on("click", function () {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    $("ul li:nth-child(2) p").toggle();
    $("ul li:not(:nth-child(2)) p").hide();

    $(".img-container-2").show();
    $(".img-container-1").hide();
  });
});
