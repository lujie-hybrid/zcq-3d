<template>
  <div :class="{ 'inner-left': !isRight, 'inner-right': isRight }">
    <div :class="{ 'inner-left-wrap': !isRight, 'inner-right-wrap': isRight }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isRight: {
      type: Boolean,
      default: false,
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
.inner {
  &-left {
    position: fixed;
    left: 0;
    top: 140px;
    width: 405px;
    padding-left: 30px;
    height: calc(100% - 140px);
    z-index: 55;
  }
  &-right {
    position: fixed;
    right: 0;
    top: 140px;
    width: 405px;
    padding-right: 30px;
    height: calc(100% - 140px);
    z-index: 55;
  }
}
</style>
