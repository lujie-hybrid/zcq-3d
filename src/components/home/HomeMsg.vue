<template>
  <ul class="hl-data" v-if="list && list.length > 0">
    <li
      :style="{ marginBottom: mgb + 'px' }"
      v-for="(item, i) in list"
      :key="i"
    >
      {{ item.label }}:<span>{{ item.value }}</span
      >{{ item.unit }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    mgb: {
      type: Number,
      default: 11,
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
.hl {
  &-data {
    padding: 18px 16px;
    > li {
      font-size: $font-size-16;
      color: $color-FFFFFF;
      display: flex;
      align-items: center;
      height: 25px;
      &:last-child {
        margin-bottom: 0 !important;
      }
      > span {
        margin: 0 8px 0 16px;
        font-size: $font-size-18;
        color: $color-F9A901;
      }
    }
  }
}
</style>
