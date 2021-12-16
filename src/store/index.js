import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import business from "./modules/business";
import manage from "./modules/manage";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    business,
    manage,
  },
  getters: {},
  state: {
    navbarIndex: 0, // 左边或者右边的当前的index
    currentLeftComponent: "home-left", // 左边的组件
    currentRightComponent: "home-right", // 右边的组件
    // lastCurrentLeftComponent: "", // 左边的组件
    // lastCurrentRightComponent: "", // 右边的组件
    // lastCompIcon: true, //全览图标active状态
    // isTravel: false, // 是否是漫游状态
    secondNav: [], // 二级导航
    secondNavIndex: 0, // 二级导航的index
    thirdNav: [], // 三级导航
    thirdNavIndex: 0, // 三级导航的index
    secondIcons: [],
    forthNav: [],
    forthNavIndex: 0,
    pages: [
      [["home-left", "home-right"]],
      [
        ["attract-left", "attract-right"],
        ["business-area-left", "business-area-right"],
        ["mating-left", "mating-right"],
        ["manage-pm-left", "manage-pm-right"],
        ["policy-left", "policy-right"],
      ],
      [
        [
          ["business-left", "business-right"],
          ["coturn-business-left", "coturn-business-right"],
          ["door-left", "door-right"],
          ["coturn-car-left", "coturn-car-right"],
          ["coturn-video-left", "coturn-video-right"],
          ["coturn-energy-left", "coturn-energy-right"],
        ],
        [["card-left", "card-right"], [], [], [], []],
        ["traffic-left", "traffic-right"],
        ["culture-travel-left", "culture-travel-right"],
        ["epidemic-left", "epidemic-right"],
      ],
      // [
      //   ["manage-left", "manage-right"],
      //   ["manage-hospital-left", "manage-hospital-right"],
      //   ["manage-educate-left", "manage-educate-right"],
      //   ["manage-car-left", "manage-car-right"],
      //   ["manage-shop-left", "manage-shop-right"],
      //   ["manage-pm-left", "manage-pm-right"],
      // ],
    ],
    renderOver: false, // 场景渲染结束
    showSelect: false, // 天气选择
    timeIndex: 0,
    weatherIndex: 0,
    bgState: "",
  },
  mutations: {
    set_value(state, { key, val }) {
      state[key] = val;
    },
  },
  actions: {},
});
