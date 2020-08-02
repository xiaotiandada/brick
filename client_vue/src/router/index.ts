import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* Layout */
import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/client/index.vue")
    // children: [
    //   {
    //     path: "dashboard",
    //     name: "dashboard",
    //     component: () => import("@/views/Home.vue"),
    //     meta: { title: "Dashboard", icon: "dashboard" }
    //   }
    // ]
  },
  {
    path: "/io",
    component: () => import("@/views/client/io.vue")
  },
  {
    path: "/notification",
    name: "notification",
    component: () => import("@/views/client/notification/template.vue"),
    redirect: "/notification/index",
    children: [
      {
        path: "/notification/index",
        name: "notification-index",
        component: () => import("@/views/client/notification/index.vue")
      },
      {
        path: "/notification/system",
        name: "notification-system",
        component: () => import("@/views/client/notification/system.vue")
      }
    ]
  },
  {
    path: "/test",
    component: () => import("@/views/client/test.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: Layout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/admin/Home.vue"),
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
        component: () => import("@/views/admin/zcool/index.vue"),
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
        component: () => import("@/views/admin/matataki/import/index.vue"),
        meta: { title: "Import", icon: "import" }
      },
      {
        path: "likes",
        name: "matataki-likes",
        component: () => import("@/views/admin/matataki/likes/index.vue"),
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
        component: () => import("@/views/admin/animation/one.vue"),
        meta: { title: "one", icon: "one" }
      },
      {
        path: "two",
        name: "animation-two",
        component: () => import("@/views/admin/animation/two.vue"),
        meta: { title: "two", icon: "two" }
      },
      {
        path: "three",
        name: "animation-three",
        component: () => import("@/views/admin/animation/three.vue"),
        meta: { title: "three", icon: "three" }
      },
      {
        path: "four",
        name: "animation-four",
        component: () => import("@/views/admin/animation/four.vue"),
        meta: { title: "four", icon: "four" }
      },
      {
        path: "five",
        name: "animation-five",
        component: () => import("@/views/admin/animation/five.vue"),
        meta: { title: "five", icon: "five" }
      },
      {
        path: "six",
        name: "animation-six",
        component: () => import("@/views/admin/animation/six.vue"),
        meta: { title: "six", icon: "six" }
      },
      {
        path: "seven",
        name: "animation-seven",
        component: () => import("@/views/admin/animation/seven.vue"),
        meta: { title: "seven", icon: "seven" }
      },
      {
        path: "eight",
        name: "animation-eight",
        component: () => import("@/views/admin/animation/eight.vue"),
        meta: { title: "eight", icon: "eight" }
      },
      {
        path: "nine",
        name: "animation-nine",
        component: () => import("@/views/admin/animation/nine.vue"),
        meta: { title: "nine", icon: "nine" }
      },
      {
        path: "ten",
        name: "animation-ten",
        component: () => import("@/views/admin/animation/ten.vue"),
        meta: { title: "ten", icon: "ten" }
      },
      {
        path: "eleven",
        name: "animation-eleven",
        component: () => import("@/views/admin/animation/eleven.vue"),
        meta: { title: "eleven", icon: "eleven" }
      },
      {
        path: "scrollmagic",
        name: "animation-scrollmagic",
        component: () => import("@/views/admin/animation/scrollmagic.vue"),
        meta: { title: "scrollmagic", icon: "scrollmagic" }
      }
    ]
  },
  {
    path: "/search",
    name: "index",
    component: () => import("@/views/client/search.vue")
  },

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
