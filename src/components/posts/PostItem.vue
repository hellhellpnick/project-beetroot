<template>
  <router-link :to="{name: 'training', params: { pid: post.id } }">
    <article class="post-card">
      <p class="post-card__title">{{post.title}}</p>
      <div class="post-card__content">{{post.body}}</div>
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
<style lang="scss">
.post-card {
  max-width: 400px;
  margin-right: 15px;
  &__title {
    @include text($H200, 700, $white);
    text-transform: uppercase;
    margin-bottom: 10px;
    text-align: center;
  }
  &__content {
    @include text($H100, 400, $text-about);
    text-align: center;
    margin-bottom: 25px;
  }
}
.movie-list {
  @include flex(center, center, row, wrap);
}
</style>
