import Vue from "vue";
import { MySuperAPI } from "@u/3d";
import { clickNavbar } from "@u/common";
import store from "@/store";
const url = process.env.VUE_APP_IMG_POI;
export default class MyOperater {
  // 实例化
  constructor(id) {
    this.$rd = new MySuperAPI(id, this.handleResponseFunction.bind(this));
    this.$skt = Vue.prototype.$skt;
    Vue.prototype.$render = this.$rd;
    // this.travelIndex = 0;
    // this.travelList = ["hl_1", "hl_2", "hl_3", "hl_4", "hl_5"];
  }
  setPOI(list, args = {}) {
    const {
      img = "",
      imgActive = "",
      bgSize = "150,30",
      coord_z = 0,
      size = "40,47",
      bg_offset = "30,40",
      always_show_label = false,
      show_label_range = "0,105",
      hasWindow = false,
    } = args;
    const points = list.map((item) => ({
      id: item.id,
      coord: item.coord,
      coord_z: item.coord_z || coord_z,
      show_label_range,
      // always_show_label: item.always_show_label,
      marker: {
        size,
        images: [
          {
            normal_url: item.img || img, //normal 图片url地址
            activate_url: item.imgActive || imgActive, //hover, active 图片url地址
          },
        ],
      },
      label: {
        bg_size: item.bgSize || bgSize, //label大小(宽, 高 单位:像素)
        bg_offset,
        bg_image_url: `${url}/label-bg.png`,
        content: [
          {
            text: [item.text, "FFFFFFE6", "13"], //[文本内容, HEXA颜色, 文本大小]
          },
        ],
      },
      window: hasWindow
        ? {
            url: `http://192.168.1.106:8008/hw?id=${item.id}`,
            size: "520,350",
            offset: "40,50",
          }
        : null,
    }));
    this.$rd.addCustomPOI(points, always_show_label);
    // this.$rd.focusAllCovering();
  }
  addBusinessPoi() {
    const poiText = [
      "北京大学长三角光电科学研究院",
      "智能感知研究院",
      "腾讯双创社区",
      "中北大学南通智能光机电研究院",
      "沃太研究院",
    ];
    const sizes = ["250,30", "140,30", "130,30", "250,30", "120,30"];
    const points = [
      "120.925011,31.969519",
      "120.923973,31.969534",
      "120.926842,31.967306",
      "120.924805,31.968136",
      "120.924568,31.966686",
    ].map((pot, p) => ({
      id: `business_${p + 1}`,
      text: poiText[p],
      coord: pot,
      img: `${url}/business.png`,
      imgActive: `${url}/business-active.png`,
      bgSize: sizes[p],
    }));
    this.setPOI(points, { always_show_label: true });
  }
  addManageHospital(always_show_label = true, isHome = false) {
    const poiText = ["上海交通大学医学院附属仁济南通医院", "南通大学附属医院"];
    const sizes = ["320,30", "150,30"];
    const ids = ["5_1", "5_2"];
    const points = ["120.923027,31.98279", "120.981194,32.004196"].map(
      (pot, p) => ({
        id: isHome
          ? `manage-home-hospital_${ids[p]}`
          : `manage-hospital_${ids[p]}`,
        text: poiText[p],
        coord: pot,
        img: `${url}/hospital.png`,
        imgActive: `${url}/hospital.png`,
        bgSize: sizes[p],
        always_show_label: p === 0,
      })
    );
    this.setPOI(points, { always_show_label });
  }
  addManagePm(always_show_label = true, isHome = false) {
    const poiText = [
      "中央森林公园监测点",
      "紫琅湖公园监测点",
      "环保公园监测点",
      "云林绿丘环保监测点",
      "湿地森林环保监测点",
    ];
    // const sizes = ["180,30", "180,30", "180,30", "150,30", "200,30"];
    const sizes = ["180,30", "180,30", "150,30", "180,30", "180,30"];
    const points = [
      "120.933388,31.968027",
      "120.936287,31.965818",
      "120.936607,31.978853",
      "120.934998,31.984392",
      "120.936005,31.989264",
    ].map((pot, p) => ({
      id: isHome ? `manage-home-pm_p${p + 1}` : `manage-pm_p${p + 1}`,
      text: poiText[p],
      coord: pot,
      img: `${url}/energy.png`,
      imgActive: `${url}/energy.png`,
      bgSize: sizes[p],
    }));
    this.setPOI(points, { always_show_label });
  }
  addManageShop(always_show_label = true, isHome = false) {
    const poiText = ["金鹰世界", "紫琅新天地", "紫琅科技城地下商业街"];
    const sizes = ["120,30", "130,30", "180,30"];
    const points = [
      "120.940292,31.968281",
      "120.927834,31.962749",
      "120.924957,31.965635",
    ].map((pot, p) => ({
      id: isHome ? `manage-home-shop_shop${p + 1}` : `manage-shop_shop${p + 1}`,
      text: poiText[p],
      coord: pot,
      img: `${url}/shop.png`,
      imgActive: `${url}/shop.png`,
      bgSize: sizes[p],
      always_show_label: p === 0,
    }));
    this.setPOI(points, { always_show_label });
  }
  addManageSchool(always_show_label = true, isHome = false) {
    const poiText = [
      "南通中学附属实验学校",
      "源兴路北幼儿园",
      "人才公寓幼儿园",
      "紫琅一小",
      "紫琅湖实验学校",
    ];
    const sizes = ["210,30", "150,30", "150,30", "120,30", "150,30"];
    const points = [
      "120.924065,31.954245",
      "120.947777,31.951607",
      "120.919029,31.966024",
      "120.926117,31.988485",
      "120.951004,31.959675",
    ].map((pot, p) => ({
      id: isHome
        ? `manage-home-educate_school${p + 1}`
        : `manage-educate_school${p + 1}`,
      text: poiText[p],
      coord: pot,
      img: `${url}/school.png`,
      imgActive: `${url}/school.png`,
      bgSize: sizes[p],
      always_show_label: p === 0,
    }));
    this.setPOI(points, { always_show_label });
  }
  setHomeAnimation() {
    if (this.$rd) {
      this.$rd.setCameraInfo({
        center_coord: "120.932793,31.967758",
        arm_distance: "1000.334106",
        pitch: "30.690704",
        yaw: "318.75119",
      });
      setTimeout(() => {
        this.$rd.setCameraRotate(80);
      }, 1500);
    }
  }
  setSpecialCamera(type) {
    let msg = {};
    switch (type) {
      case "dajuyuan":
        msg = {
          center_coord: "120.936753,31.969323",
          arm_distance: "343.475403",
          pitch: "17.36441",
          yaw: "27.196442",
        };
        break;
      case "meishu":
        msg = {
          center_coord: "120.93733,31.966562",
          arm_distance: "155.628067",
          pitch: "24.972565",
          yaw: "149.568207",
        };
        break;
      case "zhanlan":
        msg = {
          center_coord: "120.929411,31.97111",
          arm_distance: "181.613831",
          pitch: "34.474457",
          yaw: "3.873779",
        };
        break;
      case "huiyi":
        msg = {
          center_coord: "120.931035,31.968949",
          arm_distance: "256.404449",
          pitch: "22.669159",
          yaw: "335.944214",
        };
        break;
      case "wanghao":
        msg = {
          center_coord: "120.929063,31.967136",
          arm_distance: "176.53183",
          pitch: "29.291626",
          yaw: "292.75415",
        };
        break;

      default:
        break;
    }
    this.$rd.setCameraInfo(msg);
  }
  // 事件监听
  handleResponseFunction(data) {
    console.log("收到的事件: " + data);
    const jsonObject =
      typeof data === "object"
        ? JSON.parse(JSON.stringify(data))
        : JSON.parse(data);
    switch (jsonObject.func_name) {
      case "beginPlay":
        // 云渲染连接成功 do Something
        break;

      case "APIAlready":
        // 3D世界加载完成 do Something
        this.$rd.removeAllCovering();
        this.$rd.endGetCoord();
        this.$rd.setMultiRendering(2);
        this.$rd.setEnvTime("12:30");
        store.commit("set_value", { key: "renderOver", val: true });
        setTimeout(() => {
          clickNavbar(0);
        }, 500);
        break;

      case "OnPOIClick":
        {
          const id = jsonObject.args.id;
          const arr = id.split("_");
          // const end = arr[arr.length - 1];
          // let list = [];
          // if (prefix === "home") {
          //   list = [
          //     "home_kc",
          //     "home_wc",
          //     "home_hz",
          //     "home_sl",
          //     "home_sh",
          //     "home_sw",
          //   ];
          //   list.forEach((item) => {
          //     this.$rd.updateRangeStyle({
          //       id: `${item}_range`,
          //       type: id === item ? "loop_line" : "box_wave",
          //       range_height: id === item ? 80 : 30,
          //     });
          //   });
          // }
          // if (prefix.startsWith("home") || prefix.startsWith("mine")) {
          //   this.$rd.focusCovering(id, "poi", 600);
          // } else {
          //   this.$rd.focusCovering(id, "poi", 150);
          // }
          if (arr[0] === "business") {
            store.commit("manage/set_value", {
              key: "detailId",
              val: id,
            });
            // const rightPages = [
            //   "business-area-right",
            //   "business-sh-detail",
            //   "business-right-detail",
            //   "business-zb-detail",
            //   "business-area-right",
            // ];
            store.commit("set_value", {
              key: "currentRightComponent",
              val: "business-right-detail",
            });
            this.$rd.focusCovering(id, "poi", 150);
          } else if (arr[0].startsWith("manage-home")) {
            this.$rd.focusCovering(id, "poi", 600);
            const item = store.state.manage.pages.find((d) => d.id === id);
            if (item) {
              store.commit("set_value", {
                key: "currentRightComponent",
                val: item.page,
              });
            } else {
              store.commit("set_value", {
                key: "currentRightComponent",
                val: "manage-right",
              });
            }
          }

          // else if (arr[0].startsWith("manage")) {
          //   this.$rd.focusCovering(id, "poi", 600);
          //   const item = store.state.manage.pages.find((d) => d.id === end);
          //   store.commit("set_value", {
          //     key: "currentRightComponent",
          //     val: item.page,
          //   });
          // }
        }
        break;
      case "OnRangeClick":
        {
          const id = jsonObject.args.id;
          const arr = id.split("_");
          if (arr[2] === "business") {
            store.commit("business/set_value", {
              key: "areaId",
              val: arr[0],
            });
            store.commit("set_value", {
              key: "currentRightComponent",
              val: "area-detail",
            });
          }
        }
        break;

      case "OnAddCustomPOISuccess": {
        // const id = jsonObject.args.id;
        // const prefix = id.split("_")[0];
        // if (prefix === "home") {
        //   setTimeout(() => {
        //     this.$rd.addCoverWindow(id, `${id}_id`, "poi");
        //   }, 1000);
        // }

        break;
      }
      case "OnUpdatePathCoordFailed":
        // 更新路径数据点失败 do Something
        break;

      case "OnFocusPathEnd":
        // 聚焦路径结束 do Something
        break;

      case "OnPathClick":
        // 点击路径 do Something
        break;

      case "OnSuperAPI_Error_Catch":
        // 错误捕捉 do Something
        // "args": {
        //   "error_type": "SuperAPI JSon Body Field Error",
        //   "error_information": "id"
        // }
        break;

      //更多func_name类型 回调通知, 详见各API事件
    }
    return data;
  }
  // addHomeRange(range = [1, 2, 3, 4, 5]) {
  //   const coturn = [
  //     "120.919296,31.974005",
  //     "120.917229,31.954969",
  //     "120.925545,31.9548",
  //     "120.926865,31.95463",
  //     "120.929848,31.953341",
  //     "120.929749,31.955467",
  //     "120.927284,31.957846",
  //     "120.927864,31.960388",
  //     "120.930458,31.960779",
  //     "120.9272,31.964581",
  //     // "120.931114,31.963104",
  //     // "120.930153,31.966724",
  //     // "120.93325,31.968752",
  //     "120.928429,31.974108",
  //   ];
  //   const culture = [
  //     "120.934471,31.96829",
  //     "120.93425,31.969204",
  //     "120.935417,31.971006",
  //     "120.937164,31.971785",
  //     "120.938301,31.973408",
  //     "120.942001,31.973251",
  //     "120.942223,31.966845",
  //     "120.939278,31.966845",
  //     "120.938606,31.96591",
  //     "120.938385,31.965214",
  //     "120.936424,31.965298",
  //     "120.936157,31.966171",
  //     "120.935631,31.967316",
  //   ];
  //   const scenery = [
  //     "120.929764,31.954504",
  //     "120.926964,31.956734",
  //     "120.927048,31.960075",
  //     "120.929924,31.96154",
  //     "120.928818,31.965836",
  //     "120.932869,31.968952",
  //     "120.93335,31.9793",
  //     "120.932602,31.989143",
  //     "120.933189,31.993368",
  //     "120.940437,31.99309",
  //     "120.939095,31.985334",
  //     "120.937462,31.973734",
  //     "120.93428,31.969332",
  //     "120.936218,31.966063",
  //     "120.934807,31.960941",
  //     "120.938126,31.958857",
  //     "120.934677,31.954212",
  //   ];
  //   const hospital = [
  //     "120.919899,31.980049",
  //     "120.933289,31.979719",
  //     "120.933006,31.981136",
  //     "120.933403,31.983305",
  //     "120.934143,31.984299",
  //     "120.934517,31.985344",
  //     "120.920479,31.985102",
  //   ];
  //   const hui = [
  //     "120.930855,31.971148",
  //     "120.9319,31.973211",
  //     "120.928375,31.973312",
  //     "120.927963,31.972141",
  //     "120.927902,31.966089",
  //     "120.928459,31.965759",
  //     "120.929138,31.965876",
  //     "120.930069,31.967026",
  //     "120.93026,31.96801",
  //     "120.933044,31.969105",
  //     "120.932938,31.970999",
  //   ];
  //   // const life = [
  //   //   "120.920441,31.985086",
  //   //   "120.930275,31.985313",
  //   //   "120.931732,31.993353",
  //   //   "120.939049,31.993153",
  //   //   "120.942375,32.009937",
  //   //   "120.924835,32.012718",
  //   // ];
  //   // const businessTop = [
  //   //   "120.942406,32.009922",
  //   //   "120.939232,31.993143",
  //   //   "120.938629,31.989111",
  //   //   "120.939308,31.988028",
  //   //   "120.938431,31.986984",
  //   //   "120.937958,31.986189",
  //   //   "120.937897,31.985331",
  //   //   "120.94194,31.985363",
  //   //   "120.942276,31.993029",
  //   //   "120.94725,31.992901",
  //   //   "120.948097,32.000797",
  //   //   "120.948563,32.00423",
  //   //   "120.948601,32.007107",
  //   //   "120.948372,32.008991",
  //   // ];
  //   // const businessBottom = [
  //   //   "120.93824,31.985332",
  //   //   "120.93821,31.979523",
  //   //   "120.941696,31.979397",
  //   //   "120.941925,31.985359",
  //   // ];
  //   const lifeRight = [
  //     "120.942986,31.961546",
  //     "120.943451,31.950365",
  //     "120.94886,31.950151",
  //     "120.948898,31.961292",
  //     "120.948761,31.964417",
  //     "120.947166,31.966381",
  //     "120.946808,31.961378",
  //   ];
  //   if (range.includes(1)) {
  //     this.$rd.addRange({
  //       id: "home_kc_range",
  //       color: "3C71FF",
  //       points: coturn.map((p) => ({ coord: p })),
  //     });
  //   }
  //   if (range.includes(2)) {
  //     this.$rd.addRange({
  //       id: "home_wc_range",
  //       color: "8B0000",
  //       points: culture.map((p) => ({ coord: p })),
  //     });
  //     this.$rd.addRange({
  //       id: "home_hz_range",
  //       color: "8B0000",
  //       points: hui.map((p) => ({ coord: p })),
  //     });
  //   }
  //   if (range.includes(3)) {
  //     this.$rd.addRange({
  //       id: "home_sl_range",
  //       color: "1FCA1A",
  //       points: scenery.map((p) => ({ coord: p })),
  //     });
  //   }
  //   if (range.includes(4)) {
  //     this.$rd.addRange({
  //       id: "home_sh_range",
  //       color: "A46CEF",
  //       points: hospital.map((p) => ({ coord: p })),
  //     });
  //     // this.addHomeHostipal();
  //   }
  //   if (range.includes(5)) {
  //     this.$rd.addRange({
  //       id: "home_sw_range",
  //       color: "F9A901",
  //       points: lifeRight.map((p) => ({ coord: p })),
  //     });
  //     // this.addHomeTrade();
  //   }

