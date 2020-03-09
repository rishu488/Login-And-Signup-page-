import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import './config/Validation';
// import {ClientTable, Event} from 'vue-tables-2';
// import daterangepicker from 'daterangepicker';
// Vue.use(ClientTable , Event);
// Vue.use(daterangepicker);
Vue.config.productionTip = false

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
