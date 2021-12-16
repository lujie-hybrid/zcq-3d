<template>
  <v-inner is-right>
    <v-unit icon="City" title="南通美术馆数据概况">
      <ul class="ms-top">
        <li v-for="(item, i) in msTopData" :key="i">
          <p>{{ item.name }}</p>
          <p>
            <span>{{ item.val }}</span
            >{{ item.unit }}
          </p>
        </li>
      </ul>
    </v-unit>
    <v-unit icon="message" title="美术馆近期艺术展/活动">
      <ul class="ms-bottom">
        <li v-for="(ms, m) in msBottomData" :key="m">
          <el-image class="ms-bottom-img" fit="cover" :src="ms.img"></el-image>
          <div class="ms-bottom-right">
            <p>
              <span>{{ ms.title }}</span
              >{{ ms.types }}
            </p>
            <p v-for="(obj, o) in ms.contTitle" :key="o">
              <span>{{ obj }}</span>
              {{ ms.cont[o] }}
            </p>
          </div>
        </li>
      </ul>
    </v-unit>
  </v-inner>
</template>

<script>
import { msTopData, msBottomData } from "@/views/data";
export default {
  components: {},
  data() {
    return {
      msTopData,
      msBottomData,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.ms-top {
  padding: 15px;
  > li {
    display: flex;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    > p {
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
      > span {
        font-size: 18px;
        color: #f9a901;
        line-height: 25px;
        margin: 0 4px 0 16px;
      }
    }
  }
}
.ms-bottom {
  padding: 14px;
  > li {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-img {
    width: 100px;
    height: 152px;
    margin-right: 16px;
  }
  &-right {
    flex: 1;
    > p {
      font-size: 14px;
      color: #ffffff;
      line-height: 20px;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      > span {
        color: rgba(255, 255, 255, 0.8);
        line-height: 17px;
        font-size: 12px;
      }
      &:first-child {
        margin-bottom: 15px;
        > span {
          font-size: 16px;
          color: #f9a901;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