  //   // this.$rd.addRange({
  //   //   id: "hl_4",
  //   //   color: "CA1A1A",
  //   //   points: lifeRight.map((p) => ({ coord: p })),
  //   // });
  //   // this.$rd.addRange({
  //   //   id: "hl_5",
  //   //   color: "32CD32",
  //   //   points: businessTop.map((p) => ({ coord: p })),
  //   // });
  //   const poiText = [
  //     "科创中心",
  //     "文创中心",
  //     "会展中心",
  //     "中央森林景观",
  //     "医学中心",
  //     "商务中心",
  //   ];
  //   const poiImage = ["kc", "wz", "wz", "sl", "hostipal", "trade"];
  //   const keys = ["kc", "wc", "hz", "sl", "sh", "sw"];
  //   const points = [
  //     "120.923431,31.964237",
  //     "120.938812,31.969082",
  //     "120.929871,31.969757",
  //     "120.935028,31.972828",
  //     "120.926689,31.98246",
  //     "120.946098,31.955177",
  //   ].map((pot, p) => ({
  //     id: `home_${keys[p]}`,
  //     text: poiText[p],
  //     coord: pot,
  //     img: `${url}/home-${poiImage[p]}.png`,
  //     imgActive: `${url}/home-${poiImage[p]}-active.png`,
  //   }));
  //   this.setPOI(points, {
  //     coord_z: 80,
  //     always_show_label: true,
  //     hasWindow: true,
  //   });
  // }
  // // 漫游范围覆盖物
  // travelRange() {
  //   this.travelFun();
  //   this.travalTimer = setInterval(this.travelFun.bind(this), 33000);
  // }
  // // 清除定时器
  // clearTimer(isHome) {
  //   clearInterval(this.travalTimer);
  //   this.travelIndex = 0;
  //   if (isHome) {
  //     this.$rd.resetCamera();
  //     this.travelList.forEach((id, i) => {
  //       this.$rd.showHideCovering(id, "range", true);
  //       this.$rd.showHideCovering(`home_scene_${i + 1}`, "scene_effect", true);
  //     });
  //   }
  // }
  // travelFun() {
  //   if (this.travelIndex > 4) {
  //     this.travelIndex = 0;
  //   }
  //   this.travelList.forEach((id, i) => {
  //     this.$rd.showHideCovering(id, "range", i == this.travelIndex);
  //     this.$rd.showHideCovering(
  //       `home_scene_${i + 1}`,
  //       "scene_effect",
  //       i == this.travelIndex
  //     );
  //   });

