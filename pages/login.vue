<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/avatar.jpg" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="ruleForm.username"
            placeholder="请输入登陆账号"
            show-message="ture"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            :type="passwordVisible"
            v-model="ruleForm.password"
            placeholder="请输入登陆密码"
            autocomplete="off"
            show-message="ture"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <!-- 注册一个 -->

        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-link href="/signin">没有账号注册一个?</el-link>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >G O</el-button
          >
          <el-button type="info"><a href="/">返回</a></el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordVisible: "password", // 查看、隐藏密码
      icon: "el-icon-view",
      dialogFormVisible: false, // 对话框内容

      ruleForm: {
        username: "",
        password: "",
        type: 0,
      },
      rules: {
        username: [
          { required: true, message: "登陆账号不能为空", trigger: "blur" },
          { min: 4, max: 16, message: "长度在 4-16 个字符", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "登陆密码不能为空",
            // validator: password,
            trigger: "blur",
          },
        ],
      },
      checked: false,
    };
  },

  methods: {
    handleIdentify(value) {
      this.picVerification = value;
    },
    submitForm(ruleForm) {
      let seft = this;
      // this.ruleForm.type = this.loginType;
      this.$refs[ruleForm].validate(async (valid) => {
        if (valid) {
          const result = await seft.$axios.post("/api/account", seft.ruleForm);

          alert("登录成功");
          seft.$router.push({ path: "/home" });
        } else {
          alert("请输入正确账号");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  width: 100%;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  height: 100vh;
  min-width: 450px;
}
.login_box {
  width: 450px;
  height: 300px;
  min-width: 450px;
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  width: 180px;
  height: 180px;
  border: 2px solid rgb(183, 230, 233);
  border-radius: 50%;
  padding: 11px;
  background-color: rgb(250, 235, 98);
  box-shadow: 0 0 14px rgb(183, 230, 233);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
// .el-form{
//   position: relative;
// }
.el-link {
  margin-right: 70px;
  color: #409eff;
}
a{
  text-decoration: none;
  color: #fff;
}
</style>