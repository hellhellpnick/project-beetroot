<template>
  <router-link :to="{name: 'Movies', params: { pid: movie.id } }">
    <article class="card-movie animate__animated animate__slow 2s animate__backInRight">
      <img
        class="card-movie__image"
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />
      <h2 class="card-movie__title">{{movie.title}}</h2>
      <p class="card-movie__date">{{movie.release_date}}</p>
    </article>
  </router-link>
</template>
<script>
export default {
  name: 'CardMovie',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.card-movie {
  cursor: pointer;
  max-width: 250px;
  margin: 0 6px;
  margin-bottom: 10px;
  padding: 0 20px 20px 0px;
  transition: all 0.5s ease;
  opacity: 0.5;
  @include media {
    &:hover {
      opacity: 1;
    }
  }
  &__box {
    @include flex(space-between, center, row);
    margin-left: 20px;
  }
  &__title {
    @include text($H50, 700, #fff);
    text-transform: uppercase;
    margin-bottom: 10px;
    text-align: center;
  }
  &__date {
    @include text($H50, 400, $text-about);
    text-align: center;
  }
  &__image {
    width: 250px;
    height: 400px;
    margin-bottom: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  }
}
.movie-list {
  @include flex(center, center, row, wrap);
}
</style>
