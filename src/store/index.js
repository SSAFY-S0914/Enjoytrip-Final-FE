import Vue from "vue";
import Vuex from "vuex";
// module import
import productStore from "./modules/productStore.js";
import MemberStore from "./modules/MemberStore.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productStore,
    MemberStore,
  },
});
