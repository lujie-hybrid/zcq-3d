<template>
  <v-inner is-right>
    <v-unit icon="City" title="紫琅人才公寓数据概况">
      <home-msg :mgb="9" :list="list"></home-msg>
    </v-unit>
    <v-unit icon="City" title="入住紫琅人才公寓人才统计">
      <v-bar v-if="barOption" id="zl-per-detail" :option="barOption"></v-bar>
    </v-unit>
    <v-unit icon="City" title="紫琅人才公寓住房情况">
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
import VBar from "@comp/chart/VerticalBar";
import { businessLeftBottomChart } from "@u/chart";
import HomeMsg from "@comp/home/HomeMsg";
export default {
  components: { VBar, HomeMsg },
  data() {
    return {
      barOption: null,
      list: [
        {
          label: "紫琅人才公寓建筑面积",
          value: "50",
          unit: "万平方米",
        },
        {
          label: "紫琅人才公寓专家公寓",
          value: "6",
          unit: "栋",
        },
        {
          label: "紫琅人才公寓高层公寓",
          value: "20",
          unit: "栋",
        },
        {
          label: "单身公寓",
          value: "3",
          unit: "栋",
        },
        {
          label: "高层公寓",
          value: "1297",
          unit: "套",
        },
        {
          label: "第一第二批人才入住数",
          value: "41",
          unit: "户",
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
    this.barOption = businessLeftBottomChart({
      name: "入住紫琅人才公寓人才统计",
      xData: ["A类人才", "B类人才", "C类人才", "D类人才", "E类人才", "F类人才"],
      yData: [100, 150, 90, 60, 30, 140],
      yName: "单位：个/人",
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
