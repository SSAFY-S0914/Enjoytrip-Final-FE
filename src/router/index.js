import Vue from "vue";
import VueRouter from "vue-router";
import InitView from "@/views/InitView";
import HomeView from "@/views/HomeView";
import ProductDetailView from "@/views/ProductDetailView";
import ProfileView from "@/views/ProfileView";
import FollowSetting from "@/components/partial/ProfileSetting/FollowSetting";
import LikeSetting from "@/components/partial/ProfileSetting/LikeSetting.vue";
import ProfileSetting from "@/components/partial/ProfileSetting/ProfileSetting.vue";
import AllGroupView from "@/views/AllGroupView";

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
    children: [
      {
        path: "/profile/setting",
        component: ProfileSetting,
      },
      {
        path: "/profile/mylike",
        component: LikeSetting,
      },
      {
        path: "/profile/myfollow",
        component: FollowSetting,
      },
    ],
  },
  {
    path: "/groups",
    name: "allgroups",
    component: AllGroupView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
