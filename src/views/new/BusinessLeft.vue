<template>
  <v-inner>
    <v-unit icon="City" title="招商总体概况">
      <ul class="bl-top">
        <li v-for="(item, i) in list" :key="i">
          <v-mini-circle
            class="bl-top-circle"
            :border="item.colors[0]"
            :bg="item.colors[1]"
          ></v-mini-circle>
          <div class="bl-top-cont">
            <p>{{ item.title }}</p>
            <p>
              {{ item.val }} <span>{{ item.unit }}</span>
            </p>
          </div>
        </li>
      </ul>
    </v-unit>
    <v-unit icon="City" title="总部经济企业/高校研发院">
      <div class="bl-center">
        <div class="bl-center-title">
          <p>企业名称</p>
          <p>总投资额</p>
        </div>
        <ul class="bl-center-list">
          <li v-for="(obj, o) in centerList" :key="o">
            <v-mini-circle
              border="rgba(60, 113, 255, 0.4)"
              bg="#3C71FF"
            ></v-mini-circle>
            <p :title="obj.name">{{ obj.name }}</p>
            <p>{{ obj.val }}</p>
          </li>
        </ul>
      </div>
    </v-unit>
    <v-unit icon="City" title="落户中创区人才类型统计">
      <v-bar
        v-if="barOption"
        id="business-left-bar"
        :option="barOption"
      ></v-bar>
    </v-unit>
  </v-inner>
</template>

<script>
import VBar from "@comp/chart/VerticalBar";
import { businessLeftBottomChart } from "@u/chart";
export default {
  components: { VBar },
  data() {
    return {
      list: [
        {
          title: "企业总部中心",
          val: "71.6",
          unit: "万平方米",
          colors: ["#A46CEF", "#1FCA1A"],
        },
        {
          title: "入驻企业",
          val: "500",
          unit: "家",
          colors: ["#A46CEF", "#3C71FF"],
        },
        {
          title: "签署合作协议",
          val: "349",
          unit: "份",
          colors: ["#F9A901", "#A46CEF"],
        },
        {
          title: "引进项目",
          val: "5100",
          unit: "项",
          colors: ["#3C71FF", "#F9A901"],
        },
        {
          title: "内资总投额",
          val: "5100",
          unit: "万",
          colors: ["#F9A901", "#FF5A3C"],
        },
        {
          title: "企业经营支持",
          val: "3000",
          unit: "万",
          colors: ["#A46CEF", "#1FCA1A"],
        },
      ],
      centerList: [
        {
          name: "北京大学长三角光电科学研究院",
          val: "2800 万",
        },
        {
          name: "中北大学南通智能光机电研究院",
          val: "1500 万",
        },
        {
          name: "中国科学院上海技术物理研究所南通智能感知研究院",
          val: "1300 万",
        },
        {
          name: "沃太研究院",
          val: "500 万",
        },
        {
          name: "腾讯双创社区",
          val: "1000 万",
        },
      ],
      barOption: null,
    };
  },
  mounted() {
    this.barOption = businessLeftBottomChart({
      name: "落户中创区人才类型统计",
      xData: ["A类人才", "B类人才", "C类人才", "D类人才", "E类人才", "F类人才"],
      yData: [180, 170, 130, 180, 150, 130],
      yName: "单位：个/人",
    });
    this.$handler.addBusinessPoi();
    this.setCamera();
  },
  methods: {
    setCamera() {
      this.$render.setCameraInfo({
        center_coord: "120.925191,31.967769",
        arm_distance: "660.803589",
        pitch: "30.033508",
        yaw: "319.820007",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.bl-top {
  display: flex;
  flex-wrap: wrap;
  height: 222px;
  padding: 36px 16px 0 16px;
  > li {
    margin-left: 10px;
    display: flex;
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:nth-child(5),
    &:nth-child(6) {
      margin-left: 18px;
    }
  }
  &-circle {
    margin-top: 5px;
  }
  &-cont {
    margin-left: 5px;
    > p:nth-child(1) {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
      line-height: 22px;
      margin-bottom: 16px;
    }
    > p:nth-child(2) {
      font-size: 18px;
      font-weight: normal;
      color: #f9a902;
      line-height: 21px;
      > span {
        font-size: 12px;
      }
    }
  }
}
.bl-center {
  padding: 16px 12px 8px 12px;
  &-title {
    display: flex;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 18px;
    padding-left: 28px;
    margin-bottom: 24px;
    > p:nth-child(1) {
      width: 220px;
    }
  }
  &-list {
    > li {
      font-size: 14px;
      color: #ffffff;
      line-height: 17px;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      > p:nth-child(2) {
        width: 220px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 5px;
        margin-left: 16px;
      }
      > p:nth-child(3) {
        color: #f9a902;
      }
    }
  }
}
</style>
