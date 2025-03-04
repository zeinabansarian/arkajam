const gallerySlider = new Swiper('.gallerySlider', {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 80,
    // Navigation arrows
    navigation: {
        nextEl: '.nextSlider',
        prevEl: '.prevSlider',
    },
});
document.querySelector(".scrollBtm").addEventListener("click", function () {
    document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
});