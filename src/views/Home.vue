<template>
  <section>
    <loader v-if="loading" />
    <template v-else>
      <section class="home animate__animated animate__fadeIn">
        <div class="arrow-down">
          <div class="arrow">
            <div class="arrowSliding">
              <div class="arrow-down__animated"></div>
            </div>
            <div class="arrowSliding delay1">
              <div class="arrow-down__animated"></div>
            </div>
            <div class="arrowSliding delay2">
              <div class="arrow-down__animated"></div>
            </div>
            <div class="arrowSliding delay3">
              <div class="arrow-down__animated"></div>
            </div>
          </div>
        </div>
        <agile :options="myOptions">
          <card-slide class="slide" v-for="value in movies[0]" :key="value.id" :movi="value" />
        </agile>
      </section>
    </template>
  </section>
</template>

<script>
import { VueAgile } from 'vue-agile'
import CardSlide from '@/components/Card/CardSlide.vue'

export default {
  name: 'Home',
  components: {
    'card-slide': CardSlide,
    agile: VueAgile
  },
  data () {
    return {
      myOptions: {
        navButtons: true,
        autoplay: true,
        autoplaySpeed: 4500,
        fade: true
      },
      movies: [],
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
          'https://api.themoviedb.org/3/trending/all/day?api_key=f1540f730f26f48851aa3a0a12af3257'
        )
        if (res.ok) {
          const data = await res.json()
          this.movies.push(data.results)
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
.agile__nav-button--prev {
  display: none;
}
.agile {
  &__dots {
    bottom: 10px;
    flex-direction: column;
    right: 30px;
    position: absolute;
  }
  &__dot {
    margin: 5px 0;
    & button {
      background-color: transparent;
      border: 1px solid #fff;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: 0.3s;
      width: 10px;
    }

    &--current,
    &:hover button {
      background-color: #fff;
    }
  }
}

.arrow-down,
.agile__nav-button--next {
  position: fixed;
  cursor: pointer;
  z-index: 10;
  left: 50%;
  margin-right: -50%;
  transform: translatex(-50%);
  bottom: -50px;
  background-color: rgba(#000, 0.7);
  border-radius: 50%;
  padding: 20px 20px 10px 20px;
  width: 100px;
  height: 100px;
}
.arrow {
  position: absolute;
  top: 10px;
  left: 35%;
  transform: translate(-50%, -50%);
}
.arrow-down {
  &__animated {
    width: 30px;
    height: 30px;
    border: 5px solid;
    border-color: #fff transparent transparent #fff;
    transform: rotate(225deg);
    z-index: 1;
  }
}
.arrowSliding {
  position: absolute;

  -webkit-animation: slide 4s linear infinite;
  animation: slide 4s linear infinite;
}

.delay1 {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.delay2 {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.delay3 {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

@-webkit-keyframes slide {
  0% {
    opacity: 0;
    transform: translatey(-15px);
  }
  20% {
    opacity: 1;
    transform: translatey(-9px);
  }
  80% {
    opacity: 1;
    transform: translatey(9px);
  }
  100% {
    opacity: 0;
    transform: translatey(15px);
  }
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translatey(-15px);
  }
  20% {
    opacity: 1;
    transform: translatey(-9px);
  }
  80% {
    opacity: 1;
    transform: translatey(9px);
  }
  100% {
    opacity: 0;
    transform: translatey(-15px);
  }
}
</style>
