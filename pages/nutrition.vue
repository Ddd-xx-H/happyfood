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
          <el-link href="/nutrition" :underline="false" class="first"
            >营养百科</el-link
          >
          <el-link href="/" :underline="false">
            <img style="width: 40px; height: 40px" src="../images/logo.png" />
          </el-link>
          <el-link href="/hgame" :underline="false"
            >家庭趣玩</el-link
          >
          <el-link href="/douyin" :underline="false"
            >抖音同款</el-link
          >
          <el-link href="/knowledge" :underline="false"
            >小知识</el-link
          >
        <el-link href="/login" class="login" :underline="false"><img style="width: 22px; height: 33px; margin-bottom:-4px;margin-right:10px" src="../images/login.png" />登录</el-link>
        </div>
      </div>
    </div>

   <!-- 正文 -->
     <div class="nmenu">
         <div class="nbaike">
              <!-- 主体 -->
              <div class="nmain">
                <img src="../assets/paihang.png">
                 <h3>食物营养百科</h3>
                 <div class="npaihang">
                    <img src="../assets/shu.png">
                   <p>五谷杂粮的营养丰富怎么吃最健康 哪些人群不宜多吃粗粮</p>
                   <div class="line"></div>
                 </div>
              </div>
              <!-- 右边 -->
              <div class="nymain"></div>
              <div class="ntmain"></div>
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
//  正文
  .nmenu{
    width: 100%;
  }
  .nbaike{
    width: 1400px;
    height: 1000px;
    background-color: darkorange;
    margin: 0 auto;
    display: flex;
    position: relative;
    margin-top: 40px;
  }
  .nmain{
    width: 1000px;
    height: 900px;
    background-color: aqua;
    position: relative;
  }
  .nymain{
    width: 300px;
    height: 400px;
    background-color: chartreuse;
    margin-left: 20px;
  }
  .ntmain{
    width: 300px;
    height: 500px;
    background-color: cornflowerblue;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .nmain h3{
    color: #f4505b;
    border-bottom: 1px solid #dddddd;
    margin-top: -27px;
    margin-left: 25px;
  }
.npaihang img{
  margin-top: 30px;
}
.npaihang p{
  margin-left: 30px;
  margin-top: -27px;
  
}
.line{
  border-bottom: 1px dashed #dddddd; 
  margin-top: 10px;
}
</style>