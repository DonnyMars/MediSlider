// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.axios = require('axios')
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import router from './router'

// Vue components imported.
import MediSlider from './components/MediSlider.vue'
import RecommendedTests from './components/RecommendedTests.vue'


Vue.use(VueAxios, axios);

// Vue components added to the instance.
Vue.component('medi-slider', MediSlider);
Vue.component('recommended-tests', RecommendedTests);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
