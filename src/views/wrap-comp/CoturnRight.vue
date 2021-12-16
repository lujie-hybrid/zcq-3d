<template>
  <v-inner is-right>
    <v-unit icon="City" title="紫琅科技城入驻企业统计">
      <h-l-pie id="cr-pie" :option="pieOption"></h-l-pie>
    </v-unit>
    <v-unit icon="menjin" title="紫琅科技城门禁状态 (实时)">
      <div class="rel">
        <h-l-pie id="cr-pie-middle" :option="pieOption2"></h-l-pie>
        <p class="crp-txt crp-txt1">58 <span>个</span></p>
        <p class="crp-txt crp-txt2">4 <span>个</span></p>
        <p class="crp-txt crp-txt3">2 <span>个</span></p>
      </div>
    </v-unit>
    <v-unit icon="energy" title="紫琅科技城今日用电监控">
      <div class="rel">
        <circle-gauge
          id="cr-pie-bottom"
          :option="gagueOption"
          :label-formatter="gagueOption.formatter"
        ></circle-gauge>
        <div class="cr-text">63763</div>
        <ul class="cr-content">
          <li v-for="(cont, c) in contents" :key="c">
            <span>{{ cont.name }}</span
            >{{ cont.value }}
          </li>
        </ul>
      </div>
    </v-unit>
  </v-inner>
</template>

<script>
import HLPie from "@comp/chart/HLPie";
import CircleGauge from "@comp/chart/CircleGauge";
import { dealChartValue } from "@u/common";
export default {
  components: { HLPie, CircleGauge },
  data() {
    return {
      pieOption: {
        height: 214,
        title: {
          text: "500",
        },
        series: [
          {
            name: "入驻企业(家)",
            data: [
              { name: "商业服务", value: 52 },
              { name: "公共服务", value: 120 },
              { name: "企业研发中心和总部", value: 120 },
              { name: "科研院所和高校科研机构", value: 208 },
            ],
            label: {
              formatter: "{c}",
            },
          },
        ],
      },
      pieOption2: {
        height: 200,
        title: {
          text: "64个",
          subtext: "总门禁数",
          left: "26%",
          top: "39%",
          textAlign: "center",
          textStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight: 400,
          },
          subtextStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: 400,
          },
        },
        legend: {
          itemGap: 32,
          top: "20%",
          textStyle: {
            color: ["#3C71FF", "#1FCA1A", "#A46CEF"],
          },
        },
        series: [
          {
            name: "门禁(个)",
            data: [
              { name: "正在运行门禁数", value: 58 },
              { name: "停止运行门禁数", value: 4 },
              { name: "发生故障门禁数", value: 2 },
            ],
            label: {
              show: false,
            },
          },
        ],
      },
      gagueOption: {
        height: 214,
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
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.cr {
  &-data {
    padding: 18px 16px;
    > li {
      font-size: $font-size-16;
      color: $color-FFFFFF;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      height: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      > span {
        margin: 0 8px 0 16px;
        font-size: $font-size-18;
        color: $color-F9A901;
      }
    }
  }
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
}
.crp-txt {
  position: absolute;
  left: 220px;
  color: $color-FFFFFF;
  font-size: $font-size-12;
  line-height: 17px;
}
.crp-txt1 {
  top: 64px;
  > span {
    color: $color-3C71FF;
  }
}
.crp-txt2 {
  top: 106px;
  > span {
    color: $color-F9A901;
  }
}
.crp-txt3 {
  top: 151px;
  > span {
    color: $color-CA1A1A;
  }
}
</style>
