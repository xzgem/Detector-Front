import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/css/style.css'
// import './assets/font-awesome-4.4.0/css/font-awesome.min.css'
// import './assets/css/lightbox.css'
// import './assets/css/jquery.smartmenus.bootstrap.css'
//
// import 'jquery/src/jquery'
// import 'bootstrap/dist/js/bootstrap.js'
// import './assets/js/jquery.pinto'
// import './assets/js/main'
// import './assets/js/jquery.smartmenus'
// import './assets/js/jquery.smartmenus.bootstrap'
// import './assets/js/lightbox-plus-jquery.min'

axios.defaults.baseURL = 'http://127.0.0.1:8080';
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;



new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
