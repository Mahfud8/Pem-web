$(document).ready(function(){
    $('.post-banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: false,
      nextArrow: $('.next-banner'),
      prevArrow: $('.prev-banner')
    });

    $('.post-Smartphone').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: $('.next-product'),
      prevArrow: $('.prev-product'),
    });

    $('.post-review').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        nextArrow: $('.next-review'),
        prevArrow: $('.prev-review')
      });

});