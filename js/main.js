$(function(){

    $('.articles__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="prev"></i>',
        nextArrow: '<i class="next"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    });

})