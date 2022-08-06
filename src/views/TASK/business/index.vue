<template>
  <div class="app-container">
    <el-card shadow="never" class="search-card">
      <FormSearch></FormSearch>
    </el-card>
    <el-card class="tasklist-table" shadow="never">
      <el-row class="todo-btn">
        <el-col :span="24">
          <el-button
            type="primary"
            class="add-btn"
            icon="el-icon-circle-plus-outline"
            >新建</el-button
          >
          <el-button class="config-btn">工单配置</el-button>
        </el-col>
      </el-row>

      <TableList :taskList="taskList"></TableList>
      <div class="pagination-container">
        <el-row>
          <el-col :span="18">
            <span
              >共{{ pageInfo.totalCount }}条记录 第{{ pageInfo.pageIndex }}/{{
                pageInfo.totalPage
              }}页</span
            >
          </el-col>
          <el-col :span="3">
            <el-button
              class="prePage"
              :disabled="pageInfo.pageIndex <= 1"
              @click="toPrePage"
              >上一页</el-button
            >
          </el-col>
          <el-col :span="3">
            <el-button class="nextPage" @click="toNextPage">下一页</el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import TableList from "@/components/table";
import FormSearch from "@/components/search";
import { createNamespacedHelpers, mapState } from "vuex";
const {
  mapGetters: mapTaskGetters,
  mapActions: mapTaskActions,
  mapState: mapTaskState,
} = createNamespacedHelpers("task");
export default {
  data() {
    return {};
  },
  computed: {
    ...mapTaskGetters(["taskList"]),
    ...mapTaskState(["pageInfo"]),
  },
  components: {
    TableList,
    FormSearch,
  },
  created() {
    this.getTaskList({ pageIndex: 1 });
    this.getStatusList();
  },
  methods: {
    ...mapTaskActions(["getTaskListApi", "getStatusListApi"]),
    async getTaskList(data) {
      await this.getTaskListApi(data);
    },
    async getStatusList() {
      await this.getStatusListApi();
    },
    async toNextPage() {
      const page = +this.pageInfo.pageIndex + 1;
      this.getTaskList({ pageIndex: page });
    },
    async toPrePage() {
      const page = +this.pageInfo.pageIndex - 1;
      this.getTaskList({ pageIndex: page });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-card__body {
  padding: 0px;
}
.search-card {
  margin-bottom: 20px;
}
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.prePage,
.nextPage {
  background-color: #d5ddf8;
}
.tasklist-table {
  padding: 20px 15px 19px 17px;
}
.todo-btn {
  margin-bottom: 20px;
}
button {
  width: 80px;
  height: 36px;
  border: 0px;
  padding: 0;
}
.add-btn {
  background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
}
.config-btn {
  background-color: #fbf4f0 !important;
  color: #655b56 !important;
}
</style>
