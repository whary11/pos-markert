import Vue from "vue";
const axios = require("axios");
import vuetify from "./plugins/vuetify";

import jquery from "jquery";

window.$ = jquery;

import router from "./router";
import store from "./store";

// const Sequelize = require('sequelize');
import db from "./db/generalFunctions";

// Functions
import f from "./functions";

Vue.prototype.$db = db;
Vue.prototype.$fun = f;
Vue.config.productionTip = false;

// Components
import App from "./App";
import vSelect from "vue-select";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.component("v-select", vSelect);
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  vuetify,
  template: "<App/>",
}).$mount("#app");
