import Vue from "vue";
import Loading from "vue-loading-overlay"; // Import component
import "vue-loading-overlay/dist/vue-loading.css"; // Import stylesheet
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


Vue.config.productionTip = false;

// 元件 全域註冊
Vue.component("Loading", Loading);
// 套件加入到 Vue 的藍圖(原型)內
Vue.use(VueAxios, axios);

// 金額添加貨幣別
Vue.filter("dollarSign", (price)=>{
  return `$ ${price}`;
});
// 金額添加千分位
Vue.filter("currency", (num)=>{
  // 切分小數與整數
  let _parts = num.toString().split(".");
  _parts[0] = _parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return _parts.join(".");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
