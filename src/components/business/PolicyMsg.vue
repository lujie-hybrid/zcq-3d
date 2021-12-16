<template>
  <ul class="cont">
    <li v-for="(msg, m) in list" :key="m">
      <div class="cont-item-vertical" v-if="msg.isList">
        <p>{{ msg.name }}：</p>
        <div class="cont-item-wrap" v-for="(obj, o) in msg.val" :key="o">
          <p class="cont-item-circle"><span></span></p>
          <p class="cont-item-text">{{ obj }}</p>
        </div>
      </div>
      <div class="cont-item" v-else-if="msg.isRightList">
        <p>{{ msg.name }}：</p>
        <div class="cont-item-right">
          <p v-for="(rg, r) in msg.val" :key="r">{{ rg }}</p>
        </div>
      </div>
      <p class="cont-desc" v-else>
        {{ msg.name }}：<span>{{ msg.val }}</span>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
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
.cont {
  padding: 16px;
  > li {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-item {
    display: flex;
    font-size: 14px;
    color: #ffffff;
    line-height: 20px;
    &-right {
      margin-left: 6px;
      flex: 1;
      > p {
        font-size: 14px;
        color: #f9a901;
        line-height: 20px;
        margin-bottom: 4px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &-wrap {
      display: flex;
      align-items: center;
      margin-top: 4px;
    }
    &-vertical {
      font-size: 14px;
      color: #ffffff;
      line-height: 20px;
    }
    &-text {
      font-size: 14px;
      color: #f9a901;
      line-height: 20px;
    }
    &-circle {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      margin-right: 6px;
      background: rgba(60, 113, 255, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      > span {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background: #3c71ff;
      }
    }
  }
  &-desc {
    font-size: 14px;
    color: #ffffff;
    line-height: 20px;
    > span {
      color: #f9a901;
      margin-left: 6px;
    }
  }
}
</style>
