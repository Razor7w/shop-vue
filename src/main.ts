import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { Framework } from 'vuetify'
// Components
import './components'
// Import plugins
import './plugins'
import { sync } from 'vuex-router-sync'
// Layout
import Layout from '@/layout/default/index.vue'
// Blank
import BlankLayout from '@/layout/blank/index.vue'
// Test
import TestLayout from '@/layout/test/index.vue'

sync(store, router)

Vue.component('default-layout', Layout)
Vue.component('blank-layout', BlankLayout)
Vue.component('test-layout', TestLayout)

Vue.config.productionTip = false
Vue.config.devtools = false

declare module 'vue/types/vue' {
  // this.$vuetify inside Vue components
  interface Vue {
    $vuetify: Framework;
  }
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
