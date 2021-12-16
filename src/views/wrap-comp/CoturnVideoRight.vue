<template>
  <v-inner is-right>
    <v-unit icon="monitor" title="紫琅科技城1号楼监控">
      <v-player
        url="http://192.168.1.197:8806/headimage/1.mp4"
        id="cvr1"
      ></v-player>
    </v-unit>
    <v-unit icon="monitor" title="紫琅科技城2号楼监控">
      <v-player
        url="http://192.168.1.197:8806/headimage/2.mp4"
        id="cvr2"
      ></v-player>
    </v-unit>
    <v-unit icon="monitor" title="紫琅科技城视频巡航页面">
      <div class="cvr-wrap">
        <v-player
          url="http://192.168.1.197:8806/headimage/3.mp4"
          id="cvr3"
          no-padding
          :width="180"
          :height="136"
        ></v-player>
        <v-player
          url="http://192.168.1.197:8806/headimage/4.mp4"
          id="cvr4"
          no-padding
          :width="180"
          :height="136"
        ></v-player>
        <v-player
          url="http://192.168.1.197:8806/headimage/5.mp4"
          id="cvr5"
          no-padding
          :width="180"
          :height="136"
        ></v-player>
        <v-player
          url="http://192.168.1.197:8806/headimage/1.mp4"
          id="cvr6"
          no-padding
          :width="180"
          :height="136"
        ></v-player>
      </div>
    </v-unit>
  </v-inner>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.cvr-wrap {
  display: flex;
  flex-wrap: wrap;
  .vd-wrap:nth-child(1) {
    margin: 0 8px 6px 0;
  }
  .vd-wrap:nth-child(2) {
    margin-bottom: 6px;
  }
  .vd-wrap:nth-child(3) {
    margin-right: 8px;
  }
}
</style>
