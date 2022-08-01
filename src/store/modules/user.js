import { getCode, Login } from "@/api/user";
export default {
  namespaced: true,
  state: {
    code: "",
    token: JSON.parse(localStorage.getItem("token")) || "",
  },
  mutations: {
    setCode(state, payload) {
      state.code = payload;
    },
    setToken(state, payload) {
      state.token = payload;
      localStorage.setItem("token", JSON.stringify(payload));
    },
  },
  actions: {
    async getCode(context) {
      const { data } = await getCode("1234");
      const res = URL.createObjectURL(data);
      context.commit("setCode", res);
    },
    async Login(context, payload) {
      try {
        const res = await Login(payload);
        if (res.data.success) {
          context.commit("setToken", res.data.token);
        } else {
          console.log(res.data.msg);
        }
      } catch (error) {
        console.log("登陆失败");
      }
    },
  },
  getters: {},
};
