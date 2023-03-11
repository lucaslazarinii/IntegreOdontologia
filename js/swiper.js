const swiperAuto = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
      delay: 5000,
    },
  });

  const swiperStatic = new Swiper('.swiper-static', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });