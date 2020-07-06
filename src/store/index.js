import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    postsSet (state, posts) {
      state.posts = [...posts]
    },
    postsRequest (state) {
      state.loading = true
    },
    postsSuccess (state) {
      state.loading = false
    }
  },
  actions: {
    async getPosts ({ commit }) {
      commit('postsRequest')
      try {
        const Api = await fetch(
          'https://api.themoviedb.org/3/movie/343611?api_key=f1540f730f26f48851aa3a0a12af3257'
        )
        if (Api.ok) {
          const data = await Api.json()
          commit('postsSet', data)
        }
      } catch {
        console.log('Something wrong!')
      } finally {
        commit('postsSuccess')
      }
    }
  },
  modules: {}
})
