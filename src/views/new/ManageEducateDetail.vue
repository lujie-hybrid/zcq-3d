<template>
  <v-inner is-right>
    <v-unit icon="City" title="通中附校基本数据概况">
      <home-msg :mgb="6" :list="topList"></home-msg>
    </v-unit>
    <v-unit icon="news" title="通中附校中考分数统计">
      <coturn-car-line
        id="cbr-line"
        :y-label-format="lineOption.yFormat"
        :option="lineOption"
        :label-format="lineOption.labelFormat"
      ></coturn-car-line>
    </v-unit>
    <v-unit icon="message" title="通中附校近期活动">
      <home-activity :list="list"></home-activity>
    </v-unit>
  </v-inner>
</template>

<script>
import HomeActivity from "@comp/home/HomeActivity";
import HomeMsg from "@comp/home/HomeMsg";
import CoturnCarLine from "@comp/chart/CoturnCarLine";
export default {
  components: { HomeActivity, HomeMsg, CoturnCarLine },
  data() {
    return {
      topList: [
        {
          label: "学校占地面积",
          value: "82",
          unit: "亩",
        },
        {
          label: "建筑面积",
          value: "3.6万",
          unit: "平方米",
        },
        {
          label: "在校学生",
          value: "357",
          unit: "人",
        },
        {
          label: "办学规模",
          value: "12轨36班",
        },
        {
          label: "教职员工",
          value: "46",
          unit: "人",
        },
        {
          label: "特级教师:",
          value: "1",
          unit: "人",
        },
        {
          label: "南通市学科带头人",
          value: "6",
          unit: "人",
        },
        {
          label: "荣获南通教学一等功",
          value: "1",
          unit: "人",
        },
      ],
      list: [
        {
          time: "2021/10/26 14:00",
          title: "通中附校心理委员培训暨主题团体辅导活动",
        },
        {
          time: "2021/10/25 09:00",
          title: "点亮法治灯塔 守护平安校园——通中附校开展法治进校园活动",
        },
      ],
      lineOption: {
        yFormat: function (value) {
          return value + "人";
        },
        labelFormat(params) {
          return params.value + "人";
        },
        height: 276,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2020年", "2021年"],
          top: 12,
          right: 20,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 24,
          icon: "rect",
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 10,
            fontWeight: 500,
          },
        },
        xAxis: {
          data: ["100分", "200分", "300分", "400分", "500分", "600分", "700分"],
          type: "category",
          axisLine: {
            show: true,
          },
          axisLabel: {
            color: "#ffffff",
            fontSize: 10,
            fontWeight: 400,
          },
        },
        grid: {
          left: 45,
          top: 40,
          right: 15,
          bottom: 0,
          height: 195,
          containLabel: false,
        },
        yAxis: {
          type: "value",
          max: 300,
          interval: 50,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          axisLabel: {
            verticalAlign: "top",
            color: "#ffffff",
            fontSize: 8,
          },
        },
        series: [
          {
            data: [5, 10, 20, 50, 50, 200, 50],
            name: "2020年",
            type: "line",
            symbolSize: 6,
            itemStyle: {
              color: "#3C71FF",
            },
            label: {
              show: true,
              fontSize: 8,
              fontWeight: 500,
              color: "#5F8AFE",
            },
          },
          {
            data: [50, 60, 70, 90, 200, 150, 250],
            name: "2021年",
            type: "line",
            symbolSize: 6,
            itemStyle: {
              color: "#F9A901",
            },
            lineStyle: {
              type: "dashed",
            },
            label: {
              show: true,
              fontSize: 8,
              fontWeight: 500,
              color: "#FAAD14",
            },
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
