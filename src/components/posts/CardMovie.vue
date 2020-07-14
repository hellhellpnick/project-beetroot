<template>
  <router-link :to="{name: 'Movie', params: { pid: movie.id } }">
    <article class="card-movie animate__slideInRight">
      <h2 class="card-movie__title">{{movie.original_title}}</h2>
      <p class="card-movie__content">{{movie.overview}}</p>
      <a class="card-movie__button">{{movie.id}}</a>
    </article>
  </router-link>
</template>
<script>
export default {
  name: 'MovieCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.card-movie {
  max-width: 400px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 20px;
  border: 1px solid $text-about;
  border-radius: 20px;
  &__title {
    @include text($H200, 700, $white);
    text-transform: uppercase;
    margin-bottom: 10px;
    text-align: center;
  }
  &__content {
    @include text($H100, 400, $text-about);
    text-align: center;
    margin-bottom: 25px;
  }
  &__button {
    @include text($H100, 400, $blue);
    background-color: $text-about;
    text-align: center;
    text-transform: uppercase;
    padding: 20px;
    width: 150px;
  }
}
.movie-list {
  @include flex(center, center, row, wrap);
}
</style>
