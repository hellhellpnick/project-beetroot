<template>
  <section>
    <loader v-if="loading" />
    <template v-else>
      <section class="home animate__animated animate__zoomInDown">
        <div class="arrow-down">
          <div class="arrow">
            <span class="arrow__item"></span>
            <span class="arrow__item"></span>
            <span class="arrow__item"></span>
          </div>
        </div>
        <div class="slider">
          <div class="slider-wrapper">
            <img
              class="slider__image"
              src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1608/Warcraft-movie-2016-HD_1920x1080.jpg"
              alt
            />
            <h2 class="slider__title">Warcraft</h2>
            <a class="slider__button">Discover more</a>
          </div>
          <div class="slider-wrapper">
            <img
              class="slider__image"
              src="https://i.pinimg.com/originals/21/f2/13/21f213ca88348a895e17205657bce3db.jpg"
              alt
            />
            <h2 class="slider__title">Avatar</h2>
            <a class="slider__button">Discover more</a>
          </div>
          <div class="slider-wrapper">
            <img
              class="slider__image"
              src="https://images.hdqwalls.com/wallpapers/how-to-train-your-dragon-the-hidden-world-movie-poster-oh.jpg"
              alt
            />
            <h2 class="slider__title">How To Train Your Dragon The Hidden World</h2>
            <a class="slider__button">Discover more</a>
          </div>
          <div class="slider-wrapper">
            <img
              class="slider__image"
              src="https://cdn.onebauer.media/one/empire-images/reviews_films/5ccc0a6f133d503e3a496de5/pdp2.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
              alt
            />
            <h2 class="slider__title">POKÉMON Detective Pikachu</h2>
            <a class="slider__button">Discover more</a>
          </div>
          <div class="slider-wrapper">
            <img
              class="slider__image"
              src="https://i0.wp.com/image.tmdb.org/t/p/original//5A2bMlLfJrAfX9bqAibOL2gCruF.jpg"
              alt
            />
            <h2 class="slider__title">Aquaman</h2>
            <a class="slider__button">Discover more</a>
          </div>
          <div class="slider-wrapper">
            <img
              class="slider__image"
              src="https://images7.alphacoders.com/526/thumb-1920-526236.jpg"
              alt
            />
            <h2 class="slider__title">The Hobbit: The Battle of the Five Armies</h2>
            <a class="slider__button">Discover more</a>
          </div>
          <div class="slider-wrapper">
            <img
              class="slider__image"
              src="https://i.ytimg.com/vi/7gbEKVsKivE/maxresdefault.jpg"
              alt
            />
            <h2 class="slider__title">Fantastic Beasts: Crimes of Green de Wald</h2>
            <a class="slider__button">Discover more</a>
          </div>
        </div>
      </section>
    </template>
  </section>
</template>

<script>
/*
import CardSlide from '@/components/posts/CardSlide.vue'
 */
export default {
  name: 'Home' /*  components: {    CardSlide  }, */,
  data: () => ({
    loading: false
  })
}
</script>

<style lang="scss">
.arrow-down {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  left: 50%;
  margin-right: -50%;
  transform: translatex(-50%);
  bottom: -50px;
  background-color: rgba($white, 0.5);
  border-radius: 50%;
  padding: 20px 20px 10px 20px;
  width: 100px;
  height: 100px;
}
.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &__item {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 5px solid #000;
    border-right: 5px solid #000;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
    &:nth-child(2) {
      animation-delay: -0.2s;
    }
    &:nth-child(3) {
      animation-delay: -0.4s;
    }
  }
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
.slider {
  max-height: 100vh;
  @include flex(flex-end, center, column);
  &__image {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
  }
  &__title {
    position: relative;
    @include text($H300, 700, $white);
    text-transform: capitalize;
    margin-bottom: 20px;
  }
  &__button {
    cursor: pointer;
    margin-bottom: 90px;
    @include text($H50, 500, $white);
    border: 1px solid $white;
    letter-spacing: 1.5px;
    padding: 10px 20px;
    @include media {
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
.slider-wrapper {
  position: relative;
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 100vh !important;
  box-shadow: inset 0 0 1000px 1000px rgba(#000, 0.1);
}
.slick-dots {
  margin: auto;
  position: absolute;
  right: 60px;
  top: 40%;
  padding: 0;
  margin: 0;
  @include size(10px);
}
.slick-dots li {
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  @include size(10px);
}
.slick-dots li button::before {
  padding: 0;
  font-size: 5px;
  color: transparent;
  background-color: $text-about;
  opacity: 1;
  border-radius: 50%;
  @include size(10px);
}

.slick-dots li.slick-active button::before {
  padding: 0;
  margin: 0;
  color: transparent;
  background-color: #fff;
  opacity: 1;
  @include size(10px);
  border-radius: 50%;
}
.slick-slide {
  border: 0;
  outline: none;
}
</style>
