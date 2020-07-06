<template>
  <section id="film-search" class="film-search">
    <div id="search" class="search">
      <div class="search__input-wrapper">
        <h1 class="search__title">Film search</h1>
        <input type="text" name="search" class="search__input" @click="add" placeholder="Film name" />
      </div>
    </div>
    <div id="details" class="details animate__animated animate__zoomInDown">
      <h2 id="details-title" class="details__title">s</h2>
      <p id="details-text" class="details__text">asd</p>
      <p id="details-data" class="details__data">24.12</p>
      <p id="details-rating" class="details__rating">world rating:2312</p>
    </div>
    <ul
      id="films"
      class="film"
      contenteditable="true"
      v-html="content"
      @focusout="onFocusOut($event)"
    ></ul>
  </section>
</template>
<script>
const BASE_URL = 'https://api.themoviedb.org/3'
const KEY = 'f1540f730f26f48851aa3a0a12af3257'

const getSearchUrl = query =>
  `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`

const $films = document.getElementById('films')
const $details = document.getElementById('details')

const getMovieCard = movie => {
  return `
  <li class="film__item animate__animated animate__zoomInDown">
    ${
      movie.poster_path
        ? `<img class="film__item-img" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="img">`
        : '<img class="film__item-img" title="No poster for now" src="images/ph.png" alt="img">'
    }
    <h2 class="film__item-title">${movie.original_title}</h2>
    <a href="#details" id="button" class="button">WATCH DETAILS</a>
  </li>`
}

const renderMovies = movies => {
  const content = movies.map(getMovieCard)
  $films.innerHTML = content.join('')
}

const getDescription = link => {
  const detailsTitle = document.getElementById('details-title')
  const detailsText = document.getElementById('details-text')
  const detailsRelease = document.getElementById('details-data')
  const deatilsRating = document.getElementById('details-rating')
  detailsTitle.innerText = `${link.title}`
  detailsText.innerText = `Description: ${link.overview}`
  detailsRelease.innerText = `Release Date: ${link.release_date}`
  deatilsRating.innerText = `Worlds Rating: ${link.vote_average}`
}

const showDescription = APIData => {
  const $button = document.querySelectorAll('.button')

  for (let i = 0; i < $button.length; i++) {
    document.addEventListener('click', event => {
      if (event.target === $button[i]) {
        $details.classList.add('active')
        getDescription(APIData[i])
      }
    })
  }
}

const getMovies = query => {
  if (query) {
    fetch(getSearchUrl(query))
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          renderMovies(data.results)
        }
        if (data.results) {
          showDescription(data.results)
        }
      })
      .catch(err => console.log(err))
  } else {
    $films.innerHTML = ''
    $details.classList.remove('active')
  }
}
export default {
  name: 'post',
  data () {
    return {
      content: null
    }
  },
  methods: {
    add (e) {
      const { value } = e.target
      getMovies(value)
    },
    onFocusOut (e) {
      this.content = e.target.innerHTML
    }
  }
}
</script>
<style lang="scss">
.search__input {
  border-radius: 20px;
  height: 40px;
  width: 190px;
  background-color: $link;
  color: $text-about;
  @include text($H50, 400, $white);
  outline: none;
  border: none;
  padding: 0 20px 5px;
  transition: all 0.2s ease;
  &:focus {
    width: 200px;
  }
  &::placeholder {
    @include text($H50, 400, $white);
  }
}
</style>
