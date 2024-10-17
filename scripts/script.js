$(document).ready(function(){
    $(".carousel").slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      speed: 2000,
      dots: false,
      arrows: true,
      prevArrow: $(".carousel-nav-left"),
      nextArrow: $(".carousel-nav-right"),
      
    });
  });
  