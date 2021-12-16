<template>
  <v-inner is-right>
    <v-unit icon="City" title="金鹰世界数据概况">
      <home-msg :list="businessJyRightTop"></home-msg>
    </v-unit>
    <v-unit icon="Activity" title="金鹰世界近期动态">
      <home-activity :list="businessJyRightMiddle"></home-activity>
    </v-unit>
    <v-unit icon="monitor" title="金鹰世界宣传视频">
      <v-player
        url="http://192.168.1.197:8806/headimage/2.mp4"
        id="bjyr"
        :width="337"
        :height="172"
      ></v-player>
    </v-unit>
  </v-inner>
</template>

<script>
import HomeMsg from "@comp/home/HomeMsg";
import { businessJyRightTop, businessJyRightMiddle } from "@/views/data";
import HomeActivity from "@comp/home/HomeActivity";
export default {
  components: { HomeMsg, HomeActivity },
  data() {
    return {
      businessJyRightTop,
      businessJyRightMiddle,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
