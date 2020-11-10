'use strict';

$('.burger_wrap').on('click', function () {
    $(this).toggleClass('burger_active')
    $('.nav').toggleClass('right')
})


window.addEventListener('resize', function () {
    let width = innerWidth
    if (width < 1150) {
        document.getElementById('button').innerText = 'DOWNLOAD'
    } else if (width > 1150) {
        document.getElementById('button').innerText = 'Скачать программу повышения квалификации'
    }
})

$(document).ready(function () {
    $('.slider_wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        easing: 'ease',
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    })
})

$(document).ready(function () {
    let arrow = $('.slick-arrow'),
        next = $('.slick-next'),
        prev = $('.slick-prev')

    next.on('click',function (){
        document.getElementById('comments').innerText = 'Отличные курсы, всем рекомендую'
    })

    prev.on('click',function (){
        document.getElementById('comments').innerText = 'Курс очень познователен, рекомендую новичкам'
    })
})

