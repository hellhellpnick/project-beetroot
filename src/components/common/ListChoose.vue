<template>
  <div>
    <ul class="list-choose">
      <li class="list-choose__item activat">
        <a class="list-choose__item-link">Trailer</a>
      </li>
      <li class="list-choose__item">
        <a class="list-choose__item-link">Series</a>
      </li>
      <li class="list-choose__item">
        <a class="list-choose__item-link">Cast</a>
      </li>
      <li class="list-choose__item">
        <a class="list-choose__item-link">Original</a>
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
    cursor: pointer;
    margin-bottom: 10px;
    &:hover &-link {
      background-size: 100%;
    }
    &-link {
      --fill-color: #fff;
      position: relative;
      display: block;
      padding: 4px 0;
      @include text($H400, 700);
      text-decoration: none;
      text-transform: uppercase;
      -webkit-text-stroke: 2px var(--fill-color);
      background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
      color: transparent;
      background-clip: text;
      transition: 0.5s linear;
    }
  }
}
.activat a {
  background-size: 100%;
}
</style>
