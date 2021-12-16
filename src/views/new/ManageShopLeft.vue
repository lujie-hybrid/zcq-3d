<template>
  <v-inner>
    <v-unit class="mb22" icon="City" title="创新区商业中心列表">
      <my-tree
        @parent="clickParent"
        prefix="manage-shop"
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
          id: "3",
          label: "商业中心/街道",
          page: "manage-shop-right",
          children: [
            {
              id: "shop1",
              label: "金鹰世界",
              page: "manage-hospital-detail",
              detailId: "area_jy",
            },
            {
              id: "shop2",
              label: "紫琅新天地",
              page: "manage-hospital-detail",
              detailId: "area_zl",
            },
            {
              id: "shop3",
              label: "紫琅科技城地下商业街",
              page: "zl-address",
            },
          ],
        },
      ],
      data: [
        {
          img: require("@img/area13.jpg"),
          title: "金鹰世界",
          desc: "南通金鹰世界位于南通市规划发展的重心板块—中创区，目前主要居民集中居住区、商业配套、教育配套、文展配套均集中在项目3公里辐射范围内。",
        },
        {
          img: require("@img/area3.jpg"),
          title: "紫琅新天地",
          desc: "紫琅新天地项目位于崇州大道东、朝阳路北、紫琅湖西侧，用地面积约3.57万方，建筑总面积约5.1万方。紧邻紫琅湖，可以欣赏湖景风光。",
        },
      ],
    };
  },
  computed: {
    ...mapState("manage", ["leftList"]),
  },
  mounted() {
    this.$handler.addManageShop();
    this.clickParent();
  },
  methods: {
    ...mapMutations("manage", ["set_value"]),
    setCamera() {
      this.$render.setCameraInfo({
        center_coord: "120.932663,31.962997",
        arm_distance: "1999.99939",
        pitch: "25.548401",
        yaw: "2.229126",
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
