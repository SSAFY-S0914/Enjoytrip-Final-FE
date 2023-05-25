const MemberStore = {
  namespaced: true,
  state: {
    isLogin: false,
  },
  actions: {},
  mutations: {
    SET_IS_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
  },
};
export default MemberStore;
