const swiper_mob = new Swiper(".dottedSwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

const swiper_mob_2 = new Swiper(".navigationSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const swiper_desk = new Swiper(".deskDottedSwiper", {
    slidesPerView: 6,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
});

const navigation_desk_swiper = new Swiper(".navigationDesktopSlider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})