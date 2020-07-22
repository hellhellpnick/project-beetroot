<template>
  <router-link class="size" :to="{name: 'Movie', params: { pid: movi.id } }">
    <div class="slider-wrapper">
      <img
        class="slider__image"
        :src="`https://image.tmdb.org/t/p/original${movi.backdrop_path}`"
        alt
      />
      <h2 class="slider__title">{{movi.title}}</h2>
      <router-link class="slider__button" :to="{name: 'Movie', params: { pid: movi.id } }">
        <a>Discover more</a>
      </router-link>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'CardSlide',
  data () {
    return {
      id: ''
    }
  },
  props: {
    movi: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.size {
  position: relative;
  width: 100%;
  height: 100%;
}
.slider {
  max-height: 100vh;
  @include flex(flex-end, center, column);
  margin: 0;
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
    margin: 0;
  }
  &__title {
    position: relative;
    @include text($H300, 700, $white);
    text-transform: capitalize;
    margin-bottom: 20px;
  }
  &__button {
    cursor: pointer;
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
  width: 100%;
  box-shadow: inset 0 0 1000px 1000px rgba(#000, 0.1);
  margin: 0;
  padding: 90px 0;
}
</style>
