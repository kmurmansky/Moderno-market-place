$(function(){

  $(".rate-star").rateYo({                       // Рейтинг, статичный - rateYo
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  $('.product-slider__inner').slick({            // Слайдер с точками, без стрелок - slick
    slidesToShow: 4, 
		slidesToScroll: 4,
    dots: true,
    arrows: false,
    dotsClass: 'slider__dots',
  });

  $(".js-range-slider").ionRangeSlider({        // Слайдер, диапазон цен - ionRangeSlider, с кастомным скином
    type: "double",
    skin: "round",
    min: 0,
    max: 1999,
    from: 0,
    to: 600,
    prefix: "$",
});

                                  
$('.icon-th-list').on('click', function(){      // 1. Порядок расположения айтемов, сетка или список, при нажатии на кнопку смены вида
  $('.products__item').addClass('list');      

  $('.icon-th-list').addClass('active');        // 2. Изменение цвета у активной кнопки.
  $('.icon-th-large').removeClass('active');

});

$('.icon-th-large').on('click', function(){     // 1^
  $('.products__item').removeClass('list');

  $('.icon-th-large').addClass('active');       // 2^
  $('.icon-th-list').removeClass('active'); 
});
// 

var mixer = mixitup('.products__inner-box');  // Фильтрация, mixitup

});