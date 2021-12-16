<template>
  <div class="wrap">
    <v-header></v-header>
    <transition
      appear
      appear-active-class="animate__animated animate__fadeInLeftBig"
      mode="out-in"
      name="left-transition"
      enter-active-class="animate__animated animate__fadeInLeftBig"
      leave-active-class="animate__animated animate__fadeOutLeftBig"
    >
      <component :is="currentLeftComponent"></component>
    </transition>
    <transition
      appear
      appear-active-class="animate__animated animate__fadeInRightBig"
      mode="out-in"
      name="right-transition"
      :enter-active-class="
        noRightComponent
          ? 'animate__animated animate__fadeInRightBig animate__delay-1'
          : 'animate__animated animate__fadeInRightBig'
      "
      leave-active-class="animate__animated animate__fadeOutRightBig"
    >
      <component :is="currentRightComponent"></component>
    </transition>
    <div
      :class="['wrap-footer', { 'wrap-footer-home': thirdNav.length === 0 }]"
    >
      <p v-if="thirdNav.length === 0">南通·创新区智慧综合管理平台</p>
      <ul class="second-nav" v-else>
        <li
          @click="clickThirdNav(t)"
          :class="{ active: thirdNavIndex === t }"
          v-for="(txt, t) in thirdNav"
          :key="t"
        >
          {{ txt }}
        </li>
      </ul>
    </div>
    <ul
      :class="['third-nav', { home: thirdNav.length === 0 }]"
      v-if="secondNav && secondNav.length > 0"
    >
      <li @click="clickSecondNav(c)" v-for="(cont, c) in secondNav" :key="c">
        <div :class="['third-nav-img', { active: secondNavIndex === c }]">
          <i :class="['iconfont', secondIcons[c]]"></i>
        </div>
        <p>{{ cont }}</p>
      </li>
    </ul>
    <!--天气-->
    <div class="select-cont" v-show="showSelect">
      <p class="select-cont-header"></p>
      <div class="select-cont-middle">
        <p class="title">选择时间</p>
        <ul class="select-cont-item">
          <li
            @click="selectWeatherTime('time', i)"
            :class="{ active: i === timeIndex }"
            v-for="(item, i) in time"
            :key="i"
          >
            <i :class="['iconfont', `icon-${timeIcon[i]}`]"></i>
            <p>{{ item }}</p>
          </li>
        </ul>
        <p class="title">选择天气</p>
        <ul class="select-cont-item">
          <li
            @click="selectWeatherTime('weather', o)"
            :class="{ active: o === weatherIndex }"
            v-for="(obj, o) in weathers"
            :key="o"
          >
            <i :class="['iconfont', `icon-${weatherIcon[o]}`]"></i>
            <p>{{ obj }}</p>
          </li>
        </ul>
      </div>
    </div>

    <ul class="forth-nav" v-if="forthNav && forthNav.length > 0">
      <li
        :class="{ active: forthNavIndex === f }"
        v-for="(four, f) in forthNav"
        :key="f"
        @click="clickForthNav(f)"
      >
        <p :class="['forth-nav-icon', { active: forthNavIndex === f }]">
          <i :class="['iconfont', `icon-${four.icon}`]"></i>
        </p>
        <span>{{ four.name }}</span>
      </li>
    </ul>
    <!-- <i
      title="场景全览"
      :class="['travel el-icon-s-fold', { active: lastCompIcon }]"
      @click="seeAll"
    ></i> -->
    <!-- <i
      v-show="navbarIndex == 0"
      title="漫游"
      @click="toTravel"
      :class="['travel el-icon-s-promotion right', { active: isTravel }]"
    ></i> -->
    <!-- <i
      title="覆盖物展示/隐藏"
      :class="['travel el-icon-s-fold']"
      @click="showHide"
    ></i> -->
    <!-- <div class="wrap-bg" v-if="currentLeftComponent === 'manage-car-left'">
      <ul class="icon-list" v-show="show1">
        <li
          :style="{ left: item.left + '%', top: item.top + '%' }"
          v-for="(item, i) in icon1"
          :key="i"
        >
          <p>{{ item.name }}</p>
          <img src="@img/car-icon1.png" />
        </li>
      </ul>
      <ul class="icon-list" v-show="show2">
        <li
          :style="{ left: item.left + '%', top: item.top + '%' }"
          v-for="(item, i) in icon2"
          :key="i"
        >
          <p>{{ item.name }}</p>
          <img src="@img/car-icon2.png" />
        </li>
      </ul>
      <ul class="icon-list" v-show="show3">
        <li
          :style="{ left: item.left + '%', top: item.top + '%' }"
          v-for="(item, i) in icon3"
          :key="i"
        >
          <p>{{ item.name }}</p>
          <img src="@img/car-icon3.png" />
        </li>
      </ul>
      <ul class="icon-list" v-show="show4">
        <li
          :style="{ left: item.left + '%', top: item.top + '%' }"
          v-for="(item, i) in icon4"
          :key="i"
        >
          <p>{{ item.name }}</p>
          <img src="@img/car-icon4.png" />
        </li>
      </ul>
      <ul class="icon-select">
        <li @click="show1 = !show1" :class="{ active: show1 }">
          <img src="~@img/car4.png" />
          <p v-show="show1">国际机场</p>
        </li>
        <li @click="show2 = !show2" :class="{ active: show2 }">
          <img src="~@img/car5.png" />
          <p v-show="show2">港口码头</p>
        </li>
        <li @click="show3 = !show3" :class="{ active: show3 }">
          <img src="~@img/car6.png" />
          <p v-show="show3">高速铁路</p>
        </li>
        <li @click="show4 = !show4" :class="{ active: show4 }">
          <img src="~@img/car7.png" />
          <p v-show="show4">过江通道</p>
        </li>
      </ul>
    </div> -->
    <div class="wrap-attract-bg1" v-if="bgState === 'attract-left'"></div>
    <div class="wrap-attract-bg2" v-if="bgState === 'attract-right'"></div>
  </div>
