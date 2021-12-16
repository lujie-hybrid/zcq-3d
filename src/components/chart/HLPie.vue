<template>
  <div
    :id="id"
    class="pie-chart"
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
        tooltip: {},
        legend: {
          left: "54%",
          orient: "vertical",
          top: "28%",
          icon: "circle",
          itemWidth: 9,
          itemHeight: 9,
          textStyle: {
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 12,
            lineHeight: 17,
          },
        },
        title: {
          left: "20%",
          top: "43.5%",
          textStyle: {
            color: "#fff",
            fontSize: 24,
            fontWeight: 500,
          },
        },
        color: ["#3C71FF", "#1FCA1A", "#A46CEF", "#F9A901"],
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            height: this.option.height,
            center: ["27%", "50%"],
            label: {
              color: "#fff",
              fontSize: 12,
              fontWeight: 400,
              position: "inside",
              formatter: this.labelFormatter || {},
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
      console.log(r, "pie setting");
      this.chart.setOption(r);
    },
  },
};
</script>
<style lang="scss" scoped>
.pie-chart {
  width: 100%;
}
</style>
