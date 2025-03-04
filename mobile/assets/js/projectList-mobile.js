const projectSlider = new Swiper('.projectSlider', {
    slidesPerView:1.1,
    spaceBetween: 12,
    centeredSlides:true,
    loop: true,
 speed:1000,
    // Navigation arrows
    navigation: {
      nextEl: '.nextSlider',
      prevEl: '.prevSlider',
    },
  
  });