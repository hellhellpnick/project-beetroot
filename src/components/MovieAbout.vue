<template>
  <div class="animate__animated animate__slow 2s animate__fadeInRight">
    <div class="movie-content__wrapper movie-content__wrapper--row">
      <svg class="movie-content__svg-author">
        <use xlink:href="#author" />
      </svg>
      <p class="movie-content__author">{{author}}</p>
    </div>
    <div class="movie-content__wrapper">
      <p class="movie-content__text" :title="`${fulltext}`">{{text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MovieAbout',
  props: {
    author: String,
    text: String,
    fulltext: String
  }
}
</script>
