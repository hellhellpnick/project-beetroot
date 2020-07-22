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
var MainMenu = (function() {
  var MainMenu = function(config) {
    config = config || {};
    this.toggleBtn = $(config.toggleBtn);
    this.menu = $(config.menu);
    this.close = $(config.close);

    this.init();
    config = null;
  };
  // public interface
  MainMenu.prototype = {
    constructor: MainMenu,
    init: function() {
      this.eventManager();
    },
    eventManager: function() {
      this.toggleBtn.on("click.openMenu", onButtonClickHandler.bind(this));
      this.close.on("click.closeMenu", onCloseClickHandler.bind(this));
    }
  };
  // private interface
  function onButtonClickHandler(menu, evt) {
    if (!this.menu.hasClass("open")) {
      this.menu.addClass("open");
    }
  }

  function onCloseClickHandler(evt) {
    this.menu.removeClass("open");
  }

  function onDocumentClickHandler(evt) {
    var $target = $(evt.target);

    if (
      !$target.closest(this.menuForm).length &&
      !$target.closest(this.menuContent).length &&
      this.menu.hasClass("open")
    ) {
      this.menu.removeClass("open");
    }
  }

  return MainMenu;
})();

$(document).on("ready", function() {
  initSlider();
  SliderWorks();
  var mainMenu = new MainMenu({
    menu: ".main-menu",
    toggleBtn: ".main-menu-btn",
    close: ".main-menu-close"
  });
});