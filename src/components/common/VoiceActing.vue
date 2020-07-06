<template>
  <div class="movie-content__wrapper">
    <svg class="movie-content__footer-svg">
      <use xlink:href="#netflix" />
    </svg>
    <p class="movie-content__footer-text">{{name}}</p>
  </div>
</template>
<script>
export default {
  name: 'VoiceActing',
  props: {
    name: String
  }
}
</script>
