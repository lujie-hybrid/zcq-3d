<template>
  <div
    :id="id"
    class="line-chart"
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
    XLabelFormat: Function,
    YLabelFormat: Function,
    LabelFormat: Function,
  },
  components: {},
  data() {
    return {
      defaultOption: {
        tooltip: {},
        xAxis: {
          type: "category",
          data: [],
          axisTick: { show: false },
          splitLine: {
            lineStyle: {
              color: "#203338",
            },
          },
          axisLabel: {
            color: "#AFC4FF",
            fontSize: 8,
            formatter: this.XLabelFormat,
          },
        },
        grid: {
          left: 0,
          top: 0,
          right: 45,
          bottom: 0,
          containLabel: false,
        },
        yAxis: {
          name: "",
          nameTextStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 10,
            fontWeight: 400,
          },
          nameGap: 18,
          type: "value",
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: "#AFC4FF",
            fontSize: 10,
            fontWeight: 400,
            formatter: this.YLabelFormat,
          },
          data: [],
        },
        series: [
          {
            name: "",
            type: "line",
            data: [],
            itemStyle: {},
            lineStyle: {
              width: 1,
            },
            label: {
              show: false,
              formatter: this.LabelFormat || {},
              fontSize: 8,
              fontWeight: 500,
            },
          },
          {
            type: "line",
            lineStyle: {
              width: 1,
            },
            label: {
              show: false,
              formatter: this.LabelFormat || {},
              fontSize: 8,
              fontWeight: 500,
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
      this.chart.setOption(r);
    },
  },
};
</script>
<style lang="scss" scoped>
.line-chart {
  width: 100%;
}
</style>
