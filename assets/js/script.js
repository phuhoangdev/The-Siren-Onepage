// Featured Post
const featuredPost = new Swiper(".featured-post-swiper", {
   direction: "vertical",
   slidesPerView: 1,
   grabCursor: true,
   loop: true,
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

videoMain.on("reachEnd", function () {
   let numOfSlides = this.wrapperEl.querySelectorAll(".swiper-slide").length;
   let currentSlide = this.activeIndex;
   let realIndex = this.realIndex;
   var button = document.querySelector(".arrow-next");
   // if (videoThumbs.reachEnd === 4) {
   //    console.log("true");
   // } else {
   //    console.log("false");
   // }

   //console.log(this.realIndex);

   if (+currentSlide + 1 === numOfSlides) {
      button.onclick = function () {
         // console.log(currentSlide);
      };
   }

   //console.log(this.activeIndex);

   //if (this.activeIndex === numOfSlides) {
   //videoThumbs.slideTo(0, 1, false);

   //}
});

//Instagram Gallery
const instagramGallery = new Swiper(".instagram-gallery-swiper", {
   slidesPerView: 8,
   grabCursor: true,
   slideToClickedSlide: true,
});
