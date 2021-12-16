<template>
  <div
    :id="id"
    class="bar-chart"
    :style="{ height: `${option.height || 160}px` }"
  ></div>
</template>

<script>
import { objFunc } from "@u/3d";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    option: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {},
  data() {
    return {
      defaultOption: {
        title: {
          left: 16,
          top: 16,
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 10,
            fontWeight: 400,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2020", "2021"],
          top: 18,
          right: 16,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 24,
          icon: "rect",
          textStyle: {
            color: "#ffffff",
            fontSize: 10,
            fontWeight: 400,
          },
        },
        xAxis: {
          type: "value",
          min: 0,
          max: 1200,
          interval: 300,
          axisLabel: {
            color: "#ffffff",
            fontSize: 10,
            fontWeight: 400,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
          },
        },
        grid: {
          left: 80,
          top: 43,
          right: 35,
          bottom: 0,
          height: this.option.height * 0.72,
        },
        yAxis: {
          type: "category",
          data: [],
          splitLine: {
            show: false,
          },
          axisTick: { show: false },
          axisLabel: {
            color: "#ffffff",
            fontSize: 12,
            fontFamily: "FZLT-MEDIUM",
            lineHeight: 14,
            // width: 50,
          },
          axisLine: {
            show: true,
          },
        },

        series: [
          {
            name: "",
            type: "bar",
            barWidth: 8,
            data: [],
            itemStyle: {
              color: "#3C71FF",
            },
          },
          {
            name: "",
            type: "bar",
            data: [],
            barWidth: 8,
            itemStyle: {
              color: "#A46CEF",
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.chart = this.$chart.init(document.getElementById(this.id));
    this.setChartData();
  },
  methods: {
    resizeChart() {
      setTimeout(() => {
        this.chart && this.chart.resize();
      }, 100);
    },
    setChartData() {
      const o = JSON.parse(JSON.stringify(this.option));
      const r = objFunc.merge(this.defaultOption, o);
      console.log(r, "----------");
      this.chart.setOption(r);
    },
  },
};
</script>
<style lang="scss" scoped>
.bar-chart {
  width: 100%;
}
</style>
