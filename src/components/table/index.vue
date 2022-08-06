<template>
  <el-table :data="taskList" style="width: 100%">
    <el-table-column prop="date" label="序号" width="80" type="index">
    </el-table-column>
    <el-table-column prop="taskCode" label="工单编号"> </el-table-column>
    <el-table-column prop="innerCode" label="设备编号"> </el-table-column>
    <el-table-column prop="taskType[typeName]" label="工单类型">
    </el-table-column>
    <el-table-column prop="createType" label="工单方式"> </el-table-column>
    <el-table-column prop="taskStatus" label="工单状态"> </el-table-column>
    <el-table-column prop="userName" label="运营人员"> </el-table-column>
    <el-table-column prop="createTime" label="创建日期"> </el-table-column>
    <el-table-column label="操作">
      <a href="#" style="color: #5f84ff">查看详情</a>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    taskList: {
      type: Array,
      required: true,
    },
  },
  created() {},
  watch: {
    taskList() {},
  },
  methods: {},
};
</script>

<style scoped></style>
