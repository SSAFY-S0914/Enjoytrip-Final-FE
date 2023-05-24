import { fetchCategories, fetchAreaCodes } from "@/api/product";

const productStore = {
  namespaced: true,
  state: {
    selectedContentTypeId: "",
    selectedAreaCode: "",
    selectedSigugunCode: "",
    contentTypes: [],
    contentTypeSelection: [{ value: null, text: "전체" }],
    areaCodes: [],
    areaCodeSelection: [{ value: null, text: "전체" }],
    sigugunCodes: [],
    sigugunCodeSelection: [{ value: null, text: "전체" }],
  },
  getters: {},
  mutations: {
    SET_CATEGORY_LIST(state, contentTypes) {
      state.contentTypes = contentTypes;
      contentTypes.forEach((item) => {
        state.contentTypeSelection.push({ value: item.contentTypeId, text: item.name });
      });
    },
    SET_AREACODE_LIST(state, areaCodes) {
      state.areaCodes = areaCodes;
      areaCodes.forEach((item) => {
        state.areaCodeSelection.push({ value: item.code, text: item.name });
      });
    },
    SET_SIGUGUNCODE_LIST(state, areaCode) {
      for (let idx = 0; idx < state.areaCodes.length; idx++) {
        const element = state.areaCodes[idx];
        if (element.code == areaCode) {
          state.sigugunCodes = element.sigugunCodeList;
          break;
        }
      }
      state.sigugunCodes.forEach((item) => {
        state.sigugunCodeSelection.push({ value: item.code, text: item.name });
      });
    },
    CLEAR_SIGUGUNCODE_LIST(state) {
      state.sigugunCodeSelection = [{ value: null, text: "전체" }];
    },
    SET_SELECT_CONTENTTYPEID(state, contentTypeId) {
      state.selectedContentTypeId = contentTypeId;
    },
    SET_SELECT_AREACODE(state, areaCode) {
      state.selectedAreaCode = areaCode;
    },
    SET_SELECT_SIGUGUNCODE(state, sigugunCode) {
      state.selectedSigugunCode = sigugunCode;
    },
  },
  actions: {
    setCategories: ({ commit }) => {
      fetchCategories(
        ({ data }) => {
          commit("SET_CATEGORY_LIST", data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setAreaCodes: ({ commit }) => {
      fetchAreaCodes(
        ({ data }) => {
          commit("SET_AREACODE_LIST", data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setSigugunCodes: ({ commit }, areaCode) => {
      commit("SET_SIGUGUNCODE_LIST", areaCode);
    },
  },
};

export default productStore;
