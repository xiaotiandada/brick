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
  },
  // // animation
  {
    path: "/animation",
    component: Layout,
    redirect: "/animation/one",
    meta: { title: "Animation", icon: "animation" },
    children: [
      {
        path: "one",
        name: "animation-one",
        component: () => import("../views/animation/one.vue"),
        meta: { title: "one", icon: "one" }
      },
      {
        path: "two",
        name: "animation-two",
        component: () => import("../views/animation/two.vue"),
        meta: { title: "two", icon: "two" }
      },
      {
        path: "three",
        name: "animation-three",
        component: () => import("../views/animation/three.vue"),
        meta: { title: "three", icon: "three" }
      },
      {
        path: "four",
        name: "animation-four",
        component: () => import("../views/animation/four.vue"),
        meta: { title: "four", icon: "four" }
      },
      {
        path: "five",
        name: "animation-five",
        component: () => import("../views/animation/five.vue"),
        meta: { title: "five", icon: "five" }
      },
      {
        path: "six",
        name: "animation-six",
        component: () => import("../views/animation/six.vue"),
        meta: { title: "six", icon: "six" }
      },
      {
        path: "seven",
        name: "animation-seven",
        component: () => import("../views/animation/seven.vue"),
        meta: { title: "seven", icon: "seven" }
      },
      {
        path: "eight",
        name: "animation-eight",
        component: () => import("../views/animation/eight.vue"),
        meta: { title: "eight", icon: "eight" }
      },
      {
        path: "nine",
        name: "animation-nine",
        component: () => import("../views/animation/nine.vue"),
        meta: { title: "nine", icon: "nine" }
      },
      {
        path: "ten",
        name: "animation-ten",
        component: () => import("../views/animation/ten.vue"),
        meta: { title: "ten", icon: "ten" }
      },
      {
        path: "eleven",
        name: "animation-eleven",
        component: () => import("../views/animation/eleven.vue"),
        meta: { title: "eleven", icon: "eleven" }
      }
    ]
  }

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
