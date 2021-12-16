<template>
  <div class="navbar">
    <p class="navbar-title">南通·创新区智慧综合管理平台</p>
    <ul class="navbar-list">
      <li
        @click="changeNav(i)"
        :class="{ active: navbarIndex === i }"
        v-for="(item, i) in navList"
        :key="i"
      >
        {{ item }}
      </li>
    </ul>
    <!-- <el-select
      class="header-select"
      popper-class="header-popper"
      @change="changeTime"
      v-model="period"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select> -->
    <div class="weather">
      <!-- <el-button @click="getPoints">取点</el-button> -->
      <span class="w-left-line"></span>
      <p class="w-cont1">
        日期 : {{ date
        }}<i
          @click="showSelectMenu"
          :class="['iconfont selectCursor', `icon-${timeIcon[timeIndex]}`]"
        ></i
        >{{ time[timeIndex] }}
      </p>
      <span class="w-right-line"></span>
      <span class="w-left-line ml30"></span>
      <p class="w-cont2">
        <i
          @click="showSelectMenu"
          :class="[
            'iconfont selectCursor',
            `icon-${weatherIcon[weatherIndex]}`,
          ]"
        ></i
        >{{ weathers[weatherIndex] }}<span>8℃ ～ 16℃</span>
      </p>
      <span class="w-right-line"></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { clickNavbar } from "@u/common";
import { getNowDate } from "@u/date";
export default {
  components: {},
  data() {
    return {
      // period: "12:30",
      // options: ["8:30", "12:30", "15:30", "18:30", "22:30"],
      navList: ["创新区CIM", "智慧招商", "智慧管理"],
      time: ["早晨", "正午", "下午", "傍晚", "夜间"],
      timeIcon: ["zaochen", "qingtian", "qingtian", "bangwan", "yejian"],
      weathers: ["晴朗", "下雨", "多云", "下雪"],
      weatherIcon: ["qingtian", "xiayu", "duoyun", "xiaxue"],
      date: getNowDate(),
    };
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "navbarIndex",
    "showSelect",
    "timeIndex",
    "weatherIndex",
  ]),
  methods: {
    ...mapMutations(["set_value"]),
    // // select框改变时候，改变时间
    // changeTime(val) {
    //   this.$render.setEnvTime(val);
    // },
    getPoints() {
      this.$render.startGetCoord();
    },

    showSelectMenu() {
      console.log(this.showSelect, "showSelect");
      this.set_value({ key: "showSelect", val: !this.showSelect });
    },

    changeNav(val) {
      // this.set_value({ key: "navbarIndex", val });
      clickNavbar(val);
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background: url("~@img/top-bg.png") no-repeat left top;
  background-size: 100% 100%;
  display: flex;
  padding-right: 30px;
  z-index: 50;
  &-title {
    font-size: $font-size-32;
    font-family: "FZLT-LARGE";
    padding: 30px 0 0 30px;
    color: $color-FFFFFF;
    min-width: 478px;
  }
  &-list {
    display: flex;
    padding: 30px 0 0 67px;
    flex: 1;
    > li {
      width: 185px;
      height: 43px;
      margin-left: 10px;
      background: url("~@img/navbar-bg.png") no-repeat left top;
      background-size: 100% 100%;
      text-align: center;
      line-height: 43px;
      color: $color-FFFFFF;
      font-size: $font-size-22;
      font-family: "FZLT-MEDIUM";
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.active {
        background: url("~@img/navbar-bg-active.png") no-repeat left top;
      }
    }
  }
}
.header-select {
  width: 130px;
  margin-top: 37px;
  margin-right: 30px;
  ::v-deep .el-input__inner {
    background: $color-3C71FF;
    // box-shadow: 0px 2px 3px 0px #c5e3ff;
    border-radius: 0;
    border: 1px solid $color-3C71FF;
    height: 34px;
    line-height: 34px;
    font-weight: 500;
    color: #ffffff;
    font-size: 18px;
  }
  ::v-deep .el-input__suffix {
    top: 50%;
    transform: translate(0, -50%);
    height: auto;
    i {
      color: #ffffff;
    }
  }
}
.weather {
  display: flex;
  align-items: center;
  > p {
    font-size: 18px;
    color: #ffffff;
    line-height: 25px;
    font-weight: 400;
    display: flex;
    align-items: center;
    &.w-cont1 {
      margin: 0 16px;
      > i {
        margin-left: 30px;
        margin-right: 8px;
      }
    }
    &.w-cont2 {
      margin: 0 16px;
      > i {
        margin-right: 8px;
      }
      > span {
        margin-left: 30px;
      }
    }
    > i {
      font-size: 30px;
      color: $color-F9A901;
    }
  }
}
.w-left-line {
  width: 2px;
  height: 30px;
  border: 1px solid #7d99e3;
  border-right: none;
}
.w-right-line {
  width: 2px;
  height: 30px;
  border: 1px solid #7d99e3;
  border-left: none;
}
.ml30 {
  margin-left: 30px;
}

.selectCursor {
  cursor: pointer;
}
</style>
