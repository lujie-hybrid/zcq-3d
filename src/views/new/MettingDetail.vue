<template>
  <v-inner is-right>
    <v-unit icon="City" title="国际会议中心基本概况">
      <home-msg :mgb="9" :list="list"></home-msg>
    </v-unit>
    <v-unit icon="City" title="国际会议中心展厅类型">
      <h-l-pie
        id="metting-detail-pie"
        :option="pieOption"
        v-if="pieOption"
      ></h-l-pie>
    </v-unit>
    <v-unit icon="City" title="国际会议中心预定情况">
      <h-r-bar
        id="metting-detail-bar"
        :option="barOption"
        v-if="barOption"
      ></h-r-bar>
    </v-unit>
  </v-inner>
</template>

<script>
import HomeMsg from "@comp/home/HomeMsg";
import HLPie from "@comp/chart/HLPie";
import HRBar from "@comp/chart/HRBar";
import { showPieChart, mettingDetailBarChart } from "@u/chart";
export default {
  components: { HomeMsg, HLPie, HRBar },
  data() {
    return {
      pieOption: null,
      barOption: null,
      list: [
        {
          label: "会议中心总用地面积",
          value: "10.8",
          unit: "万平方米",
        },
        {
          label: "会议中心总建筑面积",
          value: "8.1",
          unit: "万平方米",
        },
        {
          label: "会议中心地上停车位",
          value: "669",
          unit: "辆",
        },
        {
          label: "会议中心展厅面积",
          value: "0.4",
          unit: "万平方米",
        },
        {
          label: "可用会议室数量",
          value: "20",
          unit: "个",
        },
      ],
    };
  },
  mounted() {
    this.pieOption = showPieChart({
      name: "国际会议中心展厅类型(个)",
      title: "36",
      data: [
        { name: "国际厅", value: 2 },
        { name: "会议室", value: 20 },
        { name: "江海厅", value: 7 },
        { name: "休息室", value: 7 },
      ],
    });
    this.barOption = mettingDetailBarChart({
      title: "单位：个",
      xData: [5, 10, 20, 30],
      yData: ["国际厅", "会议室", "江海厅", "休息室"],
      name: "国际会议中心预定",
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
