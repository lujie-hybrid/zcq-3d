<template>
  <div class="circle" :style="{ borderColor: border }">
    <p :style="{ backgroundColor: bg }"></p>
  </div>
</template>

<script>
export default {
  props: {
    bg: String,
    border: String,
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.circle {
  width: 12px;
  height: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    width: 6px;
    height: 6px;
    border-radius: 7px;
  }
}
</style>
