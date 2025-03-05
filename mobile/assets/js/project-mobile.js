document.querySelector(".scrollBtm").addEventListener("click", function () {
    document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
});

const gallerySlider = new Swiper('.gallerySlider', {
    speed: 1000,
    slidesPerView: 1,
    // spaceBetween: 80,
    // Navigation arrows
    navigation: {
        nextEl: '.nextSlider',
        prevEl: '.prevSlider',
    },
});
const projectSlider = new Swiper('.projectSlider', {
    speed: 1000,
    slidesPerView: 1.4,
    spaceBetween: 20,

});


