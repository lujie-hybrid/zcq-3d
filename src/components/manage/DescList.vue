<template>
  <div>
    <v-unit-detail v-for="(item, i) in list" :key="i" :title="item.title">
      <el-image :src="item.img" class="brd-img" fit="cover"></el-image>
      <div class="brd-desc">
        <p>
          {{ item.desc }}
        </p>
      </div>
    </v-unit-detail>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  components: {},
  data() {
    return {};
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
</style>
