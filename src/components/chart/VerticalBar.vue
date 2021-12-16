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
    XLabelFormat: Function,
    YLabelFormat: Function,
    LabelFormat: Function,
  },
  components: {},
  data() {
    return {
      defaultOption: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "value",
          name: "",
          nameTextStyle: {
            color: "#fff",
            fontSize: 8,
            fontWeight: 400,
          },
          nameGap: 20,
          data: [],
          axisTick: { show: false },
          splitLine: {
            lineStyle: {
              color: "rgba(102, 191, 222, 0.1)",
            },
          },
          axisLabel: {
            color: "#AFC4FF",
            fontSize: 10,
            formatter: this.XLabelFormat,
          },
        },
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          containLabel: true,
        },
        yAxis: {
          name: "",
          nameTextStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 10,
            fontWeight: 400,
          },
          // nameGap: 20,
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: "#AFC4FF",
            fontSize: 10,
            fontWeight: 400,
            formatter: this.YLabelFormat,
          },
          type: "category",
          data: [],
        },
        series: [
          {
            name: "",
            type: "bar",
            data: [],
            barWidth: 12,
            itemStyle: {
              color: "#59B6BB",
              borderWidth: 1,
              borderColor: "#78F7FD",
              shadowColor: "#EBFEFF",
              shadowBlur: "3px",
              shadowOffsetX: 0,
              shadowOffsetY: "1px",
            },
            label: {
              show: false,
              formatter: this.LabelFormat || {},
              fontSize: 8,
              fontWeight: 500,
            },
          },
          {
            name: "",
            type: "bar",
            data: [],
            barWidth: 12,
            itemStyle: {},
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
      console.log(r, "bar setting");
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
