import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueFirestore);

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes: Routes, // short for `routes: routes`
  mode: 'history'
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')