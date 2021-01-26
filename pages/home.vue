<template>
    <el-container class="home_container">
  <el-header>
      <div>
          <img src="../assets/tuu.png" alt="">
          <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="ligout">返回</el-button>
  </el-header>
  <!-- 页面主体区域 -->
  <el-container>
      <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse"><img src="../images/ss.png"></div>
         <el-menu
      background-color="rgb(247, 247, 173)"
      text-color="#679603"
      active-text-color="#ffaf00"
      :collapse="isCollapse"
      :collapse-transition="false"
      router
      >
      <!-- 一级菜单 -->
      <el-submenu index="1">
        <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-refrigerator"></i>
          <span>客户管理</span>
        </template>
       <!-- 二级菜单 -->
          <el-menu-item index="/user">
               <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-location"></i>
          <span>菜谱管理</span>
        </template>
          </el-menu-item>
        </el-submenu>

     <el-submenu index="2">
        <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-dish-1"></i>
          <span>统计管理</span>
        </template>
       <!-- 二级菜单 -->
          <el-menu-item index="1-4-1">
               <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-fork-spoon"></i>
          <span>菜谱管理</span>
        </template>
          <el-menu-item index="1-4-1">
               <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-food"></i>
          <span>收藏管理</span>
        </template>
          <el-menu-item index="1-4-1">
               <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          </el-menu-item>
        </el-submenu>
    </el-menu>
    </el-aside>
    <el-container>
        <!-- 右边内容主体 -->
      <el-main>欢迎来到美食体验 ~</el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</el-container>
    
    
</template>
<script>
export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
        ligout() {
           window.sessionStorage.clear();
           this.$router.push("/login");
        },
        // 点击按钮展开折叠
    toggleCollapse() {
        this.isCollapse = ! this.isCollapse
    }
      
    }
}
</script>
<style lang="less" scoped>
.home_container{
      height: 100vh;
  }
  .el-header{
      background-color: #c1e379;
      display: flex;
      justify-content: space-between;
      padding-left: 0;
      align-items: center;
      color: #fff;
      font-size: 20px;
      > div{
          display: flex;
          align-items: center;
      }
      span{
          margin-left: 16px;
          
      }
  }
  .el-aside{
      background-color: rgb(247, 247, 173);
      .el-menu{
          border-right: none;
      }
  }
  .el-main{
      background-color: #fff;
  }
  .el-footer{
      background-color: rgb(95, 93, 93);
  }
  .toggle-button{
      background-color: rgb(166, 250, 250);
      text-align: center;
      cursor: pointer;
  }
</style>