import {
  fetchCategories,
  fetchAreaCodes,
  fetchProductByKeyword,
  fetchProductByFestival,
  fetchProductByStay,
  fetchProductDetail,
} from "@/api/product";

const productStore = {
  namespaced: true,
  state: {
    keyword: "",
    selectedContentTypeId: "",
    selectedAreaCode: "",
    selectedSigunguCode: "",
    eventStartDate: "",
    eventEndDate: "",

    searchResult: {},
    productDetail: {},
    contentTypes: [],
    contentTypeSelection: [{ value: null, text: "전체" }],
    areaCodes: [],
    areaCodeSelection: [{ value: null, text: "전체" }],
    sigunguCodes: [],
    sigunguCodeSelection: [{ value: null, text: "전체" }],
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
    SET_SIGUNGUCODE_LIST(state, areaCode) {
      for (let idx = 0; idx < state.areaCodes.length; idx++) {
        const element = state.areaCodes[idx];
        if (element.code == areaCode) {
          state.sigunguCodes = element.sigugunCodeList;
          break;
        }
      }
      state.sigunguCodes.forEach((item) => {
        state.sigunguCodeSelection.push({ value: item.code, text: item.name });
      });
    },
    CLEAR_SIGUNGUCODE_LIST(state) {
      state.sigunguCodeSelection = [{ value: null, text: "전체" }];
    },
    SET_SELECT_CONTENTTYPEID(state, contentTypeId) {
      state.selectedContentTypeId = contentTypeId;
    },
    SET_SELECT_AREACODE(state, areaCode) {
      state.selectedAreaCode = areaCode;
    },
    SET_SELECT_SIGUNGUCODE(state, sigunguCode) {
      state.selectedSigunguCode = sigunguCode;
    },
    CLEAR_KEYWORD(state) {
      state.keyword = "";
    },
    SET_KEYWORD(state, keyword) {
      state.keyword = keyword;
    },
    CLREAR_ALL_SELECTED(state) {
      state.keyword = "";
      state.selectedContentTypeId = "";
      state.selectedAreaCode = "";
      state.selectedSigunguCode = "";
    },
    SET_EVENTSTARTDATE(state, eventStartDate) {
      state.eventStartDate = eventStartDate;
    },
    SET_EVENTENDDATE(state, eventEndDate) {
      state.eventEndDate = eventEndDate;
    },
    SET_SEARCH_RESULTS(state, products) {
      state.searchResult = products;
    },
    SET_PRODUCT_DETAIL(state, product) {
      state.productDetail = product.items.item[0];
    },
  },
  actions: {
    setCategories: ({ commit }) => {
      fetchCategories(
        ({ data }) => {
          commit("SET_CATEGORY_LIST", data.data);
        },
        (error) => {
          if (error) console.log(error);
        }
      );
    },
    setAreaCodes: ({ commit }) => {
      fetchAreaCodes(
        ({ data }) => {
          commit("SET_AREACODE_LIST", data.data);
        },
        (error) => {
          if (error) console.log(error);
        }
      );
    },
    setSigunguCodes: ({ commit }, areaCode) => {
      commit("SET_SIGUNGUCODE_LIST", areaCode);
    },
    search: ({ commit, state }, tabIndex) => {
      switch (tabIndex) {
        case 0: {
          const keyword = state.keyword;
          if (keyword != undefined && keyword != "") {
            fetchProductByKeyword(
              {
                keyword: keyword,
                contentTypeId: state.selectedContentTypeId,
                areaCode: state.selectedAreaCode,
                sigunguCode: state.selectedSigunguCode,
              },
              ({ data }) => {
                commit("SET_SEARCH_RESULTS", data.data);
              },
              (error) => {
                commit("CLEAR_KEYWORD");
                alert("검색 오류");
                if (error) console.log(error);
              }
            );
          }
          break;
        }
        case 1: {
          fetchProductByFestival(
            { eventStartDate: state.eventStartDate },
            ({ data }) => {
              commit("SET_SEARCH_RESULTS", data.data);
            },
            (error) => {
              if (error) console.log(error);
            }
          );
          break;
        }
        case 2: {
          fetchProductByStay(
            ({ data }) => {
              commit("SET_SEARCH_RESULTS", data.data);
            },
            (error) => {
              if (error) console.log(error);
            }
          );
          break;
        }
      }
    },
    searchDetail: ({ commit }, contentId) => {
      fetchProductDetail(
        { contentId },
        ({ data }) => {
          commit("SET_PRODUCT_DETAIL", data.data);
        },
        (error) => {
          if (error) console.log(error);
        }
      );
    },
  },
};

export default productStore;
