const swiper = new Swiper(".swiper", {
   spaceBetween: 8,
   slidesPerView: "auto",
   centeredSlides: true,
   slideToClickedSlide: true,
   loop: true,
   loopedSlides: 1,
   grabCursor: true,
   autoplay: {
      delay: 5000,
   },
});

const videoThumbs = new Swiper(".video-thumbs", {
   direction: "vertical",
   slidesPerView: 4,
   freeMode: false,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
   watchOverflow: true,
   breakpoints: {
      360: {
         direction: "vertical",
         slidesPerView: 1,
      },
      1024: {
         direction: "vertical",
         slidesPerView: 4,
      },
   },
});
const videoMain = new Swiper(".video-main", {
   direction: "vertical",
   navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
   },
   keyboard: {
      enabled: true,
   },
   thumbs: {
      swiper: videoThumbs,
   },
});
videoMain.on("slideChangeTransitionStart", function () {
   videoThumbs.slideTo(videoMain.activeIndex);
});
videoThumbs.on("transitionStart", function () {
   videoMain.slideTo(videoThumbs.activeIndex);
});
