import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

// const importView = (view) => () => import(`@/views/${view}`);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Home,
  },
  // {
  //   path: "/hw",
  //   name: "home-window",
  //   component: importView("window/HomeWindow"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
