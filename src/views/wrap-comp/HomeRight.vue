<template>
  <v-inner is-right>
    <v-unit icon="project" title="中央森林景观建设用地规划">
      <h-r-bar id="hr-bar" :option="barOption"></h-r-bar>
    </v-unit>
    <v-unit icon="message" title="医学中心工程节点">
      <!-- <ul class="hr-doctor">
        <li v-for="(item, i) in doctors" :key="i">
          <el-image class="hrd-img" fit="cover" :src="item.url"></el-image>
          <div class="fx-1">
            <div class="fx fx-sb fx-v-c">
              <p class="hrd-name">{{ item.name }}</p>
              <p class="fx-1">{{ item.job }}</p>
              <p>{{ item.time }}</p>
            </div>
            <p class="hrd-desc">{{ item.desc }}</p>
          </div>
        </li>
      </ul> -->
      <time-msg :list="homeRightMiddle"></time-msg>
    </v-unit>
    <v-unit icon="Activity" title="国际会展中心近期活动">
      <home-activity :list="homeRightBottom"></home-activity>
    </v-unit>
  </v-inner>
</template>

<script>
import HRBar from "@comp/chart/HRBar";
import HomeActivity from "@comp/home/HomeActivity";
import TimeMsg from "@comp/business/TimeMsg";
import { homeRightBottom, homeRightMiddle } from "@/views/data";
export default {
  components: { HRBar, HomeActivity, TimeMsg },
  data() {
    return {
      homeRightBottom,
      homeRightMiddle,
      barOption: {
        title: {
          text: "单位：平方公里",
        },
        height: 275,
        yAxis: {
          data: [
            "道路与\n交通设施",
            "科创园区",
            "旅游景观",
            "文创休闲",
            "公共设施",
            "城镇居住",
          ],
        },
        series: [
          {
            name: "2020",
            data: [600, 60, 220, 500, 700, 300],
          },
          {
            name: "2021",
            data: [1100, 150, 500, 700, 900, 600],
          },
        ],
      },
      // doctors: [
      //   {
      //     name: "张峻",
      //     job: "主任医师",
      //     time: "2021/05/18",
      //     url: "https://img0.baidu.com/it/u=2858488888,2391407268&fm=26&fmt=auto&gp=0.jpg",
      //     desc: "从事耳鼻喉科临床超过25年余，对耳鼻喉科各种疾病的诊治有着丰富的临床经验。",
      //   },
      //   {
      //     name: "王丽君",
      //     job: "副主任医师",
      //     time: "2021/05/18",
      //     url: "https://img0.baidu.com/it/u=1714087477,2433281372&fm=253&fmt=auto&app=120&f=JPEG?w=200&h=200",
      //     desc: "擅长乳腺疾病微创治疗及乳腺癌手术治疗，掌握乳腺癌综合治疗国际最新动态。",
      //   },
      // ],
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
// .hr-doctor {
//   padding: 16px;
//   > li {
//     display: flex;
//     font-size: $font-size-14;
//     color: $color-FFFFFF;
//     margin-bottom: 16px;
//     &:last-child {
//       margin-bottom: 0;
//     }
//   }
// }
// .hrd {
//   &-img {
//     width: 56px;
//     height: 74px;
//     margin-right: 16px;
//   }
//   &-name {
//     font-size: $font-size-16;
//     line-height: 22px;
//     margin-right: 16px;
//   }
//   &-desc {
//     line-height: 20px;
//     margin-top: 8px;
//     text-align: justify;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 2;
//     line-clamp: 2;
//     -webkit-box-orient: vertical;
//   }
// }
</style>
