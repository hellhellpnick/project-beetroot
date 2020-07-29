<template>
  <section>
    <loader v-if="loading" />
    <template v-else>
      <div class="movie animate__animated animate__fadeIn" v-if="movie.adult === true">
        <div class="movie-adult" v-show="adult==true">
          <div class="movie-adult__wrapper">
            <div class="movie-adult__content">
              <h2 class="movie-adult__content-title">Adult film</h2>
              <p class="movie-adult__content-text">Are you sure you are eighteen?</p>
              <div class="movie-adult__content-box">
                <button class="movie-adult__content-button" @click="adult == !adult">Yes</button>
                <button class="movie-adult__content-button" to="/movies">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="movie animate__animated animate__fadeIn">
        <div class="video animate__animated animate__slow 2s animate__flipInX" v-show="!visible">
          <div class="video__wrapper">
            <span class="video__close" @click="visible=!visible"></span>
          </div>
          <iframe
            class="video__iframe"
            :src="`https://www.youtube.com/embed/${movie.videos.results[0].key}`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <img
          class="movie-absolute"
          :src="(`https://image.tmdb.org/t/p/original${movie.backdrop_path}` !== `https://image.tmdb.org/t/p/originalnull`) ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : `/assets/404_desktop.jpg`"
        />
        <div class="container container--movie">
          <div class="movie-content">
            <div
              class="movie-content__wrapper animate__animated animate__slow 2s animate__fadeInTopLeft"
            >
              <span class="movie-content__svg-wrapper">
                <svg class="movie-content__svg">
                  <use xlink:href="#logo" />
                </svg>
              </span>
              <movie-title :title="movie.title"></movie-title>
            </div>
            <div
              class="movie-content__wrapper animate__animated animate__slow 2s animate__fadeInTopRight"
            >
              <list-movie
                :date="movie.release_date"
                :type="movie.status"
                :rating="movie.vote_average"
              ></list-movie>
            </div>
          </div>

          <div class="movie-content">
            <list-choose></list-choose>
            <div
              class="movie-content__wrapper movie-content__wrapper--watch animate__animated animate__slow 2s animate__fadeInTopRight"
            >
              <p class="movie-content__text">| | |</p>
              <h2 class="movie-content__subtitle">End's beginning</h2>
              <button @click="visible=!visible" class="button">Watch now</button>
            </div>
            <movie-about
              :fulltext="movie.overview"
              :text="movie.overview"
              :author="movie.production_companies[0].name"
            ></movie-about>
          </div>

          <div class="movie-content__wrapper">
            <movie-trailer @visible="visible= !visible" :visible="visible"></movie-trailer>
            <div class="movie-content__wrapper">
              <list-link></list-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import ListChoose from '@/components/common/ListChoose'
import ListMovie from '@/components/common/ListMovie'
import ListLink from '@/components/common/ListLink'
import MovieTrailer from '@/components/MovieTrailer'
import MovieAbout from '@/components/MovieAbout'
import MovieTitle from '@/components/common/MovieTitle'

