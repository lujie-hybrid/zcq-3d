<template>
  <div :class="['vd-wrap', { noPad: noPadding }]">
    <div :id="id" :style="{ width: width + 'px', height: height + 'px' }"></div>
  </div>
</template>

<script>
import Player from "xgplayer/dist/simple_player";

export default {
  props: {
    // 地址
    url: {
      type: String,
      default: "https://v-cdn.zjol.com.cn/280443.mp4",
    },
    // 视频id
    id: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 340,
    },
    height: {
      type: Number,
      default: 188,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.initVideo();
  },
  beforeDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  },
  methods: {
    // 初始化
    initVideo() {
      this.player = new Player({
        id: this.id,
        url: this.url,
        width: this.width,
        height: this.height,
        videoInit: true,
        autoplay: true,
        closeVideoClick: true,
        closeVideoDblclick: true,
        controls: false,
        // ignores: ["time", "progress", "play"],
        loop: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.vd-wrap {
  padding: 15px;
  &.noPad {
    padding: 0;
  }
  ::v-deep .xgplayer-start {
    display: none;
  }
  ::v-deep .xgplayer-skin-default {
    .xgplayer-controls {
      background-image: none;
    }
  }
}
</style>
