$('.burger_wrap').on('click', function () {
    $(this).toggleClass('burger_active')
    $('.nav').toggleClass('right')
})


window.addEventListener('resize', function () {
    let width = innerWidth
    if (width < 1165) {
        document.getElementById('button').innerText = 'DOWNLOAD'
    } else if (width > 1165) {
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
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            }
        }]
    })
})

$(document).ready(function () {
    const arrow = $('.slick-arrow')
    const next = $('.slick-next')
    const prev = $('.slick-prev')

    next.on('click',function (){
        document.getElementById('comments').innerText = 'Отличные курсы, всем рекомендую'
    })

    prev.on('click',function (){
        document.getElementById('comments').innerText = 'Курс очень познователен, рекомендую новичкам'
    })
})

