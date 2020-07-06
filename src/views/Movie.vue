<template>
  <div class="movie animate__animated animate__zoomInDown">
    <img
      class="movie-absolute"
      src="https://i.pinimg.com/originals/11/bc/53/11bc537ed061fa023703f398a701c0b3.jpg"
    />
    <div class="container container--movie">
      <div class="movie-content">
        <div class="movie-content__wrapper">
          <span class="movie-content__svg-wrapper">
            <svg class="movie-content__svg">
              <use xlink:href="#logo" />
            </svg>
          </span>
          <MovieTitle title="The witcher"></MovieTitle>
        </div>
        <div class="movie-content__wrapper">
          <ListMovie date="2019" type="serial" rating="0.5"></ListMovie>
        </div>
      </div>

      <div class="movie-content">
        <ListChoose></ListChoose>
        <div class="movie-content__wrapper movie-content__wrapper--watch">
          <p class="movie-content__text">| | |</p>
          <h2 class="movie-content__subtitle">End's beginning</h2>
          <Button name="watch now"></Button>
        </div>
        <MovieAbout
          fulltext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              ullam architecto minima magnam sed est sapiente, aliquid nobis
              repellat deleniti sequi similique saepe voluptates, animi
              assumenda aperiam molestiae illoF Tempora?"
          author="Four Markerk"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              ullam architecto minima magnam sed est sapiente, aliquid nobis
              repellat deleniti sequi similique saepe voluptates, animi
              assumenda aperiam molestiae illoF Tempora?"
        ></MovieAbout>
      </div>

      <div class="movie-content__wrapper">
        <MovieTrailer></MovieTrailer>
        <VoiceActing name="Netflix"></VoiceActing>
        <div class="movie-content__wrapper">
          <ListLink></ListLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListChoose from '@/components/common/ListChoose'
import ListMovie from '@/components/common/ListMovie'
import ListLink from '@/components/common/ListLink'
import Button from '@/components/common/Button'
import VoiceActing from '@/components/common/VoiceActing'
import MovieTrailer from '@/components/MovieTrailer'
import MovieAbout from '@/components/MovieAbout'
import MovieTitle from '@/components/common/MovieTitle'
export default {
  name: 'Movie',
  components: {
    ListChoose,
    ListMovie,
    ListLink,
    MovieTrailer,
    Button,
    VoiceActing,
    MovieTitle,
    MovieAbout
  }
}
</script>
<style lang="scss">
.movie {
  z-index: 1;
  position: relative; /*
  background-image: url("https://i.pinimg.com/originals/11/bc/53/11bc537ed061fa023703f398a701c0b3.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
  @include flex(center, center);
  min-height: 100vh;
  max-height: max-content;
  color: $text;
  background-color: $bg-color;
  padding: 100px 0;
}
.movie-absolute {
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.movie-content {
  @include flex(center, center, column, wrap);
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 70px;
  @media screen and (min-width: $screen-tablet) {
    justify-content: space-between;
    flex-direction: row;
  }
  &__footer {
    &-svg {
      position: Absolute;
      @include svg(50px);
      display: block;
      margin: 0 auto;
      margin-left: 0px;
      @media screen and (min-width: $screen-tablet) {
        margin-left: 25px;
      }
    }
    &-text {
      position: relative;
      @include text($H200, 600, $white);
      font-family: $base-font;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
  &__wrapper {
    position: relative;
    @include flex(center, center, column);
    margin-bottom: 35px;
    @media screen and (min-width: $screen-tablet) {
      margin-bottom: 0px;
      justify-content: space-between;
      flex-direction: row;
    }
    &--watch {
      justify-content: center;
      flex-direction: column;
      border: 1px solid rgba($white, 0.5);
      border-radius: 50%;
      min-height: 200px;
      min-width: 200px;
      padding: 40px 20px;
      margin: 15px 0 30px 0;
      animation-name: size;
      animation-iteration-count: infinite;
      animation-duration: 2.5s;
      &:hover {
        animation-play-state: paused;
      }
      @keyframes size {
        0% {
          border: 1px dashed $blue;
          transform: scale(1.05);
        }
        50% {
          border: 1px solid $white;
          transform: scale(1);
        }
        100% {
          border: 1px dashed $blue;
          transform: scale(1.05);
        }
      }
      @media screen and (min-width: $screen-tablet) {
        margin: 0;
      }
      @media screen and (min-width: 1140px) {
        margin: 0 55px;
        min-height: 300px;
        min-width: 300px;
      }
    }
    &--trailer {
      z-index: 1;
      position: relative;
      border: 1px solid rgba($white, 0.5);
      border-radius: 20px;
      cursor: pointer;
      transition: all 1.2s ease;
      &:hover {
        background-color: #fff;
        .circle {
          transform: translateX(96px);
          background-color: $blue;
        }
      }
    }
    &--row {
      justify-content: center;
      flex-direction: row;
      width: 250px;
      margin-bottom: 50px;
      @media screen and (min-width: 1140px) {
        justify-content: flex-start;
        width: 300px;
      }
    }
    &--end {
      align-items: flex-end;
    }
  }
  &__svg {
    @include svg(20px, $white);
    margin-right: 10px;
    &-author {
      @include svg(25px, $white);
      margin-right: 15px;
    }
  }
  &__watch {
    padding: 10px 15px;
    margin-left: 30px;
    @include text($H10, 400, $white);
    font-family: $base-font;
    text-transform: uppercase;
  }
  &__title {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
  }
  &__subtitle {
    @include text($H100, 600, $white);
    font-family: $base-font;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 24px;
  }
  &__text {
    display: block;
    &:last-child {
      margin: 0 0 0 auto;
    }
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    @include text($H50, 400, $white);
    text-align: center;
    max-width: 225px;
    line-height: 1.5;
    margin-bottom: 15px;
    @media screen and (min-width: 1140px) {
      text-align: right;
      max-width: 275px;
    }
  }
  &__author {
    @include text($H100, 700, $white);
    font-family: $base-font;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
}
.container--movie {
  z-index: 2;
  box-shadow: 0 0 1000px 200px rgba(#000, 0.5);
  background-color: rgba(#000, 0.35);
  max-width: 1200px;
  color: #fff;
  padding: 50px 0;
  border: 1px solid #fff;
  border-radius: 15px;
  @media screen and (min-width: $screen-tablet) {
    padding: 50px 20px !important;
  }
  @media screen and (min-width: 1140px) {
    padding: 50px 40px !important;
  }
}
</style>
