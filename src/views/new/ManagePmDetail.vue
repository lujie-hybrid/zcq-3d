<template>
  <v-inner is-right>
    <v-unit icon="City" :title="msg.unitTitle">
      <v-pm :msg="msg"></v-pm>
    </v-unit>
    <v-unit-detail v-if="video.id" :title="video.unitTitle">
      <p class="line"></p>
      <v-player
        :key="video.id"
        :id="video.id"
        :height="210"
        no-padding
        :url="video.url"
      >
      </v-player>
    </v-unit-detail>
  </v-inner>
</template>

<script>
import { mapState } from "vuex";
import { pmDetail } from "@/views/data";
export default {
  components: {},
  data() {
    return {
      msg: {},
      video: {},
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
      console.log(val, "val------");
      this.getData(val);
    },
  },
  methods: {
    getData(val) {
      this.msg = pmDetail[val].msg;
      this.video = pmDetail[val].video;
    },
  },
};
</script>
<style lang="scss" scoped>
.line {
  background-color: #7d99e3;
  height: 1px;
  margin: 16px 0;
}
</style>
