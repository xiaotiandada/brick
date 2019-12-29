import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// plugin
import "./plugin/element";

import API from "./api/api";
// global style
import "normalize.css";
import "./assets/less/index.less";
Vue.config.productionTip = false;
Vue.prototype.$API = API;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
