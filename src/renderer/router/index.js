// const Vue = require('vue')
import Vue from "vue";

const Router = require("vue-router");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: require("@/App").default,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
