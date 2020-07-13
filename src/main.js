import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './scss/style.scss'
import Loader from '@/components/common/Loader.vue'

Vue.config.productionTip = false

Vue.component('Loader', Loader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
