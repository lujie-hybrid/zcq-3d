<template>
  <v-inner is-right>
    <v-unit icon="City" title="紫琅科技一期数据概况">
      <home-msg :mgb="9" :list="list"></home-msg>
    </v-unit>
    <v-unit icon="City" title="紫琅科技城一期入驻统计">
      <h-l-pie id="zlone-pie" :option="pieOption" v-if="pieOption"></h-l-pie>
    </v-unit>
    <v-unit icon="City" title="紫琅科技城一期出租情况">
      <el-carousel class="cbl-slider" height="265px" :interval="5000">
        <el-carousel-item v-for="(item, i) in sliderList" :key="i">
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
  </v-inner>
</template>

<script>
import HLPie from "@comp/chart/HLPie";
import { businessRightTopChart } from "@u/chart";
import HomeMsg from "@comp/home/HomeMsg";
export default {
  components: { HLPie, HomeMsg },
  data() {
    return {
      pieOption: null,
      list: [
        {
          label: "占地面积",
          value: "50",
          unit: "万平方米",
        },
        {
          label: "总建筑面积",
          value: "60",
          unit: "万平方米",
        },
        {
          label: "办公面积",
          value: "40",
          unit: "万平方米",
        },
        {
          label: "总楼栋数",
          value: "20",
          unit: "栋",
        },
        {
          label: "车位",
          value: "4000",
          unit: "个",
        },
        {
          label: "已入驻企业",
          value: "62",
          unit: "家",
        },
        {
          label: "尚余招商空位",
          value: "1200",
          unit: "个",
        },
      ],
      sliderList: [
        [
          {
            name: "1A",
            useRate: 56,
            color: "#3C71FF",
          },
          {
            name: "1B",
            useRate: 60,
            color: "#FDC830",
          },
          {
            name: "2A",
            useRate: 62,
            color: "#BBF556",
          },
          {
            name: "2B",
            useRate: 73,
            color: "#CE46FE",
          },
          {
            name: "3A",
            useRate: 80,
            color: "#F37335",
          },
          {
            name: "3B",
            useRate: 90,
            color: "#0090FF",
          },
          {
            name: "4A",
            useRate: 55,
            color: "#E58B69",
          },
          {
            name: "4B",
            useRate: 76,
            color: "#439422",
          },
        ],
        [
          {
            name: "5A",
            useRate: 85,
            color: "#F85D41",
          },
          {
            name: "5B",
            useRate: 66,
            color: "#439422",
          },
          {
            name: "6A",
            useRate: 75,
            color: "#6D62F2",
          },
          {
            name: "6B",
            useRate: 52,
            color: "#C6FFDD",
          },
          {
            name: "7A",
            useRate: 92,
            color: "#F85D41",
          },
          {
            name: "7B",
            useRate: 66,
            color: "#0090FF",
          },
          {
            name: "8A",
            useRate: 50,
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
  mounted() {
    this.pieOption = businessRightTopChart({
      height: 215,
      name: "紫琅科技城一期入驻统计(家)",
      title: "500",
      data: [
        { name: "商业服务", value: 52 },
        { name: "公共服务", value: 120 },
        { name: "企业研发中心和总部", value: 120 },
        { name: "科研院所和高校科研机构", value: 208 },
      ],
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
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
