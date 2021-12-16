<template>
  <v-inner>
    <v-unit class="mb22" icon="City" title="创新区教育资源列表">
      <my-tree
        @parent="clickParent"
        prefix="manage-educate"
        :data="list"
      ></my-tree>
    </v-unit>
    <desc-list
      v-if="leftList && leftList.length > 0"
      :list="leftList"
    ></desc-list>
  </v-inner>
</template>

<script>
import MyTree from "@comp/manage/Tree";
import DescList from "@comp/manage/DescList";
import { mapState, mapMutations } from "vuex";
export default {
  components: { MyTree, DescList },
  data() {
    return {
      list: [
        {
          id: "2",
          label: "幼小初学校",
          page: "manage-educate-right",
          children: [
            {
              id: "school1",
              label: "南通中学附属实验学校",
              page: "manage-educate-detail",
            },
            {
              id: "school2",
              label: "源兴路北幼儿园",
              page: "manage-hospital-detail",
              detailId: "school_yx",
            },
            {
              id: "school3",
              label: "人才公寓幼儿园",
              page: "manage-hospital-detail",
              detailId: "school_rc",
            },
            {
              id: "school4",
              label: "紫琅一小",
              page: "show-detail",
              detailId: "school_yx",
            },
            {
              id: "school5",
              label: "紫琅湖实验学校",
              page: "show-detail",
              detailId: "school_sy",
            },
          ],
        },
      ],
      data: [
        {
          img: require("@img/school1.jpg"),
          title: "南通中学附属实验学校",
          desc: "江苏省南通中学附属实验学校为南通市教育局直属学校，位于南通创新区紫琅湖西南、科创中心的核心区域。学校占地82亩，建筑面积近3.6万平方米。",
        },
        {
          img: require("@img/school2.jpg"),
          title: "源兴路幼儿园",
          desc: "源兴路北幼儿园位于源兴路北侧、二十一号支路东侧（创新区104号地块）。该项目新建4轨12班幼儿园及配套设施，总建筑面积5600平方米。",
        },
      ],
    };
  },
  computed: {
    ...mapState("manage", ["leftList"]),
  },
  mounted() {
    this.$handler.addManageSchool();
    this.clickParent();
  },
  methods: {
    ...mapMutations("manage", ["set_value"]),
    setCamera() {
      this.$render.setCameraInfo({
        center_coord: "120.928932,31.98148",
        arm_distance: "2000.0",
        pitch: "24.68454",
        yaw: "183.915207",
      });
    },
    clickParent() {
      this.set_value({ key: "leftList", val: this.data });
      this.setCamera();
    },
  },
};
</script>
<style lang="scss" scoped>
.mb22 {
  margin-bottom: 22px;
}
</style>
