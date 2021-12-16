<template>
  <v-inner is-right>
    <v-unit-detail v-for="(item, i) in top" :key="i" :title="item.title">
      <el-image :src="item.img" class="brd-img" fit="cover"></el-image>
      <div class="brd-desc">
        <p v-for="(msg, m) in item.desc" :key="m">
          {{ msg }}
        </p>
      </div>
    </v-unit-detail>
    <template v-if="bottom.list && bottom.list.length > 0">
      <v-unit-detail :title="bottom.title">
        <p class="brd-line"></p>
        <ul class="brd-list">
          <li v-for="(btm, b) in bottom.list" :key="b">
            {{ btm.name }}<span class="brd-val">{{ btm.val }}</span
            ><span v-if="btm.unit">{{ btm.unit }}</span>
          </li>
        </ul>
      </v-unit-detail>
    </template>
  </v-inner>
</template>

<script>
import { mapState } from "vuex";
import { businessDetail } from "@/views/data";
export default {
  components: {},
  data() {
    return {
      top: [],
      bottom: [],
    };
  },
  computed: {
    ...mapState("manage", ["detailId"]),
  },
  mounted() {
    this.getData(this.detailId);
  },
  watch: {
    detailId: function (val) {
      this.getData(val);
    },
  },
  methods: {
    getData(val) {
      this.top = businessDetail[val].top;
      if (businessDetail[val].bottom) {
        this.bottom = businessDetail[val].bottom;
      }
    },
  },
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
  &-line {
    width: 100%;
    height: 1px;
    background-color: #7d99e3;
    margin: 16px 0 18px 0;
  }
  &-list > li {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    margin-bottom: 16px;
    > span.brd-val {
      margin-left: 16px;
      margin-right: 4px;
      font-size: 18px;
      color: #f9a901;
      line-height: 25px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
