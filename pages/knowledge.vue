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
          <el-link href="/douyin" :underline="false"
            >抖音同款</el-link
          >
          <el-link href="/knowledge" :underline="false" class="first"
            >小知识</el-link
          >
        <el-link href="/login" class="login" :underline="false"><img style="width: 22px; height: 33px; margin-bottom:-4px;margin-right:10px" src="../images/login.png" />登录</el-link>
        </div>
      </div>
    </div>
       <div class="kcard">
              <div class="kcardd">
                    <div class="kyuan">
          <span class="yuan"><img src="../assets/zise.jpg"></span>
            <h2>美食<span>小知识</span>哦！</h2>
                    </div>
                    <!-- 卡片 -->
                    <div class="kcarddd">
                       <Kcard :KnowList="fetchKnowList" />
                    </div>
                  
              </div>
       </div>
      
    </div>
</template>
<script>
export default {
    data(){
    return{
      fetchKnowList:[],
      // koneledge:[],
    }
  },
  async fetch(){
    let result = await fetch('/api/knows').then((res ) => res.json());
    this.fetchKnowList =result.list
    console.log('this.fetchKnowList:O%',this.fetchKnowList);
  }
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
  .kcard{
    width: 100%;
  }
  .kcardd{
    width: 1300px;
    height: 1360px;
    margin: 0 auto;
    background-color: cornflowerblue;
    margin-top: 50px;
  }
   .fyuan{
    position: relative;
  }
 .kyuan h2{
   color: #f4505b;
   border-bottom: 4px solid #ac56c5;
   margin-left: 20px;
  
 }
.yuan img{
  position: absolute;
  margin-top: 3px;
 }
 .kyuan h2 span{
    color:  #a755c3;
 }
</style>