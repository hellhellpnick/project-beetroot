<template>
  <div class="menu-add">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <div class="menu-movie">
      <li class="menu-movie__item">
        <div class="menu-movie__box">
          <div class="menu-movie__image-wrapper">
            <img
              class="menu-movie__image"
              src="https://i.pinimg.com/originals/11/bc/53/11bc537ed061fa023703f398a701c0b3.jpg"
              alt
            />
          </div>
        </div>
        <div class="menu-movie__box">
          <h2 class="menu-movie__item-title">The Witcher</h2>
          <p
            class="menu-movie__item-text"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, amet?</p>
          <a href class="menu-movie__item-link">Watch now</a>
        </div>
      </li>
      <li class="menu-movie__item">
        <div class="menu-movie__box">
          <div class="menu-movie__image-wrapper">
            <img
              class="menu-movie__image"
              src="https://i.pinimg.com/originals/11/bc/53/11bc537ed061fa023703f398a701c0b3.jpg"
              alt
            />
          </div>
        </div>
        <div class="menu-movie__box">
          <h2 class="menu-movie__item-title">The Witcher</h2>
          <p
            class="menu-movie__item-text"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, amet?</p>
          <a href class="menu-movie__item-link">Watch now</a>
        </div>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuAdd'
}
</script>
<style lang="scss">
.menu-add {
  @include flex(center, center);
  background-color: $link;
  transition: 0.5s;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.menu-movie {
  @include flex(center, center, column);
  position: absolute;
  margin: 0;
  padding: 0;
  padding-top: 15px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
  z-index: 2;
  top: 90px;
  right: 90px;
  background-color: $link;
  width: 0;
  @include flex(center, center, column);
  &__image {
    width: 175px;
    height: 150px;
    border-radius: 5px;
    object-fit: cover;
    object-position: center center;
    &-wrapper {
      width: 175px;
      height: 150px;
      margin-right: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
  }
  &__item {
    list-style: none;
    margin: 0 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid $bg-nav;
    @include flex(center, center, row);
    &-title {
      @include text($H100, 700, $white);
      text-transform: capitalize;
      margin-bottom: 10px;
    }
    &-text {
      @include text($H50, 400, $white);
      margin-bottom: 15px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &-link {
      @include text($H10, 400, $white);
      padding: 10px;
      margin-bottom: 10px;
      background-color: $bg-nav;
      letter-spacing: 1.5px;
      transition: all 0.2s ease;
      @include media {
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
  &__box {
    @include flex(center, center, column);
  }
}

.menu-add input:checked ~ .menu-movie {
  width: 500px;
}

.menu-add input {
  position: relative;
  @include size(40px);
  cursor: pointer;
  opacity: 0;
}

.menu-add span {
  position: absolute;
  z-index: 1;
  left: 0;
  width: 25px;
  margin-bottom: 5px;
  height: 4px;
  border-radius: 50px;
  background-color: $white;
  pointer-events: none;
  transition: 0.5s;
}

.menu-add input:checked ~ span {
  background-color: $blue;
}

.menu-add span:nth-child(2) {
  transform: translateY(-8px);
  left: 88.5%;
}

.menu-add input:checked ~ span:nth-child(2) {
  transform: translateY(0) rotate(-45deg);
}
.menu-add span:nth-child(3) {
  transform: translateY(8px);
  left: 88.5%;
}

.menu-add input:checked ~ span:nth-child(3) {
  transform: translateY(0) rotate(45deg);
}
</style>
