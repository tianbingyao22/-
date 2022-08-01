<template>
  <div class="login">
    <div class="login-form">
      <img
        src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
        alt=""
        class="login-logo"
      />
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="phone">
          <el-input
            v-model="ruleForm.phone"
            placeholder="请输入账号"
            prefix-icon="el-icon-mobile-phone"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            type="password"
          >
            <template #suffix>
              <svg-icon iconClass="eye"></svg-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-input
            v-model="ruleForm.code"
            placeholder="请输入验证码"
            prefix-icon="el-icon-mobile-phone"
            class="yanzhengma"
          >
            <template #suffix>
              <img :src="code" />
            </template>
          </el-input>
        </el-form-item>

        <el-button type="primary" @click="UserLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: mapUserState, mapActions: mapUserActions } =
  createNamespacedHelpers("user");
export default {
  data() {
    return {
      ruleForm: {
        phone: "admin",
        password: "admin",
        code: "",
      },
      rules: {
        phone: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapUserState(["code", "token"]),
  },
  created() {
    this.getCode();
  },

  methods: {
    ...mapUserActions(["Login", "getCode"]),
    async UserLogin() {
      await this.Login({ ...this.ruleForm });
      if (this.token !== "") {
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  height: 100%;
}
.login {
  height: 100%;
  background: url("http://likede2-admin.itheima.net/img/background.be4fae7d.png")
    no-repeat;
  background-size: cover;
}
.login-form {
  position: absolute;
  width: 518px;
  height: 388px;
  top: 50%;
  left: 50%;
  margin-top: -194px;
  margin-left: -259px;
  padding: 76px 35px 0;
  background: #fff;
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
  border-radius: 10px;
  .login-logo {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }
  ::v-deep .el-form-item__content {
    height: 52px;
    line-height: 50px;
    margin-left: 0px !important;
  }
  .el-input {
    height: 50px;
    margin-bottom: 24px;
    ::v-deep .el-input__icon {
      line-height: 50px;
    }
  }
  ::v-deep .el-input__inner {
    color: #999;
    border-radius: 2px;
    height: 50px !important;
    line-height: 50px;
  }
  .el-button {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    background-color: #6a7cef;
  }
  .yanzhengma {
    ::v-deep .el-input__suffix {
      right: 2px;
    }
  }
}
</style>
