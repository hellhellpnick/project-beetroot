<template>
  <div class="input-wrapper">
    <input type="text" name="search" class="input" placeholder="film name" />
  </div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style lang="scss">
.input {
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: $link;
  padding: 15px;
  width: 150px;
  transition: all 0.2s ease;
  @include text($H50, 400, $white);
  text-transform: capitalize;
  &:focus {
    width: 180px;
    padding-left: 20px;
  }
  &::placeholder {
    @include text($H50, 400, $white);
    text-transform: capitalize;
    font-style: italic;
  }
}
.input-wrapper {
  width: 180px;
}
</style>
