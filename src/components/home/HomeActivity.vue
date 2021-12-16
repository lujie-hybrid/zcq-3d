<template>
  <ul class="hr-activity" v-if="list && list.length > 0">
    <li v-for="(acv, a) in list" :key="a">
      <div class="hra-circle">
        <p><span></span></p>
        <p></p>
      </div>
      <div class="hra-right">
        <p>
          <span>{{ acv.time }}</span
          ><span v-if="acv.name">{{ acv.name }}</span>
        </p>
        <p>{{ acv.title }}</p>
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
.hr-activity {
  padding: 15px 13px;
  > li {
    display: flex;
    &:last-child {
      > p:nth-child(2) {
        margin-bottom: 0;
      }
      .hra-right > p:nth-child(2) {
        margin-bottom: 0;
      }
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
    flex: 1;
    margin-left: 5px;
    background-color: $color-1C233F;
  }
}
.hra-right {
  flex: 1;
  margin-left: 10px;
  > p:nth-child(1) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    > span:nth-child(1) {
      font-size: $font-size-10;
      color: $color-FFFFFF;
      line-height: 14px;
    }
    > span:nth-child(2) {
      font-size: $font-size-10;
      color: $color-F9A901;
      line-height: 14px;
    }
  }
  > p:nth-child(2) {
    height: 50px;
    background: rgba(28, 35, 63, 0.8);
    text-align: justify;
    font-size: $font-size-16;
    line-height: 20px;
    color: $color-FFFFFF;
    padding: 3px 10px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }
}
</style>
