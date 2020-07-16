<template>
  <router-link :to="{name: 'Movies', params: { pid: movi.id } }">
    <div class="slider-wrapper">
      <img
        class="slider__image"
        :src="`https://image.tmdb.org/t/p/original${movi.poster_path}`"
        alt
      />
      <h2 class="slider__title">{{movi.title}}</h2>
      <a class="slider__button">Discover more</a>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "CardSlide",
  props: {
    movi: {
      type: Object,
      required: true
    }
  }
};
</script>
