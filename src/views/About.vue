<template>
  <section>
    <loader v-if="loading" />
    <template v-else>
      <section class="about animate__animated animate__zoomInDown">
        <AboutHeader></AboutHeader>
        <AboutMain></AboutMain>
        <div class="about-footer">
          <div class="about-footer__wrapper">
            <p class="about-footer__text">Follow me on:</p>

            <a class="about-footer__link" href="https://www.facebook.com/">
              <img
                class="about-footer__link-image"
                src="https://finst.ee/wp-content/uploads/2016/04/logo-facebook.png"
                alt="facebook"
              />
              <span class="about-footer__link-text">Facebook</span>
              <p class="about-footer__link-text about-footer__link-text--color">,</p>
            </a>
            <a class="about-footer__link" href="https://github.com/">
              <img
                class="about-footer__link-image"
                src="https://www.clipartmax.com/png/middle/179-1799200_github-logo-icon-github-logo-png.png"
                alt="github"
              />
              <span class="about-footer__link-text">Github</span>
              <p class="about-footer__link-text about-footer__link-text--color">,</p>
            </a>
            <a class="about-footer__link" href="https://github.com/">
              <img
                class="about-footer__link-image"
                src="https://c7.hotpng.com/preview/639/518/351/computer-icons-clip-art-instagram-logo.jpg"
                alt="instagram"
              />
              <span class="about-footer__link-text">Instagram</span>
            </a>
          </div>
          <AboutFooter></AboutFooter>
        </div>
      </section>
    </template>
  </section>
</template>
<script>
import AboutFooter from '@/components/AboutFooter'
import AboutMain from '@/components/AboutMain'
import AboutHeader from '@/components/AboutHeader'
export default {
  name: 'About',
  components: {
    AboutFooter,
    AboutMain,
    AboutHeader
  },
  data: () => ({
    loading: false
  })
}
</script>
<style lang="scss">
.about {
  @extend %container;
  @media screen and (min-width: $screen-tablet) {
    padding: 0 10px;
  }
}
</style>
