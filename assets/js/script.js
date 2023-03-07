const swiper = new Swiper(".swiper", {
   spaceBetween: 8,
   slidesPerView: "auto",
   centeredSlides: true,
   loop: true,
   loopedSlides: 1,
   grabCursor: true,
   autoplay: {
      delay: 5000,
   },
});

var galleryThumbs = new Swiper(".gallery-thumbs", {
   centeredSlides: true,
   centeredSlidesBounds: true,
   direction: "vertical",
   spaceBetween: 10,
   slidesPerView: 3,
   freeMode: false,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
   watchOverflow: true,
   breakpoints: {
      480: {
         direction: "vertical",
         slidesPerView: 3,
      },
   },
});
var galleryTop = new Swiper(".gallery-top", {
   direction: "vertical",
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
   },
   keyboard: {
      enabled: true,
   },
   thumbs: {
      swiper: galleryThumbs,
   },
});
galleryTop.on("slideChangeTransitionStart", function () {
   galleryThumbs.slideTo(galleryTop.activeIndex);
});
galleryThumbs.on("transitionStart", function () {
   galleryTop.slideTo(galleryThumbs.activeIndex);
});
