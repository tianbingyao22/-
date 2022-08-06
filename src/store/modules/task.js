import { getTaskList, getTaskStatus } from "@/api/task";
export default {
  namespaced: true,
  state: {
    taskList: [],
    statusList: [],
    pageInfo: {},
  },
  mutations: {
    getTaskList(state, payload) {
      state.taskList = payload;
    },
    getStatusList(state, payload) {
      state.statusList = payload;
    },
    getPageInfo(state, payload) {
      state.pageInfo = payload;
    },
  },
  actions: {
    async getTaskListApi(context, data) {
      const res = await getTaskList(data);
      context.commit("getPageInfo", {
        pageIndex: res.pageIndex,
        pageSize: res.pageSize,
        totalCount: res.totalCount,
        totalPage: res.totalPage,
      });
      context.commit("getTaskList", res.currentPageRecords);
    },
    async getStatusListApi(context) {
      const res = await getTaskStatus();
      context.commit("getStatusList", res);
    },
  },
  getters: {
    taskList(state) {
      const arr = state.taskList;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].createType === 0) {
          arr[i].createType = "自动";
        } else {
          arr[i].createType = "手动";
        }
        for (let j = 0; j < state.statusList.length; j++) {
          if (arr[i].taskStatus === state.statusList[j].statusId) {
            arr[i].taskStatus = state.statusList[j].statusName;
          }
        }
      }
      return arr;
    },
  },
};
