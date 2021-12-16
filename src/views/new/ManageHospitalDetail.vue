<template>
  <v-inner is-right>
    <v-unit icon="message" :title="top.unitTitle">
      <hospital-top :msg="top"></hospital-top>
    </v-unit>
    <v-unit icon="message" :title="middle.unitTitle">
      <time-msg :list="middle.list"></time-msg>
    </v-unit>
    <v-unit icon="City" :title="bottom.unitTitle">
      <v-pm :msg="bottom"></v-pm>
    </v-unit>
  </v-inner>
</template>

<script>
import HospitalTop from "@comp/manage/HospitalTop";
import TimeMsg from "@comp/business/TimeMsg";
import { mapState } from "vuex";
import { jianSheDetail } from "@/views/data";

export default {
  components: { HospitalTop, TimeMsg },
  data() {
    return {
      top: {},
      middle: {},
      bottom: {},
    };
  },
  computed: {
    ...mapState("manage", ["detailId"]),
  },
  mounted() {
    this.getData(this.detailId);
  },
  watch: {
    detailId: function (val) {
      this.getData(val);
    },
  },
  methods: {
    getData(val) {
      this.top = jianSheDetail[val].top;
      this.middle = jianSheDetail[val].middle;
      this.bottom = jianSheDetail[val].bottom;
    },
  },
};
</script>
<style lang="scss" scoped></style>
