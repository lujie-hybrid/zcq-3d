<template>
  <v-inner is-right>
    <v-unit icon="car" title="紫琅科技城实时车位统计">
      <v-bar id="crr-car1" :option="barOption"></v-bar>
    </v-unit>
    <v-unit icon="car" title="紫琅科技城门禁状态 (实时)">
      <coturn-car-line id="crr-car2" :option="lineOption"></coturn-car-line>
    </v-unit>
    <v-unit icon="car" title="紫琅科技城月停车时常统计">
      <div class="leng-wrap">
        <h-l-pie id="crr-car3" :option="pieOption"></h-l-pie>
        <p class="leng1 leng"><span>60%</span>8100辆车</p>
        <p class="leng2 leng"><span>15.0%</span>3375辆车</p>
        <p class="leng3 leng"><span>15.0%</span>3375辆车</p>
        <p class="leng4 leng"><span>5.0%</span>1350辆车</p>
      </div>
    </v-unit>
  </v-inner>
</template>

<script>
import HLPie from "@comp/chart/HLPie";
import CoturnCarLine from "@comp/chart/CoturnCarLine";
import VBar from "@comp/chart/VerticalBar";
export default {
  components: { HLPie, CoturnCarLine, VBar },
  data() {
    return {
      pieOption: {
        height: 214,
        title: {
          text: "13500",
          subtext: "总停车数",
          left: "26%",
          top: "39%",
          textAlign: "center",
          textStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight: 400,
          },
          subtextStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: 400,
          },
        },
        legend: {
          itemGap: 32,
          top: "10%",
          textStyle: {
            color: ["#3C71FF", "#1FCA1A", "#A46CEF", "#F9A901"],
          },
        },
        series: [
          {
            name: "门禁(个)",
            data: [
              { name: "停车0-6小时", value: 8100 },
              { name: "停车6-12小时", value: 3375 },
              { name: "停车12-18小时", value: 3375 },
              { name: "停车16-24小时", value: 1350 },
            ],
            label: {
              show: false,
            },
          },
        ],
      },
      lineOption: {
        height: 292,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["入场车辆", "出场车辆"],
          top: 15,
          right: 20,
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 24,
          icon: "rect",
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 10,
            fontWeight: 500,
          },
        },
        xAxis: {
          data: [
            "00:00-02:00",
            "02:00-04:00",
            "04:00-06:00",
            "06:00-08:00",
            "08:00-10:00",
            "10:00-12:00",
            "12:00-14:00",
            "14:00-16:00",
            "16:00-18:00",
            "18:00-20:00",
            "20:00-22:00",
            "22:00-24:00",
          ],
          axisLabel: {
            rotate: 60,
          },
          type: "category",
          axisLine: {
            show: true,
          },
        },
        grid: {
          left: 40,
          top: 46,
          right: 15,
          bottom: 0,
          height: 180,
          containLabel: false,
        },
        yAxis: {
          type: "value",
          name: "单位：辆",
          max: 140,
          interval: 20,
          splitLine: {
            show: false,
          },
          nameTextStyle: {
            padding: [0, 0, 0, -10],
          },
          axisLine: {
            show: true,
          },
          axisLabel: {
            verticalAlign: "top",
          },
        },
        series: [
          {
            data: [0, 0, 0, 10, 90, 60, 120, 80, 30, 20, 10, 0],
            name: "入场车辆",
            type: "line",
            symbolSize: 6,
            itemStyle: {
              color: "#3C71FF",
            },
            label: {
              show: true,
              fontSize: 8,
              fontWeight: 500,
              color: "#3C71FF",
            },
          },
          {
            data: [0, 0, 0, 0, 10, 15, 20, 50, 120, 100, 60, 20],
            name: "出场车辆",
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
              color: "#F9A901",
            },
          },
        ],
      },
      barOption: {
        height: 240,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["入场车位数", "总车位数"],
          top: 15,
          right: 15,
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 24,
          icon: "rect",
          textStyle: {
            color: "#ffffff",
            fontSize: 10,
            fontWeight: 500,
          },
        },
        xAxis: {
          data: [
            "P1",
            "P2",
            "P4",
            "P5",
            "B1",
            "B2",
            "B3",
            "B4",
            "B5",
            "B6",
            "B7",
            "B8",
          ],
          type: "category",
          axisLine: {
            show: true,
          },
        },
        grid: {
          left: 50,
          top: 50,
          right: 20,
          bottom: 0,
          height: 160,
          containLabel: false,
        },
        yAxis: {
          type: "value",
          max: 2000,
          interval: 400,
          name: "单位:个",
          nameTextStyle: {
            padding: [0, 0, 0, -30],
          },
          nameGap: 20,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          axisLabel: {
            verticalAlign: "top",
          },
        },
        series: [
          {
            barWidth: 16,
            data: [650, 600, 500, 800, 200, 500, 800, 200, 500, 200, 200, 500],
            name: "入场车位数",
            type: "bar",
            stack: "total",
            itemStyle: {
              color: "#F9A901",
              borderWidth: 1,
              borderColor: "#F9A901",
              shadowColor: "#F9A901",
              shadowBlur: "3px",
              shadowOffsetX: 0,
              shadowOffsetY: "1px",
            },
            label: {
              offset: [0, 1.5],
              show: true,
              color: "#FFFFFF",
              fontSize: 8,
              fontWeight: 500,
              position: "insideTop",
            },
          },
          {
            barWidth: 16,
            data: [1000, 850, 800, 900, 300, 800, 900, 300, 800, 310, 300, 800],
            name: "总车位数",
            type: "bar",
            stack: "total",
            itemStyle: {
              color: "#3C71FF",
              borderWidth: 1,
              borderColor: "#3C71FF",
              shadowColor: "#3C71FF",
              shadowBlur: "3px",
              shadowOffsetX: 0,
              shadowOffsetY: "1px",
            },
            label: {
              offset: [0, 1.5],
              show: true,
              color: "#FAAD14",
              fontSize: 8,
              fontWeight: 500,
              position: "top",
            },
          },
        ],
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.leng-wrap {
  position: relative;
  .leng {
    position: absolute;
    display: flex;
    align-items: center;
    line-height: 20px;
    font-size: $font-size-14;
    color: $color-FFFFFF;
    left: 59%;
    > span {
      display: block;
      width: 50px;
    }
    &.leng1 {
      top: 42px;
    }
    &.leng2 {
      top: 87px;
    }
    &.leng3 {
      top: 130px;
    }
    &.leng4 {
      top: 175px;
    }
  }
}
</style>
