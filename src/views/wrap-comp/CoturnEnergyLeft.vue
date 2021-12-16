<template>
  <v-inner>
    <v-unit icon="energy" title="紫琅科技城今日用电监控">
      <div class="rel">
        <circle-gauge
          id="cel-pie-top"
          :option="gagueOption"
          :label-formatter="gagueOption.formatter"
        ></circle-gauge>
        <div class="cel-text">63763</div>
        <ul class="cel-content">
          <li v-for="(cont, c) in contents" :key="c">
            <span>{{ cont.name }}</span
            >{{ cont.value }}
          </li>
        </ul>
      </div>
    </v-unit>
    <v-unit icon="energy" title="紫琅科技城用电趋势统计">
      <div class="rel">
        <h-l-line id="cel-line" :option="lineOption"></h-l-line>
        <ul class="cel-tab">
          <li
            @click="activeTabIndex = t"
            :class="{ active: t === activeTabIndex }"
            v-for="(tb, t) in tabs"
            :key="t"
          >
            {{ tb }}
          </li>
        </ul>
      </div>
    </v-unit>
    <v-unit icon="energy" title="紫琅科技城能耗告警 (实时)">
      <div class="cel-warning">
        <div class="warn-icon">
          <div class="warn-icon-1">
            <div class="warn-icon-2">
              <div class="warn-icon-3">
                <p>2</p>
                <p>报警</p>
              </div>
            </div>
          </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="warn-cont">
          <li v-for="(item, i) in conts" :key="i">
            <p>{{ item.no }} {{ item.title }}</p>
            <p>位置:{{ item.pos }}</p>
            <p>时间:{{ item.time }}</p>
          </li>
        </ul>
      </div>
    </v-unit>
  </v-inner>
</template>

<script>
import CircleGauge from "@comp/chart/CircleGauge";
import { dealChartValue } from "@u/common";
import HLLine from "@comp/chart/HLLine";
export default {
  components: { CircleGauge, HLLine },
  data() {
    return {
      activeTabIndex: 0,
      tabs: ["日", "月", "年"],
      gagueOption: {
        height: 195,
        formatter: function (value) {
          return dealChartValue(value);
        },
        series: [
          {
            min: 0,
            max: 100000,
            data: [
              {
                value: 60000,
              },
            ],
            axisLabel: {
              fontSize: 8,
            },
          },
        ],
      },
      contents: [
        {
          name: "用电总量 (kwh) :",
          value: "16186046",
        },
        {
          name: "同比节能 :",
          value: "11.6%",
        },
        {
          name: "今日用电量 (kwh) :",
          value: "63763",
        },
        {
          name: "冷源系统(cop) :",
          value: "4",
        },
      ],
      lineOption: {
        height: 298,
        grid: {
          height: 180,
          containLabel: false,
          left: "12%",
          right: "5%",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          data: [
            "00:00-02:00",
            "02:00-04:00",
            "04:00-06:00",
            "06:00-08:00",
            "08:00-10:00",
            "10:00-12:00",
            "12:00-14:00",
            "14:00-16:00",
            "16:00-18:00",
            "18:00-20:00",
            "20:00-22:00",
            "22:00-24:00",
          ],
          axisLabel: {
            rotate: 60,
          },
        },
        yAxis: {
          name: "单位:人",
          nameGap: 25,
          min: 0,
          max: 28000,
          interval: 4000,
        },
        series: [
          {
            data: [
              8000, 20000, 12000, 12000, 20000, 24000, 24000, 22000, 21000,
              20000, 18000, 10000,
            ],
            label: {
              show: false,
            },
            symbolSize: 6,
          },
        ],
      },
      conts: [
        {
          no: "①",
          title: "J06-B01-A01供电异常",
          pos: "10A地库/负一楼",
          time: "2021-09-11 14:58:34",
        },
        {
          no: "②",
          title: "J06-B01-B01供电异常",
          pos: "10B地库/负一楼",
          time: "2021-09-11 16:58:34",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.cel {
  &-text {
    background: url("~@img/cr-text.png") no-repeat left top;
    background-size: 100% 100%;
    width: 56px;
    height: 56px;
    position: absolute;
    bottom: 12%;
    left: 20%;
    font-family: "FZLT-MEDIUM";
    color: $color-F9A901;
    font-size: $font-size-14;
    text-align: center;
    line-height: 56px;
  }
  &-content {
    position: absolute;
    left: 202px;
    top: 50%;
    transform: translate(0, -50%);
    > li {
      color: $color-F9A901;
      line-height: 14px;
      font-size: $font-size-10;
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
      > span {
        width: 86px;
        margin-right: 4px;
        color: $color-FFFFFF;
      }
    }
  }
  &-tab {
    display: flex;
    position: absolute;
    right: 20px;
    top: 15px;
    > li {
      width: 24px;
      height: 16px;
      font-size: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color-FFFFFF;
      background-color: rgba(28, 35, 63, 0.5);
      &.active {
        background-color: $color-3C71FF;
      }
    }
  }
  &-warning {
    padding: 22px 0 22px 16px;
    display: flex;
    align-items: center;
    .warn-icon {
      position: relative;
      width: 160px;
      height: 160px;
      border-radius: 100%;
      background: rgba(60, 113, 255, 0.1);
      border: 1px solid rgba(60, 113, 255, 0.5);
      padding: 18px;
      &-1 {
        width: 116px;
        height: 116x;
        border-radius: 100%;
        background: rgba(60, 113, 255, 0.15);
        border: 1px solid rgba(60, 113, 255, 0.5);
        padding: 18px;
      }
      &-2 {
        width: 82px;
        height: 82px;
        border-radius: 100%;
        background: rgba(60, 113, 255, 0.36);
        box-shadow: 0px 1px 14px 0px rgba(60, 113, 255, 0.5);
        border: 1px solid rgba(60, 113, 255, 0.5);
        padding: 12px;
      }
      &-3 {
        width: 58px;
        height: 58px;
        border-radius: 100%;
        background: #3160dd;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(60, 113, 255, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > p:nth-child(1) {
          color: $color-F9A901;
          font-size: $font-size-20;
          line-height: 23px;
        }
        > p:nth-child(2) {
          color: $color-FFFFFF;
          font-size: $font-size-10;
          line-height: 14px;
        }
      }
      > span {
        position: absolute;
        border-radius: 100%;
      }
      > span:nth-child(2) {
        width: 8px;
        height: 8px;
        background-color: rgba(60, 113, 255, 0.5);
        top: 27px;
        right: 35px;
      }
      > span:nth-child(3) {
        width: 4px;
        height: 4px;
        background-color: $color-7A9EFF;
        top: 42px;
        right: 17px;
      }
      > span:nth-child(4) {
        width: 5px;
        height: 5px;
        background: rgba(60, 113, 255, 0.4);
        bottom: 30px;
        right: 79px;
      }
      > span:nth-child(5) {
        width: 7px;
        height: 7px;
        background: rgba(60, 113, 255, 0.7);
        bottom: 91px;
        left: 15px;
      }
    }

    .warn-cont {
      margin-left: 14px;
      > li {
        padding-bottom: 16px;
        &:last-child {
          padding-bottom: 0;
        }
        > p {
          font-size: $font-size-10;
          color: $color-FFFFFF;
          line-height: 14px;
          margin-bottom: 8px;
          padding-left: 4px;
          &:first-child {
            color: $color-F9A901;
            padding-left: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
