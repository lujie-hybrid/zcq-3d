<template>
  <div class=""></div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  beforeDestroy() {
    this.set_value({ key: "bgState", val: "" });
  },
  methods: {
    ...mapMutations(["set_value"]),
  },
};
</script>
<style lang="scss" scoped></style>
