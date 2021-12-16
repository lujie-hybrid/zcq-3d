<template>
  <v-inner>
    <v-unit icon="City" title="紫琅科技城入驻企业统计">
      <div class="rel">
        <h-l-pie id="business-pie" :option="pieOption"></h-l-pie>
        <p class="pie-title">单位：家</p>
      </div>
    </v-unit>
    <v-unit icon="City" title="紫琅科技城楼栋出租情况">
      <el-carousel class="cbl-slider" height="265px" :interval="5000">
        <el-carousel-item v-for="(item, i) in list" :key="i">
          <ul class="cbl-progress">
            <li v-for="(cont, i) in item" :key="i">
              <div class="rel">
                <el-progress
                  :width="72"
                  :stroke-width="5"
                  type="dashboard"
                  :percentage="cont.useRate"
                  :color="cont.color"
                ></el-progress>
                <p class="pro-title">{{ cont.name }}</p>
              </div>
              <p class="txt">出租率: {{ cont.useRate }}%</p>
              <p class="txt">空置率: {{ 100 - cont.useRate }}%</p>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </v-unit>
    <v-unit icon="City" title="紫琅科技城各楼企业数统计">
      <v-bar id="business-bar" :option="barOption"></v-bar>
    </v-unit>
  </v-inner>
</template>

<script>
import HLPie from "@comp/chart/HLPie";
import VBar from "@comp/chart/VerticalBar";
export default {
  components: { HLPie, VBar },
  data() {
    return {
      pieOption: {
        height: 214,
        title: {
          text: "500",
          top: "48%",
        },
        legend: {
          top: "35%",
          left: "52%",
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
            center: ["27%", "55%"],
            label: {
              formatter: "{c}",
            },
          },
        ],
      },
      barOption: {
        height: 238,
        xAxis: {
          data: [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B",
            "9A",
            "9B",
          ],
          type: "category",
          axisLine: {
            show: true,
          },
        },
        grid: {
          left: 42,
          top: 42,
          right: 16,
          bottom: 0,
          height: 164,
          containLabel: false,
        },
        yAxis: {
          type: "value",
          max: 200,
          interval: 50,
          name: "单位: 家",
          splitLine: {
            show: false,
          },
          nameGap: 18,
          axisLine: {
            show: true,
          },
          axisLabel: {
            verticalAlign: "top",
          },
        },
        series: [
          {
            barWidth: 10,
            data: [
              50, 80, 100, 70, 50, 10, 70, 10, 40, 20, 120, 160, 60, 30, 80, 10,
              70, 10,
            ],
            name: "各楼企业数统计",
            itemStyle: {
              color: "#3C71FF",
              borderWidth: 1,
              borderColor: "#3C71FF",
              shadowColor: "#3C71FF",
              shadowBlur: "3px",
              shadowOffsetX: 0,
              shadowOffsetY: "1px",
            },
            label: {
              show: true,
              color: "#FFFFFF",
              fontSize: 8,
              fontWeight: 400,
              position: "top",
            },
          },
        ],
      },
      list: [
        [
          {
            name: "1A",
            useRate: 70,
            color: "#3C71FF",
          },
          {
            name: "1B",
            useRate: 70,
            color: "#FDC830",
          },
          {
            name: "2A",
            useRate: 70,
            color: "#BBF556",
          },
          {
            name: "2B",
            useRate: 70,
            color: "#CE46FE",
          },
          {
            name: "3A",
            useRate: 70,
            color: "#F37335",
          },
          {
            name: "3B",
            useRate: 70,
            color: "#0090FF",
          },
          {
            name: "4A",
            useRate: 70,
            color: "#E58B69",
          },
          {
            name: "4B",
            useRate: 70,
            color: "#439422",
          },
        ],
        [
          {
            name: "5A",
            useRate: 70,
            color: "#F85D41",
          },
          {
            name: "5B",
            useRate: 70,
            color: "#439422",
          },
          {
            name: "6A",
            useRate: 70,
            color: "#6D62F2",
          },
          {
            name: "6B",
            useRate: 70,
            color: "#C6FFDD",
          },
          {
            name: "7A",
            useRate: 70,
            color: "#F85D41",
          },
          {
            name: "7B",
            useRate: 70,
            color: "#0090FF",
          },
          {
            name: "8A",
            useRate: 70,
            color: "#CE46FE",
          },
          {
            name: "8B",
            useRate: 70,
            color: "#439422",
          },
        ],
        [
          {
            name: "9A",
            useRate: 70,
            color: "#3C71FF",
          },
          {
            name: "9B",
            useRate: 70,
            color: "#F85D41",
          },
        ],
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.pie-title {
  position: absolute;
  top: 16px;
  left: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 14px;
  font-size: $font-size-10;
}
.cbl-progress {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;

  .pro-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-F9A901;
    font-size: $font-size-14;
    line-height: 20px;
    font-family: "FZLT-MEDIUM";
  }
  > li {
    margin-right: 16px;
    margin-bottom: 8px;
    .txt {
      font-size: $font-size-10;
      line-height: 12px;
      color: $color-EBEBEB;
      margin-bottom: 4px;
      text-align: center;
      &:nth-child(1) {
        margin-top: 6px;
      }
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}
.cbl-slider {
  ::v-deep .el-carousel__arrow {
    display: none;
  }
}
</style>