export default {
  name: 'Movies',
  components: {
    'list-choose': ListChoose,
    'list-movie': ListMovie,
    'list-link': ListLink,
    'movie-trailer': MovieTrailer,
    'movie-title': MovieTitle,
    'movie-about': MovieAbout
  },
  data () {
    return {
      visible: true,
      adult: true,
      movie: {
        id: '',
        title: '',
        overview: ''
      },
      loading: false,
      error: false
    }
  },
  methods: {
    async fetchMovies () {
      try {
        this.error = false
        this.loading = true
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${this.$route.params.pid}?api_key=f1540f730f26f48851aa3a0a12af3257&append_to_response=videos`
        )
        if (res.ok) {
          const data = await res.json()
          this.movie = { ...data }
          this.error = false
        } else {
          this.error = true
          console.log(res.status, 'Movies not loaded!')
        }
      } catch (err) {
        this.error = true
        console.log('Movies not loaded!')
      } finally {
        this.loading = false
      }
    }
  },
  created () {
    this.fetchMovies()
  }
}
</script>

<style lang="scss">
.movie-adult {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #000;
  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 20px 0;
  }
  &__content {
    @include flex(center, center, column);
    background-color: $bg-color;
    &-title {
      @include text($H300, 700, $white);
      text-transform: uppercase;
      font-family: $base-font;
      margin-bottom: 10px;
    }
    &-text {
      @include text($H100, 500, $white);
      font-family: $base-font;
      margin-bottom: 15px;
    }
    &-box {
      @include flex(center, center, row);
    }
    &-button {
      @include text($H100, 500, $white);
      padding: 10px 15px;
      border: 1px solid #ffffff;
      outline: none;
    }
  }
}
.video {
  position: absolute;
  z-index: 10;
  @include size(300px);
  border-radius: 20px;
  @media screen and (min-width: $screen-tablet) {
    @include size(600px);
  }
  @media screen and (min-width: $screen-desktop) {
    @include size(800px);
  }
  @media screen and (min-width: $screen-desktop-large) {
    width: 1200px;
    height: 800px;
  }
  &__wrapper {
    position: absolute;
    height: 15%;
    width: 100%;
    z-index: 10000;
    &:hover {
      .video__close {
        opacity: 1;
      }
    }
  }
  &__iframe {
    @include size(300px);
    border-radius: 20px;
    @media screen and (min-width: $screen-tablet) {
      @include size(600px);
    }
    @media screen and (min-width: $screen-desktop) {
      @include size(800px);
    }
    @media screen and (min-width: $screen-desktop-large) {
      width: 1200px;
      height: 800px;
    }
  }
  &__close {
    position: absolute;
    cursor: pointer;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    top: 20px;
    width: 32px;
    height: 32px;
    opacity: 0;
    transition: all 0.2s ease;
    &:after,
    &:before {
      position: absolute;
      left: 15px;
      content: " ";
      height: 33px;
      width: 2px;
      background-color: #fff;
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
  }
}
.movie {
  z-index: 1;
  position: relative;
  @include flex(center, center);
  min-height: 100vh;
  max-height: max-content;
  color: $text;
  background-color: $bg-color;
  padding: 100px 0;
  width: 100%;
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
  padding-top: 0;
  padding: 5px;
  margin-bottom: 70px;
  @media screen and (max-width: $screen-tablet) {
    &:first-child {
      padding-top: 20px;
    }
  }
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
      border: 2px solid rgba($white, 0.5);
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
          border: 1.5px dashed $blue;
          transform: scale(1.05);
        }
        50% {
          border: 1.5px solid $white;
          transform: scale(1);
        }
        100% {
          border: 1.5px dashed $blue;
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
      --fill-color: #fff;
      z-index: 1;
      position: relative;
      border: 1px solid rgba($white, 0.5);
      border-radius: 20px;
      cursor: pointer;
      transition: all 1.2s ease;
      background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
      &:hover {
        background-size: 100%;
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
    padding-top: 0;
    @media screen and (max-width: $screen-tablet) {
      padding-top: 20px;
    }
  }
  &__subtitle {
    @include text($H100, 400, $white);
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
    -webkit-line-clamp: 9;
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
  box-shadow: 0 0 10000px 500px rgba(#000, 0.7),
    inset 0 0 10px 1px rgba(#000, 0.7);
  background-color: rgba(#000, 0.35);
  max-width: 100%;
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
.button {
  cursor: pointer;
  --fill-color: #fff;
  @include text($H10, 400, $white);
  font-family: $base-font;
  padding: 10px 15px;
  text-transform: uppercase;
  outline: none;
  border: 1px solid rgba($white, 0.5);
  border-radius: 20px;
  background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
  transition: all 0.5s ease;
  &:hover {
    background-size: 100%;
    color: $blue;
    font-weight: 700;
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
