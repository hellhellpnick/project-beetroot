<template>
  <section class="home container">
    <loader v-if="loading" />
    <template v-else>
      <h2 class="title is-1">Home</h2>
      <div class="tile is-ancestor" v-for="(postGroup, idx) in mapedPosts" :key="postGroup[0].id">
        <div class="tile is-vertical is-8" :class="{_start: idx % 2}">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <post-item :post="postGroup[0]" class="is-primary" />
              <post-item v-if="postGroup[1]" :post="postGroup[1]" class="is-warning" />
            </div>
            <div class="tile is-parent" v-if="postGroup[2]">
              <post-item :post="postGroup[2]" class="is-info" />
            </div>
          </div>
          <div class="tile is-parent" v-if="postGroup[3]">
            <post-item :post="postGroup[3]" class="is-danger" />
          </div>
        </div>
        <div class="tile is-parent" v-if="postGroup[4]">
          <post-item :post="postGroup[4]" class="is-success" />
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import PostItem from '@/components/posts/PostItem.vue'

export default {
  name: 'Home',
  components: {
    PostItem
  },
  data: () => ({
    posts: [],
    loading: false
  }),
  methods: {
    async fetchPosts () {
      try {
        this.loading = true
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (res.ok) {
          const data = await res.json()
          this.posts = [...data]
        } else {
          console.log(res.status, 'Posts not loaded!')
        }
      } catch (err) {
        console.log('Posts not loaded!')
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    mapedPosts () {
      let countIdx = 5
      const posts = []
      try {
        this.posts.forEach((post, idx) => {
          if (idx >= countIdx) {
            countIdx += 5
          }
          const currentIdx = countIdx / 5 - 1
          if (!posts[currentIdx]) posts[currentIdx] = []
          posts[currentIdx].push(post)
        })
      } catch (err) {
        console.log(err)
      }
      return posts
    }
  },
  created () {
    this.fetchPosts()
  }
}
</script>
<style>
.home .title {
  text-transform: capitalize;
}
.tile._start {
  order: 2;
}
</style>
