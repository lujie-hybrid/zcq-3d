<template>
  <div class="hw">
    <div class="hw-header">
      <img src="~@img/win1.png" alt="" />
      <p>{{ title }}</p>
      <img src="~@img/win2.png" alt="" />
    </div>
    <img class="hw-line" src="~@img/win3.png" alt="" />
    <ul class="hw-list" v-if="list && list.length > 0">
      <template v-if="list && list.length > 1">
        <li class="hw-item" v-for="item in list" :key="item.id">
          <el-image
            class="hw-list-img"
            fit="cover"
            :src="item.imgUrl"
          ></el-image>
          <div class="hw-list-right">
            <p>{{ item.name }}</p>
            <p>
              {{ item.description }}
            </p>
          </div>
        </li>
      </template>
      <template v-if="list && list.length == 1">
        <li class="special" v-for="item in list" :key="item.id">
          <p>{{ item.name }}</p>
          <el-image
            class="special-img"
            fit="cover"
            :src="item.imgUrl"
          ></el-image>
          <p>
            {{ item.description }}
          </p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { list } from "@/api/modules/home";
export default {
  components: {},
  data() {
    return {
      list: [],
      title: "",
    };
  },
  created() {
    this.id = this.getQueryString("id");
    this.initData();
  },
  methods: {
    initData() {
      const r = list.find((d) => d.id == this.id);
      this.list = r.buildingList || [];
      this.title = r.name;
    },
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },
  },
};
</script>
<style lang="scss" scoped>
.hw-header {
  display: flex;
  align-items: center;
  > img:nth-child(1) {
    width: 15px;
    height: 15px;
  }
  > p:nth-child(2) {
    font-family: "FZLT-MEDIUM";
    font-size: $font-size-18;
    color: $color-FFFFFF;
    line-height: 21px;
    margin: 0 8px;
  }
  > img:nth-child(3) {
    width: 20px;
    height: 4px;
  }
}
.hw-line {
  width: 373px;
  height: 8px;
  margin-top: 9px;
}
.hw-list {
  width: 355px;
  background: rgba(28, 35, 63, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-left: 9px;
  padding: 16px;
  > .hw-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 8px;
    padding-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .special {
    > p:nth-child(1) {
      font-size: $font-size-14;
      color: $color-FFFFFF;
      line-height: 17px;
    }
    &-img {
      width: 100%;
      height: 90px;
      margin: 9px 0;
    }
    > p:nth-child(3) {
      font-size: $font-size-12;
      line-height: 16px;
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      line-clamp: 8;
      -webkit-box-orient: vertical;
      color: $color-FFFFFF;
    }
  }
  &-img {
    width: 80px;
    height: 48px;
    margin-right: 16px;
  }
  &-right {
    flex: 1;
    color: $color-FFFFFF;
    > p:nth-child(1) {
      font-size: $font-size-14;
      line-height: 17px;
    }
    > p:nth-child(2) {
      margin-top: 4px;
      font-size: $font-size-12;
      line-height: 16px;
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      line-clamp: 8;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
