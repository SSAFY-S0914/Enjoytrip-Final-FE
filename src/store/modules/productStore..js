import { fetchCategories } from "@/api/product";

const productStore = {
  namespaced: true,
  state: {
    contentType: {},
    contentTypeSelection: [{ value: null, text: "전체" }],
  },
  getters: {},
  mutations: {
    SET_CATEGORY_LIST(state, contentType) {
      contentType.forEach((item) => {
        state.contentTypeSelection.push({ value: item.contentTypeId, text: item.name });
      });
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
  },
  actions: {
    fetchCategories: ({ commit }) => {
      fetchCategories(
        ({ data }) => {
          commit("SET_CATEGORY_LIST", data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default productStore;
