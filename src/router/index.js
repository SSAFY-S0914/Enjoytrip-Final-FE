import Vue from "vue";
import VueRouter from "vue-router";
import InitView from "@/views/InitView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "init",
    component: InitView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
