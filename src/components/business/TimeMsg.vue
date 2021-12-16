<template>
  <ul class="hr-time" v-if="list && list.length > 0">
    <li>
      <p>日期</p>
      <p>事件</p>
    </li>
    <li v-for="(item, i) in list" :key="i">
      <div class="hra-circle">
        <p><span></span></p>
        <p></p>
      </div>
      <div class="hra-right">
        <p>{{ item.time }}</p>
        <p :title="item.cont">{{ item.cont }}</p>
      </div>
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
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.hr-time {
  padding: 15px 13px;
  > li {
    display: flex;
    &:nth-child(2) .hra-right > p {
      color: $color-F9A901;
    }
    &:first-child {
      padding-left: 55px;
      color: rgba(255, 255, 255, 0.8);
      font-size: $font-size-12;
      line-height: 14px;
      margin-bottom: 15px;
      > p:nth-child(1) {
        width: 70px;
        margin-right: 50px;
      }
    }
    &:last-child .hra-circle > p:nth-child(2) {
      display: none;
    }
  }
}
.hra-circle {
  display: flex;
  flex-direction: column;
  > p:nth-child(1) {
    width: 11px;
    height: 11px;
    border-radius: 11px;
    background: rgba(60, 113, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background: $color-3C71FF;
    }
  }
  > p:nth-child(2) {
    width: 1px;
    height: 20px;
    margin-left: 5px;
    background-color: $color-1C233F;
  }
}
.hra-right {
  flex: 1;
  margin-left: 44px;
  display: flex;
  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: $color-FFFFFF;
    font-size: $font-size-12;
    line-height: 14px;
  }
  > p:nth-child(1) {
    width: 120px;
    text-align: left;
    padding-right: 5px;
  }
  > p:nth-child(2) {
    width: 167px;
  }
}
</style>
