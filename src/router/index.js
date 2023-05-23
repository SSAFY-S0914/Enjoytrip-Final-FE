import Vue from "vue";
import VueRouter from "vue-router";
//
import InitView from "@/views/InitView";
import HomeView from "@/views/HomeView";

//
import productRouter from "./productRouter";
import groupRouter from "./groupRouter";
import profileRouter from "./profileRouter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "init",
    component: InitView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },

  productRouter,
  groupRouter,
  profileRouter,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
