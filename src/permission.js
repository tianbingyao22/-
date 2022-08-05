import router from "@/router";
import store from "@/store";

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 判断是否登录
  // 登陆时，判断是否是到login
  // 到login时，直接去首页
  // 不去login，则放行
  // 未登录时，判断是否在白名单
  // 在白名单，放行，不在，直接去login页面
  const writeList = ["/login", "/404"];
  const token = store.state.user.token;
  if (token) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    const isInclude = writeList.includes(to.path);
    if (isInclude) {
      next();
    } else {
      next("/login");
    }
  }
});
