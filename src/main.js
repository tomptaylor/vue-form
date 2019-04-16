import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");
