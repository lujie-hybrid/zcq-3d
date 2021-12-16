<template>
  <v-inner is-right>
    <v-unit icon="City" title="南通万豪大酒店基本概况">
      <home-msg :mgb="9" :list="list"></home-msg>
    </v-unit>
    <v-unit icon="message" title="万豪大酒店精装修工程">
      <hospital-top :msg="top"></hospital-top>
    </v-unit>
    <v-unit icon="message" title="万豪大酒店精装修项目节点">
      <time-msg :list="middle"></time-msg>
    </v-unit>
  </v-inner>
</template>

<script>
import HomeMsg from "@comp/home/HomeMsg";
import HospitalTop from "@comp/manage/HospitalTop";
import TimeMsg from "@comp/business/TimeMsg";
export default {
  components: { HomeMsg, HospitalTop, TimeMsg },
  data() {
    return {
      top: {
        title: "南通万豪大酒店精装修工程项目",
        contTitle: [
          "项目分类",
          "项目编号",
          "重点项目",
          "计划工期",
          "计划开工时间",
          "计划竣工日期",
        ],
        cont: [
          "商用建筑类",
          "A3206010318000241",
          "否",
          "240日历天",
          "2021年11月01号",
          "2022年06月01号",
        ],
      },
      middle: [
        {
          time: "2021.11.19",
          cont: "精装修工程二标段评标公示",
        },
        {
          time: "2021.11.19",
          cont: "精装修工程一标段评标公示",
        },
        {
          time: "2021.09.02",
          cont: "精装修工程一标段评标公示",
        },
        {
          time: "2020.09.02",
          cont: "精装修工程一标段招标资格预审",
        },
        {
          time: "2020.07.15",
          cont: "项目智能化工程评标公示",
        },
        {
          time: "2020.07.15",
          cont: "项目智能化工程资格预审公示",
        },
      ],
      list: [
        {
          label: "万豪大酒店总建筑面积",
          value: "6.5",
          unit: "万平方米",
        },
        {
          label: "酒店地上建筑面积",
          value: "4.6",
          unit: "万平方米",
        },
        {
          label: "酒店地下建筑面积",
          value: "1.8",
          unit: "万平方米",
        },
        {
          label: "酒店机动车位",
          value: "238",
          unit: "个",
        },
        {
          label: "客房、中餐厅、会议设施",
          value: "425",
          unit: "间",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
