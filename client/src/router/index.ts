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
  // animation
  {
    path: "/animation",
    name: "animation",
    redirect: "/animation/one"
  },
  {
    path: "/animation/one",
    name: "animation-one",
    component: () => import("../views/animation/one.vue")
  },
  {
    path: "/animation/two",
    name: "animation-two",
    component: () => import("../views/animation/two.vue")
  },
  {
    path: "/animation/three",
    name: "animation-three",
    component: () => import("../views/animation/three.vue")
  },
  {
    path: "/animation/four",
    name: "animation-four",
    component: () => import("../views/animation/four.vue")
  },
  {
    path: "/animation/five",
    name: "animation-five",
    component: () => import("../views/animation/five.vue")
  },
  {
    path: "/animation/six",
    name: "animation-six",
    component: () => import("../views/animation/six.vue")
  },
  {
    path: "/animation/seven",
    name: "animation-seven",
    component: () => import("../views/animation/seven.vue")
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
