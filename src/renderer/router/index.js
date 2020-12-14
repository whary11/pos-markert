// const Vue = require('vue')
import Vue from "vue";

const Router = require("vue-router");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/products",
      name: "products",
      component: require("@/Pages/Products").default,
    },
    {
      path: "/entry-order",
      name: "products",
      component: require("@/Pages/EntryOrder").default,
    },
    
  ],
});
