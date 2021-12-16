<template>
  <v-inner is-right>
    <desc-list :list="data"></desc-list>
  </v-inner>
</template>

<script>
import DescList from "@comp/manage/DescList";
export default {
  components: { DescList },
  data() {
    return {
      data: [
        {
          img: require("@img/school3.png"),
          title: "人才公寓幼儿园",
          desc: "南通创新区人才公寓幼儿园位于居美路北侧、七号支路东侧。该项目新建4轨12班幼儿园及配套设施，总建筑面积5274.4平方米。",
        },
        {
          img: require("@img/school4.jpg"),
          title: "紫琅一小",
          desc: "紫琅一小地处通富路东、胜利路西、世纪大道以北。学校占地80亩，办学规模48个班。是南通创新区为服务人才、服务企业、服务群众打造的教育配建。",
        },
        {
          img: require("@img/school5.jpg"),
          title: "紫琅湖实验学校",
          desc: "南通市紫琅湖实验学校位于南通创新区紫琅湖东畔，朝阳路以南，通盛大道以西（朝阳路1号），是南通市教育局直属的唯一一所九年一贯制学校。",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