  //   if (this.travelIndex == 2) {
  //     this.$rd.focusCovering(this.travelList[this.travelIndex], "range", 800);
  //   } else {
  //     this.$rd.focusCovering(this.travelList[this.travelIndex], "range", 500);
  //   }

  //   setTimeout(() => {
  //     this.$rd.setCameraRotate();
  //     this.travelIndex++;
  //   }, 3500);
  // }
  // 添加车辆poi
  // addCar() {
  //   const list = [
  //     "120.926315,31.965492",
  //     "120.92688,31.967287",
  //     "120.924057,31.969461",
  //     "120.924736,31.968634",
  //     "120.924583,31.967304",
  //   ].map((point, p) => ({
  //     id: `kc_car_${p + 1}`,
  //     text: `P${p + 1}停车场`,
  //     coord: point,
  //     img: `${url}/car.png`,
  //     imgActive: `${url}/car-active.png`,
  //   }));
  //   this.setPOI(list);
  // }
  // addCamera() {
  //   const list = [
  //     "120.926315,31.965492",
  //     "120.92453,31.966677",
  //     "120.92453,31.966677",
  //     "120.924225,31.965611",
  //     "120.92688,31.967287",
  //     "120.926804,31.968071",
  //     "120.923599,31.967402",
  //     "120.923706,31.968115",
  //     "120.923843,31.968857",
  //     "120.924057,31.969461",
  //     "120.924973,31.969532",
  //     "120.924736,31.968634",
  //     "120.92469,31.967995",
  //     "120.924583,31.967304",
  //     "120.926849,31.969381",
  //     "120.926674,31.966055",
  //   ].map((point, p) => ({
  //     id: `kc_camera_${p + 1}`,
  //     text: `${p + 1}号楼监控`,
  //     coord: point,
  //     img: `${url}/camera.png`,
  //     imgActive: `${url}/camera-active.png`,
  //   }));
  //   this.setPOI(list);
  // }
  // // 添加能耗
  // addEnergy() {
  //   const list = [
  //     "120.92453,31.966677",
  //     "120.924225,31.965611",
  //     "120.924736,31.968634",
  //     "120.92469,31.967995",
  //     "120.926674,31.966055",
  //   ].map((point, p) => ({
  //     id: `kc_energy_${p + 1}`,
  //     text: `能耗NO${p + 1}`,
  //     coord: point,
  //     img: `${url}/energy.png`,
  //     imgActive: `${url}/energy-active.png`,
  //   }));
  //   this.setPOI(list);
  // }
  // // 添加招商
  // addBusiness() {
  //   const list = [
  //     "120.926315,31.965492",
  //     "120.92453,31.966677",
  //     "120.92453,31.966677",
  //     "120.924225,31.965611",
  //     "120.92688,31.967287",
  //     "120.926804,31.968071",
  //     "120.923599,31.967402",
  //     "120.923706,31.968115",
  //     "120.923843,31.968857",
  //     "120.924057,31.969461",
  //     "120.924973,31.969532",
  //     "120.924736,31.968634",
  //     "120.92469,31.967995",
  //     "120.924583,31.967304",
  //     "120.926849,31.969381",
  //     "120.926674,31.966055",
  //   ].map((point, p) => ({
  //     id: `kc_business_${p + 1}`,
  //     text: `招商NO${p + 1}`,
  //     coord: point,
  //     img: `${url}/business.png`,
  //     imgActive: `${url}/business-active.png`,
  //   }));
  //   this.setPOI(list);
  // }
  // // 添加高亮区域
  // addHighlight() {
  //   const points = [
  //     "120.919296,31.974005",
  //     "120.917229,31.954969",
  //     "120.925545,31.9548",
  //     "120.926865,31.95463",
  //     "120.929848,31.953341",
  //     "120.929749,31.955467",
  //     "120.927284,31.957846",
  //     "120.927864,31.960388",
  //     "120.930458,31.960779",
  //     "120.9272,31.964581",
  //     "120.928429,31.974108",
  //   ].map((p) => ({
  //     coord: p,
  //   }));
  //   this.$rd.addHighlightArea(points);
  // }
  // 文展中心进入效果
  // addMineCulture() {
  //   const culture = [
  //     "120.934471,31.96829",
  //     "120.93425,31.969204",
  //     "120.935417,31.971006",
  //     "120.937164,31.971785",
  //     "120.938301,31.973408",
  //     "120.942001,31.973251",
  //     "120.942223,31.966845",
  //     "120.939278,31.966845",
  //     "120.938606,31.96591",
  //     "120.938385,31.965214",
  //     "120.936424,31.965298",
  //     "120.936157,31.966171",
  //     "120.935631,31.967316",
  //   ];
  //   const hui = [
  //     "120.930855,31.971148",
  //     "120.9319,31.973211",
  //     "120.928375,31.973312",
  //     "120.927963,31.972141",
  //     "120.927902,31.966089",
  //     "120.928459,31.965759",
  //     "120.929138,31.965876",
  //     "120.930069,31.967026",
  //     "120.93026,31.96801",
  //     "120.933044,31.969105",
  //     "120.932938,31.970999",
  //   ];
  //   this.$rd.addRange({
  //     id: "mineculture_1_range",
  //     color: "8B0000",
  //     points: culture.map((p) => ({ coord: p })),
  //     type: "stripe",
  //     range_height: 80,
  //   });
  //   this.$rd.addRange({
  //     id: "mineculture_2_range",
  //     color: "8B0000",
  //     points: hui.map((p) => ({ coord: p })),
  //     type: "stripe",
  //     range_height: 80,
  //   });
  //   const poiText = ["文创中心", "会展中心"];
  //   const keys = ["wc", "hz"];
  //   const points = ["120.938812,31.969082", "120.929871,31.969757"].map(
  //     (pot, p) => ({
  //       id: `home_${keys[p]}`,
  //       text: poiText[p],
  //       coord: pot,
  //       img: `${url}/home-wz.png`,
  //       imgActive: `${url}/home-wz-active.png`,
  //     })
  //   );
  //   this.setPOI(points, {
  //     coord_z: 80,
  //     always_show_label: true,
  //     hasWindow: true,
  //   });
  // }
  // // 中央森林景观进入效果
  // addMineScene() {
  //   const scenery = [
  //     "120.929764,31.954504",
  //     "120.926964,31.956734",
  //     "120.927048,31.960075",
  //     "120.929924,31.96154",
  //     "120.928818,31.965836",
  //     "120.932869,31.968952",
  //     "120.93335,31.9793",
  //     "120.932602,31.989143",
  //     "120.933189,31.993368",
  //     "120.940437,31.99309",
  //     "120.939095,31.985334",
  //     "120.937462,31.973734",
  //     "120.93428,31.969332",
  //     "120.936218,31.966063",
  //     "120.934807,31.960941",
  //     "120.938126,31.958857",
  //     "120.934677,31.954212",
  //   ];
  //   this.$rd.addRange({
  //     id: `minescenery_range`,
  //     color: "33B449",
  //     points: scenery.map((p) => ({ coord: p })),
  //     range_height: 80,
  //     type: "box_wave",
  //   });
  //   const pois = ["120.935028,31.972828"].map((point) => ({
  //     id: `home_sl`,
  //     text: "中央森林景观",
  //     coord: point,
  //     img: `${url}/home-sl.png`,
  //     imgActive: `${url}/home-sl-active.png`,
  //   }));
  //   this.setPOI(pois, {
  //     coord_z: 80,
  //     always_show_label: true,
  //     hasWindow: true,
  //   });
  // }
  // // 医疗中心进入效果
  // addMineHospital() {
  //   const hospital = [
  //     "120.919899,31.980049",
  //     "120.933289,31.979719",
  //     "120.933006,31.981136",
  //     "120.933403,31.983305",
  //     "120.934143,31.984299",
  //     "120.934517,31.985344",
  //     "120.920479,31.985102",
  //   ];
  //   this.$rd.addRange({
  //     id: `minehospital_sh_range`,
  //     color: "33B449",
  //     points: hospital.map((p) => ({ coord: p })),
  //     range_height: 150,
  //     stroke_weight: 50,
  //     type: "grid",
  //   });
  //   const pois = ["120.926689,31.98246"].map((point) => ({
  //     id: `home_sh`,
  //     text: "上海交通大学医学院附属仁济南通医院",
  //     coord: point,
  //     img: `${url}/home-hostipal.png`,
  //     imgActive: `${url}/home-hostipal-active.png`,
  //     bgSize: "320,30",
  //   }));
  //   this.setPOI(pois, {
  //     coord_z: 80,
  //     always_show_label: true,
  //     hasWindow: true,
  //   });
  // }
  // // 首页医院
  // addHomeHostipal(prefix = "home") {
  //   // const sh = [
  //   //   "120.942039,31.966999",
  //   //   "120.941849,31.972486",
  //   //   "120.937935,31.972507",
  //   //   "120.937943,31.970758",
  //   //   "120.938095,31.970242",
  //   //   "120.938652,31.969612",
  //   //   "120.939079,31.968378",
  //   //   "120.939186,31.967104",
  //   // ];
  //   const sh = [
  //     "120.919899,31.980049",
  //     "120.933289,31.979719",
  //     "120.933006,31.981136",
  //     "120.933403,31.983305",
  //     "120.934143,31.984299",
  //     "120.934517,31.985344",
  //     "120.920479,31.985102",
  //   ];
  //   const rc = [
  //     "120.908821,31.942802",
  //     "120.908325,31.941734",
  //     "120.907379,31.940077",
  //     "120.903778,31.941744",
  //     "120.905533,31.944803",
  //     "120.906937,31.944376",
  //     "120.908485,31.944014",
  //   ];
  //   const fy = [
  //     "120.901184,31.982832",
  //     "120.90448,31.983212",
  //     "120.904129,31.981134",
  //     "120.901642,31.980852",
  //   ];
  //   const labels = [
  //     "上海交通大学医学院附属仁济南通医院",
  //     "南通瑞慈医院",
  //     "南通市妇幼保健院",
  //   ];
  //   const bgSizes = ["320,30", "130,30", "160,30"];
  //   const keys = ["sh", "rc", "fy"];
  //   const pois = [
  //     "120.926689,31.98246",
  //     "120.906448,31.942816",
  //     "120.902412,31.981983",
  //   ].map((point, p) => ({
  //     id: `${prefix}_${keys[p]}`,
  //     text: labels[p],
  //     coord: point,
  //     img: `${url}/home-hostipal.png`,
  //     imgActive: `${url}/home-hostipal-active.png`,
  //     bgSize: bgSizes[p],
  //   }));
  //   setTimeout(() => {
  //     this.$rd.addRange({
  //       id: `${prefix}_sh_range`,
  //       color: "33B449",
  //       points: sh.map((p) => ({ coord: p })),
  //     });
  //     this.$rd.addRange({
  //       id: `${prefix}_rc_range`,
  //       color: "33B449",
  //       points: rc.map((p) => ({ coord: p })),
  //     });
  //     this.$rd.addRange({
  //       id: `${prefix}_fy_range`,
  //       color: "33B449",
  //       points: fy.map((p) => ({ coord: p })),
  //     });
  //     this.setPOI(pois, { coord_z: 80, always_show_label: true });
  //     // this.$rd.focusAllCovering();
  //   }, 500);
  // }

