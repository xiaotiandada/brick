import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/zcool",
    name: "zcool",
    component: () => import("../views/zcool/index.vue")
  },
  // matataki
  {
    path: "/matataki",
    name: "matataki",
    redirect: "/matataki/import"
  },
  {
    path: "/matataki/import",
    name: "matataki-import",
    component: () => import("../views/matataki/import/index.vue")
  },
  {
    path: "/matataki/likes",
    name: "matataki-likes",
    component: () => import("../views/matataki/likes/index.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
