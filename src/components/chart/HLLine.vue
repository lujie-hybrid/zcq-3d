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
          data: [],
          axisTick: { show: false },
          boundaryGap: true,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#203338",
            },
          },
          axisLabel: {
            color: "#AFC4FF",
            fontSize: 8,
            fontWeight: 400,
            formatter: this.XLabelFormat,
          },
        },
        grid: {
          left: "10%",
          top: "18%",
          right: "4%",
          height: this.option.height * 0.72,
        },
        yAxis: {
          name: "",
          nameTextStyle: {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 10,
            fontWeight: 400,
          },
          nameGap: 20,
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "#AFC4FF",
            fontSize: 8,
            fontWeight: 400,
            formatter: this.YLabelFormat,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#203338",
            },
          },
          type: "value",
        },
        series: [
          {
            name: "",
            type: "line",
            data: [],
            smooth: true,
            lineStyle: {
              width: 1,
            },
            label: {
              show: true,
              formatter: this.LabelFormat || "{c}",
              fontSize: 8,
              fontWeight: 400,
              color: "#F9A901",
            },
            itemStyle: {
              color: "#3C71FF",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#3C71FF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(60, 113, 255, 0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
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
