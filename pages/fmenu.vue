<template>
    <div>
    <div class="title">
      <div class="nav">
        <div class="vv">
          <el-link href="/" :underline="false" 
            >首页</el-link
          >
          <el-link href="/fmenu" :underline="false" class="first"
            >花样菜谱</el-link
          >
          <el-link href="https://element.eleme.io" :underline="false"
            >营养百科</el-link
          >
          <el-link href="/" :underline="false">
            <img style="width: 40px; height: 40px" src="../images/logo.png" />
          </el-link>
          <el-link href="https://element.eleme.io" :underline="false"
            >家庭趣玩</el-link
          >
          <el-link href="https://element.eleme.io" :underline="false"
            >抖音同款</el-link
          >
          <el-link href="https://element.eleme.io" :underline="false"
            >小知识</el-link
          >
        <el-link href="/login" class="login"><img style="width: 22px; height: 33px; margin-bottom:-4px;margin-right:10px" src="../images/login.png" />登录</el-link>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .title {
  width: 100%;
  height: 68px;
  background-color:#f4505b;
  min-width: 1200px;
}
.nav {
  width: 100%;
  // margin: 0 auto;
  height: 68px;
  // background-color: gold;
  line-height: 68px;
  min-width: 1200px;
  
}
.el-link {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;

  color: #ffffff;
}
.vv {
  max-width: 900px;
  // background-color: green;
  margin: 0 auto;
}
.first{
  border-top: 2px solid rgb(255, 217, 147) ;
  
}
  .login{
    margin-left: 56px;

  }
</style>