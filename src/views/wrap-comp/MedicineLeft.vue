<template>
  <v-inner>
    <v-unit icon="City" title="医学中心数据概况">
      <home-msg :list="medicineLeftTop"></home-msg>
    </v-unit>
    <v-unit icon="Activity" title="医学中心工程节点">
      <time-msg :list="medicineLeftMiddle"></time-msg>
    </v-unit>
    <v-unit icon="personnel" title="医学中心环参监控">
      <coturn-car-line
        v-if="lineOption"
        ref="medicine_left"
        id="medicine-left"
        :option="lineOption"
      ></coturn-car-line>
    </v-unit>
  </v-inner>
</template>

<script>
import { medicineLeftTop, medicineLeftMiddle } from "@/views/data";
import { businessJyLeftChart } from "@u/chart";
import HomeMsg from "@comp/home/HomeMsg";
import TimeMsg from "@comp/business/TimeMsg";
import CoturnCarLine from "@comp/chart/CoturnCarLine";
export default {
  components: { HomeMsg, TimeMsg, CoturnCarLine },
  data() {
    return {
      medicineLeftTop,
      medicineLeftMiddle,
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
    this.$handler.addMineHospital();
    this.$render.focusCovering("minehospital_sh_range", "range", 1000);
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
