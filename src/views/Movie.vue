<template>
  <div id="app">
    <div class="input-wrapper">
      <input type="text" v-model="search" class="input" placeholder="Film name" />
    </div>
    <div class="movie-list__wrapper">
      <CardMovie v-for="value in movies[0]" :key="value.id" :movie="value" />
    </div>
    <h2 v-if="error">{{error}}</h2>
    <div class="movie-year">
      <h2 class="movie-year__title">Movies {{now}}</h2>
    </div>
    <div class="movie-list__wrapper">
      <CardMovie v-for="value in Allmovies" :key="value.id" :movie="value" />
    </div>
  </div>
</template>
<script>
import CardMovie from '@/components/Card/CardMovie.vue'

const initMovie = {
  title: null,
  poster_path: '',
  release_date: ''
}
export default {
  name: 'App',
  components: {
    CardMovie
  },
  data: () => ({
    now: new Date().getFullYear(),
    search: '',
    movie: { ...initMovie },
    Allmovies: [],
    movies: [],
    error: '',
    loading: false
  }),
  methods: {
    onError () {
      this.error = 'movie not found'
    },
    async fetchMovie (query) {
      if (query) {
        try {
          this.loading = true
          this.error = ''
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=f1540f730f26f48851aa3a0a12af3257&query=${query}`
          )
          if (res.ok) {
            const data = await res.json()
            this.movies.push(data.results)
          } else {
            this.onError()
            this.check()
          }
        } catch (err) {
          console.log(err)
          this.onError()
          this.check()
        }
      } else {
        this.check()
      }
    },

    async fetchAllMovies () {
      for (let i = 666750; i <= 668050; i++) {
        try {
          this.error = false
          this.loading = true
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${i}?api_key=f1540f730f26f48851aa3a0a12af3257`
          )
          if (res.ok) {
            const data = await res.json()
            this.movie = { ...data }
            const release = new Date(this.movie.release_date)
            if (this.now === release.getFullYear()) {
              this.Allmovies.push(data)
            }
            this.error = false
          } /* else {
            this.error = true
            console.log(res.status, 'Movies not loaded!')
          } */
        } catch (err) {
          /* this.error = true */
          console.log('Movies not loaded!')
        } finally {
          this.loading = false
        }
      }
    }
  },
  created () {
    this.fetchAllMovies()
  },
  watch: {
    search (search) {
      const $input = document.getElementById('#input')
      if (search) {
        this.fetchMovie(search)
      } else if ($input === '') {
        const $list = document.getElementById('#list')
        $list.innerHTML = ''
      }
    }
  }
}
</script>

<style lang="scss">
.input {
  background-color: transparent;
  @include text($H50, 400, $white);
  text-transform: capitalize;
  padding: 10px;
  margin: 15px 0;
  margin-top: 50px;
  border: none;
  outline: none;
  border-bottom: 1px solid $text-about;
  width: 98%;
  transition: all 0.2s ease;
  @include media {
    &:focus {
      width: 100%;
    }
  }
  &::placeholder {
    @include text($H50, 400, $white);
    text-transform: capitalize;
  }
}
.input-wrapper {
  display: block;
  width: 80%;
  margin: 0 auto;
}
.text {
  color: $white;
  margin: 15px 0;
}
.movie-list__wrapper {
  @include flex(center, center, row, wrap);
}
.movie-year {
  width: 100%;
  padding: 20px 10px;
  margin: 15px 0;
  box-shadow: 0 0 10px 1px rgba($blue, 0.7);
  background-color: $bg-color;
  &__title {
    @include text($H200, 700, $white);
  }
}
</style>
