// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MediSlider from './components/MediSlider.vue'

import Message from './components/Message.vue'

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
