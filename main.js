var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        355: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    loop: true,
    autoplay: {
        delay: 2000,
    },
})

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        355: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    loop: true,
    autoplay: {
        delay: 2000,
        reverseDirection: true,
    },
})


var swiper23= new Swiper(".mySwiper3", {
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    loop: true,
    autoplay: {
        delay: 2000,
    },
})