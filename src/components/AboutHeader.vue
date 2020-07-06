<template>
  <div class="about-header">
    <img
      class="about-header__image"
      src="https://scontent.fdnk1-2.fna.fbcdn.net/v/t1.0-0/c100.0.206.206a/p206x206/104587135_2309076262734800_433423695232416193_o.jpg?_nc_cat=110&_nc_sid=da31f3&_nc_ohc=Xrk2HEd7qDQAX8PzKKg&_nc_ht=scontent.fdnk1-2.fna&oh=abddd590775d173c89bc2cd89a77fc3f&oe=5F134316"
      alt
    />
    <h2 class="about-header__about">About</h2>
    <h2 class="about-header__name">Olexander Vodoriz</h2>
    <h3 class="about-header__subtitle">Junior Front-End developer</h3>
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
  }
  &__name {
    @include text($H400, 700, $white);
    font-family: $base-font;
    letter-spacing: 1.5px;
    text-align: left;
    @media screen and (min-width: $screen-tablet) {
      font-size: $H500;
    }
  }
  &__subtitle {
    @include text($H200, 600, $text-about);
    font-family: $base-font;
    letter-spacing: 1.5px;
    text-align: left;
  }
}
</style>
