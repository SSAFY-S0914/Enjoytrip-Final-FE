import Vue from "vue";
import VueRouter from "vue-router";
import InitView from "@/views/InitView";
import HomeView from "@/views/HomeView";
import ProductDetailView from "@/views/ProductDetailView";
import ProfileView from "@/views/ProfileView";
import TokenInfo from "@/views/TokenInfo";

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
  {
    path: "/products/:productId",
    name: "productDetail",
    component: ProductDetailView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
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
