<template>
  <v-inner is-right>
    <v-scroll class="wrap">
      <v-unit-detail v-for="(item, i) in list" :key="i" :title="item.title">
        <el-image :src="item.img" class="brd-img" fit="cover"></el-image>
        <div class="brd-desc">
          <p>
            {{ item.desc }}
          </p>
        </div>
      </v-unit-detail>
    </v-scroll>
  </v-inner>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      data: [
        {
          id: "1",
          children: [
            {
              img: require("@img/area1.jpg"),
              title: "中央森林公园",
              desc: "中央森林公园位于南通市中央创新区内，占地面积约 294 公顷。是联系长江、通启运河、通吕运河的生 态轴带，是中央创新区的生态轴带、活动公园、交流平台。",
            },
          ],
        },
        {
          id: "2",
          children: [
            {
              img: require("@img/area2.jpg"),
              title: "紫琅科技城一期",
              desc: "紫琅科技城一期总建筑面积60万平方米。包括四个功能组团，一是科技研发组团；二是企业研发中心和总部组团；三是公共服务组团；四是配套的商业服务组团。",
            },
            {
              img: require("@img/area2.jpg"),
              title: "紫琅科技城二期",
              desc: "科创中心南接居美路，东临兴富路，北接居佳路，西靠一号路，位于紫琅湖的西侧。高度聚焦新一代信息技术产业，统筹布局生物医药、节能环保、智慧建筑等新兴产业、特色产业。",
            },
            {
              img: require("@img/area3.jpg"),
              title: "紫琅新天地",
              desc: "紫琅新天地位于朝阳路以北，崇川大道以东，建筑总面积约42600㎡，打造城市核心新地标，为创新区未来商业赋能，注入强劲动力。",
            },
            {
              img: require("@img/area4.jpg"),
              title: "紫琅人才公寓",
              desc: "紫琅人才公寓位于通富大道东侧、居佳路南侧。总建筑面积约29.4万㎡，可拎包入住。建成后符合购房条件的人才可优惠购房，不具备购房条件的可以优惠价租赁单身公寓。",
            },
            {
              img: require("@img/area5.jpeg"),
              title: "金融商务中心",
              desc: "金融商务中心位于紫琅湖畔，规划占地面积约410亩，总建筑面积约75万平方米。将集聚银行、证券公司、保险公司、基金管理公司等金融机构南通地区总部。",
            },
          ],
        },
        {
          id: "3",
          children: [
            {
              img: require("@img/area6.jpg"),
              title: "南通美术馆",
              desc: "南通美术馆出自世界建筑设计大师保罗·安德鲁之手，其类似艺术魔盒的建筑造型，生动诠释了南通文化圆润通达的艺术气韵。",
            },
            {
              img: require("@img/area7.jpg"),
              title: "南通大剧院",
              desc: "南通大剧院由建筑大师保罗·安德鲁领衔设计，设计理念为“琴山珠水”，是保罗·安德鲁在中国的“封笔之作”，形态似协奏的钢琴。",
            },
          ],
        },
        {
          id: "4",
          children: [
            {
              img: require("@img/area8.jpg"),
              title: "南通国际展览中心",
              desc: "南通国际会展中心以一馆两翼的形式组织功能及空间，国际展览中心为大型展厅，整体功能配置完整，流线清晰，模数化结构，使用灵活。",
            },
            {
              img: require("@img/area9.jpg"),
              title: "南通国际会议中心",
              desc: "国际会议中心其外部造型简练优美。面湖一侧，形体舒展向上的屋顶和节奏性的柱廊，神似龙舟游浆，气宇轩昂，展现一种积极的竞争意识和团结一致的民间精神。",
            },
            {
              img: require("@img/area10.jpg"),
              title: "南通会展中心酒店（万豪酒店）",
              desc: "国际会议中心其外部造型简练优美。面湖一侧，形体舒展向上的屋顶和节奏性的柱廊，神似龙舟游浆，气宇轩昂，展现一种积极的竞争意识和团结一致的民间精神。",
            },
          ],
        },
        {
          id: "5",
          children: [
            {
              img: require("@img/area11.jpeg"),
              title: "上海交通大学医学院附属仁济南通医院",
              desc: "上海交通大学医学院附属仁济南通医院是南通市第一人民医院和上海仁济医院合作的重要成果，必将有力助推南通市第一人民医院建设成为长三角地区重要的区域医疗中心。",
            },
            {
              img: require("@img/area12.jpg"),
              title: "南通大学附属医院",
              desc: "南通大学附属医院成立于1911年，医院占地面积近130亩，建筑面积8.8万余平方米，是一所省属综合性教学医院。医院拥有34个临床科室，17个医技科室，18个研究室、实验室。",
            },
          ],
        },
      ],
      list: [],
    };
  },
  computed: {
    ...mapState("business", ["areaId"]),
  },
  watch: {
    areaId(val) {
      const item = this.data.find((d) => d.id == val);
      this.list = item.children;
    },
  },
  mounted() {
    const item = this.data.find((d) => d.id == this.areaId);
    this.list = item.children;
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.brd {
  &-img {
    width: 100%;
    height: 153px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
  &-desc > p {
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
    text-align: justify;
  }
}
.wrap {
  height: 85.5vh;
}
</style>
