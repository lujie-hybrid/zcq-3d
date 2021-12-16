<template>
  <ul class="hp no-scroll" :style="{ margin: mg, height: height }">
    <li v-for="(item, i) in list" :key="i">
      <span>{{ item.name }}</span>
      <el-progress
        class="hp-progress"
        :stroke-width="16"
        :text-inside="true"
        :show-text="item.usageRate > 20"
        :percentage="item.usageRate"
        :color="i === 0 ? '#DD0000' : '#3C71FF'"
      ></el-progress>
      <span>{{ dealChartValue(item.total) }}</span>
    </li>
  </ul>
</template>

<script>
import { dealChartValue } from "@u/common";
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    // 间距
    mg: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "92px",
    },
  },
  components: {},
  data() {
    return {
      dealChartValue,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.hp {
  margin: 16px 5px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > li {
    display: flex;
    align-items: center;
    font-size: $font-size-14;
    color: $color-FFFFFF;
    margin-bottom: 12px;
    > span:nth-child(1) {
      margin-right: 8px;
    }
    > span:last-child {
      margin-left: 4px;
      display: block;
      width: 55px;
      text-align: right;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-progress {
    flex: 1;
    ::v-deep .el-progress-bar__outer {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 0;
    }
    ::v-deep .el-progress-bar__inner {
      border-radius: 0;
      text-align: left;
      .el-progress-bar__innerText {
        margin: 0 9px;
      }
    }
  }
}
</style>
