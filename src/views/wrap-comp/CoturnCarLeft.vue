<template>
  <v-inner>
    <v-unit icon="car" title="紫琅科技城车位状态 (实时)">
      <div class="ccl-status">
        <circle-msg>
          <div class="ccl-status-cont">
            <p>2204</p>
            <p>剩余车位</p>
          </div>
        </circle-msg>
        <div class="ccl-status-text">
          <p><span></span>车位已满<span></span>车位空余</p>
          <p class="st-item"><span>总车位:</span>3210 个</p>
          <p class="st-item"><span>在场车辆数:</span>986 辆</p>
          <p class="st-item"><span>空余车位数:</span>2224 个</p>
        </div>
      </div>
    </v-unit>
    <v-unit icon="car" title="西北门实时通行车辆">
      <div class="ccl-car-wrap">
        <el-image
          src="https://img.tjjz24.com/1.jpg"
          class="ccl-car-img"
          fit="cover"
        ></el-image>
        <p class="ccl-car-text">
          <i class="iconfont icon-car"></i>
          <span>粤B·6Y889</span>
          <span>临时车辆</span>
        </p>
      </div>
    </v-unit>
    <v-unit icon="car" title="南门实时通行车辆">
      <div class="ccl-car-wrap">
        <el-image
          src="https://img.tjjz24.com/1.jpg"
          class="ccl-car-img"
          fit="cover"
        ></el-image>
        <p class="ccl-car-text">
          <i class="iconfont icon-car"></i>
          <span>粤B·6Y889</span>
          <span>蔡*莫</span>
          <span>内部车辆</span>
        </p>
      </div>
    </v-unit>
  </v-inner>
</template>

<script>
import CircleMsg from "@comp/coturn/CircleMsg";
export default {
  components: { CircleMsg },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.ccl-status {
  width: 370px;
  height: 214px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  &-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    > p:nth-child(1) {
      color: $color-FFFFFF;
      line-height: 28px;
      font-size: $font-size-20;
    }
    > p:nth-child(2) {
      color: $color-FFFFFF;
      line-height: 22px;
      font-size: $font-size-16;
    }
  }
  &-text {
    margin-left: 22px;
    > p:nth-child(1) {
      display: flex;
      align-items: center;
      font-size: $font-size-10;
      color: $color-FFFFFF;
      line-height: 14px;
      margin-bottom: 24px;
      > span {
        display: block;
        width: 10px;
        height: 10px;
        margin-right: 8px;
      }
      > span:nth-child(1) {
        background-color: $color-CA1A1A;
      }
      > span:nth-child(2) {
        margin-left: 22px;
        background-color: $color-3C71FF;
      }
    }
    .st-item {
      display: flex;
      font-size: $font-size-12;
      line-height: 14px;
      color: $color-FFFFFF;
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
      > span {
        display: block;
        width: 94px;
      }
    }
  }
}
.ccl-car-wrap {
  padding: 16px 0 8px 16px;
}
.ccl-car-img {
  width: 334px;
  height: 187px;
  margin-bottom: 5px;
}
.ccl-car-text {
  display: flex;
  align-items: center;
  > i {
    font-size: 16px;
    margin-right: 8px;
    color: $color-FFFFFF;
  }
  > span {
    margin-right: 32px;
    font-size: $font-size-14;
    color: $color-FFFFFF;
    line-height: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
