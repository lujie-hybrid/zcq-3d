<template>
  <div class="h-top">
    <p class="h-top-title">{{ msg.title }}</p>
    <ul class="h-top-cont">
      <li v-for="(item, i) in msg.contTitle" :key="i">
        <p class="h-top-circle"><span></span></p>
        <p>{{ item }}：</p>
        <p>{{ msg.cont[i] }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: Object,
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.h-top {
  padding: 16px;
  &-title {
    font-size: 16px;
    color: #ffffff;
    line-height: 22px;
    padding-bottom: 15px;
    border-bottom: 1px solid #7d99e3;
    margin-bottom: 15px;
  }
  &-circle {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin-right: 8px;
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
  &-cont {
    > li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      > p {
        font-size: 16px;
        color: #ffffff;
        line-height: 22px;
        &:first-child {
          color: rgba(255, 255, 255, 0.8);
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
