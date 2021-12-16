<template>
  <v-inner is-right>
    <v-unit-detail v-for="item in list" :key="item.id" :title="item.title">
      <p class="line"></p>
      <ul class="cont">
        <li v-for="(msg, m) in item.contTitle" :key="m">
          <p>{{ msg }}</p>
          <p>{{ item.cont[m] }}</p>
        </li>
      </ul>
    </v-unit-detail>
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
          id: "1_4",
          title: "R20033 地块控制指标",
          contTitle: ["地块编号", "地块面积", "用地规划", "容积率", "地块位置"],
          cont: [
            "R20033",
            "5.1万 平方米",
            "科创用地",
            "2-2.28",
            "南通创新区洪江东路南、胜利路东、崇州大道西、支路D北侧",
          ],
        },
        {
          id: "1_5",
          title: "CR20034 地块控制指标",
          contTitle: ["地块编号", "地块面积", "用地规划", "容积率", "地块位置"],
          cont: [
            "CR20034",
            "2.2万 平方米",
            "科创用地",
            "2-2.28",
            "南通创新区洪江东路南、胜利路东、崇州大道西、支路D北侧",
          ],
        },
      ],
      list: [],
    };
  },
  computed: {
    ...mapState("business", ["addressId"]),
  },
  watch: {
    addressId(val) {
      this.list = this.data.filter((d) => val.includes(d.id));
    },
  },
  mounted() {
    this.list = this.data.filter((d) => this.addressId.includes(d.id));
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #7d99e3;
  margin: 16px 0;
}
.cont {
  > li {
    display: flex;
    margin-bottom: 8px;
    > p:nth-child(1) {
      width: 70px;
      margin-right: 16px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
      line-height: 22px;
    }
    > p:nth-child(2) {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
      flex: 1;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
