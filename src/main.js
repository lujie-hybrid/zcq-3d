import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// elementui的引入
import "@/plugins/elementui";

import "@/assets/scss/common.scss";

// echarts的引入
import MyChart from "@/plugins/echarts";
Vue.use(MyChart);

// websocket的引入
// import Socket from "@/plugins/socket";
// Vue.prototype.$skt = Socket;

// 接口api的引入
// import Api from "@a";
// Vue.use(Api);

// filter的引入
import "@u/filter";

// 通用组件的注册
import BaseComp from "@comp";
Vue.use(BaseComp);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
