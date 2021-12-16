<template>
  <v-inner>
    <v-unit icon="City" title="创新区区域空地总览表">
      <div class="header">
        <p>地块编号</p>
        <p>面积(平方米)</p>
        <p>用地规划</p>
      </div>
      <el-tree
        show-checkbox
        :data="data"
        class="road-tree"
        node-key="id"
        :expand-on-click-node="false"
        default-expand-all
        :check-on-click-node="false"
        :default-checked-keys="['1_4', '1_5']"
        @check-change="checkChange"
        @check="getCheck"
      >
        <div class="wrap" slot-scope="{ data }">
          <span
            :class="{
              [`road-tree-title parent${data.id}`]: data.children,
              'road-tree-label': !data.children,
            }"
            >{{ data.label }}</span
          >
          <span class="road-tree-tip">{{ data.area }}</span>
          <span class="road-tree-tip">{{ data.use }}</span>
        </div>
      </el-tree>
    </v-unit>
  </v-inner>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      data: [
        {
          id: "1",
          label: "科创中心",
          children: [
            {
              id: "1_1",
              label: "R20030",
              area: "5.6万",
              use: "住宅用地",
            },
            {
              id: "1_2",
              label: "CR20039",
              area: "3.3万",
              use: "住宅用地",
            },
            {
              id: "1_3",
              label: "CR20034",
              area: "1.2万",
              use: "商业用地",
            },
            {
              id: "1_4",
              label: "R20033",
              area: "5.1万",
              use: "科创用地",
              points: [
                "120.937767,31.953779",
                "120.943153,31.953724",
                "120.943062,31.958738",
                "120.939537,31.958952",
                "120.939316,31.957453",
                "120.938164,31.955326",
              ],
              center: "120.941185,31.956446",
            },
            {
              id: "1_5",
              label: "CR20034",
              area: "2.2万",
              use: "科创用地",
              points: [
                "120.937408,31.950693",
                "120.937447,31.953522",
                "120.931847,31.952837",
                "120.929909,31.953226",
                "120.930832,31.951977",
                "120.931946,31.951258",
                "120.932037,31.950878",
              ],
              center: "120.93454,31.951994",
            },
          ],
        },
        {
          id: "2",
          label: "文创中心",
          children: [
            {
              id: "2_1",
              label: "CR20011",
              area: "5.6万",
              use: "商业用地",
            },
            {
              id: "2_2",
              label: "CR20123",
              area: "1.3万",
              use: "文创用地",
            },
          ],
        },
        {
          id: "3",
          label: "会展中心",
          children: [
            {
              id: "3_1",
              label: "R20030",
              area: "4.2万",
              use: "文创用地",
            },
          ],
        },
        {
          id: "4",
          label: "医学中心",
          children: [
            {
              id: "4_1",
              label: "R20030",
              area: "3.3万",
              use: "医学用地",
            },
            {
              id: "4_2",
              label: "R12030",
              area: "2.4万",
              use: "医学用地",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.url = process.env.VUE_APP_IMG_POI;
    this.data.forEach((item) => {
      if (item.children && item.children.length > 0) {
        item.children.forEach((chd) => {
          if (chd.points) {
            this.addRange(chd);
          }
        });
      }
    });
    this.setCamera();
  },
  methods: {
    ...mapMutations("business", ["set_value"]),
    getCheck(checkedNodes, msg) {
      this.set_value({ key: "addressId", val: msg.checkedKeys });
    },
    checkChange(data, isSelect) {
      if (data.points) {
        this.$render.showHideCovering(`${data.id}_range`, "range", isSelect);
        this.$render.showHideCovering(`${data.id}_poi`, "poi", isSelect);
      }
    },
    setCamera() {
      this.$render.setCameraInfo({
        center_coord: "120.932597,31.957997",
        arm_distance: "1999.99939",
        pitch: "40.111206",
        yaw: "1.118195",
      });
    },
    addRange(data) {
      this.$render.addRange({
        id: `${data.id}_range`,
        points: data.points.map((p) => ({ coord: p })),
        color: "DE2C2E",
      });
      const pots = [
        {
          id: `${data.id}_poi`,
          text: data.label,
          coord: data.center,
          img: `${this.url}/business.png`,
          imgActive: `${this.url}/business.png`,
        },
      ];
      this.$handler.setPOI(pots, {
        always_show_label: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.road-tree {
  padding: 0 16px 20px 6px;
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
    &.parent1 {
      background: linear-gradient(
        180deg,
        #a46cef 0%,
        rgba(164, 108, 239, 0.1) 100%
      );
      border: 1px solid #a46cef;
    }
    &.parent2 {
      background: linear-gradient(
        180deg,
        #f52b2b 0%,
        rgba(245, 43, 43, 0.1) 100%
      );
      border: 1px solid #f52b2b;
    }
    &.parent3 {
      background: linear-gradient(
        180deg,
        #ec6b34 0%,
        rgba(236, 107, 52, 0.1) 100%
      );
      border: 1px solid #ec6b34;
    }
    &.parent4 {
      background: linear-gradient(
        180deg,
        #3c71ff 0%,
        rgba(60, 113, 255, 0.1) 100%
      );
      border: 1px solid #3c71ff;
    }
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
  ::v-deep .el-tree-node.is-checked .wrap {
    color: $color-FFFFFF;
    font-weight: 600;
  }
  ::v-deep .el-tree-node:focus > .el-tree-node__content {
    background-color: transparent;
  }
  &-label {
    line-height: 20px;
    font-size: $font-size-14;
    background: none;
    border: none;
    padding: 0;
  }
}
.wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  > span:nth-child(1) {
    display: block;
    width: 30%;
  }
  > span:nth-child(2) {
    width: 30%;
    text-align: left;
  }
}
.header {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 20px;
  display: flex;
  margin: 16px 0;

  > p:nth-child(1) {
    margin-left: 48px;
  }

  > p:nth-child(2) {
    margin-left: 78px;
  }
  > p:nth-child(3) {
    margin-left: 24px;
  }
}
</style>
