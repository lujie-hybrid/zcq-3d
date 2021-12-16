<template>
  <v-inner is-right>
    <v-unit icon="City" title="创新区环参监控">
      <v-pm :msg="msg">
        <p class="mr-top-title">AQI指数标准</p>
        <ul class="mr-top">
          <li v-for="(item, i) in pmList" :key="i">
            <img :src="item.img" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </v-pm>
    </v-unit>
    <v-unit icon="City" title="创新区教育资源统计">
      <h-l-pie id="mr-pie" :option="pieOption" v-if="pieOption"></h-l-pie>
    </v-unit>
    <v-unit icon="City" title="创新区商业优势统计">
      <h-r-bar id="mr-bar" :option="barOption" v-if="barOption"></h-r-bar>
    </v-unit>
  </v-inner>
</template>

<script>
import HLPie from "@comp/chart/HLPie";
import HRBar from "@comp/chart/HRBar";
import { businessRightTopChart, manageRightBottomChart } from "@u/chart";
export default {
  components: { HLPie, HRBar },
  data() {
    return {
      pieOption: null,
      barOption: null,
      msg: {
        val: 10,
        time: "2021-09-01 14:00",
        list: [
          { name: "PM2.5", val: 3.5 },
          { name: "PM10", val: 2.4 },
          { name: "O3", val: 3.5 },
          { name: "SO2", val: 2.3 },
          { name: "NO2", val: 1.5 },
          { name: "CO", val: 0.4 },
        ],
      },
      pmList: [
        {
          img: require("@img/p1.png"),
          name: "0～50",
        },
        {
          img: require("@img/p2.png"),
          name: "50～100",
        },
        {
          img: require("@img/p3.png"),
          name: "100～150",
        },
        {
          img: require("@img/p4.png"),
          name: "150～200",
        },
        {
          img: require("@img/p5.png"),
          name: "250以上",
        },
      ],
    };
  },
  mounted() {
    this.pieOption = businessRightTopChart({
      name: "创新区教育资源(所)",
      title: "12",
      height: 214,
      data: [
        { name: "九年一贯制学校", value: 1 },
        { name: "幼儿园", value: 3 },
        { name: "六年制小学", value: 3 },
        { name: "三年制中学", value: 5 },
      ],
    });
    this.barOption = manageRightBottomChart({
      title: "单位：家",
      xData: [180, 320, 1000, 200, 700, 400],
      yData: [
        "生活服务",
        "建材家装",
        "休闲娱乐",
        "餐饮美食",
        "美容健身",
        "金融理财",
      ],
      name: "创新区商业优势统计",
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.mr-top {
  display: flex;
  // margin-top: 24px;
  padding-bottom: 4px;
  justify-content: space-between;
  &-title {
    font-size: 12px;
    color: #ffffff;
    line-height: 14px;
    margin: 16px 0 13px 0;
  }
  > li {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 12px;
    text-align: center;
    // margin-left: 33px;
    // flex: 1;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    &:first-child {
      margin-left: 0;
    }
    > img {
      width: 40px;
      height: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>
