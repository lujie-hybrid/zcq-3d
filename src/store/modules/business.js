export default {
  namespaced: true,
  state: () => ({
    currentPoi: "",
    areaId: "1",
    addressId: ["1_4", "1_5"],
  }),
  mutations: {
    set_value(state, { key, val }) {
      state[key] = val;
    },
  },
  actions: {},
  getters: {},
};
