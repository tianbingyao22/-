import { getCode, Login, getUserInfo } from "@/api/user";
import { setTokenTime } from "@/utils/auth";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    code: "",
    token: "",
    userInfo: {},
    userDetail: {},
  },
  mutations: {
    setCode(state, payload) {
      state.code = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setUserDetail(state, payload) {
      state.userDetail = payload;
    },
  },
  actions: {
    async getCode(context) {
      const data = await getCode("1234");
      const res = URL.createObjectURL(data);
      context.commit("setCode", res);
    },
    async Login(context, payload) {
      const data = await Login(payload);
      if (data.success) {
        context.commit("setUserInfo", data);
        context.commit("setToken", data.token);
        setTokenTime();
      } else {
        Message.error("系统异常");
        return Promise.reject(new Error(data.msg));
      }
    },
    // 获取用户信息
    async getUserDetail(context, payload) {
      const res = await getUserInfo(payload);
      context.commit("setUserDetail", res);
    },
    logout(context) {
      context.commit("setToken", "");
      context.commit("setUserInfo", {});
      context.commit("setUserDetail", {});
    },
  },
  getters: {},
};
