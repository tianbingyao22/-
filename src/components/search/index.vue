<template>
  <el-form ref="form" :model="form" label-width="80px" class="search-form">
    <el-form-item label="工单编号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="工单状态">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option
          v-for="item in statusList"
          :key="item.statusId"
          :label="item.statusName"
          :value="item.statusName"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="onSubmit"
        >查询</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions: mapTaskActions, mapState: mapTaskState } =
  createNamespacedHelpers("task");
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
      },
    };
  },
  computed: {
    ...mapTaskState(["statusList"]),
  },
  async created() {
    await this.getStatusListApi();
  },

  methods: {
    ...mapTaskActions(["getStatusListApi"]),
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
.search-form {
  display: flex;
}
.el-form-item {
  margin: 10px 0px;
}
</style>
