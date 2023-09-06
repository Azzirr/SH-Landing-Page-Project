const swiper = new Swiper(".dottedSwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

const swiper2 = new Swiper(".navigationSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});