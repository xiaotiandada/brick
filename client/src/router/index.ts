import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* Layout */
import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/Home.vue"),
        meta: { title: "Dashboard", icon: "dashboard" }
      }
    ]
  },
  {
    path: "/zcool",
    component: Layout,
    children: [
      {
        path: "index",
        name: "zcool",
        component: () => import("../views/zcool/index.vue"),
        meta: { title: "Zcool", icon: "zcool" }
      }
    ]
  },
  {
    path: "/matataki",
    component: Layout,
    redirect: "/matataki/import",
    meta: { title: "Matataki", icon: "matataki" },
    children: [
      {
        path: "import",
        name: "matataki-import",
        component: () => import("../views/matataki/import/index.vue"),
        meta: { title: "Import", icon: "import" }
      },
      {
        path: "likes",
        name: "matataki-likes",
        component: () => import("../views/matataki/likes/index.vue"),
        meta: { title: "Likes", icon: "likes" }
      }
    ]
  }
  // ---------------------------------------
  // matataki
  // {
  //   path: "/matataki",
  //   name: "matataki",
  //   redirect: "/matataki/import"
  // },
  // {
  //   path: "/matataki/import",
  //   name: "matataki-import",
  //   component: () => import("../views/matataki/import/index.vue")
  // },
  // {
  //   path: "/matataki/likes",
  //   name: "matataki-likes",
  //   component: () => import("../views/matataki/likes/index.vue")
  // },
  // // animation
  // {
  //   path: "/animation",
  //   name: "animation",
  //   redirect: "/animation/one"
  // },
  // {
  //   path: "/animation/one",
  //   name: "animation-one",
  //   component: () => import("../views/animation/one.vue")
  // },
  // {
  //   path: "/animation/two",
  //   name: "animation-two",
  //   component: () => import("../views/animation/two.vue")
  // },
  // {
  //   path: "/animation/three",
  //   name: "animation-three",
  //   component: () => import("../views/animation/three.vue")
  // },
  // {
  //   path: "/animation/four",
  //   name: "animation-four",
  //   component: () => import("../views/animation/four.vue")
  // },
  // {
  //   path: "/animation/five",
  //   name: "animation-five",
  //   component: () => import("../views/animation/five.vue")
  // },
  // {
  //   path: "/animation/six",
  //   name: "animation-six",
  //   component: () => import("../views/animation/six.vue")
  // },
  // {
  //   path: "/animation/seven",
  //   name: "animation-seven",
  //   component: () => import("../views/animation/seven.vue")
  // },
  // {
  //   path: "/animation/eight",
  //   name: "animation-eight",
  //   component: () => import("../views/animation/eight.vue")
  // },
  // {
  //   path: "/animation/nine",
  //   name: "animation-nine",
  //   component: () => import("../views/animation/nine.vue")
  // },
  // {
  //   path: "/animation/ten",
  //   name: "animation-ten",
  //   component: () => import("../views/animation/ten.vue")
  // },
  // {
  //   path: "/animation/eleven",
  //   name: "animation-eleven",
  //   component: () => import("../views/animation/eleven.vue")
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
