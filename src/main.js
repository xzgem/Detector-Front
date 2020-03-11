import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router';
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:9000';

Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
