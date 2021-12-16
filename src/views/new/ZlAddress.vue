<template>
  <v-inner is-right>
    <v-unit icon="City" title="地下商业街商铺类型统计">
      <h-l-pie
        id="zl-address-pie"
        :option="pieOption"
        v-if="pieOption"
      ></h-l-pie>
    </v-unit>
    <v-unit icon="news" title="地下商业街商铺总缴费情况">
      <house-progress :list="list" mg="0 16px" height="134px"></house-progress>
    </v-unit>
    <v-unit icon="news" title="地下商业街商铺月缴费统计">
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
import HLPie from "@comp/chart/HLPie";
import { showPieChart } from "@u/chart";
import CoturnCarLine from "@comp/chart/CoturnCarLine";
import { dealChartValue } from "@u/common";
import HouseProgress from "@comp/coturn/HouseProgress";
export default {
  components: { HLPie, CoturnCarLine, HouseProgress },
  data() {
    return {
      pieOption: null,
      lineOption: {
        yFormat: function (value) {
          return dealChartValue(value);
        },
        labelFormat(params) {
          return dealChartValue(params.value);
        },
        height: 276,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["总金额", "已缴纳金额"],
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
          axisLabel: {
            color: "#ffffff",
            fontSize: 10,
            fontWeight: 400,
          },
        },
        grid: {
          left: 45,
          top: 50,
          right: 15,
          bottom: 0,
          height: 190,
          containLabel: false,
        },
        yAxis: {
          type: "value",
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
            data: [
              16000, 24000, 20000, 19000, 20000, 16000, 16000, 15000, 24000,
              16000, 16000, 12000,
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
              16000, 24000, 16000, 12000, 16000, 12000, 8000, 15000, 20000,
              12000, 12000, 4000,
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
            },
          },
        ],
      },
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
    };
  },
  mounted() {
    this.pieOption = showPieChart({
      name: "地下商业街商铺类型统计(家)",
      title: "20",
      data: [
        { name: "生活类", value: 2 },
        { name: "美妆类", value: 3 },
        { name: "娱乐类", value: 3 },
        { name: "美食类", value: 12 },
      ],
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
