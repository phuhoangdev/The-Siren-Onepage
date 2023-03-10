// Featured Post
const featuredPost = new Swiper(".featured-post-swiper", {
   direction: "vertical",
   slidesPerView: 1,
   grabCursor: true,
   loop: true,
   autoplay: {
      delay: 5000,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

//Post Carousel
const postCarousel = new Swiper(".post-carousel-swiper", {
   spaceBetween: 8,
   slidesPerView: "auto",
   centeredSlides: true,
   slideToClickedSlide: true,
   loop: true,
   loopedSlides: 1,
   grabCursor: true,
   navigation: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

//Latest Video
const videoThumbs = new Swiper(".video-thumbs", {
   direction: "vertical",
   slidesPerView: 4,
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

//Instagram Gallery
const instagramGallery = new Swiper(".instagram-gallery-swiper", {
   slidesPerView: 8,
   grabCursor: true,
   slideToClickedSlide: true,
});
