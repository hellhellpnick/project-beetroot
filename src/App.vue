<template>
  <div id="app">
    <Navigation />
  </div>
</template>
<script>
import Navigation from '@/components/common/Navigation'
export default {
  name: 'app',
  components: {
    Navigation
  },
  computed: {
    pageTitle () {
      return this.$route.meta.title
    }
  },

  watch: {
    pageTitle: val => {
      document.title = val
    }
  },
  created () {
    document.title = this.$route.meta.title
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #000;
  min-height: 100vh;
}
</style>
