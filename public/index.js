function initSlider() {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: false,
    vertical: true,
    swipeToSlide: true,
    verticalSwiping: true,
    destroy: event,
    nextArrow: $(".arrow-down"),
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          dots: false
        }
      }
    ]
  });
}
function SliderWorks() {
  $(".card-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".arrow-svg__left"),
    nextArrow: $(".arrow-svg__right"),
    dotsClass: "card-dots",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          dots: false,
          arrows: false
        }
      }
    ]
  });
}
$(document).on("ready", function() {
  initSlider();
  SliderWorks();
});
