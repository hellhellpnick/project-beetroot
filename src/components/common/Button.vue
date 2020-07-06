<template>
  <a href="#" class="button">{{name}}</a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    name: String
  }
}
</script>
<style lang="scss">
.button {
  @include text($H10, 400, $white);
  font-family: $base-font;
  padding: 10px 15px;
  text-transform: uppercase;
  border: 1px solid rgba($white, 0.5);
  border-radius: 20px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
