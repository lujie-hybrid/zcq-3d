<template>
  <v-inner>
    <v-unit class="mb22" icon="City" title="创新区医疗综合医院列表">
      <my-tree
        @parent="clickParent"
        prefix="manage-hospital"
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
          id: "5",
          label: "综合医院",
          page: "manage-hospital-right",
          children: [
            {
              id: "5_1",
              label: "上海交通大学医学院附属仁济南通医院",
              page: "manage-hospital-detail",
              detailId: "area_sh",
            },
            {
              id: "5_2",
              label: "南通大学附属医院",
              page: "manage-hospital-detail",
              detailId: "area_fs",
            },
          ],
        },
      ],
      data: [
        {
          img: require("@img/area11.jpeg"),
          title: "上海交通大学医学院附属仁济南通医院",
          desc: "仁济南通医院将打破内外科限制，建立“岛式”疾病中心，优化就诊体验。以疾病为中心的多样化诊疗中心充分发挥学科交叉合作的优势。",
        },
        {
          img: require("@img/area12.jpg"),
          title: "南通大学附属医院",
          desc: "南通大学附属医院成立于1911年，医院占地面积近130亩，建筑面积8.8万余平方米，是一所省属综合性教学医院。医院拥有34个临床科室，17个医技科室，18个研究室、实验室。",
        },
      ],
    };
  },
  computed: {
    ...mapState("manage", ["leftList"]),
  },
  mounted() {
    this.$handler.addManageHospital();
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
