<template>
  <v-inner>
    <v-unit icon="City" title="文展中心数据概况">
      <home-msg :list="cultureLeftTop"></home-msg>
    </v-unit>
    <v-unit icon="personnel" title="文展中心人流量统计">
      <coturn-car-line
        v-if="lineOption1"
        ref="culture_left1"
        id="culture-left1"
        :option="lineOption1"
      ></coturn-car-line>
    </v-unit>

    <v-unit icon="car" title="文展中心车流量统计">
      <coturn-car-line
        v-if="lineOption2"
        ref="culture_left2"
        id="culture-left2"
        :option="lineOption2"
      ></coturn-car-line>
    </v-unit>
  </v-inner>
</template>

<script>
import { cultureLeftTop } from "@/views/data";
import { cultureMsLeftChart } from "@u/chart";
import HomeMsg from "@comp/home/HomeMsg";
import CoturnCarLine from "@comp/chart/CoturnCarLine";
export default {
  components: { HomeMsg, CoturnCarLine },
  data() {
    return {
      cultureLeftTop,
      lineOption1: null,
      lineOption2: null,
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
    const y1 = [100, 250, 150, 300, 200, 100, 400, 200];
    const y2 = [200, 600, 300, 470, 550, 350, 210, 80];
    this.lineOption1 = cultureMsLeftChart({
      x,
      y1,
      y2,
      y2Name: "南通美术馆",
      y1Name: "南通大剧院",
      yAxisName: "单位：人",
    });
    const y = [200, 300, 400, 200, 300, 200, 400, 200];

    this.lineOption2 = cultureMsLeftChart({
      x,
      y1: y,
      yAxisName: "单位：辆",
      multi: false,
      noLegend: true,
    });
    this.$handler.addMineCulture();
    this.$render.focusAllCovering("range");
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