  // // 首页教育学校
  // addHomeSchool() {
  //   const s1 = [
  //     "120.923828,31.989824",
  //     "120.923241,31.985369",
  //     "120.926102,31.98546",
  //     "120.926811,31.989435",
  //   ];
  //   const s2 = [
  //     "120.922325,31.954758",
  //     "120.922104,31.952564",
  //     "120.923859,31.952591",
  //     "120.923866,31.953356",
  //     "120.925438,31.953337",
  //     "120.925453,31.954781",
  //   ];
  //   const s3 = [
  //     "120.949188,31.960857",
  //     "120.949081,31.958891",
  //     "120.952431,31.958168",
  //     "120.953575,31.958252",
  //     "120.954407,31.958138",
  //     "120.954346,31.960928",
  //   ];
  //   const labels = [
  //     "南通市紫琅第一小学",
  //     "南通中学附属实验学校",
  //     "紫琅湖实验学校",
  //   ];
  //   const bgSizes = ["180,30", "190,30", "140,30"];
  //   const pois = [
  //     "120.924965,31.988644",
  //     "120.923439,31.95392",
  //     "120.95137,31.959618",
  //   ].map((point, p) => ({
  //     id: `home_s${p + 1}`,
  //     text: labels[p],
  //     coord: point,
  //     img: `${url}/home-school.png`,
  //     imgActive: `${url}/home-school-active.png`,
  //     bgSize: bgSizes[p],
  //   }));
  //   setTimeout(() => {
  //     this.$rd.addRange({
  //       id: "home_s1_range",
  //       color: "33B449",
  //       points: s1.map((p) => ({ coord: p })),
  //     });
  //     this.$rd.addRange({
  //       id: "home_s2_range",
  //       color: "33B449",
  //       points: s2.map((p) => ({ coord: p })),
  //     });
  //     this.$rd.addRange({
  //       id: "home_s3_range",
  //       color: "33B449",
  //       points: s3.map((p) => ({ coord: p })),
  //     });
  //     this.setPOI(pois, { coord_z: 80, always_show_label: true });
  //     // this.$rd.focusAllCovering();
  //   }, 500);
  // }

