<template>
  <ul class="list-link">
    <li class="list-link__item">
      <svg class="list-link__item-svg">
        <use xlink:href="#instagram" />
      </svg>
    </li>
    <li class="list-link__item">
      <svg class="list-link__item-svg">
        <use xlink:href="#twitter" />
      </svg>
    </li>
    <li class="list-link__item">
      <svg class="list-link__item-svg">
        <use xlink:href="#facebook" />
      </svg>
    </li>
  </ul>
</template>
<style lang="scss">
.list-link {
  list-style: none;
  @include flex(space-between, center, row);
  width: 150px;
  &__item {
    cursor: pointer;
    &-svg {
      @include svg(25px, $white);
      transition: all 0.5s ease;
      @include media {
        &:hover {
          fill: $blue;
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
