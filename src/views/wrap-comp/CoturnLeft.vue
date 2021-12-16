<template>
  <v-inner>
    <v-unit icon="City" title="科创中心数据概况">
      <ul class="cl-data">
        <li>常住人口规模:<span>≤2080</span>万人</li>
        <li>入驻企业商铺:<span>≤1600</span>家</li>
        <li>落户共建研究所:<span>5</span>家</li>
        <li>附属实验中学师生人数:<span>3000</span>人</li>
        <li>建设用地总规模:<span>208</span>万亩</li>
        <li>已规划未建成建设用地面积:<span>3185</span>公顷/亿元</li>
      </ul>
    </v-unit>
    <v-unit icon="City" title="科创中心入驻企业/商铺概况">
      <h-l-pie id="cl-pie" :option="pieOption"></h-l-pie>
    </v-unit>
    <v-unit icon="City" title="文创中心人流量统计">
      <v-bar id="cl-bar" :option="barOption"></v-bar>
    </v-unit>
  </v-inner>
</template>

<script>
import HLPie from "@comp/chart/HLPie";
import VBar from "@comp/chart/VerticalBar";
export default {
  components: { HLPie, VBar },
  data() {
    return {
      pieOption: {
        height: 214,
        title: {
          text: "500",
        },
        series: [
          {
            name: "入驻企业(家)",
            data: [
              { name: "商业服务", value: 52 },
              { name: "公共服务", value: 120 },
              { name: "企业研发中心和总部", value: 120 },
              { name: "科研院所和高校科研机构", value: 208 },
            ],
            label: {
              formatter: "{c}",
            },
          },
        ],
      },
      barOption: {
        height: 234,
        legend: {
          data: ["已入驻", "空置"],
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
          data: ["1号楼", "2号楼", "3号楼", "4号楼", "5号楼", "6号楼"],
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
          max: 200,
          interval: 50,
          name: "单位:个/房间",
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
            data: [190, 170, 130, 180, 150, 130],
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
          },
          {
            barWidth: 16,
            data: [150, 80, 50, 140, 160, 120],
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
          },
        ],
      },
    };
  },
  mounted() {
    this.$handler.addHighlight();
    this.$render.focusCovering("", "highlight_area", 1500);
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.cl {
  &-data {
    padding: 18px 16px;
    > li {
      font-size: $font-size-16;
      color: $color-FFFFFF;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      height: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      > span {
        margin: 0 8px 0 16px;
        font-size: $font-size-18;
        color: $color-F9A901;
      }
    }
  }
}
</style>