  // // 首页商业
  // addHomeTrade(prefix = "home") {
  //   const s1 = [
  //     "120.917831,31.958809",
  //     "120.917542,31.956688",
  //     "120.922409,31.956579",
  //     "120.922829,31.958624",
  //   ];
  //   const zArr = [80, 0];

  //   const labels = ["南通红星家居广场", "南通金鹰世界"];
  //   const bgSizes = ["180,30", "140,30"];
  //   const pois = ["120.919762,31.957441", "120.942467,31.96999"].map(
  //     (point, p) => ({
  //       id: `${prefix}_trade${p + 1}`,
  //       text: labels[p],
  //       coord: point,
  //       img: `${url}/home-trade.png`,
  //       imgActive: `${url}/home-trade-active.png`,
  //       bgSize: bgSizes[p],
  //       coord_z: zArr[p],
  //     })
  //   );
  //   setTimeout(() => {
  //     this.$rd.addRange({
  //       id: `${prefix}_trade1_range`,
  //       color: "33B449",
  //       points: s1.map((p) => ({ coord: p })),
  //     });
  //     this.setPOI(pois, { always_show_label: true });
  //     // this.$rd.focusAllCovering();
  //   }, 500);
  // }

  resetHomeCamera() {
    this.$rd.setCameraInfo({
      center_coord: "120.935223,31.961201", //中心点的坐标 lng,lat
      arm_distance: 1999.99939, //镜头距中心点距离(单位:米)
      pitch: 34.928375, //镜头俯仰角(5~89)
      yaw: 8.19281, //镜头偏航角(0正北, 0~359)
    });
  }
}
