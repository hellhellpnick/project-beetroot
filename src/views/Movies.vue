<template>
  <section>
    <loader v-if="loading" />
    <template v-else>
      <div class="movie animate__animated animate__zoomInDown">
        <img
          class="movie-absolute"
          :src="(`https://image.tmdb.org/t/p/original${movie.backdrop_path}` !== `https://image.tmdb.org/t/p/originalnull`) ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : `https://s2.best-wallpaper.net/wallpaper/1600x900/1112/404-error-desktop-not-found_1600x900.jpg`"
        />
        <div class="container container--movie">
          <div class="movie-content">
            <div class="movie-content__wrapper">
              <span class="movie-content__svg-wrapper">
                <svg class="movie-content__svg">
                  <use xlink:href="#logo" />
                </svg>
              </span>
              <MovieTitle :title="movie.title"></MovieTitle>
            </div>
            <div class="movie-content__wrapper">
              <ListMovie
                :date="movie.release_date"
                :type="movie.status"
                :rating="movie.vote_average"
              ></ListMovie>
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
              :fulltext="movie.overview"
              :text="movie.overview"
              :author="movie.production_companies[0].name"
            ></MovieAbout>
          </div>

          <div class="movie-content__wrapper">
            <MovieTrailer></MovieTrailer>
            <div class="movie-content__wrapper">
              <ListLink></ListLink>
            </div>
          </div>
        </div>
      </div>
    </template>
    <svg display="none">
      <symbol id="logo" viewBox="0 0 448 512">
        <path
          d="M267.73 471.53l10.56 15.84 5.28-12.32 5.28 7V512c21.06-7.92 21.11-66.86 25.51-97.21 4.62-31.89-.88-92.81 81.37-149.11-8.88-23.61-12-49.43-2.64-80.05C421 189 447 196.21 456.43 239.73l-30.35 8.36c11.15 23 17 46.76 13.2 72.14L412 313.18l-6.16 33.43-18.47-7-8.8 33.39-19.35-7 26.39 21.11 8.8-28.15L419 364.2l7-35.63 26.39 14.52c.25-20 7-58.06-8.8-84.45l26.39 5.28c4-22.07-2.38-39.21-7.92-56.74l22.43 9.68c-.44-25.07-29.94-56.79-61.58-58.5-20.22-1.09-56.74-25.17-54.1-51.9 2-19.87 17.45-42.62 43.11-49.7-44 36.51-9.68 67.3 5.28 73.46 4.4-11.44 17.54-69.08 0-130.2-40.39 22.87-89.65 65.1-93.2 147.79l-58 38.71-3.52 93.25L369.78 220l7 7-17.59 3.52-44 38.71-15.84-5.28-28.1 49.25-3.52 119.64 21.11 15.84-32.55 15.84-32.55-15.84 21.11-15.84-3.52-119.64-28.15-49.26-15.84 5.28-44-38.71-17.58-3.51 7-7 107.33 59.82-3.52-93.25-58.06-38.71C185 65.1 135.77 22.87 95.3 0c-17.54 61.12-4.4 118.76 0 130.2 15-6.16 49.26-36.95 5.28-73.46 25.66 7.08 41.15 29.83 43.11 49.7 2.63 26.74-33.88 50.81-54.1 51.9-31.65 1.72-61.15 33.44-61.59 58.51l22.43-9.68c-5.54 17.53-11.91 34.67-7.92 56.74l26.39-5.28c-15.76 26.39-9.05 64.43-8.8 84.45l26.39-14.52 7 35.63 24.63-5.28 8.8 28.15L153.35 366 134 373l-8.8-33.43-18.47 7-6.16-33.43-27.27 7c-3.82-25.38 2-49.1 13.2-72.14l-30.35-8.36c9.4-43.52 35.47-50.77 63.34-54.1 9.36 30.62 6.24 56.45-2.64 80.05 82.25 56.3 76.75 117.23 81.37 149.11 4.4 30.35 4.45 89.29 25.51 97.21v-29.83l5.28-7 5.28 12.32 10.56-15.84 11.44 21.11 11.43-21.1zm79.17-95L331.06 366c7.47-4.36 13.76-8.42 19.35-12.32-.6 7.22-.27 13.84-3.51 22.84zm28.15-49.26c-.4 10.94-.9 21.66-1.76 31.67-7.85-1.86-15.57-3.8-21.11-7 8.24-7.94 15.55-16.32 22.87-24.68zm24.63 5.28c0-13.43-2.05-24.21-5.28-33.43a235 235 0 0 1-18.47 27.27zm3.52-80.94c19.44 12.81 27.8 33.66 29.91 56.3-12.32-4.53-24.63-9.31-36.95-10.56 5.06-12 6.65-28.14 7-45.74zm-1.76-45.74c.81 14.3 1.84 28.82 1.76 42.23 19.22-8.11 29.78-9.72 44-14.08-10.61-18.96-27.2-25.53-45.76-28.16zM165.68 376.52L181.52 366c-7.47-4.36-13.76-8.42-19.35-12.32.6 7.26.27 13.88 3.51 22.88zm-28.15-49.26c.4 10.94.9 21.66 1.76 31.67 7.85-1.86 15.57-3.8 21.11-7-8.24-7.93-15.55-16.31-22.87-24.67zm-24.64 5.28c0-13.43 2-24.21 5.28-33.43a235 235 0 0 0 18.47 27.27zm-3.52-80.94c-19.44 12.81-27.8 33.66-29.91 56.3 12.32-4.53 24.63-9.31 37-10.56-5-12-6.65-28.14-7-45.74zm1.76-45.74c-.81 14.3-1.84 28.82-1.76 42.23-19.22-8.11-29.78-9.72-44-14.08 10.63-18.95 27.23-25.52 45.76-28.15z"
        />
      </symbol>
      <symbol id="star" viewBox="0 0 512.002 512.002">
        <path
          d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157 c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065 c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671 c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638 l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955 C511.56,208.649,513.033,202.688,511.267,197.258z"
        />
      </symbol>
      <symbol id="author" viewBox="0 0 512 512">
        <path
          d="m446 145c0-21.303-12.345-40.437-30.998-49.496 6.456-33.238-18.561-64.67-52.68-65.488-19.031-19.132-46.565-30.016-76.322-30.016-34.453 0-66.451 15.252-84.593 39.602-15.309-8.987-33.569-11.833-51.569-7.786-25.318 5.716-46.207 26.549-51.978 51.844-3.123 13.711-2.247 27.682 2.401 40.408-20.201 8.3-34.261 28.342-34.261 50.932 0 25.784 18.121 47.876 42.553 53.566.781 3.526 1.412 4.771 4.281 13.566 6.84 20.513 23.012 36.745 43.166 43.879v23.989c0 10.519 2.331 20.767 6.796 30.12l-32.343 21.559c-2.132 1.422-3.637 3.606-4.204 6.105l-30 132c-.801 3.521.359 7.2 3.036 9.626 2.686 2.434 6.464 3.214 9.877 2.077l86.838-28.946 86.838 28.946c2.125.705 4.364.65 6.324 0l86.07-28.69 56.296 28.147c3.457 1.729 7.603 1.311 10.645-1.077 3.042-2.387 4.436-6.313 3.578-10.084l-6.638-29.204c-1.225-5.385-6.583-8.764-11.967-7.534-5.386 1.224-8.76 6.582-7.535 11.968l1.952 8.589-41.092-20.546c-2.372-1.187-5.118-1.382-7.634-.542l-50.196 16.732c21.561-23.908 33.359-54.524 33.359-86.956v-27.784c2.724-3.5 4.821-7.406 6.254-11.654l34.879 23.255 2.531 11.137c1.226 5.396 6.596 8.758 11.967 7.535 5.386-1.224 8.76-6.581 7.535-11.967l-3.415-15.027c-.567-2.498-2.072-4.684-4.203-6.104l-42.734-28.493 16.673-50.025c.34-1.02.513-2.087.513-3.162v-25.361c20.261-8.436 35.684-26.124 41.062-47.665l6.913-27.653c7.772-9.726 12.025-21.816 12.025-34.322zm-314.193 90.808c-2.398-7.827-4.223-10.82-4.207-15.905.035-10.975 9.016-19.903 20.02-19.903h8.38v7.57c0 10.687 4.162 20.733 11.719 28.291l19.252 19.251 3.722 14.888h-11.443c-21.881 0-40.796-14.26-47.443-34.192zm234.193-55.808h-20c-22.056 0-40 17.944-40 40v50h-20c-5.522 0-10 4.478-10 10s4.478 10 10 10h30c5.522 0 10-4.478 10-10v-60c0-11.028 8.972-20 20-20h20v78.377l-22.651 67.965c-.941 2.837-2.47 5.364-4.55 7.52-3.759 3.901-9.015 6.139-14.419 6.139h-74.96c-9.19 0-17.167-6.229-19.398-15.146l-24.32-97.28c-.439-1.758-1.349-3.363-2.63-4.646l-21.21-21.21c-3.78-3.779-5.861-8.804-5.861-14.148v-77.571c0-8.096 4.834-15.083 11.768-18.227 5.038 16.328 20.271 28.227 38.231 28.227 9.312 0 18.314-3.308 25.409-9.124 10.49 5.992 22.292 9.124 34.591 9.124 20.571 0 39.869-8.978 53.088-24.366 16.343 8.512 26.912 25.556 26.912 44.366zm-190 130v-20.091c1.083.05 2.166.091 3.25.091h16.443l14.927 59.707c.781 3.12 1.92 6.072 3.356 8.825-21.733-5.372-37.976-24.956-37.976-48.532zm16.838 152.514-73.15 24.383 25.18-110.789 29.036-19.354c10.97 12.228 25.852 20.192 42.097 22.525v13.011c0 32.432 11.798 63.048 33.358 86.955l-50.196-16.732c-2.054-.685-4.272-.685-6.325.001zm110.94 7.565-17.778 17.778-17.778-17.778c-20.779-20.778-32.222-48.404-32.222-77.789v-12.29h88.38c3.959 0 7.875-.605 11.62-1.748v14.038c0 29.385-11.443 57.011-32.222 77.789zm113.535-302.005c-1.05 1.196-1.799 2.626-2.185 4.171l-7.471 29.882c-3.129 12.53-11.025 23.219-21.658 30.016v-72.143c0-29.689-18.815-56.24-46.819-66.065-4.3-1.511-9.08.082-11.618 3.869-9.311 13.898-24.849 22.196-41.562 22.196-10.924 0-21.294-3.456-29.991-9.993-4.394-3.305-10.678-2.445-14.008 1.991-3.816 5.086-9.648 8.002-16.001 8.002-11.028 0-20-8.972-20-20 0-5.522-4.478-10-10-10-22.056 0-40 17.944-40 40v50h-8.38c-17.879 0-33.086 11.806-38.191 28.022-13.666-4.815-23.429-17.921-23.429-33.022 0-17.207 12.809-32.09 29.793-34.619 7.015-1.045 10.746-8.877 7.135-14.981-6.547-11.068-8.524-24.314-5.568-37.295 4.095-17.943 18.916-32.724 36.875-36.778 15.656-3.52 31.54.158 43.58 10.096 4.812 3.974 12.092 2.612 15.121-2.882 12.914-23.413 41.592-38.541 73.064-38.541 25.424 0 49.593 10.008 64.65 26.772 3.529 3.929 7.646 3.228 10.35 3.228 24.829 0 41.61 25.042 32.553 47.896-1.048 2.646-.92 5.612.354 8.157 1.273 2.546 3.57 4.428 6.316 5.175 15.177 4.133 25.777 18.02 25.777 33.772 0 8.497-3.085 16.691-8.687 23.074z"
        />
        <path
          d="m256 180h-30c-5.522 0-10 4.478-10 10s4.478 10 10 10h30c5.522 0 10-4.478 10-10s-4.478-10-10-10z"
        />
        <circle cx="419" cy="429" r="10" />
      </symbol>
      <symbol id="facebook" viewBox="0 0 24 24">
        <path
          d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
        />
      </symbol>
      <symbol id="twitter" viewBox="0 0 512 512">
        <path
          d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z"
        />
      </symbol>
      <symbol id="instagram" viewBox="0 0 512.00096 512.00096">
        <path
          d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0"
        />
        <path
          d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0"
        />
        <path
          d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0"
        />
      </symbol>
    </svg>
  </section>
</template>

<script>
import ListChoose from '@/components/common/ListChoose'
import ListMovie from '@/components/common/ListMovie'
import ListLink from '@/components/common/ListLink'
import Button from '@/components/common/Button'
import MovieTrailer from '@/components/MovieTrailer'
import MovieAbout from '@/components/MovieAbout'
import MovieTitle from '@/components/common/MovieTitle'

export default {
  name: 'Movies',
  components: {
    ListChoose,
    ListMovie,
    ListLink,
    MovieTrailer,
    Button,
    MovieTitle,
    MovieAbout
  },
  data () {
    return {
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
</style>
