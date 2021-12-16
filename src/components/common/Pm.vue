<template>
  <div class="pm">
    <div class="pm-top">
      <p :class="{ liang: msg.val > 50 }">{{ msg.val }}</p>
      <div class="pm-top-right">
        <p>
          AQI指数<span>{{ time }} 发布</span>
        </p>
        <div class="pm-top-tag">
          <p
            :class="{ liang: msg.val > 50 && t == 0 }"
            v-for="(tg, t) in tags"
            :key="t"
          >
            {{ tg }}
          </p>
        </div>
      </div>
    </div>
    <ul class="pm-list">
      <li v-for="(item, i) in msg.list" :key="i">
        <p>{{ item.val }}</p>
        <p>{{ item.name }}</p>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { getNowDate } from "@u/date";
export default {
  props: {
    msg: Object,
  },
  components: {},
  data() {
    return {
      time: getNowDate(),
    };
  },
  computed: {
    tags() {
      let arr = ["空气质量优", "首要污染物：PM2.5"];
      if (this.msg.val > 50) {
        arr = ["空气质量良", "首要污染物：PM2.5"];
      }
      return this.msg.tagList || arr;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.pm {
  padding: 16px;
  &-top {
    display: flex;
    align-items: center;
    padding-bottom: 22px;
    border-bottom: 1px solid #7d99e3;
    > p:nth-child(1) {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      width: 58px;
      height: 58px;
      background: url("~@img/pm-bg.png") no-repeat left top;
      background-size: 100% 100%;
      &.liang {
        background: url("~@img/pm-bg2.png") no-repeat left top;
      }
    }
    &-right {
      margin-left: 16px;
      > p:nth-child(1) {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #ffffff;
        line-height: 22px;
        > span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 17px;
          margin-left: 8px;
        }
        margin-bottom: 2px;
      }
    }
    &-tag {
      display: flex;
      align-items: center;
      > p {
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        padding: 2px 12px;
        margin-left: 16px;
        &:first-child {
          margin-left: 0;
        }
        &:nth-child(1) {
          background-color: #24ae26;
          &.liang {
            background-color: #3c71ff;
          }
        }
        &:nth-child(2) {
          background-color: #3c71ff;
        }
      }
    }
  }

  &-list {
    display: flex;
    margin-top: 22px;
    > li {
      margin-left: 8px;
      text-align: center;
      &:first-child {
        margin-left: 0;
      }
      > p:nth-child(1) {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.99);
        line-height: 21px;
        margin-bottom: 2px;
      }
      > p:nth-child(2) {
        width: 50px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(60, 113, 255, 0.6);
        // opacity: 0.8;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
        line-height: 14px;
      }
    }
  }
}
</style>
