<template>
  <v-inner>
    <v-unit icon="City" title="创新区环保监测列表">
      <my-tree @parent="setCamera" prefix="manage-pm" :data="list"></my-tree>
    </v-unit>
    <v-unit icon="City" title="中央森林公园环参监控">
      <v-pm :msg="msg1"></v-pm>
    </v-unit>
    <v-unit icon="City" title="环保公园环参监控">
      <v-pm :msg="msg2"></v-pm>
    </v-unit>
  </v-inner>
</template>

<script>
import MyTree from "@comp/manage/Tree";
export default {
  components: { MyTree },
  data() {
    return {
      list: [
        {
          id: "6",
          label: "环保监测点",
          page: "manage-pm-right",
          children: [
            {
              id: "p1",
              label: "中央森林公园监测点",
              detailId: "forest",
              page: "manage-pm-detail",
            },
            {
              id: "p2",
              label: "紫琅湖公园监测点",
              detailId: "zlh",
              page: "manage-pm-detail",
            },
            {
              id: "p3",
              label: "环保公园监测点",
              detailId: "hb",
              page: "manage-pm-detail",
            },
            {
              id: "p4",
              label: "云林绿丘环保监测点",
              detailId: "yl",
              page: "manage-pm-detail",
            },
            {
              id: "p5",
              label: "湿地森林环保监测点",
              detailId: "sd",
              page: "manage-pm-detail",
            },
          ],
        },
      ],
      msg1: {
        val: 20,
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
        val: 22,
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
  mounted() {
    this.$handler.addManagePm();
    this.setCamera();
  },
  methods: {
    setCamera() {
      this.$render.setCameraInfo({
        center_coord: "120.933815,31.96701",
        arm_distance: "1258.571533",
        pitch: "29.867371",
        yaw: "336.315125",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.mb22 {
  margin-bottom: 22px;
}
</style>
