<template>
  <v-inner is-right>
    <v-unit icon="City" title="紫琅湖公园环参监控">
      <v-pm :msg="msg1"></v-pm>
    </v-unit>
    <v-unit icon="City" title="云林绿丘环参监控">
      <v-pm :msg="msg2"></v-pm>
    </v-unit>
    <v-unit icon="City" title="湿地森林环参监控">
      <v-pm :msg="msg3"></v-pm>
    </v-unit>
  </v-inner>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg1: {
        val: 15,
        time: "2021-09-01 14:00",
        list: [
          { name: "PM2.5", val: 3.5 },
          { name: "PM10", val: 2.4 },
          { name: "O3", val: 3.5 },
          { name: "SO2", val: 2.3 },
          { name: "NO2", val: 1.5 },
          { name: "CO", val: 0.4 },
        ],
      },
      msg2: {
        val: 54,
        time: "2021-09-01 14:00",
        list: [
          { name: "PM2.5", val: 3.5 },
          { name: "PM10", val: 2.4 },
          { name: "O3", val: 3.5 },
          { name: "SO2", val: 2.3 },
          { name: "NO2", val: 1.5 },
          { name: "CO", val: 0.4 },
        ],
      },
      msg3: {
        val: 55,
        time: "2021-09-01 14:00",
        list: [
          { name: "PM2.5", val: 3.5 },
          { name: "PM10", val: 2.4 },
          { name: "O3", val: 3.5 },
          { name: "SO2", val: 2.3 },
          { name: "NO2", val: 1.5 },
          { name: "CO", val: 0.4 },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
