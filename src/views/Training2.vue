<template>
  <section class="home">
    <loader v-if="loading" />
    <template v-else>
      <h2 class="home-header__title">Movie search</h2>
      <Input />
      <div
        class="tile is-ancestor"
        v-for="(movieGroup, idx) in mapedMovies"
        :key="movieGroup[0].id"
      >
        <div class="movie-list" :class="{_start: idx % 2}">
          <div class="movie-list">
            <CardMovie :movie="movieGroup[0]" class="is-primary" />
            <CardMovie :movie="movieGroup[1]" class="is-warning" />
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import CardMovie from '@/components/posts/CardMovie.vue'
import Input from '@/components/common/Input.vue'

const BASE_URL = 'https://api.themoviedb.org/3'
const KEY = 'f1540f730f26f48851aa3a0a12af3257'

export default {
  name: 'Training2',
  components: {
    CardMovie,
    Input
  },
  data: () => ({
    loading: false
  }),
  methods: {
    async fetchMovies () {
      try {
        this.error = false
        this.loading = true
        const res = await fetch(
          `${BASE_URL}/movie/550?api_key=${KEY}&callback=test`
        )
        if (res.ok) {
          const data = await res.json()
          this.movies = { ...data }
          this.error = false
        } else {
          this.error = true
          console.log(res.status, 'All ok')
        }
      } catch (err) {
        this.error = true
        console.log('Movies not loaded!')
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    searchMovie (value) {
      let movies = []
      const res = fetch(
        `${BASE_URL}/search/movie?api_key=${KEY}&query=${value}`
      )
      if (res.ok) {
        const data = res.json()
        movies = [...data]
      } else {
        console.log(res.status, 'Posts not loaded!')
      }
      return movies
    },
    mapedMovies () {
      let countIdx = 1
      const movies = []
      try {
        this.movies.forEach((movie, idx) => {
          if (idx >= countIdx) {
            countIdx += 5
          }
          const currentIdx = countIdx - 1
          if (!movies[currentIdx]) movies[currentIdx] = []
          movies[currentIdx].push(movie)
        })
      } catch (err) {
        console.log(err)
      }
      return movies
    }
  },
  created () {
    this.fetchMovies()
  }
}
</script>
