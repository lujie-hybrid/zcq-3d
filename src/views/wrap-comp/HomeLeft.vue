<template>
  <v-inner>
    <v-unit icon="City" title="中创区数据概况">
      <home-msg :mgb="20" :list="homeLeftTop"></home-msg>
    </v-unit>
    <v-unit icon="City" title="科创中心入驻企业概况">
      <h-l-pie id="hl-pie" :option="pieOption"></h-l-pie>
    </v-unit>
    <v-unit icon="personnel" title="文创中心人流量统计">
      <h-l-line id="hl-line" :option="lineOption"></h-l-line>
    </v-unit>
  </v-inner>
</template>

<script>
import HLPie from "@comp/chart/HLPie";
import HLLine from "@comp/chart/HLLine";
import HomeMsg from "@comp/home/HomeMsg";
import { homeLeftTop } from "@/views/data";
export default {
  components: { HLPie, HLLine, HomeMsg },
  data() {
    return {
      homeLeftTop,
      pieOption: {
        height: 237,
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
      lineOption: {
        height: 275,
        xAxis: {
          data: [
            "9点~10点",
            "10点~11点",
            "11点~12点",
            "12点~13点",
            "13点~14点",
            "14点~15点",
            "15点~16点",
            "16点~17点",
          ],
          axisLabel: {
            align: "center",
          },
        },
        yAxis: { name: "单位:人" },
        series: [
          {
            data: [200, 400, 300, 470, 550, 350, 210, 80],
          },
        ],
      },
    };
  },
  mounted() {
    // if (this.$handler) {
    //   this.$handler.addHomeRange();
    //   this.$handler.resetHomeCamera();
    // }
    // this.timer = setInterval(() => {
    //   this.times++;
    //   if (this.renderOver) {
    //     this.$handler.travelRange();
    //     clearInterval(this.timer);
    //     this.times = 0;
    //   } else if (this.times > 50) {
    //     clearInterval(this.timer);
    //     this.times = 0;
    //   }
    // }, 1000);
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
