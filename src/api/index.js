import * as homeApi from "./modules/home";

const install = (Vue) => {
  const r = {
    home: homeApi,
  };
  Vue.prototype.$api = r;
};

export default {
  install,
};
