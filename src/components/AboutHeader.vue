<template>
  <div class="about-header">
    <img
      class="about-header__image"
      src="https://scontent.fdnk1-2.fna.fbcdn.net/v/t1.0-0/c100.0.206.206a/p206x206/104587135_2309076262734800_433423695232416193_o.jpg?_nc_cat=110&_nc_sid=da31f3&_nc_ohc=Xrk2HEd7qDQAX8PzKKg&_nc_ht=scontent.fdnk1-2.fna&oh=abddd590775d173c89bc2cd89a77fc3f&oe=5F134316"
      alt
    />
    <h2 class="about-header__about">About</h2>
    <h2 class="about-header__name">Olexander Vodoriz</h2>
    <div class="about-header__subtitle-wrapper">
      <h3 class="about-header__subtitle">Junior Front-End developer</h3>
    </div>
  </div>
</template>
<style lang="scss">
.about-header {
  position: relative;
  @include flex(center, flex-start, column);
  padding: 50px 0;
  &__image {
    border-radius: 50%;
    margin-bottom: 50px;
  }
  &__about {
    @include text($H400, 600, $white);
    font-family: $base-font;
    letter-spacing: 1.5px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: -5px;
    &:after {
      margin-left: 25px;
      margin-bottom: 5px;
      content: "";
      display: inline-block;
      width: 50px;
      height: 25px;
      background-color: $bg-color;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      box-shadow: 0px 0px 5px 1px rgba($blue, 0.7);
      @media screen and(min-width: 525px) {
        width: 150px;
      }
      @media screen and(min-width: 850px) {
        width: 300px;
      }
      @media screen and(min-width: 1200px) {
        width: 480px;
      }
    }
    &:before {
      margin-right: 25px;
      margin-bottom: 5px;
      content: "";
      display: inline-block;
      width: 50px;
      height: 25px;
      background-color: $bg-color;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      box-shadow: 0px 0px 5px 1px rgba($blue, 0.7);
      @media screen and(min-width: 525px) {
        width: 150px;
      }
      @media screen and(min-width: 850px) {
        width: 300px;
      }
      @media screen and(min-width: 1200px) {
        width: 480px;
      }
    }
  }
  &__name {
    @include text($H400, 700, $white);
    font-family: $base-font;
    letter-spacing: 1.5px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
    text-transform: uppercase;
    @media screen and (min-width: $screen-tablet) {
      font-size: $H500;
      letter-spacing: 15px;
    }
  }
  &__subtitle {
    @include text($H100, 600, $white);
    font-family: $base-font;
    letter-spacing: 1.5px;
    text-align: center;
    &-wrapper {
      width: 100%;
      padding: 2px;
      background-color: $bg-color;
      box-shadow: 0px 0px 5px 1px rgba($blue, 0.7);
      border-radius: 20px;
    }
  }
}
</style>
