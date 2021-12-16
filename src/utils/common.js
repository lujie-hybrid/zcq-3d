import store from "@/store";
import Vue from "vue";
// import { Message } from "element-ui";

// 添加resize事件
export const resizeFunc = (callback) => {
  window.vResize = window.addEventListener("resize", callback);
};

// 删除resize事件
export const removeResizeFunc = () => {
  window.removeEventListener(window.vResize);
};

// 补全月份 12月
export const fillMonth = (list, valueName = "value", monthName = "month") => {
  let result = [];
  const lastMonth = list[list.length - 1].month;
  const fillLength = 12 - lastMonth;
  for (let i = fillLength; i > 0; i--) {
    result.push({ [monthName]: 12 - i + 1, [valueName]: 0 });
  }
  return list.concat(result);
};

// 获取字典对应的label
export const getDictLabel = (codeIndex, value) => {
  const { dictKeys, dict } = store.state;
  const list = dict[dictKeys[codeIndex]];
  if (list && list.length > 0) {
    const item = list.find((d) => d.value == value);
    return item ? item.label : "";
  } else {
    return "";
  }
};

// 判断chart返回label是多少万
export const dealChartValue = (value) => {
  if (value < 10000) {
    return value;
  } else {
    const r = value / 10000;
    if (/^[1-9]\d* | 0$/.test(r)) {
      return r + " 万";
    } else {
      return Math.floor(r * 10) / 10 + "万";
    }
  }
};

// 获取整数百分比
export const getPercent = (value) => {
  return Math.floor(value * 100) + "%";
};

// 点击子导航的方法
// export function clickNav(n) {
//   store.commit("set_value", {
//     key: "noRightComponent",
//     val: store.state.currentLeftComponent === "perimeter-left",
//   });
//   const comp = {
//     left: [
//       [],
//       [
//         ["access-left", "access-right"],
//         ["access-actual-left", "access-actual-right"],
//         ["", ""],
//       ],
//       [
//         ["video-left", "video-right"],
//         ["video-actual-left", "video-actual-right"],
//       ],
//     ],
//     right: [
//       [
//         ["perimeter-left", ""],
//         ["perimeter-actual-left", "perimeter-actual-right"],
//       ],
//       [
//         ["car-left", "car-right"],
//         ["", ""],
//       ],
//       [
//         ["house-left", "house-right"],
//         ["house-detail-left", "house-detail-right"],
//         ["", ""],
//       ],
//     ],
//   };
//   store.commit("set_value", { key: "childNavActiveIndex", val: n });
//   store.commit("set_value", {
//     key: "currentLeftComponent",
//     val: comp[store.state.navbarType][store.state.navbarIndex][n][0],
//   });
//   store.commit("set_value", {
//     key: "currentRightComponent",
//     val: comp[store.state.navbarType][store.state.navbarIndex][n][1],
//   });
//   // this.$emit("nav-click", n);
//   if (store.state.navbarType === "left") {
//     switch (store.state.navbarIndex) {
//       case 1:
//         store.commit("set_value", { key: "recordPageShow", val: n === 2 });
//         break;

//       default:
//         break;
//     }
//   } else {
//     switch (store.state.navbarIndex) {
//       case 0:
//         break;
//       case 1:
//         store.commit("car/set_value", {
//           key: "recordShow",
//           val: n === 1,
//         });
//         break;
//       case 2:
//         store.commit("house/set_value", {
//           key: "recordShow",
//           val: n === 2,
//         });
//         break;
//       default:
//         break;
//     }
//   }
// }

// 点击主导航

export function clickNavbar(i) {
  const $render = Vue.prototype.$render;
  const $handler = Vue.prototype.$handler;
  // const $handler = Vue.prototype.$handler;

  // const videoNav = ["监控总览", "监控实况"];
  // const carNav = ["车辆总览", "记录查询"];
  // const perimeterNav = ["周界总览", "周界实况"];
  // const houseNav = ["房屋总览", "住户详情", "记录查询"];

  // 交互
  $render && $render.removeAllCovering();

  // 设置全局的导航类型和index，方便全局使用
  store.commit("set_value", { key: "navbarIndex", val: i });
  store.commit("set_value", { key: "secondNavIndex", val: 0 });
  store.commit("set_value", { key: "thirdNavIndex", val: 0 });
  store.commit("set_value", { key: "forthNavIndex", val: 0 });
  store.commit("set_value", { key: "forthNav", val: [] });
  if (i == 0 && $handler) {
    // $handler.addHomeRange();
    $handler.setHomeAnimation();
  }
  // store.commit("set_value", { key: "isTravel", val: false });
  // } else {
  //   $handler.clearTimer();
  // }
  handlerSecondNav();
  handlerComp();
}

// 设置三级导航内容
export function handlerSecondNav() {
  const navbarIndex = store.state.navbarIndex;
  // const secondNavIndex = navbarIndex == 0 ? 0 : store.state.secondNavIndex;
  const secondPages = [
    [],
    ["概况", "区域", "配套", "环境", "政策"],
    ["园区", "警务", "交通", "文旅", "防护"],
  ];
  const secondIcons = [
    [],
    [
      "icon-news",
      "icon-quyuhuafen",
      "icon-zhaoshangxuanzhi",
      "icon-energy",
      "icon-zhaoshangxuanzhi",
    ],
    [
      "icon-news",
      "icon-hospital",
      "icon-xuexiao",
      "icon-car",
      "icon-shopping",
      "icon-energy",
    ],
  ];
  store.commit("set_value", {
    key: "secondNav",
    val: secondPages[navbarIndex],
  });
  store.commit("set_value", {
    key: "secondIcons",
    val: secondIcons[navbarIndex],
  });
}

// 设置页面
export function handlerComp() {
  const navbarIndex = store.state.navbarIndex;
  const secondNavIndex = navbarIndex == 0 ? 0 : store.state.secondNavIndex;
  const forthNavIndex = store.state.forthNavIndex;
  const pages = store.state.pages;

  if (navbarIndex == 2 && (secondNavIndex == 0 || secondNavIndex == 1)) {
    store.commit("set_value", {
      key: "currentLeftComponent",
      val: pages[navbarIndex][secondNavIndex][forthNavIndex][0],
    });
    store.commit("set_value", {
      key: "currentRightComponent",
      val: pages[navbarIndex][secondNavIndex][forthNavIndex][1],
    });
  } else {
    store.commit("set_value", {
      key: "currentLeftComponent",
      val: pages[navbarIndex][secondNavIndex][0],
    });
    store.commit("set_value", {
      key: "currentRightComponent",
      val: pages[navbarIndex][secondNavIndex][1],
    });
  }

  // store.commit("set_value", {
  //   key: "lastCurrentLeftComponent",
  //   val: pages[navbarIndex][lastNavIndex][0],
  // });
  // store.commit("set_value", {
  //   key: "lastCurrentRightComponent",
  //   val: pages[navbarIndex][lastNavIndex][1],
  // });
  // store.commit("set_value", {
  //   key: "lastCompIcon",
  //   val: true,
  // });
}
