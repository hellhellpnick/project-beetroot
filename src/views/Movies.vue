<template>
  <section class="contact container">
    <loader v-if="loading" />
    <template v-else>
      <h2>{{error ? 'Movie not found' : movie.original_title}}</h2>
      <p v-if="movie.overview">{{movie.overview}}</p>
    </template>
  </section>
</template>

<script>
const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "f1540f730f26f48851aa3a0a12af3257";
console.log(res);
export default {
  name: "Movies",
  data() {
    return {
      movie: {
        id: null,
        original_title: null,
        overview: null
      },
      loading: false,
      error: false
    };
  },
  methods: {
    async fetchMovies() {
      try {
        this.error = false;
        this.loading = true;
        const res = await fetch(
          `${BASE_URL}/movie/${this.$route.params.pid}?api_key=${KEY}`
        );
        if (res.ok) {
          const data = await res.json();
          this.movies = { ...data };
          this.error = false;
        } else {
          this.error = true;
          console.log(res.status, "Movies not loaded!");
        }
      } catch (err) {
        this.error = true;
        console.log("Movies not loaded!");
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchMovies();
  }
};
</script>
