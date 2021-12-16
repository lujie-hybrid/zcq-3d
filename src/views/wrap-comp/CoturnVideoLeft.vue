<template>
  <v-inner>
    <v-unit icon="monitor" title="紫琅科技城南门监控">
      <v-player
        url="http://192.168.1.197:8806/headimage/1.mp4"
        id="cvl1"
      ></v-player>
    </v-unit>
    <v-unit icon="monitor" title="紫琅科技城西北门监控">
      <v-player
        url="http://192.168.1.197:8806/headimage/2.mp4"
        id="cvl2"
      ></v-player>
    </v-unit>
    <v-unit icon="monitor" title="紫琅科技城东北门监控">
      <v-player
        url="http://192.168.1.197:8806/headimage/3.mp4"
        id="cvl3"
      ></v-player>
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
<style lang="scss" scoped></style>
