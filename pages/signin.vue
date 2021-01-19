<template>
  <div id="building">
    <div class="cent">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>注册</span>
        </div>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="medium ">
          <el-form-item prop="username">
            <el-input
              prefix-icon="el-icon-user-solid"
              v-model="ruleForm.username"
              placeholder="请输入4到16位的账号"
              show-message="ture"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              :type="passwordVisible"
              v-model="ruleForm.password"
              placeholder="请输入6到16位的密码"
              autocomplete="off"
              show-message="ture"
              @keyup.enter.native="login"
            >
              <i slot="suffix" :class="icon" @click="showPwd" />
            </el-input>
          </el-form-item>
      


          <el-form-item class="log_button">
            <el-button
              class="login_btn"
              type="primary"
              @click="submitForm('ruleForm')"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
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
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 4, max: 16, message: "长度在 4-16 个字符", trigger: "blur" },
        ],
        password: [
          {required: true,message: "密码不能为空",trigger: "blur",},
              { min: 6, max: 16, message: "长度在 6-16 个字符", trigger: "blur" },
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
          const result = await seft.$axios.post("/api/userAdd", seft.ruleForm);

          alert("注册成功");
          seft.$router.push({ path: "/login" });
        } else {
          alert("请输入正确账号");
        }
      });
    },
 
    // 查看、隐藏密码
    showPwd() {
      if (this.passwordVisible === "text") {
        this.passwordVisible = "password";
        //更换图标
        this.icon = "el-icon-view";
      } else {
        this.passwordVisible = "text";
        this.icon = "el-icon-minus";
      }
    },
  },
};
</script>
<style lang="less" scoped>
#building {
  background: url("../assets/bg_66.jpg");
  width: 100%; //大小设置为100%
  height: 100%; //大小设置为100%
  // background-color: #0000003b;
  position: fixed;
  background-size: cover;
}
.cent {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-card {
  width: 500px;
  height: 400px;
  border-radius: 20px;
}
.header {
  height: 40px;
}
.clearfix {
  color: #f4505b;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}
// 表单大小
.el-form {
  background-color: #fff;
  padding: 0 50px;
}
.dialog-footer .el-button {
  width: 80px;
  height: 30px;
  line-height: 0;
}
.el-dialog .el-form {
  padding: 0 50px;
}
.el-input {
  width: 360px;
  margin-top: 20px;
}
// 登录按钮
.el-button {
  width: 200px;
  height: 40px;
  margin-top: 35px;
 margin-left: 70px;
}
</style>