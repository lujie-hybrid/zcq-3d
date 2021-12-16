// import { getAction } from "../action";

// const mockData = (data) => {
//   return Promise.resolve(data);
// };
const url = process.env.VUE_APP_IMG;
export const list = [
  {
    id: "home_kc",
    name: "科创中心",
    buildingList: [
      {
        imgUrl: `${url}/h1.png`,
        name: "紫琅科技城",
        description:
          "紫琅科技城位于紫琅湖畔，分为科研、企业研发中心及科技型企业、科技服务和商业配套四大功能。",
      },
      {
        imgUrl: `${url}/h2.png`,
        name: "紫琅人才公寓",
        description:
          "紫琅人才公寓位于南通创新区核心地带，紧邻紫琅科技城，有15栋高层公寓和6栋3层的专家公寓。",
      },
      {
        imgUrl: `${url}/h3.png`,
        name: "南通附属中学",
        description:
          "南通中学附属实验学校为南通市教育局直属学校，位于南通创新区紫琅湖西南、科创中心的核心区域。",
      },
    ],
  },
  {
    id: "home_wc",
    name: "文创中心",
    buildingList: [
      {
        imgUrl: `${url}/h4.png`,
        name: "南通美术馆",
        description:
          "南通美术馆总建筑面积约3.2万平方米，建筑总高24米。馆内共有21间专业展厅。",
      },
      {
        imgUrl: `${url}/h5.png`,
        name: "南通大剧院",
        description:
          "南通大剧院由建筑大师保罗·安德鲁领衔设计。总建筑面积10.5万平米，歌剧院、音乐厅等。",
      },
    ],
  },
  {
    id: "home_sl",
    name: "中央森林景观带",
    buildingList: [
      {
        imgUrl: `${url}/h7.png`,
        name: "中央森林景观带",
        description:
          "中央森林景观带：总体呈北林南湖，总占地面积2.66平方公里。以通沪大道为界分为南北两个区域，北部区域112公顷，分为三林：即都市艺林、花谷秋林、湿地公园；南部区域154公顷，包含89公顷水面和65公顷绿地，分为三湾，即紫琅湾、绿创湾、文荟湾。该核心景观通过全面修复、拓展湖荡、湿地、河流等自然生态景观，致力优化城市水生态，打造一条中央创新区的绿色生态轴带。",
      },
    ],
  },
  {
    id: "home_sh",
    name: "医学中心",
    buildingList: [
      {
        imgUrl: `${url}/h8.png`,
        name: "上海交通大学医学院附属仁济南通医院",
        description:
          "作为南通市第一人民医院新院，将由南通市政府和上海仁济医院合作建设运营，总建筑面积近40万平方米，总床位2600张，包括门急诊、病房、实验中心、影像中心、健康管理中心、教学和科研中心等建筑。",
      },
    ],
  },
  {
    id: "home_hz",
    name: "会展中心",
    buildingList: [
      {
        imgUrl: `${url}/h9.png`,
        name: "国际会议中心",
        description:
          "会展中心地上总建筑面积约8.26万平方米，会议中心共4层楼由若干国际厅、会议室、宴会厅组成。会展中心共两层楼由登录大厅和A/B馆组成",
      },
    ],
  },
  {
    id: "home_sh",
    name: "上海交通大学医学院附属仁济南通医院",
    buildingList: [
      {
        imgUrl: `${url}/hospital-sh.png`,
        name: "上海交通大学医学院附属仁济南通医院",
        description:
          "作为南通市第一人民医院新院，将由南通市政府和上海仁济医院合作建设运营。即建成1家三级甲等综合医院、1家医技共享中心和若干家专科医院",
      },
    ],
  },
  {
    id: "home_rc",
    name: "南通瑞慈医院",
    buildingList: [
      {
        imgUrl: `${url}/hospital-rc.png`,
        name: "南通瑞慈医院",
        description:
          "南通大学附属瑞慈医院创建于2002年4月医院是南通市三家高等级大型综合医疗机构之一，是城市东南区域医疗中心，江苏省级住院医师规范化培训基地",
      },
    ],
  },
  {
    id: "home_fy",
    name: "南通市妇幼保健院",
    buildingList: [
      {
        imgUrl: `${url}/hospital-fy.png`,
        name: "南通市妇幼保健院",
        description:
          "南通市妇幼保健院是一所集医疗、保健、科研、教学于一体的三级甲等妇幼保健院，医院设有27个临床保健医技一级科室及16个住院病区",
      },
    ],
  },
  {
    id: "home_s1",
    name: "南通市紫琅第一小学",
    buildingList: [
      {
        imgUrl: `${url}/school-s1.png`,
        name: "南通市紫琅第一小学",
        description:
          "南通市紫琅第一小学，被教育部认定并命名，全国青少年校园足球特色学校。办学规模48个班，拥有高标准办学设施，高品位办学定位，高水平教师队伍",
      },
    ],
  },
  {
    id: "home_s2",
    name: "南通中学附属实验学校",
    buildingList: [
      {
        imgUrl: `${url}/school-s2.png`,
        name: "南通中学附属实验学校",
        description:
          "江苏省南通中学附属实验学校为南通市教育局直属学校，位于南通创新区紫琅湖西南、科创中心的核心区域，成立于2018年11月",
      },
    ],
  },
  {
    id: "home_s3",
    name: "紫琅湖实验学校",
    buildingList: [
      {
        imgUrl: `${url}/school-s3.png`,
        name: "紫琅湖实验学校",
        description:
          "南通市紫琅湖实验学校是南通市教育局直属学校，位于南通中创区紫琅湖东畔。占地160亩，总投资4.8亿，办学规模小学60个班，初中30个班",
      },
    ],
  },
  {
    id: "home_trade1",
    name: "南通红星家居广场",
    buildingList: [
      {
        imgUrl: `${url}/hx.png`,
        name: "南通红星家居广场",
        description:
          "红星家居自2007年至2012年连续5年跻身中国民营企业500强前50位始终以建设温馨、和谐的家园，提升消费者的居家生活品味为己任",
      },
    ],
  },
];

// 获取区域列表
// export const getList = () => getAction(`/kld/kccs/zhongchuang/region/list`);
// export const getList = () => mockData(list);
