<template>
  <v-inner is-right>
    <v-unit icon="news" title="总缴费金额统计">
      <house-progress :list="list" mg="0 16px" height="134px"></house-progress>
    </v-unit>
    <v-unit icon="news" title="各楼缴费金额统计">
      <v-bar
        id="cbr-bar"
        :option="barOption"
        :y-label-format="barOption.yFormat"
        :label-format="barOption.labelFormat"
      ></v-bar>
    </v-unit>
    <v-unit icon="news" title="月度缴费金额统计">
      <coturn-car-line
        id="cbr-line"
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
import HouseProgress from "@comp/coturn/HouseProgress";
export default {
  components: { VBar, CoturnCarLine, HouseProgress },
  data() {
    return {
      list: [
        {
          usageRate: 75,
          name: "房租缴费",
          total: 105000,
        },
        {
          usageRate: 86,
          name: "电费缴费",
          total: 79000,
        },
        {
          usageRate: 100,
          name: "水费缴费",
          total: 45000,
        },
        {
          usageRate: 95,
          name: "物业缴费",
          total: 66000,
        },
      ],
      barOption: {
        dataZoom: {
          id: "dataZoomX",
          type: "inside",
          xAxisIndex: [0],
          filterMode: "filter",
          start: 0,
          end: 100,
          maxSpan: 24,
          minSpan: 24,
        },
        yFormat: function (value) {
          return dealChartValue(value);
        },
        labelFormat(params) {
          return dealChartValue(params.value);
        },
        height: 234,
        legend: {
          data: ["总金额", "已缴纳金额"],
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
          left: 40,
          top: 50,
          right: 15,
          bottom: 0,
          height: 156,
          containLabel: false,
        },
        yAxis: {
          type: "value",
          max: 24000,
          interval: 4000,
          name: "单位：个/房间",
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
            data: [
              20000, 14000, 12000, 8000, 5000, 15000, 6000, 14000, 3000, 8000,
              5000, 11000, 12000, 8000, 8000, 5000, 15000, 7000,
            ],
            name: "已入驻",
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
              show: true,
              color: "#FFFFFF",
              fontSize: 8,
              fontWeight: 500,
              position: "top",
            },
          },
          {
            barWidth: 16,
            data: [
              8000, 5000, 15000, 7000, 20000, 15000, 6000, 5000, 11000, 12000,
              8000, 14000, 12000, 8000, 5000, 14000, 3000, 8000,
            ],
            name: "空置",
            type: "bar",
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
              show: true,
              color: "#FFFFFF",
              fontSize: 8,
              fontWeight: 500,
              position: "top",
              offset: [3, 0],
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
        height: 286,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["总金额", "已缴纳金额"],
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
          left: 40,
          top: 46,
          right: 15,
          bottom: 0,
          height: 205,
          containLabel: false,
        },
        yAxis: {
          type: "value",
          max: 30000,
          interval: 5000,
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
            data: [
              16000, 24000, 20000, 18000, 20000, 16000, 14000, 8000, 12000,
              6000, 3000, 5000,
            ],
            name: "总金额",
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
            data: [
              8000, 12000, 11000, 10000, 15000, 14000, 12000, 6000, 10000, 5000,
              2000, 4000,
            ],
            name: "已缴纳金额",
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
              position: "bottom",
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
