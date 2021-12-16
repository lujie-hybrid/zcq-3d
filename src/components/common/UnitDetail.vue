<template>
  <div class="unit-detail">
    <img class="unit-detail-icon" src="~@img/unit-detail.png" />
    <p class="unit-detail-title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
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
.unit-detail {
  width: 100%;
  background: rgba(28, 35, 63, 0.8);
  border: 2px solid #7d99e3;
  padding: 16px;
  position: relative;
  min-height: 60px;
  margin-top: 22px;
  &:first-child {
    margin-top: 0;
  }
  &-title {
    font-size: 16px;
    color: #ffffff;
    line-height: 18px;
  }
  &-icon {
    width: 36px;
    position: absolute;
    right: 8px;
    top: 8px;
  }
}
</style>
