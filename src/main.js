import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000/', { reconnect: true, transports: ['websocket'] });

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
Vue.use(BootstrapVue)
Vue.prototype.$socket = socket;
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueAxios, 
  axios,
  // BootstrapVue,
  // BootstrapVueIcons,
  render: h => h(App)
}).$mount('#app')
