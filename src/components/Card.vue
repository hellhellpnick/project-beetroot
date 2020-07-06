<template>
  <div class="card">
    <img class="card__box" :src="`${image}`" />
    <div class="card-container">
      <a class="card__link" :href="`${link}`">
        <h3 class="card__subtitle">Creating My</h3>
        <h2 class="card__title">{{ title }}</h2>
        <p class="card__text">{{ text }}</p>
        <div class="card__wrapper">
          <p class="card__text card__text--last">{{ state }}</p>
          <p class="card__text card__text--last">{{ date }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: String,
    text: String,
    state: String,
    date: String,
    link: String,
    image: String
  }
}
</script>
<style lang="scss">
.card {
  position: relative;
  margin: 0 auto;
  transition: all 0.2s ease;
  box-shadow: inset 0 0 1000px 10px #000;
  display: block;
  @include flex(flex-start, stretch, column);
  position: relative;
  max-width: 1200px;
  max-height: 800px;
  margin-bottom: 20px;
  padding: 20px;
  z-index: 20;
  border: 1px solid $text-about;
  &__box {
    position: absolute;
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
    top: 0;
    left: 0;
  }
  &__link {
    transition: all 0.2s ease;
    &:hover {
      .card {
        box-shadow: none;
      }
      .card__subtitle,
      .card__title,
      .card__text {
        color: transparent;
      }
    }
  }
  &__wrapper {
    @include flex(space-between, stretch, row);
  }
  &__subtitle {
    @include text($H100, 600, $white);
    text-align: left;
    font-family: $base-font;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    transition: all 0.2s ease;
    padding: 5px;
    border-radius: 20px;
  }
  &__title {
    @include text($H200, 600, $white);
    text-align: left;
    font-family: $base-font;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    transition: all 0.2s ease;
    padding: 5px;
    border-radius: 20px;
  }
  &__text {
    @include text($H50, 600, $white);
    text-align: left;
    font-family: $base-font;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 0.2s ease;
    padding: 5px;
    border-radius: 20px;
    margin-bottom: 150px;
    &:last-child {
      margin-bottom: 0;
    }
    &--last {
      margin-bottom: 0;
    }
  }
}
.card-container {
  z-index: 2;
}
</style>
