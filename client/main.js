/* Core */
import Vue from 'vue';
import App from './App.vue';

/* Router & Store */
import router from './router';
import store from './store';

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

Vue.prototype.$eventHub = new Vue();

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')