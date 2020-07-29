<template>
  <section id="about">
    <loader v-if="loading" />
    <template v-else>
      <div class="about-wrapper" :class="{_red: isRed}">
        <section class="about animate__animated animate__fadeIn">
          <about-header></about-header>
          <about-main></about-main>
          <p class="about-main__title about-main__title--position">My recent works</p>

          <agile :options="myOptions" class="bottom">
            <card-work
              title="Website Cahee"
              text="A complete Website Cahee. There used pure HTML/CSS. Also, the navigation menu is made on CSS"
              state="Article"
              date="01 Apr 2020"
              link="https://hellhellpnick.github.io/Cahee/"
              :image="require('@/assets/card-home/cahee.jpg')"
            ></card-work>
            <card-work
              title="Website Tajam"
              text="A complete Website Tajam. There used pure HTML/CSS. Also, the navigation menu is made on CSS"
              state="Article"
              date="16 Apr 2020"
              link="https://hellhellpnick.github.io/front-end/"
              :image="require('@/assets/card-home/tajam.jpg')"
            ></card-work>
            <card-work
              title="Website Bhromaon"
              text="A complete Website Bhromaon. There used pure HTML/CSS. Also, the navigation menu is made on CSS"
              state="Article"
              :image="require('@/assets/card-home/bhromaon.jpg')"
              date="29 Apr 2020"
              link="http://hellhellpnick.github.io/bhromaon/"
            ></card-work>
            <card-work
              title="Website Monticello"
              text="A complete Website Monticello. There used HTML/CSS/JSS. Also, the navigation menu is made on CSS/JS"
              state="Article"
              date="29 May 2020"
              link="https://hellhellpnick.github.io/monticello/"
              :image="require(`@/assets/card-home/monticello.jpg`)"
            ></card-work>
          </agile>
          <div class="about-footer">
            <div class="about-footer__wrapper">
              <p class="about-footer__text">Follow me on:</p>

              <a class="about-footer__link" href="https://www.facebook.com/" target="__blank">
                <img
                  class="about-footer__link-image"
                  src="https://finst.ee/wp-content/uploads/2016/04/logo-facebook.png"
                  alt="facebook"
                />
                <span class="about-footer__link-text">Facebook</span>
                <p class="about-footer__link-text about-footer__link-text--color">,</p>
              </a>
              <a class="about-footer__link" href="https://github.com/" target="__blank">
                <img
                  class="about-footer__link-image"
                  src="https://pngimg.com/uploads/github/github_PNG28.png"
                  alt="github"
                />
                <span class="about-footer__link-text">Github</span>
                <p class="about-footer__link-text about-footer__link-text--color">,</p>
              </a>
              <a
                class="about-footer__link"
                href="https://www.instagram.com/?hl=ru"
                target="__blank"
              >
                <img
                  class="about-footer__link-image"
                  src="https://i.pinimg.com/originals/66/41/c9/6641c94e15a0be37af49a4250386c03e.png"
                  alt="instagram"
                />
                <span class="about-footer__link-text">Instagram</span>
              </a>
            </div>

            <about-footer></about-footer>
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
import { VueAgile } from 'vue-agile'

export default {
  name: 'About',
  props: ['isRed'],
  components: {
    'about-footer': AboutFooter,
    'about-main': AboutMain,
    'card-work': CardWorks,
    'about-header': AboutHeader,
    agile: VueAgile
  },
  data () {
    return {
      myOptions: {
        navButtons: false,
        autoplay: true,
        autoplaySpeed: 4500,
        fade: true
      },
      loading: false
    }
  }
}
</script>
<style lang="scss">
.bottom {
  margin-bottom: 20px;
}
.about {
  z-index: 2;
  @extend %container;
  background: #000;
  box-shadow: 0 0 10px 1px rgba($blue, 0.7);
  @media screen and (min-width: $screen-tablet) {
    padding: 0 20px;
  }
}
.about-wrapper {
  z-index: 1; /*
  background-image: url("https://i2.wp.com/meownauts.com/wp-content/uploads/2016/04/warcraft-movie-poster-full_987.0.0.jpg?fit=1600%2C900&ssl=1");
 */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
