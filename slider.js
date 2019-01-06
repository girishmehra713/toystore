$(document).ready(function(){
$(".icon").click(function(){
    $(".icon").toggleClass("active")

  });
  $(".icon").click(function(){
    $(".menu").toggleClass("active")

  });
});
$(".autoplay").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
