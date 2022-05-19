import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'

import '@fortawesome/fontawesome-free/js/all.js'

import "/src/css/intro_styles.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
