<template>
  <section>
    <loader v-if="loading" />
    <template v-else>
      <section class="home animate__animated animate__zoomInDown">
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
        <div class="slider">
          <div class="slider-wrapper" v-for="value in movies" :key="value.id" :movie="value">
            <CardSlide :movi="value" />
          </div>
        </div>
      </section>
    </template>
  </section>
</template>

<script>
import CardSlide from '@/components/Card/CardSlide.vue'

export default {
  name: 'Home',
  components: { CardSlide },
  data () {
    return {
      neededMovie: [
        '68735',
        '19995',
        '122917',
        '704132',
        '638507',
        '335988',
        '297802'
      ],
      movies: [],
      loading: false,
      error: false
    }
  },
  methods: {
    async fetchMovies () {
      for (let i = 0; i <= this.neededMovie.length; i++) {
        try {
          this.error = false
          this.loading = true
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${this.neededMovie[i]}?api_key=f1540f730f26f48851aa3a0a12af3257&append_to_response=videos`
          )
          if (res.ok) {
            const data = await res.json()
            this.movies.push(data)
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
    }
  },
  created () {
    this.fetchMovies()
  }
}
</script>

<style lang="scss">
.arrow-down {
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
.slick-dots {
  margin: auto;
  position: absolute;
  right: 60px;
  top: 40%;
  padding: 0;
  margin: 0;
  @include size(10px);
}
.slick-dots li {
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  @include size(10px);
}
.slick-dots li button::before {
  padding: 0;
  font-size: 5px;
  color: transparent;
  background-color: $text-about;
  opacity: 1;
  border-radius: 50%;
  @include size(10px);
}

.slick-dots li.slick-active button::before {
  padding: 0;
  margin: 0;
  color: transparent;
  background-color: #fff;
  opacity: 1;
  @include size(10px);
  border-radius: 50%;
}
.slick-slide {
  border: 0;
  outline: none;
}
</style>
