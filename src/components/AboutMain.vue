<template>
  <div class="about-main">
    <h2 class="about-main__title">Introduction</h2>
    <p class="about-main__text">Hello, I'm Olexander Vodoriz 👋</p>
    <p class="about-main__text">
      I hope you find what you like on my site,
      I am a junior Front-End developer. In addition to the front-end, I am interested in everything related to PC, web technologies and video games. At the expense of the gameplay of many games, it is only obscene. In my free time I study new technologies, additional reality
      <a
        class="about-main__link"
        href="https://www.oculus.com/"
        target="__blank"
      >VR (Virtual Realite)</a>. I recently saw
      <a
        class="about-main__link"
        href="https://threejs.org/"
        target="__blank"
      >Three.js</a>, this world of animation got me interested. I want to defeat him. Do not mind trying
      <a
        class="about-main__link"
        href="https://www.eight360.com/"
        target="__blank"
      >Eight360 Nova</a> and the desire to practice in
      <a
        class="about-main__link"
        href="https://www.spacex.com/"
        target="__blank"
      >Spase X</a> is present, but for now, the augmented reality designer is not against river in the near future.
      The developer of various layers of augmented reality around a certain territory, taking into account its landscape, historical and cultural context. Some are about dragons and witches, and some during the time of Terrible, Einstein, some are the dark past of Zuckerberg and Elon Musk. Artificial intelligence is a priority, the trend of the near future
    </p>
    <p class="about-main__text">
      All in all Digital Artisan sole proprietor, micro-production owner of customized creations
      is able to understand as accurately as possible what the consumer of a particular industry wants, is ready to offer solution options and, at the output, provide the creation with a complete digital product according to the maximum number of the customer's initial parameters
      contact me and i will help you create with vision and listening to ideas everything is ok.
      True, you can choose only one option cheaply, quickly or efficiently.
      Portfolio and data attached additional information in personal blog, help the
      <a
        class="about-main__link"
        href="https://www.oculus.com/"
        target="__blank"
      >VR</a> world)
    </p>
    <h2 class="about-main__title">Uses</h2>
    <p class="about-main__text about-main__text--bold">What do I use during development?</p>
    <ul class="list-main">
      <li class="list-main__item">
        <a class="list-main__item-link" href="https://vuejs.org/" target="__blank">
          <img class="list-main__item-image" src="https://vuejs.org/images/logo.png" alt="vue" />
          <span class="list-main__item-wrapper">Vue</span>
        </a>
        <p class="about-main__text about-main__text--link">
          - The Progressive
          JavaScript Framework
        </p>
      </li>
      <li class="list-main__item">
        <a class="list-main__item-link" href="https://gulpjs.com/" target="__blank">
          <img
            class="list-main__item-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gulp.js_Logo.svg/1200px-Gulp.js_Logo.svg.png"
            alt="vue"
          />
          <span class="list-main__item-wrapper">Gulp</span>
        </a>
        <p
          class="about-main__text about-main__text--link"
        >- A toolkit to automate & enhance your workflow</p>
      </li>
      <li class="list-main__item">
        <a class="list-main__item-link" href="https://gulpjs.com/" target="__blank">
          <img
            class="list-main__item-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png"
            alt="vue"
          />
          <span class="list-main__item-wrapper">VS Code</span>
        </a>
        <p class="about-main__text about-main__text--link">- Built on open source. Runs everywhere</p>
      </li>
      <li class="list-main__item">
        <a class="list-main__item-link" href="https://gulpjs.com/" target="__blank">
          <img
            class="list-main__item-image"
            src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
            alt="vue"
          />
          <span class="list-main__item-wrapper">Sass</span>
        </a>
        <p
          class="about-main__text about-main__text--link"
        >- Powerful professional grade CSS extension</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.about-main {
  position: relative;
  @include flex(center, flex-start, column);
  margin-bottom: 25px;
  max-width: 1200px;
  padding-left: 10px;
  @media screen and (min-width: $screen-tablet) {
    padding-left: 65px;
  }
  &__title {
    @include text($H300, 700, $white);
    text-align: justify;
    font-family: $base-font;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
    padding-left: 0;
    @media screen and (min-width: $screen-tablet) {
      padding-left: 65px;
    }
    &--position {
      padding-left: 80px;
    }
  }
  &__text {
    @include text($H200, 500, $text-about);
    font-family: $base-font;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
    max-width: 900px;
    padding-left: 20px;
    text-align: justify;
    padding-left: 0;
    @media screen and (min-width: $screen-tablet) {
      padding-left: 65px;
    }
    &:nth-child(4) {
      margin-bottom: 50px;
    }
    &--link {
      margin-bottom: 0;
      max-width: 600px;
      padding: 0;
    }
    &--bold {
      font-weight: 600;
      padding-left: 0;
      @media screen and (min-width: $screen-tablet) {
        padding-left: 70px;
      }
    }
  }
  &__link {
    @include text($H200, 500, rgb(194, 194, 194));
    transition: all 0.2s ease;
    @include media() {
      &:hover {
        color: $white;
      }
    }
  }
}
.list-main {
  @include flex(flex-start, stretch, column);
  list-style: none;
  padding-left: 0;
  @media screen and (min-width: $screen-tablet) {
    padding-left: 65px;
  }
  &__item {
    @include flex(flex-start, center, row);
    margin-bottom: 15px;
    &-image {
      @include size(24px);
      margin-right: 10px;
    }
    &-link {
      @include flex(center, center, row);
      @include text($H200, 700, $blue);
      font-family: $base-font;
      margin-right: 5px;
      letter-spacing: 1.5px;
      transition: all 0.2s ease;
      @include media() {
        &:hover {
          color: $white;
        }
      }
    }
    &-wrapper {
      padding-bottom: 1px;
      border-bottom: 2px solid $text-about;
      transition: all 0.2s ease;
      @include media() {
        &:hover {
          border-color: $blue;
        }
      }
    }
  }
}
</style>
