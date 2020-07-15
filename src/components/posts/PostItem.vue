<template>
  <router-link class="tile is-child notification" :to="{name: 'Post', params: { pid: post.id } }">
    <article>
      <p class="title">{{post.title}}</p>
      <div class="content">{{post.body}}</div>
    </article>
  </router-link>
</template>
<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
