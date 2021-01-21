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
          <el-input placeholder="请输入内容" v-model="searchInput" clearable @clear="doFilter">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="doFilter"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户表格 -->
      <div>
        <Utable :umanageList="umanageList" />
      </div>
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
    doFilter() {
      let seft = this;
      this.umanageList = this.fetchumanageList.filter(function (data) {
        return Object.keys(data).some(function (key) {
          return String(data[key]).indexOf(seft.searchInput) > -1;
        });
      });
    },
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