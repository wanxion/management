<template>
  <div class="register">
    <section class="form_container">
      <span class="title">管理系统</span>
      <img src="../assets/img/register.png" alt />
      <el-form :model="registerUser" :rules="rules" ref="registerForm">
        <el-form-item prop="username">
          <el-input v-model="registerUser.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item prop="againpassword">
          <el-input type="password" v-model="registerUser.againpassword" placeholder="请确认密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="submit_btn" @click="register('registerForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        username: "",
        password: "",
        againpassword: ""
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空" }],
        password: [
          { required: true, message: "密码不能为空" },
          {
            min: 6,
            max: 30,
            message: "密码长度在6-30字符之间",
            trigger: "blur"
          }
        ],
        againpassword: [
          { required: true, message: "密码不能为空" },
          {
            min: 6,
            max: 30,
            message: "确认密码长度在6-30字符之间",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async register(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/register", this.registerUser).then(() => {
            this.$message({
              type: "success",
              message: "账号注册成功"
            });
          });
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style scoped>
.form_container {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background-color: #fff;
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
  .register {
    width: 100%;
    height: 100vh;
    background-color: #8da4cd;
  }
}
</style>

