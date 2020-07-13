<template>
  <input
    type="text"
    name="search"
    class="input"
    :value="value"
    :input="searchMovie"
    placeholder="film name"
  />
</template>

<script>
export default {
  name: 'Input',
  props: ['value']
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
    width: 170px;
    padding-left: 20px;
  }
  &::placeholder {
    @include text($H50, 400, $white);
    text-transform: capitalize;
  }
}
</style>
