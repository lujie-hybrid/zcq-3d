<template>
  <div class="cm-icon">
    <div class="icon-inner">
      <div class="icon-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.cm-icon {
  width: 148px;
  height: 148px;
  background: rgba(60, 113, 255, 0.2);
  border-radius: 100%;
  padding: 8px;
  .icon-inner {
    width: 132px;
    height: 132px;
    border-radius: 100%;
    background: rgba(60, 113, 255, 0.2);
    padding: 7px;
  }
  .icon-content {
    width: 118px;
    height: 118px;
    border-radius: 100%;
    background: linear-gradient(
      180deg,
      rgba(142, 173, 255, 0.05) 0%,
      #3c71ff 100%
    );
    box-shadow: 0px 1px 4px 0px #acc2ff;
  }
}
</style>
