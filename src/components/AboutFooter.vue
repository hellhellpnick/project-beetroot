<template>
  <div class="about-footer__wrapper">
    <p class="about-footer__text">Build with</p>
    <svg class="about-footer__svg">
      <use xlink:href="#heart" />
    </svg>
    <p class="about-footer__text">using:</p>
    <a class="about-footer__link" href="https://github.com/">
      <img class="about-footer__link-image" src="https://vuejs.org/images/logo.png" alt="vue" />
      <span class="about-footer__link-text">Vue</span>
      <p class="about-footer__link-text about-footer__link-text--color">,</p>
    </a>
    <a class="about-footer__link" href="https://github.com/">
      <img
        class="about-footer__link-image"
        src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
        alt="sass"
      />
      <span class="about-footer__link-text">Sass</span>
    </a>
    <svg display="none">
      <symbol id="heart" viewBox="0 0 512 512">
        <path
          d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
        />
      </symbol>
    </svg>
  </div>
</template>

<style lang="scss">
.about-footer {
  padding-bottom: 20px;
  @include flex(flex-start, stretch, column);
  &__svg {
    @include svg(20px, red);
    margin-right: 10px;
    animation-name: heart;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    @keyframes heart {
      from {
        transform: scale(1.3);
      }
      to {
        transform: scale(1);
      }
    }
  }
  &__wrapper {
    @include flex(center, center, row, wrap);
    margin-bottom: 20px;
  }
  &__text {
    @include text($H100, 600, $white);
    margin-right: 15px;
    font-family: $base-font;
  }
  &__link {
    @include flex(flex-start, center, row);
    color: $text-about;
    &-image {
      @include size(25px);
      margin-right: 5px;
    }
    &-text {
      @include text($H100, 600, $white);
      padding-bottom: 1px;
      border-bottom: 2px solid $text-about;
      font-family: $base-font;
      &--color {
        color: $text-about;
        margin: 0 5px;
        border: none;
      }
      @include media {
        &:hover {
          border-color: $white;
        }
      }
    }
  }
}
</style>
