<template>
  <div>
    <ul class="list-choose">
      <li class="list-choose__item activat">
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#t" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#r" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#a" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#i" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#l" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#e" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#r" />
          </svg>
        </span>
      </li>
      <li class="list-choose__item">
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#s" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#e" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#r" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#i" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#e" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#s" />
          </svg>
        </span>
      </li>
      <li class="list-choose__item">
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#c" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#a" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#s" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#t" />
          </svg>
        </span>
      </li>
      <li class="list-choose__item">
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#o" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#r" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#i" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#g" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#i" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#n" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#a" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#l" />
          </svg>
        </span>
        <span class="list-choose__item-wrapper">
          <svg class="list-choose__item-svg">
            <use xlink:href="#s" />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListChoose'
}
</script>
<style lang="scss">
.list-choose {
  list-style: none;
  @include flex(flex-start, flex-start, column);
  &__item {
    @include flex(center, center, row);
    cursor: pointer;
    margin-bottom: 30px;
    opacity: 0.2;
    &:hover {
      opacity: 1;
    }
    &-svg {
      @include svg(25px, $white);
      color: #fff;
      transition: all 0.2s ease;
      @media screen and (min-width: 1140px) {
        @include svg(35px, $white);
      }
    }
  }
}
.activat {
  opacity: 1;
}
</style>
