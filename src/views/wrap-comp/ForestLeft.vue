<template>
  <v-inner>
    <v-unit icon="City" title="中央森林景观数据概况">
      <home-msg :list="forestLeftTop"></home-msg>
    </v-unit>
    <v-unit icon="project" title="中央森林景观建设用地规划">
      <h-r-bar id="forest-hr-bar" :option="barOption"></h-r-bar>
    </v-unit>

    <v-unit icon="monitor" title="中央森林公园环参监控">
      <coturn-car-line
        v-if="lineOption"
        ref="forest_left"
        id="forest-left"
        :option="lineOption"
      ></coturn-car-line>
    </v-unit>
  </v-inner>
</template>

<script>
import { forestLeftTop } from "@/views/data";
import { cultureMsLeftChart } from "@u/chart";
import HomeMsg from "@comp/home/HomeMsg";
import CoturnCarLine from "@comp/chart/CoturnCarLine";
import HRBar from "@comp/chart/HRBar";
export default {
  components: { HomeMsg, CoturnCarLine, HRBar },
  data() {
    return {
      forestLeftTop,
      lineOption: null,
      barOption: {
        title: {
          text: "单位：平方公里",
        },
        height: 275,
        yAxis: {
          data: [
            "道路与\n交通设施",
            "科创园区",
            "旅游景观",
            "文创休闲",
            "公共设施",
            "城镇居住",
          ],
        },
        series: [
          {
            name: "2020",
            data: [600, 60, 220, 500, 700, 300],
          },
          {
            name: "2021",
            data: [1100, 150, 500, 700, 900, 600],
          },
        ],
      },
    };
  },
  mounted() {
    const x = [
      "9点-10点",
      "10点-11点",
      "11点-12点",
      "12点-13点",
      "13点-14点",
      "14点-15点",
      "15点-16点",
      "16点-17点",
    ];
    const y = [200, 300, 400, 200, 300, 200, 400, 200];

    this.lineOption = cultureMsLeftChart({
      x,
      y1: y,
      multi: false,
      yAxisName: "单位：微米",
    });
    this.$handler.addMineScene();
    this.$render.setCameraInfo({
      center_coord: "120.933162,31.961676", //中心点的坐标 lng,lat
      arm_distance: 1799.99939, //镜头距中心点距离(单位:米)
      pitch: 26.002411, //镜头俯仰角(5~89)
      yaw: 7.904816, //镜头偏航角(0正北, 0~359)
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
