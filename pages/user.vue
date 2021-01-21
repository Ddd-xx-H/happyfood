<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片页面 -->
    <el-card>
      <!-- 搜索栏 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="searchInput"
            clearable
            @clear="doFilter"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="doFilter"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true"
            >添加用户</el-button
          >
        </el-col>
      </el-row>
      <!-- 用户表格 -->
      <div>
        <Utable :umanageList="umanageList" />
      </div>
      <!-- 添加用户的弹框 -->
      
        <el-dialog
          title="添加用户"
          :visible.sync="addDialogVisible"
          width="50%"
          @close="addDialogClosed"
        >
          <!-- 内容 -->
          <el-form
            :model="addForm"
            :rules="addFormRules"
            ref="addFormRef"
            label-width="70px"
          >
            <el-form-item label="用户名" prop="uname">
              <el-input v-model="addForm.uname"></el-input>
            </el-form-item>
             <el-form-item label="地址" prop="uaddress">
              <el-input v-model="addForm.uaddress"></el-input>
            </el-form-item>
             <el-form-item label="手机号" prop="uphone">
              <el-input v-model="addForm.uphone"></el-input>
            </el-form-item>
             <el-form-item label="日期" prop="udata">
              <el-input v-model="addForm.udata"></el-input>
            </el-form-item>
          </el-form>
          <!-- 内容底部 -->
          <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUser"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      
    </el-card>
  </div>
</template>
<script>
export default {
  layout: "global",
  data() {
    return {
      searchInput: "",
      fetchumanageList: [],
      umanageList: [],
      // 控制添加用户弹框的显示和隐藏
      addDialogVisible: false,
      // 添加用户的表单数据
      addForm: {
        uname: '',
        uaddress: '',
        uphone: '',
        udata: ''
      },
      // 添加表单的验证规则对象
      addFormRules: {
        uname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { 
            min: 2, 
            max: 10,
            message: '用户名的长度在2~10个字符之间',
            trigger: 'blur'
          }
        ],
        uaddress: [
          { required: true, message: '请输入地址', trigger: 'blur' },
          { 
            min: 5, 
            max: 30,
            message: '地址的长度在5~30个字符之间',
            trigger: 'blur'
          }
        ],
        uphone: [
             { required: true, message: '请输入手机号', trigger: 'blur' },
          { 
            min: 11, 
            max: 11,
            message: '请输入正确的手机号',
            trigger: 'blur'
          }
        ],
        udata: [
          { required: true, message: '请输入日期', trigger: 'blur' },
           { 
            min: 0, 
            max: 15,
            message: '密码的长度在0~15个字符之间',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  async fetch() {
    let result = await fetch("/api/umanages").then((res) => res.json());
    this.fetchumanageList = result.list;
    this.umanageList = this.fetchumanageList;
    console.log(this.fetchumanageList);
  },
  created() {},
  methods: {
    //搜索
    doFilter() {
      let seft = this;
      this.umanageList = this.fetchumanageList.filter(function (data) {
        return Object.keys(data).some(function (key) {
          return String(data[key]).indexOf(seft.searchInput) > -1;
        });
      });
    },
    //  监听添加用户弹框的关闭重置清
  addDialogClosed() {
    this.$refs.addFormRef.resetFields()
  },
  // 点击按钮，添加用户
  addUser() {
    this.$refs.addFormRef.validate(async valid => {
      if(!valid) return
      // 可以发起添加用户的网络请求
          const { data: res } = await this.$axios.post(
        ('/api/umanages', this.addForm)
      );
      if (!res.result) {
        return this.$message.error("添加用户失败！");
      }
      this.$message.success("添加用户成功！");
      // 隐藏添加用户的弹框
      this.addDialogVisible = false
      //重新获取用户列表数据
      this.getUmanageList()
    })
  }
  },

};
</script>
<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 18px;
}
.el-card {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
</style>