<template>
  <div class="unit">
    <div class="unit-title">
      <i :class="['unit-icon iconfont', `icon-${icon}`]"></i>{{ title }}
    </div>
    <div class="unit-cont"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.unit {
  width: 375px;
  margin-top: 25px;
  &:first-child {
    margin-top: 0;
  }
  &-title {
    width: 100%;
    height: 40px;
    background: url("~@img/unit-bg.png") no-repeat left top;
    background-size: 100% 100%;
    font-family: "FZLT-MEDIUM";
    color: $color-FFFFFF;
    font-size: $font-size-18;
    padding: 0 0 0 16px;
    display: flex;
    align-items: center;
  }
  &-cont {
    min-height: 50px;
    background: rgba(28, 35, 63, 0.8);
    border: 2px solid #7d99e3;
  }
  &-icon {
    font-size: $font-size-18;
    margin-right: 6px;
    color: $color-FFFFFF;
  }
}
</style>
