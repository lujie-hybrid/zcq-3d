<template>
  <el-tree
    :data="data"
    class="road-tree"
    node-key="id"
    :expand-on-click-node="false"
    default-expand-all
    :check-on-click-node="false"
    :default-checked-keys="[]"
    @node-click="nodeClick"
  >
    <span slot-scope="{ data }">
      <span
        :class="{
          [`road-tree-title parent${data.id}`]: data.children,
          'road-tree-label': !data.children,
        }"
        >{{ data.label }}</span
      >
      <i
        v-show="currentId === data.id"
        class="el-icon-check road-tree-select"
      ></i>
    </span>
  </el-tree>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    prefix: {
      type: String,
      default: "",
    },
  },
  components: {},
  data() {
    return {
      currentId: "",
    };
  },
  methods: {
    ...mapMutations({
      set_value: "set_value",
      set_manage_value: "manage/set_value",
    }),
    nodeClick(data) {
      if (!data.children) {
        this.currentId = data.id;
        this.$render.focusCovering(`${this.prefix}_${data.id}`, "poi", 600);
        // this.$render.setPOISelect(`${this.prefix}_${data.id}`);
        this.set_manage_value({ key: "leftList", val: [] });
        data.detailId &&
          this.set_manage_value({ key: "detailId", val: data.detailId });
      } else {
        this.$emit("parent");
        this.currentId = "";
        // data.children.forEach((chd) => {
        //   this.$render.setPOISelect(`${this.prefix}_${chd.id}`, false);
        // });
      }

      //   this.$render.removeAllCovering(["range", "poi"]);

      //   if (data.points) {
      //     this.set_business_value({ key: "areaId", val: data.id });
      //     setTimeout(() => {
      //       this.addRange(data);
      //       this.$render.focusCovering(
      //         `${data.id}_range_business`,
      //         "range",
      //         data.z
      //       );
      //       this.set_value({ key: "currentRightComponent", val: "area-detail" });
      //     }, 500);
      //   } else {
      //     this.addPoi(data);
      //     this.$render.focusCovering(`${data.id}_poi`, "poi", 300);
      //   }
      if (data.page) {
        this.set_value({ key: "currentRightComponent", val: data.page });
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
    &.parent1 {
      background: linear-gradient(
        180deg,
        #1fca1a 0%,
        rgba(31, 202, 26, 0.1) 100%
      );
      border: 1px solid #1fca1a;
    }
    &.parent2 {
      background: linear-gradient(
        180deg,
        #a46cef 0%,
        rgba(164, 108, 239, 0.1) 100%
      );
      border: 1px solid #a46cef;
    }
    &.parent3 {
      background: linear-gradient(
        180deg,
        #f52b2b 0%,
        rgba(245, 43, 43, 0.1) 100%
      );
      border: 1px solid #f52b2b;
    }
    &.parent4 {
      background: linear-gradient(
        180deg,
        #ec6b34 0%,
        rgba(236, 107, 52, 0.1) 100%
      );
      border: 1px solid #ec6b34;
    }
    &.parent5 {
      background: linear-gradient(
        180deg,
        #3c71ff 0%,
        rgba(60, 113, 255, 0.1) 100%
      );
      border: 1px solid #3c71ff;
    }
    &.parent6 {
      background: linear-gradient(
        180deg,
        #f9a901 0%,
        rgba(249, 169, 1, 0.1) 100%
      );
      border: 1px solid #f9a901;
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
  ::v-deep .el-tree-node:focus > .el-tree-node__content {
    background-color: transparent;
  }
  &-label {
    line-height: 20px;
    font-size: $font-size-14;
    color: rgba(255, 255, 255, 0.8);
    background: none;
    border: none;
    padding: 0;
  }
  &-select {
    color: #f9a901;
    margin-left: 10px;
    font-weight: bolder;
  }
}
</style>
