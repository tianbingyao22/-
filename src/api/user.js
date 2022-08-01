import request from "@/utils/request";

/**
 * 获取验证码
 * @param {String} clientToken
 * @returns promise
 */
export function getCode(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    method: "GET",
    responseType: "blob",
  });
}

export function Login(info) {
  return request({
    url: "/api/user-service/user/login",
    method: "POST",
    data: {
      clientToken: 1234,
      code: info.code,
      loginName: info.phone,
      loginType: 0,
      password: info.password,
    },
  });
}
