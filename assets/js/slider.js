
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
