import Vue from "vue";
const axios = require("axios");
import vuetify from "./plugins/vuetify";
import jquery from "jquery";
import { ClientTable } from 'vue-tables-2';
import 'vue-select/dist/vue-select.css';
import VModal from 'vue-js-modal'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);
Vue.use(ClientTable, {
  perPage: 15,
  texts: {
      count: "Montrando del {from} al {to} de {count} Registros|{count} Registros|1 Registro",
      first: "First",
      last: "Last",
      filter: "",
      records:"......",
      filterPlaceholder: "Buscar registro",
      limit: "",
      page: "Page:",
      noResults: "Sin resultados",
      filterBy: "{column}",
      loading: "Cargando...",
      defaultOption: "Todas",
      columns: "Columns"
  }

}
);

Vue.use(VModal)

import './css/main.css'


window.$ = jquery;

import router from "./router";
import store from "./store";

// const Sequelize = require('sequelize');
import db from "./db/generalFunctions";

// Functions
import f from "./functions";

Vue.prototype.$db = db;
Vue.prototype.$fun = f;

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
