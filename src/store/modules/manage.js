export default {
  namespaced: true,
  state: () => ({
    leftList: [],
    rightList: [],
    pages: [
      { id: "manage-home-hospital_5_1", page: "manage-hospital-detail" },
      { id: "manage-home-shop_shop1", page: "manage-shop-detail" },
      { id: "manage-home-educate_school1", page: "manage-educate-detail" },
    ],
    detailId: "",
  }),
  mutations: {
    set_value(state, { key, val }) {
      state[key] = val;
    },
  },
  actions: {},
  getters: {},
};
