const projectSlider = new Swiper('.projectSlider', {
    slidesPerView:1.5,
    spaceBetween: 33,
    centeredSlides:true,
    loop: true,
 speed:1000,
    // Navigation arrows
    navigation: {
      nextEl: '.nextSlider',
      prevEl: '.prevSlider',
    },
  
  });