<template>
  <div id="app">
    <div class="input-wrapper">
      <input type="text" v-model="search" class="input" placeholder="Film name" />
    </div>
    <div v-for="value in movies" :key="value.id">
      <div class="movie-list__wrapper" id="list">
        <CardMovie v-if="value[0]" :movie="value[0]" />
        <CardMovie v-if="value[1]" :movie="value[1]" />
        <CardMovie v-if="value[2]" :movie="value[2]" />
        <CardMovie v-if="value[3]" :movie="value[3]" />
        <CardMovie v-if="value[4]" :movie="value[4]" />
        <CardMovie v-if="value[5]" :movie="value[5]" />
        <CardMovie v-if="value[6]" :movie="value[6]" />
        <CardMovie v-if="value[7]" :movie="value[7]" />
        <CardMovie v-if="value[8]" :movie="value[8]" />
        <CardMovie v-if="value[9]" :movie="value[9]" />
        <CardMovie v-if="value[10]" :movie="value[10]" />
        <CardMovie v-if="value[11]" :movie="value[11]" />
        <CardMovie v-if="value[12]" :movie="value[12]" />
        <CardMovie v-if="value[13]" :movie="value[13]" />
        <CardMovie v-if="value[14]" :movie="value[14]" />
        <CardMovie v-if="value[15]" :movie="value[15]" />
        <CardMovie v-if="value[16]" :movie="value[16]" />
        <CardMovie v-if="value[17]" :movie="value[17]" />
        <CardMovie v-if="value[18]" :movie="value[18]" />
        <CardMovie v-if="value[19]" :movie="value[19]" />
      </div>
    </div>
    <h2 v-if="error">{{error}}</h2>
  </div>
</template>
<script>
import CardMovie from '@/components/posts/CardMovie.vue'

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
    search: '',
    movie: { ...initMovie },
    movies: [],
    error: '',
    loading: false
  }),
  methods: {
    check () {
      const $list = document.getElementById('#list')
      $list.innerHTML = ''
    },
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
    }
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
  background-color: $text-about;
  @include text($H50, 400, $white);
  text-transform: capitalize;
  padding: 10px;
  margin: 15px 0;
  margin-top: 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 90%;
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
  width: 90%;
  margin: 0 auto;
}
.text {
  color: $white;
  margin: 15px 0;
}
.movie-list__wrapper {
  @include flex(center, center, row, wrap);
}
</style>
