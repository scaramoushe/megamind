import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Numbers from "./components/numbers/numbers";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/numbers",
      name: "numbers",
      component: Numbers
    }
  ]
});
