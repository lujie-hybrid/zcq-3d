<template>
  <v-inner>
    <v-unit icon="City" title="商业中心数据概况">
      <home-msg :list="businessJyLeftTop"></home-msg>
    </v-unit>
    <v-unit icon="Activity" title="商业中心工程节点">
      <time-msg :list="businessJyLeftMiddle"></time-msg>
    </v-unit>
    <v-unit icon="personnel" title="商业中心环参监控">
      <coturn-car-line
        v-if="lineOption"
        ref="bjy_left"
        id="bjy-left"
        :option="lineOption"
      ></coturn-car-line>
    </v-unit>
  </v-inner>
</template>

<script>
import { businessJyLeftTop, businessJyLeftMiddle } from "@/views/data";
import { businessJyLeftChart } from "@u/chart";
import HomeMsg from "@comp/home/HomeMsg";
import TimeMsg from "@comp/business/TimeMsg";
import CoturnCarLine from "@comp/chart/CoturnCarLine";
export default {
  components: { HomeMsg, TimeMsg, CoturnCarLine },
  data() {
    return {
      businessJyLeftTop,
      businessJyLeftMiddle,
      lineOption: null,
    };
  },
  mounted() {
    const x = [
      "9点-10点",
      "10点-11点",
      "11点-12点",
      "12点-13点",
      "13点-14点",
      "14点-15点",
      "15点-16点",
      "16点-17点",
    ];
    const y1 = [100, 250, 150, 300, 200, 100, 400, 200];
    const y2 = [200, 600, 300, 470, 550, 350, 210, 80];
    this.lineOption = businessJyLeftChart({
      x,
      y1,
      y2,
      y2Name: "PM 2.5",
      y1Name: "PM 10",
    });
    this.$handler.addHomeTrade();
    this.$render.focusAllCovering("range");
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
