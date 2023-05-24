import Vue from "vue";
import VueRouter from "vue-router";

// import InitView from "@/views/InitView";
import HomeView from "@/views/HomeView";

import productRouter from "./productRouter";
import groupRouter from "./groupRouter";
import profileRouter from "./profileRouter";
import memberRouter from "./memberRouter";
import TokenInfo from "@/views/TokenInfo";
import postRouter from "./postRouter";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "init",
  //   component: InitView,
  // },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  ...productRouter,
  ...groupRouter,
  ...profileRouter,
  ...memberRouter,
  ...postRouter,
  {
    path: "/tokeninfo",
    name: "tokeninfo",
    component: TokenInfo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
