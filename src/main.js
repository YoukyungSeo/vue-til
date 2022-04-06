import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index'; // .js를 붙이지 않아도 된다

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
