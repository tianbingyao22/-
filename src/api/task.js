import request from "@/utils/request";

/**
 * 工单搜索
 * @returns promise
 */
export function getTaskList(data) {
  return request({
    url: "/api/task-service/task/search",
    params: data,
  });
}

/**
 * 获取工作状态列表
 * @returns promise
 */
export function getTaskStatus() {
  return request({
    url: "/api/task-service/task/allTaskStatus",
  });
}
