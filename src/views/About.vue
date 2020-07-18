<template>
  <section>
    <loader v-if="loading" />
    <template v-else>
      <div class="about-wrapper">
        <section class="about animate__animated animate__zoomInDown">
          <AboutHeader></AboutHeader>
          <AboutMain></AboutMain>
          <p class="about-main__title">My recent works</p>
          <CardWorks
            title="Website Cahee"
            text="A complete Website Cahee. There used pure HTML/CSS. Also, the navigation menu is made on CSS"
            state="Article"
            date="01 Apr 2020"
            link="https://hellhellpnick.github.io/Cahee/"
            :image="require('@/assets/card-home/cahee.jpg')"
          ></CardWorks>
          <CardWorks
            title="Website Tajam"
            text="A complete Website Tajam. There used pure HTML/CSS. Also, the navigation menu is made on CSS"
            state="Article"
            date="16 Apr 2020"
            link="https://hellhellpnick.github.io/front-end/"
            :image="require('@/assets/card-home/tajam.jpg')"
          ></CardWorks>
          <CardWorks
            title="Website Bhromaon"
            text="A complete Website Bhromaon. There used pure HTML/CSS. Also, the navigation menu is made on CSS"
            state="Article"
            :image="require('@/assets/card-home/bhromaon.jpg')"
            date="29 Apr 2020"
            link="http://hellhellpnick.github.io/bhromaon/"
          ></CardWorks>
          <CardWorks
            title="Website Monticello"
            text="A complete Website Monticello. There used HTML/CSS/JSS. Also, the navigation menu is made on CSS/JS"
            state="Article"
            date="29 May 2020"
            link="https://hellhellpnick.github.io/monticello/"
            :image="require(`@/assets/card-home/monticello.jpg`)"
          ></CardWorks>
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
      </div>
    </template>
  </section>
</template>
<script>
import AboutFooter from '@/components/AboutFooter'
import AboutMain from '@/components/AboutMain'
import AboutHeader from '@/components/AboutHeader'
import CardWorks from '@/components/Card/CardWorks'
export default {
  name: 'About',
  components: {
    AboutFooter,
    AboutMain,
    CardWorks,
    AboutHeader
  },
  data: () => ({
    loading: false
  })
}
</script>
<style lang="scss">
.about {
  z-index: 2;
  @extend %container;
  background: #000;
  box-shadow: 0 0 10px 5px #000;
  @media screen and (min-width: $screen-tablet) {
    padding: 0 20px;
  }
}
.about-wrapper {
  z-index: 1;
  background-image: url("https://i2.wp.com/meownauts.com/wp-content/uploads/2016/04/warcraft-movie-poster-full_987.0.0.jpg?fit=1600%2C900&ssl=1");

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