</template>

<script>
import HomeLeft from "@v/HomeLeft";
import HomeRight from "@v/HomeRight";
import { mapState, mapMutations } from "vuex";
import { handlerComp } from "@u/common";
export default {
  components: {
    HomeLeft,
    HomeRight,
    BusinessLeft: () => import("@v/BusinessLeft"),
    BusinessRight: () => import("@v/BusinessRight"),
    BusinessRightDetail: () => import("@v/BusinessRightDetail"),
    // BusinessZbDetail: () => import("@v/BusinessZbDetail"),
    // BusinessShDetail: () => import("@v/BusinessShDetail"),
    BusinessAreaLeft: () => import("@v/BusinessAreaLeft"),
    BusinessAreaRight: () => import("@v/BusinessAreaRight"),
    MsDetail: () => import("@v/MsDetail"),
    JyDetail: () => import("@v/JyDetail"),
    ZlOneDetail: () => import("@v/ZlOneDetail"),
    ZlTwoDetail: () => import("@v/ZlTwoDetail"),
    AreaDetail: () => import("@v/AreaDetail"),
    BusinessAddressLeft: () => import("@v/BusinessAddressLeft"),
    BusinessAddressRight: () => import("@v/BusinessAddressRight"),
    PolicyLeft: () => import("@v/PolicyLeft"),
    PolicyRight: () => import("@v/PolicyRight"),
    ManageHospitalLeft: () => import("@v/ManageHospitalLeft"),
    ManageHospitalRight: () => import("@v/ManageHospitalRight"),
    ManageHospitalDetail: () => import("@v/ManageHospitalDetail"),
    ManagePmLeft: () => import("@v/ManagePmLeft"),
    ManagePmRight: () => import("@v/ManagePmRight"),
    ManageShopLeft: () => import("@v/ManageShopLeft"),
    ManageShopRight: () => import("@v/ManageShopRight"),
    // ManageShopDetail: () => import("@v/ManageShopDetail"),
    ManageEducateLeft: () => import("@v/ManageEducateLeft"),
    ManageEducateRight: () => import("@v/ManageEducateRight"),
    ManageEducateDetail: () => import("@v/ManageEducateDetail"),
    // ManageLeft: () => import("@v/ManageLeft"),
    AttractRight: () => import("@v/AttractRight"),
    ManageCarLeft: () => import("@v/ManageCarLeft"),
    ManageCarRight: () => import("@v/ManageCarRight"),
    // FuShuDetail: () => import("@v/FuShuDetail"),
    BusinessForestDetail: () => import("@v/BusinessForestDetail"),
    ManagePmDetail: () => import("@v/ManagePmDetail"),
    ZlPerDetail: () => import("@v/ZlPerDetail"),
    ShowDetail: () => import("@v/ShowDetail"),
    MettingDetail: () => import("@v/MettingDetail"),
    HotelDetail: () => import("@v/HotelDetail"),
    ZlAddress: () => import("@v/ZlAddress"),
    AttractLeft: () => import("@s/AttractLeft"),
    BgState: () => import("@s/BgState"),
    CardLeft: () => import("@s/CardLeft"),
    CardRight: () => import("@s/CardRight"),
    MatingLeft: () => import("@s/MatingLeft"),
    MatingRight: () => import("@s/MatingRight"),
    TrafficLeft: () => import("@s/TrafficLeft"),
    TrafficRight: () => import("@s/TrafficRight"),
    CultureTravelLeft: () => import("@s/CultureTravelLeft"),
    CultureTravelRight: () => import("@s/CultureTravelRight"),
    EpidemicLeft: () => import("@s/EpidemicLeft"),
    EpidemicRight: () => import("@s/EpidemicRight"),
    DoorLeft: () => import("@s/DoorLeft"),
    DoorRight: () => import("@s/DoorRight"),
    // CoturnLeft: () => import("@/views/wrap-comp/CoturnLeft"),
    // CoturnRight: () => import("@/views/wrap-comp/CoturnRight"),
    CoturnVideoLeft: () => import("@/views/wrap-comp/CoturnVideoLeft"),
    CoturnVideoRight: () => import("@/views/wrap-comp/CoturnVideoRight"),
    CoturnCarLeft: () => import("@/views/wrap-comp/CoturnCarLeft"),
    CoturnCarRight: () => import("@/views/wrap-comp/CoturnCarRight"),
    CoturnEnergyLeft: () => import("@/views/wrap-comp/CoturnEnergyLeft"),
    CoturnEnergyRight: () => import("@/views/wrap-comp/CoturnEnergyRight"),
    CoturnBusinessLeft: () => import("@/views/wrap-comp/CoturnBusinessLeft"),
    CoturnBusinessRight: () => import("@/views/wrap-comp/CoturnBusinessRight"),
    // BusinessJyLeft: () => import("@/views/wrap-comp/BusinessJyLeft"),
    // BusinessJyRight: () => import("@/views/wrap-comp/BusinessJyRight"),
    // MedicineLeft: () => import("@/views/wrap-comp/MedicineLeft"),
    // MedicineRight: () => import("@/views/wrap-comp/MedicineRight"),
    // CultureMsLeft: () => import("@/views/wrap-comp/CultureMsLeft"),
    // CultureMsRight: () => import("@/views/wrap-comp/CultureMsRight"),
    // ForestLeft: () => import("@/views/wrap-comp/ForestLeft"),
    // ForestRight: () => import("@/views/wrap-comp/ForestRight"),
    // HomeRoadLeft: () => import("@/views/wrap-comp/HomeRoadLeft"),
    // HomeRoadRight: () => import("@/views/wrap-comp/HomeRoadRight"),
  },
  data() {
    return {
      time: ["早晨", "正午", "下午", "傍晚", "夜间"],
      timeIcon: ["zaochen", "qingtian", "qingtian", "bangwan", "yejian"],
      weathers: ["晴朗", "下雨", "多云", "下雪"],
      weatherIcon: ["qingtian", "xiayu", "duoyun", "xiaxue"],
      // show1: true,
      // show2: true,
      // show3: true,
      // show4: true,
      // icon1: [
      //   {
      //     name: "兴东国际机场",
      //     left: 55,
      //     top: 40,
      //   },
      //   {
      //     name: "南通新机场",
      //     left: 58,
      //     top: 48,
      //   },
      // ],
      // icon2: [
      //   {
      //     name: "洋口港",
      //     left: 59.5,
      //     top: 16,
      //   },
      //   {
      //     name: "通州湾",
      //     left: 64,
      //     top: 30,
      //   },
      //   {
      //     name: "海门港",
      //     left: 66,
      //     top: 34,
      //   },
      //   {
      //     name: "吕四港",
      //     left: 72,
      //     top: 39,
      //   },
      //   {
      //     name: "南通港",
      //     left: 50,
      //     top: 41,
      //   },
      // ],
      // icon3: [
      //   {
      //     name: "北沿江高速铁路",
      //     left: 30,
      //     top: 20,
      //   },
      //   {
      //     name: "盐通高速铁路",
      //     left: 40,
      //     top: 11,
      //   },
      //   {
      //     name: "苏通嘉甬高速铁路",
      //     left: 41.5,
      //     top: 63,
      //   },
      // ],
      // icon4: [
      //   {
      //     name: "张皋过江通道",
      //     left: 40,
      //     top: 37,
      //   },
      //   {
      //     name: "沪通长江大桥",
      //     left: 45,
      //     top: 41,
      //   },
      //   {
      //     name: "苏通长江公路大桥",
      //     left: 50,
      //     top: 55,
      //   },
      //   {
      //     name: "北沿江铁路通道",
      //     left: 54,
      //     top: 58,
      //   },
      //   {
      //     name: "海太过江通道",
      //     left: 60,
      //     top: 58,
      //   },
      //   {
      //     name: "苏通第二过江通道",
      //     left: 64,
      //     top: 50,
      //   },
      //   {
      //     name: "崇启大桥",
      //     left: 70,
      //     top: 55,
      //   },
      //   {
      //     name: "崇海通道",
      //     left: 75,
      //     top: 60,
      //   },
      // ],
    };
  },
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      "currentLeftComponent",
      "currentRightComponent",
      "noRightComponent",
      "secondNav",
      "secondNavIndex",
      "navbarIndex",
      "thirdNav",
      "thirdNavIndex",
      "secondIcons",
      "forthNav",
      "forthNavIndex",
      // "lastCurrentLeftComponent", // 左边的组件
      // "lastCurrentRightComponent", // 右边的组件
      // "lastCompIcon",
      "renderOver",
      // "isTravel",
      "pages",
      "showSelect",
      "timeIndex",
      "weatherIndex",
      "bgState",
    ]),
  },
  mounted() {},
  watch: {
    navbarIndex: {
      handler: function (i) {
        if (i === 0 || i === 1) {
          this.set_value({
            key: "thirdNav",
            val: [],
          });
        } else {
          this.getThirdNav(0);
        }
      },
      immediate: true,
    },
    secondNavIndex: {
      handler: function (i) {
        this.getThirdNav(i);
        this.getForthNav();
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(["set_value"]),
    // 点击选择天气或者时间
    selectWeatherTime(types, index) {
      if (types === "time") {
        const apiTime = ["8:00", "12:00", "15:00", "17:00", "23:00"];
        this.set_value({ key: "timeIndex", val: index });
        this.$render.setEnvTime(apiTime[index]);
      } else {
        const apiWeather = ["Sunny", "HeavyRain", "Overcast", "HeavySnow"];
        this.set_value({ key: "weatherIndex", val: index });
        this.$render.setEnvWeather(apiWeather[index]);
      }
    },
    // 二级导航点击
    clickSecondNav(i) {
      this.set_value({ key: "secondNavIndex", val: i });
      this.$render.removeAllCovering(["poi", "range"]);
      handlerComp();
      // this.clickThirdNav(0);
      // handlerThirdNav();
    },
    // 获取三级导航
    getThirdNav(i) {
      const navbarIndex = this.navbarIndex;
      if (navbarIndex == 2) {
        const list = [["紫琅科技城一期", "紫琅科技城二期"], [], [], [], []];
        this.set_value({
          key: "thirdNav",
          val: list[i],
        });
        this.clickThirdNav(0);
      }
    },
    getForthNav() {
      this.set_value({ key: "forthNavIndex", val: 0 });
      const navbarIndex = this.navbarIndex;
      const secondNavIndex = this.secondNavIndex;
      const thirdNavIndex = this.thirdNavIndex;
      if (navbarIndex == 2) {
        if (secondNavIndex == 0 && thirdNavIndex === 0) {
          const list = [
            { name: "概况", icon: "news" },
            { name: "物管", icon: "City" },
            { name: "门禁", icon: "menjin" },
            { name: "车辆", icon: "car" },
            { name: "监控", icon: "monitor" },
            { name: "能耗", icon: "energy" },
          ];
          this.set_value({ key: "forthNav", val: list });
        } else if (secondNavIndex == 1) {
          const list = [
            { name: "道卡", icon: "news" },
            { name: "事件", icon: "City" },
            { name: "警察", icon: "menjin" },
            { name: "警车", icon: "car" },
            { name: "监控", icon: "monitor" },
          ];
          this.set_value({ key: "forthNav", val: list });
        } else {
          this.set_value({ key: "forthNav", val: [] });
        }
      } else {
        this.set_value({ key: "forthNav", val: [] });
      }
      handlerComp();
    },
    // 三级导航点击
    clickThirdNav(i) {
      this.set_value({ key: "thirdNavIndex", val: i });
      this.getForthNav();
    },
    clickForthNav(i) {
      this.set_value({ key: "forthNavIndex", val: i });
      handlerComp();
    },
    // toTravel() {
    //   if (!this.renderOver) {
    //     this.$message({ type: "warning", message: "请等待场景渲染结束！" });
    //     return;
    //   }
    //   this.set_value({ key: "isTravel", val: !this.isTravel });
    //   if (this.isTravel) {
    //     this.$handler.travelRange();
    //   } else {
    //     this.$handler.clearTimer(true);
    //   }
    // },
    // 全览
    // seeAll() {
    //   this.set_value({
    //     key: "lastCompIcon",
    //     val: !this.lastCompIcon,
    //   });
    //   if (this.lastCompIcon) {
    //     this.set_value({
    //       key: "currentLeftComponent",
    //       val: this.lastCurrentLeftComponent,
    //     });
    //     this.set_value({
    //       key: "currentRightComponent",
    //       val: this.lastCurrentRightComponent,
    //     });
    //   } else {
    //     this.set_value({
    //       key: "lastCurrentLeftComponent",
    //       val: this.currentLeftComponent,
    //     });
    //     this.set_value({
    //       key: "lastCurrentRightComponent",
    //       val: this.currentRightComponent,
    //     });
    //     this.set_value({
    //       key: "currentLeftComponent",
    //       val: "",
    //     });
    //     this.set_value({
    //       key: "currentRightComponent",
    //       val: "",
    //     });
    //   }
    // },
  },
};
</script>
<style lang="scss" scoped>
.wrap-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 77px;
  background: url("~@img/footer-bg.png") no-repeat left top;
  background-size: 100% 100%;
  font-size: $font-size-18;
  color: $color-FFFFFF;
  font-family: "FZLT-MEDIUM";
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  &-home {
    background: url("~@img/footer-bg-home.png") no-repeat left top;
    height: 47px;
    padding-top: 5px;
  }
}
.second-nav {
  display: flex;
  padding-top: 10px;
  z-index: 50;
  > li {
    font-size: $font-size-20;
    font-family: "FZLT-MEDIUM";
    color: rgba(255, 255, 255, 0.5);
    line-height: 23px;
    margin-left: 24px;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &.active {
      color: #ffffff;
      text-shadow: 0px 0px 30px #3c71ff;
    }
  }
}
.third-nav {
  position: fixed;
  transform: translate(-50%, 0);
  left: 50%;
  bottom: 94px;
  display: flex;
  z-index: 50;
  &.home {
    bottom: 62px;
  }
  > li {
    margin-left: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:first-child {
      margin-left: 0;
    }
    > p {
      font-size: $font-size-16;
      line-height: 21px;
      color: $color-FFFFFF;
      text-align: center;
    }
  }
  &-img {
    width: 40px;
    height: 40px;
    background: url("~@img/third.png") no-repeat left top;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    &.active {
      background-image: url("~@img/third-active.png");
    }
    > i {
      font-size: $font-size-20;
      color: $color-FFFFFF;
    }
  }
}
.travel {
  position: fixed;
  top: 100px;
  left: 30px;
  font-size: 30px;
  cursor: pointer;
  color: $color-D8D8D8;
  &.active {
    color: $color-F9A901;
  }
  &.right {
    left: 70px;
  }
}
.select-cont {
  position: fixed;
  top: 100px;
  right: 140px;
  width: 348px;
  z-index: 1000;
  &-header {
    width: 100%;
    height: 6px;
    background: url("~@img/line.png") no-repeat left top;
    background-size: 100% 100%;
  }
  &-middle {
    width: 331px;
    margin-left: 8px;
    background: rgba(28, 35, 63, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 16px 16px 2px 16px;
    .title {
      font-size: 16px;
      color: #ffffff;
      line-height: 18px;
    }
  }
  &-item {
    display: flex;
    padding: 18px 0 16px 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 16px;
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
    > li {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 20px;
      margin-left: 35px;
      text-align: center;
      color: #3a4988;
      cursor: pointer;
      &.active {
        color: $color-F9A901;
      }
      > i {
        font-size: 26px;
        margin-bottom: 8px;
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
.icon-list {
  > li {
    position: absolute;
    > p:nth-child(1) {
      font-size: 14px;
      color: #e0e0e0;
      line-height: 17px;
      margin-bottom: 16px;
    }
    > img {
      width: 36px;
      height: 36px;
    }
  }
}
.icon-select {
  width: 115px;
  height: 36px;
  position: fixed;
  left: 23%;
  top: 64%;
  > li {
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    color: #ffffff;
    line-height: 17px;
    justify-content: space-between;
    padding-right: 10px;
    align-items: center;
    &.active {
      background: url("~@img/car3.png") no-repeat left top;
      background-size: 100% 100%;
    }
    &:last-child {
      margin-bottom: 0;
    }
    > img {
      width: 36px;
      height: 36px;
    }
  }
}
.forth-nav {
  position: fixed;
  left: 420px;
  bottom: 130px;
  > li {
    cursor: pointer;
    padding: 4px;
    height: 36px;
    width: 86px;
    margin-top: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #ffffff;
    &:first-child {
      margin-top: 0;
    }
    &.active {
      background: url("~@img/second/forth-nav.png") no-repeat left top;
      background-size: 100% 100%;
      .forth-nav-icon {
        margin-right: 16px;
      }
    }
  }
  &-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 8px;
    background: linear-gradient(
      180deg,
      #3c71ff 0%,
      rgba(60, 113, 255, 0.1) 100%
    );
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    &.active {
      background: linear-gradient(
        180deg,
        #f9a901 0%,
        rgba(249, 169, 1, 0.1) 100%
      );
      border: 1px solid #f9a901;
    }
  }
}
</style>
