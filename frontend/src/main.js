import Vue from 'vue';
import Vuelidate from 'vuelidate'; // => Vuelidate
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // => Bootstrap
import 'nprogress/nprogress.css'; // => NProgress

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
