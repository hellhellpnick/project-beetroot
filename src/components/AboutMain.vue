<template>
  <div class="about-main">
    <h2 class="about-main__title">Introduction</h2>
    <p class="about-main__text">Hello, I'm Olexander Vodoriz 👋</p>
    <p
      class="about-main__text"
    >I'm a Junior Front-End developer, who is interested in web technologies and video games.</p>
    <p class="about-main__text">
      In my free time I study new technologies. Recently I saw
      <a
        class="about-main__link"
        href="https://threejs.org/"
      >Three.js</a>
      this world of animation from the front - end caught me. I want to conquer it :)
    </p>
    <h2 class="about-main__title">Uses</h2>
    <p class="about-main__text about-main__text--bold">What do I use during development?</p>
    <ul class="list-main">
      <li class="list-main__item">
        <a class="list-main__item-link" href="https://vuejs.org/">
          <img class="list-main__item-image" src="https://vuejs.org/images/logo.png" alt="vue" />
          <span class="list-main__item-wrapper">Vue</span>
        </a>
        <p class="about-main__text about-main__text--link">
          - The Progressive
          JavaScript Framework
        </p>
      </li>
      <li class="list-main__item">
        <a class="list-main__item-link" href="https://gulpjs.com/">
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
        <a class="list-main__item-link" href="https://gulpjs.com/">
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
        <a class="list-main__item-link" href="https://gulpjs.com/">
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
  &__title {
    @include text($H300, 700, $white);
    text-align: left;
    font-family: $base-font;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
  }
  &__text {
    @include text($H200, 500, $text-about);
    font-family: $base-font;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
    max-width: 500px;
    text-align: left;
    &--link {
      margin-bottom: 0;
      max-width: 600px;
    }
    &--bold {
      font-weight: 600;
    }
  }
  &__link {
    @include text($H200, 500, $link);
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
