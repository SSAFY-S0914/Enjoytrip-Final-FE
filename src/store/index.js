import Vue from "vue";
import Vuex from "vuex";
// module import
import productStore from "@/store/modules/productStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productStore,
  },
});
