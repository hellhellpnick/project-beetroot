<template>
  <router-link :to="{name: 'Movie', params: { pid: movie.id } }">
    <article
      class="card-movie animate__animated animate__slow 2s animate__backInRight"
      v-if="movie.adult === false"
    >
      <div class="card-img">
        <div class="card-img__face card-img__face--front">
          <img
            class="card-movie__image"
            :src="(`https://image.tmdb.org/t/p/original${movie.poster_path}` !== `https://image.tmdb.org/t/p/originalnull`) ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : `https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47326122111391.5630cc891bd73.jpg`"
          />
        </div>
        <div class="card-img__face card-img__face--back">
          <h2 class="card-img__title" :title="`{{movie.title}}`">{{movie.title}}</h2>
          <p class="card-img__text" :title="`${movie.overview}`">{{movie.overview}}</p>
          <img
            class="card-movie__image"
            :src="(`https://image.tmdb.org/t/p/original${movie.backdrop_path}` !== `https://image.tmdb.org/t/p/originalnull`) ? `https://image.tmdb.org/t/p/original${backdrop_path}` : `https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47326122111391.5630cc891bd73.jpg`"
          />
        </div>
      </div>
      <h2 class="card-movie__title">{{movie.title}}</h2>
      <p class="card-movie__date">{{movie.release_date}}</p>
    </article>
    <article class="card-movie animate__animated animate__slow 2s animate__backInRight" v-else>
      <div class="card-img">
        <div class="card-img__face card-img__face--front">
          <img
            class="card-movie__image card-movie__image--contain"
            :src="`https://upload.wikimedia.org/wikipedia/commons/7/78/RARS_18%2B.svg`"
          />
        </div>
        <div class="card-img__face card-img__face--back">
          <h2 class="card-img__title" :title="`{{movie.title}}`">{{movie.title}}</h2>
          <p class="card-img__text" :title="`${movie.overview}`">{{movie.overview}}</p>
          <img
            class="card-movie__image card-movie__image--contain"
            :src="`https://upload.wikimedia.org/wikipedia/commons/7/78/RARS_18%2B.svg`"
          />
        </div>
      </div>
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
  margin-bottom: 20px;
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
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    margin-bottom: 10px;
    -webkit-box-orient: vertical;
  }
  &__date {
    @include text($H50, 400, $text-about);
    text-align: center;
  }
  &__image {
    width: 250px;
    height: 400px;
    margin-bottom: 10px;
    object-fit: cover;
    object-position: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    &--contain {
      object-fit: contain;
    }
  }
}
.card-img {
  position: relative;
  width: 250px;
  height: 400px;
  color: white;
  cursor: pointer;
  transition: 1s ease-in-out;
  transform-style: preserve-3d;
  margin-bottom: 15px;
  &:hover {
    transform: rotateY(0.5turn);
  }
  &__title {
    z-index: 2;
    @include text($H100, 700, $white);
    padding-top: 20px;
    text-transform: capitalize;
  }
  &__text {
    z-index: 2;
    @include text($H50, 400, $white);
    padding-top: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  &__face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: 1s ease-in-out;
    -webkit-box-reflect: below 0
      linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.2));
    &--back {
      transform: rotateY(0.5turn);
      @include flex(center, center, column);
    }
    &--back img {
      position: absolute;
      filter: blur(5px);
    }
  }
}
.movie-list {
  @include flex(center, center, row, wrap);
}
</style>
