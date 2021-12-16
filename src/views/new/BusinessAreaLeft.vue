<template>
  <v-inner>
    <v-unit icon="City" title="创新区区域分布总览表">
      <el-tree
        :data="data"
        class="road-tree"
        node-key="id"
        :expand-on-click-node="false"
        default-expand-all
        :check-on-click-node="false"
        :default-checked-keys="[]"
        @node-click="nodeClick"
      >
        <span slot-scope="{ data }">
          <span
            :class="{
              [`road-tree-title parent${data.id}`]: data.children,
              'road-tree-label': !data.children,
            }"
            >{{ data.label }}</span
          >
          <i
            v-show="currentId === data.id"
            class="el-icon-check road-tree-select"
          ></i>
        </span>
      </el-tree>
    </v-unit>
  </v-inner>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      currentId: "",
      data: [
        {
          id: "1",
          label: "中央森林景观",
          points: [
            "120.932755,31.968332",
            "120.931549,31.96806",
            "120.931213,31.967665",
            "120.931007,31.967091",
            "120.930107,31.966721",
            "120.929749,31.966045",
            "120.929649,31.964909",
            "120.930061,31.964037",
            "120.93084,31.963516",
            "120.931252,31.962648",
            "120.930672,31.960836",
            "120.929184,31.960508",
            "120.927856,31.960342",
            "120.927307,31.957521",
            "120.929573,31.955168",
            "120.929428,31.95269",
            "120.930115,31.951918",
            "120.931747,31.951077",
            "120.931793,31.950844",
            "120.932022,31.950827",
            "120.931999,31.95118",
            "120.931732,31.951414",
            "120.930344,31.952368",
            "120.929993,31.952852",
            "120.929955,31.954615",
            "120.931396,31.955229",
            "120.933319,31.95516",
            "120.934608,31.955353",
            "120.935905,31.957302",
            "120.935707,31.958445",
            "120.93634,31.959885",
            "120.934296,31.96084",
            "120.933945,31.961592",
            "120.935188,31.963985",
            "120.935013,31.965117",
            "120.935982,31.965872",
            "120.934517,31.967955",
            "120.93409,31.969244",
            "120.934898,31.970442",
            "120.936188,31.974426",
            "120.937462,31.97991",
            "120.937973,31.980021",
            "120.937965,31.985031",
            "120.937973,31.986813",
            "120.939293,31.988117",
            "120.938416,31.98938",
            "120.939301,31.993099",
            "120.933632,31.993261",
            "120.933212,31.98917",
            "120.934608,31.985168",
            "120.933159,31.982164",
            "120.933281,31.980042",
            "120.934036,31.977194",
            "120.934601,31.973051",
            "120.934311,31.970972",
            "120.933281,31.970182",
            "120.933342,31.969017",
          ],
          center: "120.933388,31.968027",
          color: "39E934",
          z: 2000,
          bgSize: "120,30",
          children: [
            {
              id: "1_1",
              label: "中央森林景观带",
              center: "120.933388,31.968027",
              page: "business-forest-detail",
            },
          ],
        },
        {
          id: "2",
          label: "科创中心",
          bgSize: "100,30",
          color: "B287EB",
          points: [
            "120.919243,31.97389",
            "120.922752,31.973957",
            "120.925575,31.974091",
            "120.928215,31.974035",
            "120.927856,31.970087",
            "120.927216,31.964596",
            "120.927948,31.964603",
            "120.929115,31.965458",
            "120.930115,31.963358",
            "120.930435,31.961424",
            "120.927727,31.960554",
            "120.926895,31.957579",
            "120.929085,31.955078",
            "120.929077,31.952707",
            "120.930046,31.951525",
            "120.931412,31.951029",
            "120.931381,31.950733",
            "120.932251,31.950703",
            "120.932281,31.951405",
            "120.930389,31.953037",
            "120.930412,31.954037",
            "120.935112,31.954943",
            "120.937019,31.960129",
            "120.934692,31.961758",
            "120.935921,31.964945",
            "120.93911,31.964815",
            "120.93911,31.966799",
            "120.942261,31.966719",
            "120.942596,31.96504",
            "120.942619,31.964434",
            "120.943222,31.958969",
            "120.943436,31.949903",
            "120.931831,31.950163",
            "120.927353,31.950409",
            "120.922623,31.950951",
            "120.916901,31.951212",
          ],
          z: 1800,
          center: "120.924934,31.963051",
          children: [
            {
              id: "2_1",
              label: "紫琅科技城一期",
              page: "zl-one-detail",
              // points: [
              //   "120.923729,31.970037",
              //   "120.927628,31.969675",
              //   "120.927101,31.964987",
              //   "120.922905,31.965319",
              // ],
              center: "120.925087,31.967672",
            },
            {
              id: "2_2",
              label: "紫琅科技城二期",
              // points: [
              //   "120.924942,31.959393",
              //   "120.927368,31.959421",
              //   "120.927994,31.961384",
              //   "120.925797,31.961632",
              // ],
              center: "120.926331,31.960653",
              detailId: "area_zl2",
              page: "manage-hospital-detail",
            },
            {
              id: "2_3",
              label: "紫琅新天地",
              // points: [
              //   "120.925858,31.96212",
              //   "120.926857,31.963634",
              //   "120.92865,31.963497",
              //   "120.929771,31.961964",
              // ],
              detailId: "area_zl",
              center: "120.927834,31.962749",
              page: "manage-hospital-detail",
            },
            {
              id: "2_4",
              label: "紫琅人才公寓",
              center: "120.919006,31.963268",
              page: "zl-per-detail",
            },
            {
              id: "2_5",
              detailId: "area_jr",
              label: "金融商务区中心",
              // points: [
              //   "120.939056,31.967106",
              //   "120.94223,31.967037",
              //   "120.941956,31.9697",
              //   "120.938599,31.969725",
              // ],
              center: "120.940559,31.968355",
              page: "manage-hospital-detail",
            },
          ],
        },
        {
          id: "3",
          label: "文创中心",
          bgSize: "100,30",
          z: 1200,
          color: "F52B2B",
          children: [
            {
              id: "3_1",
              label: "南通美术馆",
              center: "120.937607,31.966137",
              page: "ms-detail",
              key: "meishu",
            },
            {
              id: "3_2",
              label: "南通大剧院",
              center: "120.936844,31.969023",
              page: "jy-detail",
              key: "dajuyuan",
            },
          ],
          points: [
            "120.936066,31.972651",
            "120.935402,31.970638",
            "120.934517,31.968935",
            "120.935555,31.967171",
            "120.936142,31.966236",
            "120.936417,31.965309",
            "120.938972,31.965292",
            "120.938934,31.96693",
            "120.942177,31.966869",
            "120.942062,31.969912",
            "120.946785,31.969772",
            "120.947952,31.972385",
          ],
          center: "120.938507,31.969887",
        },
        {
          id: "4",
          label: "会展中心",
          bgSize: "100,30",
          z: 1200,
          color: "FF6D30",
          points: [
            "120.928421,31.974007",
            "120.927994,31.969269",
            "120.927666,31.965742",
            "120.927452,31.964762",
            "120.927681,31.96479",
            "120.929314,31.966162",
            "120.930214,31.967342",
            "120.930786,31.96759",
            "120.931381,31.968365",
            "120.9328,31.96887",
            "120.932793,31.969152",
            "120.933014,31.970663",
            "120.933929,31.971331",
            "120.934036,31.973818",
          ],
          center: "120.931221,31.970732",
          children: [
            {
              id: "4_1",
              label: "南通国际展览中心",
              center: "120.929611,31.971674",
              page: "show-detail",
              detailId: "zl",
              key: "zhanlan",
            },
            {
              id: "4_2",
              label: "南通国际会议中心",
              center: "120.930641,31.969315",
              page: "metting-detail",
              key: "huiyi",
            },
            {
              id: "4_3",
              label: "南通会展中心酒店（万豪酒店）",
              bgSize: "250,30",
              center: "120.928566,31.967115",
              page: "hotel-detail",
              key: "wanghao",
            },
          ],
        },
        {
          id: "5",
          label: "医学中心",
          bgSize: "100,30",
          z: 1600,
          color: "5C80E1",
          points: [
            "120.920502,31.985107",
            "120.919289,31.974316",
            "120.933815,31.974203",
            "120.93338,31.977415",
            "120.932846,31.98012",
            "120.932861,31.981888",
            "120.933189,31.983376",
            "120.93383,31.984278",
            "120.934204,31.985327",
          ],
          center: "120.926445,31.981049",
          children: [
            {
              id: "5_1",
              label: "上海交通大学医学院附属仁济南通医院",
              bgSize: "320,30",
              detailId: "area_sh",
              // points: [
              //   "120.920219,31.980255",
              //   "120.925041,31.980232",
              //   "120.925972,31.985119",
              //   "120.920692,31.98498",
              // ],
              center: "120.923027,31.98279",
              page: "manage-hospital-detail",
              // color: "5C80E1",
            },
            {
              id: "5_2",
              label: "南通大学附属医院",
              detailId: "area_fs",
              page: "manage-hospital-detail",
              center: "120.981194,32.004196",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.url = process.env.VUE_APP_IMG_POI;
    this.$render.removeAllCovering(["range", "poi"]);
    this.data.forEach((item) => {
      this.addRange(item);
    });
    this.setCamera();
  },
  methods: {
    ...mapMutations({
      set_manage_value: "manage/set_value",
      set_value: "set_value",
      set_business_value: "business/set_value",
    }),
    setCamera() {
      this.$render.setCameraInfo({
        center_coord: "120.927046,31.959634",
        arm_distance: "2000.0",
        pitch: "36.368042",
        yaw: "0.41861",
      });
    },
    nodeClick(data) {
      this.$render.removeAllCovering(["range", "poi"]);
      this.currentId = data.id;
      if (data.points) {
        this.set_business_value({ key: "areaId", val: data.id });
        setTimeout(() => {
          this.addRange(data);
          this.$render.focusCovering(
            `${data.id}_range_business`,
            "range",
            data.z
          );
          this.set_value({ key: "currentRightComponent", val: "area-detail" });
        }, 500);
      } else {
        this.addPoi(data);
        if (data.key) {
          this.$handler.setSpecialCamera(data.key);
        } else {
          this.$render.focusCovering(`${data.id}_poi`, "poi", 600);
        }
        data.detailId &&
          this.set_manage_value({ key: "detailId", val: data.detailId });
      }
      if (data.page) {
        this.set_value({ key: "currentRightComponent", val: data.page });
      }
    },
    addRange(data) {
      this.$render.addRange({
        id: `${data.id}_range_business`,
        color: data.color,
        points: data.points.map((p) => ({ coord: p })),
      });
      const pots = [
        {
          id: `${data.id}_poi`,
          text: data.label,
          coord: data.center,
          img: `${this.url}/business.png`,
          imgActive: `${this.url}/business.png`,
          bgSize: data.bgSize,
        },
      ];
      this.$handler.setPOI(pots, {
        always_show_label: true,
      });
    },
    addPoi(data) {
      const pots = [
        {
          id: `${data.id}_poi`,
          text: data.label,
          coord: data.center,
          img: `${this.url}/business.png`,
          imgActive: `${this.url}/business.png`,
          bgSize: data.bgSize || "160,30",
        },
      ];
      this.$handler.setPOI(pots, {
        always_show_label: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.road-tree {
  padding: 20px 16px;
  background: rgba(28, 35, 63, 0.5);

  &-title {
    background: linear-gradient(
      180deg,
      $color-3C71FF 0%,
      rgba(60, 113, 255, 0.1) 100%
    );
    border-radius: 4px;
    border: 1px solid $color-3C71FF;
    padding: 2px 12px;
    line-height: 22px;
    font-size: $font-size-16;
    color: $color-FFFFFF;
    &.parent1 {
      background: linear-gradient(
        180deg,
        #1fca1a 0%,
        rgba(31, 202, 26, 0.1) 100%
      );
      border: 1px solid #1fca1a;
    }
    &.parent2 {
      background: linear-gradient(
        180deg,
        #a46cef 0%,
        rgba(164, 108, 239, 0.1) 100%
      );
      border: 1px solid #a46cef;
    }
    &.parent3 {
      background: linear-gradient(
        180deg,
        #f52b2b 0%,
        rgba(245, 43, 43, 0.1) 100%
      );
      border: 1px solid #f52b2b;
    }
    &.parent4 {
      background: linear-gradient(
        180deg,
        #ec6b34 0%,
        rgba(236, 107, 52, 0.1) 100%
      );
      border: 1px solid #ec6b34;
    }
    &.parent5 {
      background: linear-gradient(
        180deg,
        #3c71ff 0%,
        rgba(60, 113, 255, 0.1) 100%
      );
      border: 1px solid #3c71ff;
    }
  }
  ::v-deep .el-tree-node__content {
    height: auto;
    margin-bottom: 14px;
    &:hover {
      background-color: transparent;
    }

    .el-checkbox__inner {
      background-color: transparent;
      border: 1px solid $color-3C71FF;
      &::after {
        border-color: $color-F9A901;
      }
    }
    .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
      background-color: $color-3C71FF;
    }
    .el-tree-node__expand-icon {
      color: $color-3C71FF;
      &.is-leaf {
        color: transparent;
      }
    }
  }
  ::v-deep .el-tree-node:focus > .el-tree-node__content {
    background-color: transparent;
  }
  &-label {
    line-height: 20px;
    font-size: $font-size-14;
    color: rgba(255, 255, 255, 0.8);
    background: none;
    border: none;
    padding: 0;
  }
  &-select {
    color: #f9a901;
    margin-left: 10px;
    font-weight: bolder;
  }
}
</style>
