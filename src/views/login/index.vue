<template>
  <div class="login">
    <div class="login-form">
      <img
        src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
        alt=""
        class="login-logo"
      >
      <el-input
        v-model="phone"
        placeholder="请输入手机号"
        prefix-icon="el-icon-mobile-phone"
      />
      <el-input
        v-model="password"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        suffix-icon="el-icon-view"
      />
      <el-input
        v-model="code"
        placeholder="请输入验证码"
        prefix-icon="el-icon-mobile-phone"
        class="yanzhengma"
      >
        <template #suffix>
          <img src="https://likede2-java.itheima.net/api/user-service/user/imageCode/g67VGWhi4WVFjiHOEOOAQoxzVzoIJUq2" alt="">
        </template>
      </el-input>
      <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: '',
      code: ''
    }
  },

  created() {},

  methods: {}
}
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
  .el-input {
  height: 50px;
  margin-bottom: 24px;
  ::v-deep .el-input__icon{
    line-height: 50px;
  }
  }
  ::v-deep .el-input__inner {
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
  .yanzhengma{
    ::v-deep .el-input__suffix{
      right: 2px;
    }
  }
}

</style>
