<template>
  <el-header class="hearder">
    <img
      src="http://likede2-admin.itheima.net/img/logo.3673fab5.png"
      alt=""
      class="logo"
    />
    <div class="menu">
      <el-row>
        <el-col :span="5"
          ><div class="grid-content">
            <img
              :src="$store.state.user.userDetail.image || ''"
              alt=""
              v-ImgError="defaultImg"
            />
          </div>
        </el-col>
        <el-col :span="13"
          ><div class="grid-content">
            <span class="welcome"> 欢迎您，{{ userDetail.loginName }} </span>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content">
            <span class="exit" @click="exitHome"
              >退出
              <i class="el-icon-caret-bottom"></i>
            </span></div
        ></el-col>
      </el-row>
    </div>
  </el-header>
</template>

<script>
import defaultImg from "@/assets/素材头像/默认头像.webp";
import { createNamespacedHelpers } from "vuex";
const { mapState: mapUserState } = createNamespacedHelpers("user");
export default {
  data() {
    return {
      defaultImg,
    };
  },
  components: {},
  computed: {
    ...mapUserState(["userDetail"]),
  },
  async created() {
    const id = this.$store.state.user.userInfo.userId;
    await this.$store.dispatch("user/getUserDetail", id);
  },
  methods: {
    async exitHome() {
      await this.$store.dispatch("user/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1999;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
  background-size: cover;
  background-repeat: no-repeat;
  .logo {
    position: relative;
    top: 4px;
    width: 88px;
    margin-top: 6px;
    margin-left: 15px;
  }
  .menu {
    float: right;
    width: 240px;
    height: 100%;
    margin-right: 24px;
    color: #fff;
    .el-row {
      height: 60px;
      line-height: 60px;
      img,
      .welcome,
      .exit {
        vertical-align: middle;
      }
      .exit {
        cursor: pointer;
      }
      img {
        width: 35px;
        height: 35px;
        border-radius: 20px;
      }
    }
  }
}
</style>
