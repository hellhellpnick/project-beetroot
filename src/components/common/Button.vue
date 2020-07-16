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
.button:hover::after,
.button:focus::after {
  animation: none;
  display: none;
}
.button:hover::before,
.button:focus::before {
  opacity: 1;
}

.button::after {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 6px solid $blue;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}
@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 90px;
    height: 90px;
    opacity: 0;
  }
}
</style>
