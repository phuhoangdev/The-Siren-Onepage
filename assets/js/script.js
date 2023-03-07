const swiperEl = document.querySelector(".post-carousel-swiper");
Object.assign(swiperEl, {
   spaceBetween: 8,
   slidesPerView: 3,
   breakpoints: {
      640: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
   onSlideChangeEnd: function (e) {
      swiperEl.update(true);
   },
});
swiperEl.initialize();
