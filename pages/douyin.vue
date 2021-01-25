<template>
    <div>
    <div class="title">
      <div class="nav">
        <div class="vv">
          <el-link href="/" :underline="false" 
            >首页</el-link
          >
          <el-link href="/fmenu" :underline="false"
            >花样菜谱</el-link
          >
          <el-link href="/nutrition" :underline="false"
            >营养百科</el-link
          >
          <el-link href="/" :underline="false">
            <img style="width: 40px; height: 40px" src="../images/logo.png" />
          </el-link>
          <el-link href="/hgame" :underline="false"
            >家庭趣玩</el-link
          >
          <el-link href="/douyin" :underline="false"   class="first"
            >抖音同款</el-link
          >
          <el-link href="/knowledge" :underline="false"
            >小知识</el-link
          >
        <el-link href="/login" class="login" :underline="false"><img style="width: 22px; height: 33px; margin-bottom:-4px;margin-right:10px" src="../images/login.png" />登录</el-link>
        </div>
      </div>
    </div>
 <!-- 内容主体部分 -->
    <div class="douyin">
       <div class="dy">
         <div>
         <Dynews />
         </div>
         <div class="dylunbo">
         <Dycard />
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
  min-width: 1400px;
}
.nav {
  width: 100%;
  // margin: 0 auto;
  height: 68px;
  // background-color: gold;
  line-height: 68px;
  min-width: 1300px;
  
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
  // 内容
  .douyin{
    width: 100%;
   
  }
  .dy{
    width: 1400px;
    height: 700px;
    background-color: aquamarine;
    margin: 0 auto;
    min-width: 1400px;
    
  }
  .dylunbo{
    margin-top: 40px;
  }
</style>