const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'slide',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
  
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      700: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // when window width is >= 640px
      1152: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  })

