<template>
  <section class="contact container">
    <loader v-if="loading" />
    <template v-else>
      <h2 class="title is-1">{{error ? 'Post not found' : post.title}}</h2>
      <p v-if="post.body">{{post.body}}</p>
    </template>
  </section>
</template>
<script>
export default {
  name: 'Post',
  data () {
    return {
      post: {
        id: null,
        title: null,
        body: null
      },
      loading: false,
      error: false
    }
  },
  methods: {
    async fetchPost () {
      try {
        this.error = false
        this.loading = true
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.pid}`
        )
        if (res.ok) {
          const data = await res.json()
          this.post = { ...data }
          this.error = false
        } else {
          this.error = true
          console.log(res.status, 'Posts not loaded!')
        }
      } catch (err) {
        this.error = true
        console.log('Posts not loaded!')
      } finally {
        this.loading = false
      }
    }
  },
  created () {
    this.fetchPost()
  }
}
</script>
<style>
</style>
