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
          img: require("@img/area14.jpeg"),
          title: "紫琅科技城地下商业街",
          desc: "紫琅地下商业街项目位于崇州大道东、朝阳路北、紫琅湖西侧，用地面积约3.57万方，建筑总面积约5.1万方。紧邻紫琅湖，可以欣赏湖景风光。",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
