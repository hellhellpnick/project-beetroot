<template>
  <div id="app">
    <div class="input-wrapper">
      <input type="text" v-model="search" class="input" placeholder="Film name" />
    </div>
    <p class="text">{{search}}</p>
    <article class="card-movie animate__backInUp" v-if="movie.title">
      <img
        class="card-movie__image"
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />
      <h2 class="card-movie__title">{{movie.title}}</h2>
      <p class="card-movie__date">{{movie.release_date}}</p>
    </article>
    <h2 v-if="error">{{error}}</h2>
  </div>
</template>
<script>
const initMovie = {
  title: null,
  poster_path: '',
  release_date: ''
}
export default {
  name: 'App',
  data () {
    return {
      search: '',
      movie: { ...initMovie },
      error: ''
    }
  },
  methods: {
    cleanmovie () {
      this.movie = { ...initMovie }
    },
    onError () {
      this.error = 'movie not found'
    },
    async fetchMovie (query) {
      try {
        this.error = ''
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${query}?api_key=f1540f730f26f48851aa3a0a12af3257`
        )
        if (res.ok) {
          const data = await res.json()
          console.log(data)
          this.movie.title = data.title
          this.movie.poster_path = data.poster_path
          this.movie.release_date = data.release_date
        } else {
          this.cleanMovie()
          this.onError()
        }
      } catch (err) {
        console.log(err)
        this.cleanMovie()
        this.onError()
      }
    }
  },
  watch: {
    search (value) {
      if (value) {
        this.fetchMovie(value)
      }
    }
  }
}
</script>

<style lang="scss">
.input {
  background-color: $text-about;
  @include text($H50, 400, $white);
  text-transform: capitalize;
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 150px;
  transition: all 0.2s ease;
  @include media {
    &:focus {
      width: 170px;
    }
  }
  &::placeholder {
    @include text($H50, 400, $white);
    text-transform: capitalize;
  }
}
.input-wrapper {
  display: block;
  width: 200px;
  margin: 0 auto;
}
.text {
  color: $white;
  margin: 15px 0;
}
.card-movie {
  cursor: pointer;
  max-width: 250px;
  margin: 0 6px;
  margin-bottom: 10px;
  padding: 0 20px 20px 0px;
  margin: 0 auto;
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
