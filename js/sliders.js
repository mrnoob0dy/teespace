const swiper = new Swiper(".feedback__list", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".feedback__list-pagination",
  },
});
