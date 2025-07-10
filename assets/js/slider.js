
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,       // Показываем 2 слайда на десктопе
        margin: 20,     // Отступ между слайдами 20px
        nav: false,     // Отключаем стандартные кнопки (используем свои)
        dots: false,    // Отключаем точки-пагинацию

        responsive: {
            0: { items: 1 },    // от 0 до 999px — 1 слайд
            1000: { items: 2 }  // от 1000px — 2 слайда
        }
    });

    // Кастомные кнопки
    $(".next-btn").click(function () {
        $(".owl-carousel").trigger("next.owl.carousel");
    });
    $(".prev-btn").click(function () {
        $(".owl-carousel").trigger("prev.owl.carousel");
    });
});



$(document).ready(function(){
    var slider = $('.custom-owl-slider');
    
    slider.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      items: 1, // Всегда показываем 1 слайд
      responsive:{
        0:{ items:1 },
        600:{ items:1 },
        1000:{ items:1 }
      }
    });
  
    // Кнопки
    $('.custom-next').click(function(){
      slider.trigger('next.owl.carousel');
    });
    $('.custom-prev').click(function(){
      slider.trigger('prev.owl.carousel');
    });
  });