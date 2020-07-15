function initSlider() {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: false,
    vertical: true,
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
$(document).on("ready", function() {
  initSlider();
});
