<template>
  <ul class="list-movie">
    <li class="list-movie__item">
      <p class="list-movie__text">{{date}}</p>
    </li>
    <li class="list-movie__item">
      <p class="list-movie__text">{{type}}</p>
    </li>
    <li class="list-movie__item">
      <svg class="list-movie__item-svg">
        <use xlink:href="#star" />
      </svg>
      <p class="list-movie__text">{{rating}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ListMovie',
  props: {
    date: String,
    type: String,
    rating: Number
  }
}
</script>
<style lang="scss">
.list-movie {
  list-style: none;
  @include flex(flex-start, center, row);
  &__text {
    @include text($H50, 500, $white);
    font-family: $base-font;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  &__item {
    padding: 0 10px;
    &:not(:last-child) {
      border-right: 1px solid $white;
    }
    &:last-child {
      @include flex(center, center, row);
    }
    &-svg {
      @include svg(15px, $white);
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        fill: yellow;
        transform: scale(1.2);
      }
    }
  }
}
</style>
