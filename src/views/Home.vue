<template>
  <div class="">
    <div id="base"></div>
    <v-wrap></v-wrap>
  </div>
</template>

<script>
import { resizeFunc, removeResizeFunc } from "@u/common";
import MyOperater from "@u/3d-operate";

import Vue from "vue";
export default {
  data() {
    return {};
  },
  mounted() {
    Vue.prototype.$handler = new MyOperater("base");
    resizeFunc(() => {
      this.$render.setResolution();
    });
  },
  beforeDestroy() {
    removeResizeFunc();
    this.$render.stopRenderCloud();
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
