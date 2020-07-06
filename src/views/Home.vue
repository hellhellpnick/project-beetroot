<template>
  <section class="home animate__animated animate__zoomInDown">
    <div class="home-header">
      <h2 class="home-header__title">Olexander Vodoriz</h2>
      <h3 class="home-header__subtitle">Junior Front-End developer</h3>
      <p class="home-header__text">My recent works</p>
    </div>
    <card
      title="Website Cahee"
      text="A complete Website Cahee. There used pure HTML/CSS. Also, the navigation menu is made on CSS"
      state="Article"
      date="01 Apr 2020"
      link="https://hellhellpnick.github.io/Cahee/"
      image="../assets/card-home/cahee.jpg"
    ></card>
    <card
      title="Website Bhromaon"
      text="A complete Website Cahee. There used pure HTML/CSS. Also, the navigation menu is made on CSS"
      state="Article"
      image="../assets/card-home/bhromaon.jpg"
      date="29 Apr 2020"
      link="http://hellhellpnick.github.io/bhromaon/"
    ></card>
    <card
      title="Website Monticello"
      text="A complete Website Monticello. There used HTML/CSS/JSS. Also, the navigation menu is made on CSS/JS"
      state="Article"
      date="29 May 2020"
      link="https://hellhellpnick.github.io/monticello/"
      image="../assets/card-home/monticello.jpg"
    ></card>
    <AboutFooter></AboutFooter>
  </section>
</template>

<script>
import Card from '@/components/Card'
import AboutFooter from '@/components/AboutFooter'
export default {
  name: 'Home',
  components: {
    Card,
    AboutFooter
  }
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
