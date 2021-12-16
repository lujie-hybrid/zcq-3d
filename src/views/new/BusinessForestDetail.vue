<template>
  <v-inner is-right>
    <v-unit icon="City" title="中央森林景观数据概况">
      <home-msg :mgb="15" :list="list"></home-msg>
    </v-unit>
    <v-unit-detail title="中央森林景观景点监控巡航">
      <p class="line"></p>
      <v-player
        id="business-forest-video"
        :height="210"
        no-padding
        url="/forest.mp4"
      >
      </v-player>
    </v-unit-detail>
    <v-unit icon="City" title="中央森林公园环参监控">
      <v-pm :msg="msg"></v-pm>
    </v-unit>
  </v-inner>
</template>

<script>
import HomeMsg from "@comp/home/HomeMsg";
export default {
  components: { HomeMsg },
  data() {
    return {
      list: [
        {
          label: "中央森林景观占地面积",
          value: "145",
          unit: "万平方米",
        },
        {
          label: "绿化保有面积",
          value: "91.5",
          unit: "万平方米",
        },
        {
          label: "中央森林景观总投资",
          value: "7",
          unit: "亿元",
        },
        {
          label: "中央森林景观环保投资",
          value: "2.36",
          unit: "亿万元",
        },
        {
          label: "中央森林景观主要景点",
          value: "河滨绿带、都市艺林、花谷秋林、湿地森林",
        },
      ],
      msg: {
        val: 10,
        list: [
          { name: "PM2.5", val: 3.4 },
          { name: "PM10", val: 2.2 },
          { name: "O3", val: 3.5 },
          { name: "SO2", val: 2.1 },
          { name: "NO2", val: 1.4 },
          { name: "CO", val: 0.3 },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.line {
  background-color: #7d99e3;
  height: 1px;
  margin: 16px 0;
}
</style>
