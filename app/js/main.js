$(function(){

  $(".rate-star").rateYo({                       // Рейтинг, статичный - rateYo
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });
  //

  $('.product-slider__inner').slick({            // Слайдер с точками, без стрелок - slick
    slidesToShow: 4, 
		slidesToScroll: 4,
    dots: true,
    arrows: false,
    dotsClass: 'slider__dots',
  });
  //

  $(".js-range-slider").ionRangeSlider({        // Слайдер, диапазон цен - ionRangeSlider, с кастомным скином
    type: "double",
    skin: "round",
    min: 0,
    max: 1999,
    from: 0,
    to: 600,
    prefix: "$",
});
//

                                  
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

// .menu__btn
$('.menu__btn').on('click', function(){
  $('.menu__list').slideToggle();
});


// .header__btn-menu
$('.header__btn-menu').on('click', function(){
  $('.header__box').toggleClass('active');
});
//

$('.product-one__tabs .tab, settings__tabs .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.product-one__tabs, settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });


var mixer = mixitup('.products__inner-box');  // Фильтрация, mixitup

});