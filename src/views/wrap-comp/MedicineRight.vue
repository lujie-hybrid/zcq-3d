<template>
  <v-inner is-right>
    <v-unit icon="City" title="仁济南通医院数据概况">
      <home-msg :list="medicineRightTop"></home-msg>
    </v-unit>
    <v-unit icon="Activity" title="仁济南通医院近期动态">
      <home-activity :list="medicineRightMiddle"></home-activity>
    </v-unit>
    <v-unit icon="monitor" title="仁济南通医院宣传视频">
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
import { medicineRightTop, medicineRightMiddle } from "@/views/data";
import HomeActivity from "@comp/home/HomeActivity";
export default {
  components: { HomeMsg, HomeActivity },
  data() {
    return {
      medicineRightTop,
      medicineRightMiddle,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
