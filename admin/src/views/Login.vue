<template>
  <div class="login">
    <div class="form_container">
      <h1 class="title">管理系统</h1>
      <img src="../assets/img/login.png" />
      <el-form :model="loginUser" hide-required-asterisk @submit.native.prevent="login">
        <el-form-item>
          <el-input v-model="loginUser.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input type="password" v-model="loginUser.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="submit_btn" native-type="submit">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginUser: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      const { data } = await this.$axios.post("login", this.loginUser);
      localStorage.token = data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登陆成功"
      });
    }
  }
};
</script>

<style scoped>
.form_container {
  box-sizing: border-box;
  background-color: #8da4cd;
  border-radius: 30px;
  width: 300px;
  padding: 40px 20px 20px 20px;
  text-align: center;
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.form_container img {
  margin: 10px 30px;
}
.title {
  line-height: 24px;
  font-weight: 500;
  font-size: 24px;
}
.submit_btn {
  width: 100%;
  background-color: #657fac;
  border: none;
  color: #fff;
  font-size: 15px;
  border-radius: 50px;
  font-weight: bold;
  margin: 0;
}
.submit_btn:hover {
  background-color: #5c7baf;
}
@media screen and (max-width: 414px) {
  .login {
    width: 100%;
    height: 100vh;
    background-color: #8da4cd;
  }
}
</style>
