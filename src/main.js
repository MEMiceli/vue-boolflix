import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.component('lang-flag', LangFlag);

new Vue({
  render: h => h(App),
}).$mount('#app')
