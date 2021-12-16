<template>
  <v-inner is-right>
    <v-unit icon="City" title="南通美术馆数据概况">
      <home-msg :list="cultureMsRightTop"></home-msg>
    </v-unit>
    <v-unit icon="Activity" title="南通美术馆近期活动">
      <home-activity :list="cultureMsRightMiddle"></home-activity>
    </v-unit>
    <v-unit icon="monitor" title="南通美术馆宣传视频">
      <v-player
        url="http://192.168.1.197:8806/headimage/2.mp4"
        id="medicine-video"
        :width="337"
        :height="172"
      ></v-player>
    </v-unit>
  </v-inner>
</template>

<script>
import HomeMsg from "@comp/home/HomeMsg";
import { cultureMsRightTop, cultureMsRightMiddle } from "@/views/data";
import HomeActivity from "@comp/home/HomeActivity";
export default {
  components: { HomeMsg, HomeActivity },
  data() {
    return {
      cultureMsRightTop,
      cultureMsRightMiddle,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
