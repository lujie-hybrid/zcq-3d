<template>
  <v-inner>
    <v-unit icon="City" title="南通区位优势总体概况">
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
          南通市位于长江入海口北翼、江苏省东南部，西和泰州市毗邻，北与盐城市接壤，北至东南一线濒黄海，南临长江，三面环水，形似半岛。经苏通大桥、崇启大桥两条跨江通道分别与苏州市、上海市相连。<br />
          南通处于沿海经济带与长江经济带“T”型结构交汇点，与上海分别位居长江三角洲北南两个洲头。在地缘上与中国经济最发达的上海及苏南地区相依。
        </p>
      </div>
    </v-unit>
    <v-unit icon="City" title="南通区位交通优势概况">
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
          val: 8001,
          unit: "km²",
          desc: "南通总面积",
        },
        {
          val: 226,
          unit: "km",
          desc: "长江岸线",
        },
        {
          val: 210,
          unit: "km",
          desc: "海岸线",
        },
      ],
      topImg: require("@img/car1.png"),
      bottomImg: require("@img/second/attract5.png"),
      msgList: [
        {
          img: require("@img/second/attract1.png"),
          title: "国际机场: 2个机场",
          desc: "兴东机场、南通新机场",
        },
        {
          img: require("@img/second/attract2.png"),
          title: "过江通道: 8个通道",
          desc: "海太、苏通、沪通、张皋、崇启、崇海、北沿江、苏通第二",
        },
        {
          img: require("@img/second/attract3.png"),
          title: "高速铁路: 3条高铁",
          desc: "北沿江、苏通嘉甬、盐通",
        },
        {
          img: require("@img/second/attract4.png"),
          title: "港口码头: 5个码头",
          desc: "洋口、通州、海门、南通、吕四",
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
      this.set_value({ key: "bgState", val: "attract-left" });
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
  &-img {
    width: 160px;
    height: 205px;
  }
  &-list {
    margin-left: 12px;
    flex: 1;
    > li {
      display: flex;
      align-items: flex-start;
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
