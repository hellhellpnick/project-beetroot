<template>
  <div>
    <div class="background-img">
      <div class="box">
        <span class="box__line"></span>
        <span class="box__line"></span>
        <span class="box__line"></span>
        <div class="card-work">
          <img class="card-work__box" :src="image" />
          <div class="card-work-container">
            <a class="card-work__link" :href="`${link}`">
              <h3 class="card-work__subtitle">Creating My</h3>
              <h2 class="card-work__title">{{ title }}</h2>
              <p class="card-work__text">{{ text }}</p>
              <div class="card-work__wrapper">
                <p class="card-work__text card-work__text--last">{{ state }}</p>
                <p class="card-work__text card-work__text--last">{{ date }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card-work',
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
.card-work {
  position: absolute;
  transition: all 0.2s ease;
  box-shadow: inset 0 0 1000px 10px #000;
  @include flex(flex-start, stretch, column);
  position: relative;
  max-width: 1000px;
  max-height: 600px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease;
  &__container {
    position: relative;
  }
  &__box {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 1000px 10px #000;
    z-index: -2;
  }
  &__link {
    transition: all 0.2s ease;
    outline: none;
    &:hover {
      .card-work {
        box-shadow: none;
      }
      .card-work__subtitle,
      .card-work__title,
      .card-work__text {
        color: transparent;
      }
    }
  }
  &__wrapper {
    @include flex(space-between, stretch, row);
    outline: none;
    position: relative;
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
    outline: none;
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
    outline: none;
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
.card-work-container {
  z-index: 2;
  box-shadow: inset 0 0 1000px 10px #000;
  padding: 20px;
  transition: all 0.2s ease;
  border-radius: 5px;
  @include media {
    &:hover {
      box-shadow: none;
    }
  }
}
.box {
  position: relative;
  background: #111845a6;
  box-sizing: border-box;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  max-width: 1000px;
  max-height: 600px;
  color: white;
  padding: 5px;
  &__line {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    &:nth-child(1) {
      transform: rotate(0deg);
    }
    &:nth-child(2) {
      transform: rotate(90deg);
      visibility: hidden;
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(180deg);
    }
    &:nth-child(4) {
      transform: rotate(270deg);
    }
    &:before {
      content: "";
      position: absolute;
      width: 50%;
      height: 2px;
      background: #50dfdb;
      animation: animate 4s linear infinite;
    }
  }
}
.card-dots {
  z-index: 2;
  position: absolute;
  list-style: none;
  display: block;
  text-align: center;
  padding: 0;
  width: 100%;
  outline: none;

  li {
    position: relative;
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0;
    margin-right: 30px;
    padding: 0;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease;
    outline: none;
  }
  button {
    border: 0;
    background: transparent;
    display: block;
    height: 10px;
    width: 10px;
    outline: none;
    line-height: 0;
    font-size: 0;
    color: transparent;
    padding: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover,
    &:focus {
      outline: none;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.5s ease;
      outline: none;
      &:before,
      &:before {
        opacity: 1;
        border-radius: 50%;
        background-color: #fff;
        transition: all 0.5s ease;
        outline: none;
      }
    }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "•";
      width: 10px;
      height: 10px;
      font-family: "card";
      font-size: 6px;
      text-align: center;
      color: black;
      opacity: 0.25;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
}
.card-dots li.slick-active button::before,
.card-dots li.slick-active button:hover {
  padding: 0;
  color: transparent;
  background-color: #fff;
  border-radius: 50%;
  opacity: 1;
  @include size(10px);
}
.arrow-svg {
  @include svg(50px, $white);
  height: auto;
  margin: 0 2rem;
  cursor: pointer;
  overflow: visible;
  &__left {
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translatey(-50%);
  }
  &__right {
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translatey(-50%);
  }
  polygon,
  path {
    transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
  }
  &:hover polygon,
  &:hover path {
    transition: all 1s cubic-bezier(0.2, 1, 0.3, 1);
    fill: $blue;
  }

  &:hover .arrow__polygon {
    animation: arrow-anim 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite;
  }
  &:hover .arrow__fixed {
    animation: arrow-fixed-anim 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite;
  }
}
@keyframes animate {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform: scaleX(1);
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
@keyframes arrow-anim {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  5% {
    transform: translateX(-0.1rem);
  }
  100% {
    transform: translateX(1rem);
    opacity: 0;
  }
}

@keyframes arrow-fixed-anim {
  5% {
    opacity: 0;
  }
  20% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
