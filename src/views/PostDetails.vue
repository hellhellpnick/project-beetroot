<template>
  <div v-if="!error">
    <h1>{{ loading ? "Loading..." : post.origianl_title }}</h1>
    <p>{{ post.overview }}</p>
    <button @click="$router.go(-1)">Back</button>
  </div>
  <h1 v-else>{{ error }}</h1>
</template>
<script>
export default {
  name: 'PostDetails',
  data () {
    return {
      loading: false,
      post: {
        original_title: '',
        overview: '',
        id: ''
      },
      error: ''
    }
  },
  created () {
    const { id } = this.$route.params
    if (id) {
      this.loading = true
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f1540f730f26f48851aa3a0a12af3257`
      )
        .then(response => {
          this.error = ''
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(response)
          }
        })
        .then(data => {
          console.log(data)
          this.post = { ...data }
        })
        .catch(error => {
          console.log(error)
          this.error = 'Movie not found'
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
