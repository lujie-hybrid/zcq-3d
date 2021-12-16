// 初始化
import cloudRenderer from "superapi-51world";
import { postAction } from "@/api/action";
import store from "@/store";

export const objFunc = require("lodash/object");
export class MySuperAPI {
  constructor(id, handleResponseFunction) {
    // 实例化对象对象
    this.cloudRender = new cloudRenderer(id, 0);
    this.init(handleResponseFunction);
    this.timer = null;
  }
  // 实时云渲染
  init(handleResponseFunction) {
    let cloudurl = process.env.VUE_APP_V_URL, //云渲染服务地址, 8889:固定端口
      orderID = process.env.VUE_APP_CODE; //渲染口令, 在云渲染客户端上获得
    postAction(`${cloudurl}/Renderers/Any/order`, {
      order: orderID,
      width: window.innerWidth,
      height: window.innerHeight,
    }).then((res) => {
      if (!res.success && res.errCode === 10031) {
        store.commit("set_value", { key: "renderOver", val: false });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.init(handleResponseFunction);
        }, 10000);
      } else {
        this.timer && clearInterval(this.timer);
        //启动云渲染
        this.cloudRender.SuperAPI("StartRenderCloud", res.url);
        //事件注册
        this.cloudRender.SuperAPI(
          "RegisterCloudResponse",
          handleResponseFunction
        );
      }
    });
  }
  // 删除全部指定类型覆盖物
  removeAllCovering(
    covering_type = ["path", "poi", "range", "highlight_area"],
    callback
  ) {
    this.cloudRender.SuperAPI("RemoveAllCovering", { covering_type }, callback);
    this.cloudRender.SuperAPI("RemoveAllCovering", {
      covering_type: "scene_effect",
    });
  }

  // 镜头FOCUS至全部指定类型的覆盖物
  focusAllCovering(covering_type = "poi", callback) {
    this.cloudRender.SuperAPI("FocusAllCovering", { covering_type }, callback);
  }

  // 添加自定义POI点
  addCustomPOI(
    poiList,
    // covering_type = "poi",
    always_show_label = false,
    callback
  ) {
    let defaultSetting = {
      coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
      cad_mapkey: "default", //CAD基准点的Key值, 项目中约定
      coord_z: 0, //高度(单位:米)
      coord_z_type: 0, //坐标高度类型(0:相对3D世界表面; 1:相对3D世界地面; 2:相对3D世界海拔; 注:cad坐标无效)
      always_show_label, //是否永远显示label, true:显示label(默认), false:不显示label
      show_label_range: "0,105", //此POI点显示label的摄像机距离范围(单位米, 范围最小距离, 范围最大距离; 在此范围内显示, 超出范围隐藏label;注意:always_show_label 属性优先于此属性)
      sort_order: false, //是否开启遮挡排序(根据POI真实3D位置开启遮挡排序,注:只与其他开启排序的POI之间进行排序, 开启此排序会消耗性能(最多60个POI同时开启排序)
      state: "initial-state", //与marker之中images中的define_state对应
      marker: {
        size: "40,47", //marker大小(宽,高 单位:像素)
        images: [{ define_state: "initial-state" }],
      },
      label: {
        bg_image_url: "",
        bg_size: "150,30", //label大小(宽, 高 单位:像素)
        bg_offset: "40,90",
        content: [
          {
            text_offset: "8,6", //文本框左上角相对于label中bg_offset左上角的margin偏移(x,y 单位:像素), 注:x为正向右, y为正向下
          },
        ],
      },
    };
    poiList.forEach((p) => {
      const left = JSON.parse(JSON.stringify(defaultSetting));
      const right = JSON.parse(JSON.stringify(p));
      // console.log(p.always_show_label, "p.always_show_label");
      // if (p.always_show_label) {
      //   left.always_show_label = p.always_show_label;
      // }
      const r = objFunc.merge(left, right);
      this.cloudRender.SuperAPI("AddCustomPOI", r);
    });
    callback && callback();
  }

  // 设置当前场景镜头视界
  setCameraInfo(setting, callback) {
    let defaultSetting = {
      coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
      cad_mapkey: "", //CAD基准点Key值, 项目中约定
      center_coord: "120.93203,31.959124", //中心点的坐标 lng,lat
      arm_distance: 20, //镜头距中心点距离(单位:米)
      pitch: 30, //镜头俯仰角(5~89)
      yaw: 140, //镜头偏航角(0正北, 0~359)
      fly: false, //true: 飞行动画(飞行时间根据当前点与目标点计算,则pitch及yaw不生效, 会自行计算);
      //false: 立刻跳转过去(有一个短暂飞行动画,并按照arm_distance, pitch, yaw设置镜头)
    };
    const s = JSON.parse(JSON.stringify(defaultSetting));
    const r = objFunc.merge(s, setting);
    this.cloudRender.SuperAPI("SetCameraInfo", r, callback);
  }

  // 获取当前场景镜头信息
  getCameraInfo(callback) {
    this.cloudRender.SuperAPI(
      "GetCameraInfo",
      {
        coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
        cad_mapkey: "",
      },
      callback
    );
  }

  // 重置场景初始镜头
  resetCamera(callback) {
    this.cloudRender.SuperAPI("ResetCamera", { state: "default" }, callback);
    // this.setCameraInfo(
    //   {
    //     center_coord: "120.928106,31.961645", //中心点的坐标 lng,lat
    //     arm_distance: 1856.388184, //镜头距中心点距离(单位:米)
    //     pitch: 29.457642, //镜头俯仰角(5~89)
    //     yaw: 354.371979, //镜头偏航角(0正北, 0~359)
    //     fly: false, //true: 飞行动画(飞行时间根据当前点与目标点计算,则pitch及yaw不生效, 会自行计算);
    //     //false: 立刻跳转过去(有一个短暂飞行动画,并按照arm_distance, pitch, yaw设置镜头)
    //   },
    //   callback
    // );
  }

  // 显示/隐藏官道
  showHidePipe(bshow = false, height = 1000) {
    let showSetting = {
      actionname: "togglePipeline", //管道显隐
      bshow, //显隐(true显示,false隐藏)
      height, //抬起高度(可不填,默认为1000,最小200,最大20000)
    };

    this.cloudRender.SuperAPI("specialChannel", showSetting);
  }

  // 24小时光照
  setEnvTime(env_time = "8:30", callback) {
    this.cloudRender.SuperAPI("SetEnvTime", { env_time }, callback);
  }

  // 设置分辨率
  setResolution(width = window.innerWidth, height = window.innerHeight) {
    this.cloudRender.SuperAPI("SetResolution", { width, height });
  }

  // 启用取点工具
  startGetCoord() {
    this.cloudRender.SuperAPI(
      "StartGetCoord",
      {
        coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
        cad_mapkey: "", //CAD基准点Key值, 项目中约定
        coord_z_type: 0, //坐标高度类型(0:相对3D世界表面；1:相对3D世界地面；2:相对3D世界海拔; 注:cad坐标无效)
      },
      (e) => {
        console.log(e);
      }
    );
  }

  // 停用取点工具
  endGetCoord() {
    this.cloudRender.SuperAPI("EndGetCoord");
  }

  // 关闭云渲染, 释放资源
  stopRenderCloud() {
    this.cloudRender.SuperAPI("StopRenderCloud");
  }

  // 多倍渲染
  setMultiRendering(screenpercentage = 1.5) {
    this.cloudRender.SuperAPI("SetMultiRendering", {
      screenpercentage,
    });
  }

  // 开启/关闭3D世界的声音
  setVideoVoice(open) {
    this.cloudRender.SuperAPI("SetVideoVoice", {
      open,
    });
  }

  // 镜头绕场景中心点旋转
  setCameraRotate(time = 30, direction = "clockwise") {
    this.cloudRender.SuperAPI("SetCameraRotate", {
      time, //相机旋转一周所需要的时间, (单位:秒)
      direction, //clockwise:顺时针; anticlockwise:逆时针; stop:停止旋转
    });
  }

  // 聚焦具体物体
  focusCovering(id, covering_type = "poi", distance = 100) {
    this.cloudRender.SuperAPI(
      "FocusCovering",
      {
        id, //覆盖物id
        covering_type, //覆盖物类型, 详见下表
        distance, //距离(单位:米), 默认20米
      },
      (status) => {
        console.log(status); //成功、失败回调
      }
    );
  }

  // 拆楼
  splitBuild(id, floor = 1, callback) {
    this.cloudRender.SuperAPI(
      "SplitBuild",
      {
        build_id: id, //建筑物id (项目中约定)
        floor, //要拆解的楼层(1楼为1,地下一楼为-1)
        animation_type: 1, //动画类型 (1:伸缩杆动画)
      },
      callback
    );
  }

  // 获取屏幕覆盖物ID
  getFullSceenCoveringId(callback, covering_type = "poi") {
    this.cloudRender.SuperAPI(
      "GetFullSceenCoveringId",
      {
        covering_type,
      },
      callback
    );
  }
  // 更新自定义POI点Marker
  updateCustomPOIMarker(id, size, activate_url) {
    this.cloudRender.SuperAPI(
      "UpdateCustomPOIMarker",
      {
        id,
        marker: {
          size,
          images: [
            {
              define_state: "initial-state",
              normal_url: activate_url,
              activate_url,
            },
          ],
        },
      },
      (status) => {
        console.log(status); //成功、失败回调
      }
    );
  }

  // 设置POI点状态
  setPOISelect(id, select = true) {
    this.cloudRender.SuperAPI(
      "SetPOISelect",
      {
        id,
        select, //true:选中; false:未选中
      },
      (status, progress) => {
        console.log(status, progress);
      }
    );
  }
  // 添加区域轮廓
  addRange(setting, callback) {
    let defaultSetting = {
      id: "",
      coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
      cad_mapkey: "", //CAD基准点Key值, 项目中约定
      coord_z: 0, //高度(单位:米)
      coord_z_type: 0, //坐标高度类型(0:相对3D世界表面；1:相对3D世界地面；2:相对3D世界海拔; 注:cad坐标无效)
      type: "box_wave", //样式类型; 注①
      color: "DD0000", //轮廓颜色(HEX颜色值)
      range_height: 30, //围栏高度(单位:米)
      stroke_weight: 20, //底部轮廓线宽度(单位:米; 注: 区域中含有内环"inner_points"时无效)
      fill_area: "none", //底部区域填充类型; 注②
      points: [],
    };
    const s = JSON.parse(JSON.stringify(defaultSetting));
    const r = objFunc.merge(s, setting);
    this.cloudRender.SuperAPI("AddRange", r, callback);
  }
  updateRangeStyle({ id, type, range_height }) {
    let jsondata = {
      id,
      type, //样式类型; 注①
      range_height, //围栏高度(单位:米)
    };
    this.cloudRender.SuperAPI(
      "UpdateRangeStyle",
      jsondata,
      (status, progress) => {
        console.log(status, progress);
      }
    );
  }
  // 模拟点击
  simClickCovering(id, covering_type = "range") {
    this.cloudRender.SuperAPI(
      "SimClickCovering",
      {
        id, //覆盖物id
        covering_type, //覆盖物类型, 详见下表
      },
      (status, progress) => {
        console.log(status, progress);
      }
    );
  }
  // 添加覆盖物关联Window
  addCoverWindow(coverings_id, poiId, coverings_type = "range") {
    let jsondata = {
      coverings_id, //要关联Window的覆盖物id (此覆盖物应提前完成创建)
      coverings_type, //覆盖物类型
      POIData: {
        id: poiId, //不可和其他poi的id重复
        window: {
          url: `http://192.168.1.197:8810//hw?id=${coverings_id}`,
          size: "520,350",
          offset: "0,0",
        },
      },
    };
    this.cloudRender.SuperAPI("AddCoverWindow", jsondata, (status) => {
      console.log(status); //成功、失败回调
    });
  }
  // 添加高亮区域
  addHighlightArea(points = []) {
    let jsondata = {
      coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
      cad_mapkey: "", //CAD基准点Key值, 项目中约定
      color: "e0e0e0", //高亮区域颜色(HEX颜色, 默认为原色高亮)
      points,
    };
    this.cloudRender.SuperAPI("AddHighlightArea", jsondata, (status) => {
      console.log(status); //成功、失败回调
    });
  }
  // 添加场景
  addEffect(id, coord, text) {
    let jsondata = {
      id,
      coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
      cad_mapkey: "", //CAD基准点Key值, 项目中约定
      type: "marker_cube", //样式类型; 注①marker_cube
      scale: 20, //半径(单位:米)
      coord, //坐标点 lng,lat
      coord_z: 50, //高度(单位:米)
      coord_z_type: 0, //坐标高度类型(0:相对3D世界表面；1:相对3D世界地面；2:相对3D世界海拔; 注:cad坐标无效)
      pitch: 0, //俯仰角(-360~360)
      roll: 0, //翻滚角(-360~360)
      yaw: 0, //偏航角(0正北, -360~360)
      title_text: [text + ",F9A901E6,10"], //文本内容, 富文本内容
      title_face_to_camera: true, //顶部文字是否跟踪朝向摄像机(注: true优先, "pitch", "roll", "yaw" 无效)
      title_text_portrait: false, //顶部文字排列方向(true: 纵向, false: 横向)
    };
    this.cloudRender.SuperAPI("AddEffect", jsondata, (status) => {
      console.log(status); //成功、失败回调
    });
  }
  // 显示/隐藏指定类型的全部覆盖物
  showHideCovering(id, covering_type, bshow) {
    this.cloudRender.SuperAPI(
      "ShowHideCovering",
      {
        id, //覆盖物id
        covering_type, //覆盖物类型, 详见下表
        bshow, //true:显示; false:隐藏
      },
      (status) => {
        console.log(status); //成功、失败回调
      }
    );
  }
  // 添加路径
  addPath({ points = [], id, color = "ff0000" }) {
    let jsondata = {
      id,
      coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
      coord_z_type: 0, //坐标高度类型(0:相对3D世界表面；1:相对3D世界地面；2:相对3D世界海拔; 注:cad坐标无效)
      cad_mapkey: "", //CAD基准点Key值, 项目中约定
      type: "scan_line", //样式类型; 注①
      color, //颜色(HEX颜色值, "color":"" 透明路径)
      pass_color: color, //覆盖物移动经过路径颜色(HEX颜色值)
      width: 30, //宽度(单位:米)
      points,
    };
    this.cloudRender.SuperAPI("AddPath", jsondata, (status, progress) => {
      console.log(status, progress);
    });
  }
  updatePathStyle(id, color) {
    let jsondata = {
      id,
      color, //颜色(HEX颜色值)
      pass_color: color, //覆盖物移动经过路径颜色(HEX颜色值)
    };
    this.cloudRender.SuperAPI("UpdatePathStyle", jsondata, (status) => {
      console.log(status); //成功、失败回调
    });
  }
  setCameraRoaming() {
    let jsondata = {
      coord_type: 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
      cad_mapkey: "", //CAD基准点Key值, 项目中约定
      points: [
        {
          coord: "103.977989,1.39014", //路径坐标点 lng,lat
          arm_distance: 290, //镜头与坐标点距离(单位:米)
          pitch: 30, //镜头俯仰角(0~89)
          yaw: 20, //镜头偏航角(0正北, 0~359)
          speed: 2, //镜头速度(单位:米/秒)
        },
        {
          coord: "103.982628,1.389989",
          arm_distance: 290,
          pitch: 30,
          yaw: 20,
          speed: 2,
        },
      ],
    };
    this.cloudRender.SuperAPI("SetCameraRoaming", jsondata);
  }
  setEnvWeather(env_weather = "Sunny") {
    let jsondata = {
      env_weather,
    };
    this.cloudRender.SuperAPI("SetEnvWeather", jsondata);
  }
}
