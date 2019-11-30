$(function(){

  $(".rate-star").rateYo({ // Рейтинг, статичный
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  $('.product-slider__inner').slick({ // Слайдер с точками, без стрелок
    slidesToShow: 4, 
		slidesToScroll: 4,
    dots: true,
    arrows: false,
    dotsClass: 'slider__dots',
  });

  $(".js-range-slider").ionRangeSlider({ // Слайдер, диапазон цен
    type: "double",
    skin: "round",
    min: 0,
    max: 1999,
    from: 0,
    to: 600,
    prefix: "$",
});

  var mixer = mixitup('.products__inner-box');

});