<template>
  <v-inner is-right>
    <v-unit icon="City" :title="top.unitTitle">
      <home-msg :mgb="9" :list="top.list"></home-msg>
    </v-unit>
    <v-unit icon="City" :title="bottom.unitTitle">
      <home-activity :list="bottom.acv"></home-activity>
    </v-unit>
  </v-inner>
</template>

<script>
import HomeMsg from "@comp/home/HomeMsg";
import HomeActivity from "@comp/home/HomeActivity";
import { mapState } from "vuex";
import { showDetail } from "@/views/data";
export default {
  components: {
    HomeMsg,
    HomeActivity,
  },
  data() {
    return {
      top: {},
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
      this.top = showDetail[val].top;
      this.bottom = showDetail[val].bottom;
    },
  },
};
</script>
<style lang="scss" scoped></style>
