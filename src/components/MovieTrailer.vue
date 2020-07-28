<template>
  <div class="movie-content__wrapper movie-content__wrapper--trailer" @click="$emit('visible')">
    <span class="circle"></span>
    <p class="movie-content__watch">watch trailer</p>
  </div>
</template>
<script>
export default {
  name: 'MovieTrailer',
  props: ['visible']
}
</script>
<style lang="scss">
.circle {
  z-index: 2;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  @include size(40px);
  cursor: pointer;
  transition: all 1s ease;
  left: 0;
}
</style>
