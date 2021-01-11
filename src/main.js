import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// firebase
import './firebase';

//filters
import "./filters.js";

// app styles
import './styles/main.scss';

import './registerServiceWorker'

library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt) // add icons from fontawesome
Vue.component('fa-icon', FontAwesomeIcon) // add component <fa-icon>

Vue.use(BootstrapVue) // install BootstrapVue
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')