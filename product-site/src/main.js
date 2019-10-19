import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import BootsrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootsrapVue);
Vue.use(VueResource);
Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount("#app");
