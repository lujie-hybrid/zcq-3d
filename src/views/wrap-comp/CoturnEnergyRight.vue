<template>
  <v-inner is-right>
    <v-unit icon="energy" title="各楼栋月度用电能耗统计">
      <v-bar
        id="cer-bar"
        :option="barOption"
        :y-label-format="barOption.formatter"
      ></v-bar>
    </v-unit>
    <v-unit icon="energy" title="紫琅科技城用电趋势统计">
      <div class="rel">
        <h-l-pie id="cer-pie-middle" :option="pieOption"></h-l-pie>
        <p class="cer-txt cer-txt1">77.9%<span>92,378kwh</span></p>
        <p class="cer-txt cer-txt2">15.3%<span>18,143kwh</span></p>
        <p class="cer-txt cer-txt3">6.8%<span>8,063kwh</span></p>
      </div>
    </v-unit>
    <v-unit icon="energy" title="紫琅科技城门禁状态 (实时)">
      <coturn-car-line
        id="cer-line"
        :y-label-format="lineOption.yFormat"
        :option="lineOption"
        :label-format="lineOption.labelFormat"
      ></coturn-car-line>
    </v-unit>
  </v-inner>
</template>

<script>
import VBar from "@comp/chart/VerticalBar";
import { dealChartValue } from "@u/common";
import CoturnCarLine from "@comp/chart/CoturnCarLine";
import HLPie from "@comp/chart/HLPie";
export default {
  components: { VBar, HLPie, CoturnCarLine },
  data() {
    return {
      barOption: {
        formatter: function (value) {
          return dealChartValue(value);
        },
        height: 238,
        xAxis: {
          data: [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B",
            "9A",
            "9B",
          ],
          type: "category",
          axisLine: {
            show: true,
          },
        },
        grid: {
          left: 42,
          top: 42,
          right: 16,
          bottom: 0,
          height: 160,
          containLabel: false,
        },
        yAxis: {
          type: "value",
          max: 100000,
          interval: 20000,
          name: "单位:kwh",
          splitLine: {
            show: false,
          },
          nameGap: 15,
          axisLine: {
            show: true,
          },
          axisLabel: {
            verticalAlign: "top",
          },
        },
        series: [
          {
            barWidth: 10,
            data: [
              40000, 50000, 70000, 50000, 40000, 20000, 50000, 20000, 30000,
              20000, 70000, 90000, 40000, 20000, 50000, 70000, 50000, 40000,
            ],
            name: "月度能耗统计",
            itemStyle: {
              color: "#3C71FF",
              borderWidth: 1,
              borderColor: "#3C71FF",
              shadowColor: "#3C71FF",
              shadowBlur: "3px",
              shadowOffsetX: 0,
              shadowOffsetY: "1px",
            },
          },
        ],
      },
      pieOption: {
        height: 200,
        title: {
          text: "118584",
          subtext: "总能耗",
          left: "25%",
          top: "40%",
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
          top: "17%",
          left: 190,
          textStyle: {
            color: ["#3C71FF", "#1FCA1A", "#A46CEF"],
          },
        },
        series: [
          {
            name: "总能耗(kwh)",
            data: [
              { name: "公共设备", value: 92378 },
              { name: "用户设备", value: 18143 },
              { name: "照明插座", value: 8063 },
            ],
            label: {
              show: false,
            },
          },
        ],
      },
      lineOption: {
        yFormat: function (value) {
          return dealChartValue(value);
        },
        labelFormat(params) {
          return dealChartValue(params.value);
        },
        height: 275,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["去年", "今年"],
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
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          type: "category",
          axisLine: {
            show: true,
          },
        },
        grid: {
          left: 50,
          top: 46,
          right: 15,
          bottom: 0,
          height: 198,
          containLabel: false,
        },
        yAxis: {
          type: "value",
          name: "单位：kwh",
          max: 5600000,
          interval: 800000,
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
            data: [
              3200000, 4800000, 2900000, 4400000, 4400000, 4000000, 4000000,
              4800000, 3200000, 2600000, 2400000, 2000000,
            ],
            name: "去年",
            type: "line",
            symbolSize: 6,
            itemStyle: {
              color: "#3C71FF",
            },
            label: {
              show: false,
              fontSize: 8,
              fontWeight: 500,
              color: "#5F8AFE",
            },
          },
          {
            data: [
              3200000, 4800000, 3200000, 2400000, 3200000, 2400000, 1600000,
              2600000, 4000000, 2400000, 2400000, 800000,
            ],
            name: "今年",
            type: "line",
            symbolSize: 6,
            itemStyle: {
              color: "#F9A901",
            },
            lineStyle: {
              type: "dashed",
            },
            label: {
              show: false,
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
<style lang="scss" scoped>
.cer-txt {
  position: absolute;
  left: 210px;
  color: $color-FFFFFF;
  font-size: $font-size-14;
  line-height: 20px;
  > span {
    margin-left: 10px;
  }
}
.cer-txt1 {
  top: 56px;
}
.cer-txt2 {
  top: 99px;
}
.cer-txt3 {
  top: 143px;
}
</style>
