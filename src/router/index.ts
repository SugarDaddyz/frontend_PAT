import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Validasi/Login.vue";
import Layout from "../views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },

  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/Apps/Dashboard.vue"),
        meta: {
          title: "Dashboard",
        },
      },
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "Home",
        },
      },
      {
        path: "users",
        name: "Users",
        component: () => import("../views/Apps/Users/Users.vue"),
        meta: {
          title: "Management Users",
        },
      },
      {
        path: "cabang",
        name: "Branches",
        component: () => import("../views/Apps/Cabang/Branches.vue"),
        meta: {
          title: "Cabang List",
        },
      },
      {
        path: "cabang/detail",
        name: "BranchesDetail",
        component: () => import("../views/Apps/Cabang/DetailBranches.vue"),
        meta: {
          title: "Detail Cabang",
        },
      },
      {
        path: "products",
        name: "Products",
        component: () => import("../views/Apps/Products/Products.vue"),
        meta: {
          title: "Product List",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = "CAYN";
  next();
});

export default router;
