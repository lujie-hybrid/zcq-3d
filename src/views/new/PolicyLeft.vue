<template>
  <v-inner>
    <v-unit icon="City" title="科技创新政策方向总览">
      <ul class="msg-list">
        <li v-for="(item, i) in msgList" :key="i">
          <p class="msg-list-circle">{{ i + 1 }}</p>
          <p>{{ item }}</p>
        </li>
      </ul>
    </v-unit>
    <v-unit icon="City" title="创新创业项目扶持政策">
      <policy-msg :list="contList"></policy-msg>
    </v-unit>
  </v-inner>
</template>

<script>
import PolicyMsg from "@comp/business/PolicyMsg";
export default {
  components: { PolicyMsg },
  data() {
    return {
      msgList: [
        "扶持创新创业项目发展",
        "鼓励企业兴办研发机构",
        "支持新兴生产服务业发展",
        "支持重大项目落户",
        "支持专业研究所落户",
        "紫琅湖科技领军英才计划",
        "创新区人才安居",
        "高新技术企业培育和认定",
        "深化科技企业知识产权建设",
        "支持集成电路设计企业聚集、发展",
        "支持新技术新产品首购和推广",
      ],
      contList: [
        {
          name: "创新创业涵盖类型",
          val: "新一代信息技术、智慧建筑、高端纺织、精密医疗器械、机器人",
        },
        {
          name: "创新创业项目扶持条件",
          isList: true,
          val: [
            "创新区注册成立独立法人企业",
            "企业员工在创新区参加社会保险(北上广深不限)",
          ],
        },
        {
          name: "创新创业扶持类目",
          val: "启动资金、房租补贴、贡献奖励、创业投资、人才引进奖励和人才安居等",
        },
        {
          name: "扶持启动资金",
          val: "≤100万元",
        },
        {
          name: "企业房租补贴",
          val: "三年全免，三年减半",
        },
        {
          isRightList: true,
          name: "人才引进奖励",
          val: ["创新人才 ≤100万元", "经管人才 ≤50万元"],
        },
      ],
    };
  },
  mounted() {
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
.msg-list {
  padding: 16px;
  > li {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-circle {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: rgba(60, 113, 255, 0.4);
    font-size: 12px;
    color: #ffffff;
    margin-right: 8px;
  }
}
</style>
