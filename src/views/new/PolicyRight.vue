<template>
  <v-inner is-right>
    <v-unit icon="City" title="企业研发机构扶持政策">
      <policy-msg :list="contList1"></policy-msg>
    </v-unit>
    <v-unit icon="City" title="新兴服务业扶持政策">
      <policy-msg :list="contList2"></policy-msg>
    </v-unit>
    <v-unit icon="City" title="人才安居政策">
      <policy-msg :list="contList3"></policy-msg>
    </v-unit>
  </v-inner>
</template>

<script>
import PolicyMsg from "@comp/business/PolicyMsg";
export default {
  components: { PolicyMsg },
  data() {
    return {
      contList1: [
        {
          name: "企业研发涵盖类型",
          val: "新一代信息技术、智慧建筑、高端纺织、精密医疗器械、机器人",
        },
        {
          name: "企业研发机构扶持条件",
          isList: true,
          val: [
            "全职研发人员占比60%以上",
            "年研发投入不低300万元、实收资本金不低500万",
          ],
        },
        {
          name: "创新创业扶持类目",
          val: "经营场所租金补贴、运营经费支持、研发设备补贴、贡献奖励和人才安居",
        },
        {
          name: "扶持启动资金",
          val: "≤500万元",
        },
        {
          name: "企业房租补贴",
          val: "五年减半",
        },
      ],
      contList2: [
        {
          name: "企业研发涵盖类型",
          val: "创新区发展定位的工业设计、创意设计、建筑设计、科技服务、人力资源服务等企业",
        },
        {
          name: "企业研发机构扶持条件",
          isList: true,
          val: [
            "创新区注册成立独立法人企业",
            "企业员工在创新区参加社会保险，缴纳社保费用",
          ],
        },
        {
          name: "创新创业扶持类目",
          val: "经营场所租金补贴、产业成长奖励、人才服务奖励",
        },
        {
          name: "扶持启动资金",
          val: "≤500万元",
        },
        {
          name: "企业房租补贴",
          val: "五年减半",
        },
      ],
      contList3: [
        {
          name: "企业研发涵盖类型",
          val: "属于创新创业团队、企业研发中心、新型研发机构、软件研发和信息技术类企业",
        },
        {
          name: "企业研发机构扶持条件",
          isList: true,
          val: [
            "注册时间须为2018年1月1日后",
            "户口须迁入创新区，区内缴纳社会保险、个人所得税",
            "本人和配偶在市区无住房、税前年薪不低于 13 万元",
          ],
        },
        {
          isRightList: true,
          name: "安居福利",
          val: [
            "A类,B类人才可以免费租专家公寓",
            "C类,D类人才可以优惠租50平米单身公寓",
            "E类,F类人才可以优惠租35平米单身公寓",
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
