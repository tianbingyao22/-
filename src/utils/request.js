// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import store from "@/store";
import axios from "axios";
import router from "@/router";
import { getTokenTime } from "@/utils/auth";
import { Message } from "element-ui";
function isLogOut() {
  const curretnTime = Date.now();
  const TokenTime = getTokenTime();
  const timeout = 2 * 60 * 60 * 1000;
  return curretnTime - TokenTime > timeout;
}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例
// 请求拦截器
service.interceptors.request.use(async (config) => {
  // 判断token是否过期
  // 如果token过期，不进行头部加工
  // 没有过期，头部加工
  if (!store.state.user.token) {
    return config;
  }

  if (isLogOut()) {
    // token超时,退出登录
    await store.dispatch("user/logout");
    router.push("/login");
    return Promise.reject(new Error("登录过期"));
  }
  config.headers.Authorization = store.state.user.token;

  return config;
});
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    const data = res.data;
    return data;
    // if (!data.success) {
    //   return data;
    // }
    // if (data.success) {
    //   return data.token;
    // }
    // Message.error(data.msg);
    // return Promise.reject(new Error(data.msg));
  },
  async function (error) {
    if (error.response?.status === 401) {
      await store.dispatch("user/logout");
      router.push("/login");
      Message.error("登录过期");
    } else {
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
