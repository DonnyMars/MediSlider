// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.axios = require('axios')
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import router from './router'

import MediSlider from './components/MediSlider.vue'

import Message from './components/Message.vue'

Vue.use(VueAxios, axios);
Vue.component('app-message', Message);
Vue.component('medi-slider', MediSlider);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
