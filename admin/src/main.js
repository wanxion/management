import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.scss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from './http'
Vue.prototype.$axios = axios

Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$axios.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
