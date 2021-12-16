<template>
  <div
    :id="id"
    class="gauge-chart"
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
    labelFormatter: Function,
  },
  components: {},
  data() {
    return {
      defaultOption: {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            center: ["28%", "52%"],
            radius: "75%",
            splitNumber: 4,
            itemStyle: {
              color: "#5F8AFE",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 8,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "54%",
              width: 6,
              offsetCenter: [0, "5%"],
            },
            progress: {
              show: true,
              roundCap: true,
              width: 16,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 16,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              distance: 4,
              length: 4,
              lineStyle: {
                width: 1,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 20,
              color: "#999",
              fontSize: 10,
              formatter: this.labelFormatter,
            },
            title: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [],
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
.gauge-chart {
  width: 100%;
  height: 195px;
}
</style>
