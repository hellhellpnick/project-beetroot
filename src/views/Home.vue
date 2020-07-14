<template>
  <section>
    <loader v-if="loading" />
    <template v-else>
      <section class="home animate__animated animate__zoomInDown"></section>
    </template>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    loading: false
  })
}
</script>

<style lang="scss">
.home {
  @extend %container;
  min-height: 100vh;
  max-height: max-content;
  padding: 50px 10px 30px 10px;
}
.home-header {
  margin-bottom: 50px;
  &__title {
    @include text($H400, 600, $white);
    font-family: $base-font;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
  }
  &__subtitle {
    @include text($H200, 600, $white);
    font-family: $base-font;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
  }
  &__text {
    @include text($H100, 600, $white);
    font-family: $base-font;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
  }
}
</style>
