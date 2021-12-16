<template>
  <v-inner>
    <v-unit icon="car" title="中创区轨道交通一览表">
      <el-tree
        :data="data"
        show-checkbox
        class="road-tree"
        node-key="id"
        :expand-on-click-node="false"
        default-expand-all
        :check-on-click-node="false"
        :default-checked-keys="['1', '2', '3']"
        @check-change="checkChange"
      >
        <span slot-scope="{ data }">
          <span
            :class="{
              'road-tree-title': !data.center,
              'road-tree-label': data.center,
            }"
            >{{ data.label }}</span
          >
          <i
            title="聚焦"
            v-if="data.center"
            class="focus-one el-icon-s-promotion"
            @click="focusOne(data)"
          ></i>
        </span>
      </el-tree>
    </v-unit>
  </v-inner>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: [
        {
          id: "1",
          label: "城市轨道交通",
          children: [
            {
              id: "1_1",
              label: "地铁1号线",
              points: [
                "120.91243,31.9793",
                "120.919563,31.980021",
                "120.920204,31.980045",
                "120.924995,31.97998",
                "120.931152,31.979799",
                "120.938072,31.979635",
                "120.940491,31.979454",
                "120.941666,31.978384",
                "120.941833,31.974985",
              ],
              center: "120.931152,31.979799",
            },
            {
              id: "1_2",
              label: "地铁2号线",
              points: [
                "120.945892,32.000717",
                "120.939301,32.000813",
                "120.935699,32.001034",
                "120.930611,32.001514",
                "120.927589,32.001881",
                "120.923584,32.002422",
              ],
              center: "120.935699,32.001034",
            },
          ],
        },
        {
          id: "2",
          label: "城市主干道",
          children: [
            // {
            //   id: "2_1",
            //   label: "青年中路",
            // },
            {
              id: "2_2",
              label: "通富北路",
              points: [
                "120.920486,31.984974",
                "120.919945,31.980225",
                "120.91925,31.974161",
              ],
              center: "120.919945,31.980225",
            },
            {
              id: "2_3",
              label: "通富北路高架",
              points: ["120.920479,31.985241", "120.921181,31.989691"],
              center: "120.920479,31.985241",
              color: "BBF556",
            },
            {
              id: "2_4",
              label: "通沪大道高架",
              points: [
                "120.917442,31.973923",
                "120.922447,31.974211",
                "120.92662,31.974203",
                "120.933632,31.973852",
                "120.941071,31.973696",
                "120.947273,31.973183",
                "120.953217,31.971178",
                "120.957642,31.968916",
              ],
              center: "120.941071,31.973696",
            },
            {
              id: "2_5",
              label: "东快速路高架",
              points: [
                "120.952538,31.977156",
                "120.953392,31.975153",
                "120.953781,31.974194",
                "120.954605,31.972631",
                "120.95536,31.971184",
              ],
              center: "120.953781,31.974194",
            },
          ],
        },
        {
          id: "3",
          label: "城市隧道",
          children: [
            {
              id: "3_1",
              label: "紫琅湖湖底隧道",
              points: [
                "120.927551,31.961842",
                "120.932465,31.961582",
                "120.937057,31.961657",
              ],
              center: "120.932465,31.961582",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    const url = process.env.VUE_APP_IMG_POI;
    this.$render.removeAllCovering();
    let points = [];
    this.data.forEach((item) => {
      if (item.children && item.children.length > 0) {
        item.children.forEach((chd) => {
          if (chd.center) {
            this.$render.addPath({
              id: `road_${chd.id}`,
              points: chd.points.map((p) => ({ coord: p, coord_z: 10 })),
              color: "3C71FF",
            });
            points.push({ id: chd.id, center: chd.center, label: chd.label });
          }
        });
      }
    });
    this.points = points;
    const r = points.map((ps) => ({
      id: `road_poi${ps.id}`,
      text: ps.label,
      coord: ps.center,
      img: `${url}/home-road.png`,
      imgActive: `${url}/home-road-active.png`,
      // bgSize: bgSizes[p],
    }));
    this.$handler.setPOI(r);
  },
  methods: {
    checkChange(item, isSelect) {
      // if (item.points && isSelect) {
      // }
      if (item.center) {
        this.$render.showHideCovering(`road_${item.id}`, "path", isSelect);
        this.$render.showHideCovering(`road_poi${item.id}`, "poi", isSelect);
      }
    },
    focusOne(item) {
      if (item.id) {
        this.$render.focusCovering(`road_${item.id}`, "path", 800);
        // console.log(this.points, "poiyn");
        // // p.id == item.id ? "B91010" : "3C71FF"
        // this.points.forEach((p) => {
        //   this.$render.updatePathStyle(`road_${p.id}`, "B91010");
        // });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.road-tree {
  padding: 20px 16px;
  background: rgba(28, 35, 63, 0.5);

  &-title {
    background: linear-gradient(
      180deg,
      $color-3C71FF 0%,
      rgba(60, 113, 255, 0.1) 100%
    );
    border-radius: 4px;
    border: 1px solid $color-3C71FF;
    padding: 2px 12px;
    line-height: 22px;
    font-size: $font-size-16;
    color: $color-FFFFFF;
  }
  ::v-deep .el-tree-node__content {
    height: auto;
    margin-bottom: 14px;
    &:hover {
      background-color: transparent;
    }

    .el-checkbox__inner {
      background-color: transparent;
      border: 1px solid $color-3C71FF;
      &::after {
        border-color: $color-F9A901;
      }
    }
    .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
      background-color: $color-3C71FF;
    }
    .el-tree-node__expand-icon {
      color: $color-3C71FF;
      &.is-leaf {
        color: transparent;
      }
    }
  }
  ::v-deep .el-tree-node:focus > .el-tree-node__content {
    background-color: transparent;
  }
  &-label {
    line-height: 20px;
    font-size: $font-size-14;
    color: $color-FFFFFF;
    background: none;
    border: none;
    padding: 0;
  }
  .focus-one {
    font-size: $font-size-16;
    color: $color-3C71FF;
    cursor: pointer;
    margin-left: 20px;
    font-weight: bold;
  }
}
</style>
