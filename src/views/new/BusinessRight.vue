<template>
  <v-inner is-right>
    <v-unit icon="City" title="已入驻企业类型统计">
      <h-l-pie id="br-pie" :option="pieOption" v-if="pieOption"></h-l-pie>
    </v-unit>
    <v-unit icon="City" title="“双百”政策支持投资规模">
      <h-r-bar id="br-bar" :option="barOption" v-if="barOption"></h-r-bar>
    </v-unit>
    <v-unit icon="City" title="创新区近期招商政策与活动">
      <home-activity :list="list"></home-activity>
    </v-unit>
  </v-inner>
</template>

<script>
import HLPie from "@comp/chart/HLPie";
import { businessRightTopChart, businessRightMiddleChart } from "@u/chart";
import HRBar from "@comp/chart/HRBar";
import HomeActivity from "@comp/home/HomeActivity";
export default {
  components: { HLPie, HRBar, HomeActivity },
  data() {
    return {
      pieOption: null,
      barOption: null,
      list: [
        {
          time: "2021/10/29 14:00",
          title: "海外华文媒体走进南通：点赞城市建设 感受生态之美 ",
        },
        {
          time: "2021/07/21 09:00",
          title: "“5+X”科创政策体系 终于来啦！",
        },
        {
          time: "2021/05/20 08:00",
          title: "南通创新区聚焦五个一流 谱写全新篇章",
        },
      ],
    };
  },
  mounted() {
    this.pieOption = businessRightTopChart({
      name: "已入驻企业类型统计(家)",
      title: "500",
      data: [
        { name: "商业服务", value: 52 },
        { name: "公共服务", value: 120 },
        { name: "企业研发中心和总部", value: 120 },
        { name: "科研院所和高校科研机构", value: 208 },
      ],
    });
    this.barOption = businessRightMiddleChart({
      title: "单位：万元",
      xData: [180, 320, 1000, 200, 700, 400],
      yData: [
        "研发用房提供",
        "设施设备购买",
        "科研经费支持",
        "开展合作办学",
        "科技成果转化",
        "人才引进激励",
      ],
      name: "“双百”政策支持投资规模",
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
