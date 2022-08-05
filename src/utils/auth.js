import Cookies from "js-cookie";

const TokenKey = "vue_admin_template_token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

// 获取登陆时的时间戳
export function setTokenTime() {
  return Cookies.set('TokenTime', Date.now());
}

//获取存储的时间戳
export function getTokenTime() {
  return Cookies.get('TokenTime');
}
