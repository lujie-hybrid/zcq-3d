<template>
  <v-inner is-right>
    <v-unit icon="City" title="创新区总体概况">
      <div class="ml-top">
        <ul class="ml-top-msg">
          <li v-for="(item, i) in top" :key="i">
            <p>
              {{ item.val }}<span>{{ item.unit }}</span>
            </p>
            <p>{{ item.desc }}</p>
          </li>
        </ul>
        <el-image class="ml-top-img" fit="cover" :src="topImg"></el-image>
        <p class="ml-top-desc">
          南通中央创新区位于江苏省南通市新城区东部，北至青年路，西至通富路，南至源兴路，东至东快速路及通盛大道，规划范围约17平方公里，是新城区的重要组成部分。<br />
          南通中央创新区是南通市策应江苏“一中心一基地”建设，对接上海建设全球科创中心的重要载体平台，是引领南通市建设具有区域影响力创新之都的龙头工程和“科创新区”。
        </p>
      </div>
    </v-unit>
    <v-unit icon="City" title="创新区交通优势概况">
      <div class="ml-bottom">
        <el-image
          @click="setBgState"
          class="ml-bottom-img"
          fit="cover"
          :src="bottomImg"
        ></el-image>
        <ul class="ml-bottom-list">
          <li v-for="(msg, m) in msgList" :key="m">
            <img :src="msg.img" alt="" />
            <div class="ml-bottom-right">
              <p>{{ msg.title }}</p>
              <p>{{ msg.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </v-unit>
  </v-inner>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      top: [
        {
          val: 17,
          unit: "平方公里",
          desc: "创新区面积",
        },
        {
          val: 1300,
          unit: "万m²",
          desc: "总建筑体量",
        },
        {
          val: 265,
          unit: "公顷",
          desc: "森林公园面积",
        },
      ],
      topImg: require("@img/manage1.png"),
      bottomImg: require("@img/second/attract6.png"),
      msgList: [
        {
          img: require("@img/metro.png"),
          title: "地铁1号线: 2个站点",
          desc: "医学中心站 静海大道站",
        },
        {
          img: require("@img/gaojia.png"),
          title: "高架道路: 2条高架",
          desc: "通沪大道 东快速路高架",
        },
        {
          img: require("@img/road.png"),
          title: "主干道: 3条主干道",
          desc: "青年路 通富路 源兴路",
        },
        {
          img: require("@img/suidao.png"),
          title: "隧道: 1条湖底隧道",
          desc: "紫琅湖湖底隧道",
        },
      ],
    };
  },
  mounted() {
    // this.$handler.addManageSchool(false, true);
    // this.$handler.addManagePm(false, true);
    // this.$handler.addManageShop(false, true);
    // this.$handler.addManageHospital(false, true);
    this.setCamera();
    setTimeout(() => {
      this.$render.setCameraRotate(80);
    }, 1500);
  },
  methods: {
    ...mapMutations(["set_value"]),
    setCamera() {
      // this.$render.setCameraInfo({
      //   center_coord: "120.932516,31.957812",
      //   arm_distance: "1999.99939",
      //   pitch: "26.124298",
      //   yaw: "7.69986",
      // });
      this.$render.setCameraInfo({
        center_coord: "120.932793,31.967758",
        arm_distance: "1000.334106",
        pitch: "30.690704",
        yaw: "318.75119",
      });
    },
    setBgState() {
      this.set_value({ key: "currentLeftComponent", val: "bg-state" });
      this.set_value({
        key: "currentRightComponent",
        val: "business-area-right",
      });
      this.set_value({ key: "bgState", val: "attract-right" });
    },
  },
};
</script>
<style lang="scss" scoped>
.ml-top {
  padding: 16px;
  &-msg {
    display: flex;
    > li {
      flex: 1;
      text-align: center;
      &:nth-child(1) {
        color: #1fca1a;
      }
      &:nth-child(2) {
        color: #ff3310;
      }
      &:nth-child(3) {
        color: #f9a901;
      }
      > p:nth-child(1) {
        font-size: 22px;
        line-height: 26px;
        font-weight: 600;
        > span {
          font-size: 10px;
          line-height: 14px;
          font-weight: normal;
        }
      }
      > p:nth-child(2) {
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        margin-top: 6px;
      }
    }
  }
  &-img {
    width: 100%;
    height: 136px;
    margin: 16px 0;
  }
  &-desc {
    font-size: 16px;
    text-align: justify;
    color: #ffffff;
    line-height: 24px;
  }
}
.ml-bottom {
  padding: 14px;
  display: flex;
  align-items: center;
  &-img {
    width: 160px;
    height: 205px;
  }
  &-list {
    margin-left: 12px;
    > li {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      > img {
        width: 40px;
      }
    }
  }
  &-right {
    margin-left: 6px;
    > p {
      font-size: 12px;
      color: #ffffff;
      line-height: 17px;
      &:nth-child(2) {
        margin-top: 5px;
      }
    }
  }
}
</style>
