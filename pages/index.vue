<template>
  <div>
    <div class="title">
      <div class="nav">
        <div class="vv">
          <el-link href="/" :underline="false" class="first"
            >首页</el-link
          >
          <el-link href="/fmenu" :underline="false"
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
    <div class="lunbo">
      <Lunbo />
    </div>
    <div class="tmiddle">
    <div class="middle">
      <div class="middletext">
        Products to promote
        <div>菜品推介</div>
      </div>
      <div>
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple"><img src="../assets/food-1.jpg" style="width:600px;height:300px"></div></el-col>
          <el-col :span="12"
            >
            <div class="grid-content bg-purple-light">
              <img src="../images/food_1.gif" style="width:300px;height:150px">
              <img src="../images/food.gif" style="width:300px;height:150px">
              <img src="../images/food_2.gif" style="width:300px;height:150px">
              <img src="../images/food_3.gif" style="width:300px;height:150px">
            </div> 
          </el-col>
        </el-row>
      </div>
    </div>
    </div>
    <!-- 今日推荐 -->
    <div class="tsuggest">
    <div class="suggest">
         <h2>今日推荐 : 给亲爱的TA做顿元气满满的早餐吧</h2>
         <div class="pict">
        <el-row>
          <el-col :span="6"><div class="pictgrid-content pict-purple">
            <div><img src="../assets/food-9.jpg" style="width:325px;height:320px"></div>
            <div class="des">
              <p class="p1">美味圣诞早餐</p>
              <p class="p2">什锦咖喱烩,营养美翻天</p>
            </div>
            </div></el-col>
          <el-col :span="6"><div class="pictgrid-content pict-purple-light">
            <img src="../assets/food-10.jpg" style="width:325px;height:320px">
            <div class="des">
              <p class="p1">无花果美味早餐</p>
              <p class="p2">无花果面包片,营养棒棒棒</p>
            </div>
            </div></el-col>
          <el-col :span="6"><div class="pictgrid-content pict-purple"> 
            <div><img src="../assets/food-11.jpg" style="width:325px;height:320px"></div>
            <div class="des">
              <p class="p1">美味暖冬早餐</p>
              <p class="p2">鸡蛋桂花米酿,味道美翻天</p>
            </div>
            </div></el-col>
          <el-col :span="6"><div class="pictgrid-content pict-purple-light">
            <div><img src="../assets/food-12.jpg" style="width:325px;height:320px"></div>
            <div class="des">
              <p class="p1">五谷营养早餐</p>
              <p class="p2">核桃芝麻糊,营养双管齐下</p>
            </div>
            </div></el-col>
        </el-row>
         </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 68px;
  background-color: #f4505b;
  min-width: 1300px;
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
.lunbo {
  width: 100%;
  height: 540px;
  min-width: 1300px;
}
.tmiddle{
  width: 100%;
  // 下一个的最小宽度
  min-width: 1300px;
}
.middle {
  width: 1200px;
  height: 400px;
  background-color: turquoise;
  margin: 0 auto;
  
}
.middletext {
  width: 400px;
  height: 50px;
  margin: 0 auto;
  // background-color: yellowgreen;
  text-align: center;
  color: #f4505b;
  margin-top: 30px;
  font-size: 20px;
}
 .bg-purple {
    background: #d3dce6;
    height: 300px;

  }
  .bg-purple-light {
    background: #e5e9f2;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
   
  }
  .el-row{
    margin-top: 30px;
    
  }
.first{
  border-top: 2px solid rgb(255, 217, 147) ;
  
}
  .login{
    margin-left: 56px;

  }
  // 今日推荐
  .tsuggest{
    width: 100%;
    min-width: 1300px;
  }
  .suggest {
  width: 1300px;
  height: 400px;
  background-color: rgb(250, 197, 50);
  margin: 0 auto;
  margin-top: 35px;
}
h2{
  color: #f4505b;
  text-align: center;
  background-color: paleturquoise;
}
.pict-purple {
    background: #d3dce6;
    height: 320px;
  }
   .pictgrid-content {
    min-height: 36px;
    position: relative;
  }
    .pict-purple-light {
    background: #e5e9f2;
    height: 320px;
  }
  .suggest .pict{
    position: relative;
    
  }
  .suggest .des{
    width: 325px;
    height: 63px;
    background-color: rgba(255, 255, 255, .6);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .p1{
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: bold;
    height: 36px;
    line-height: 36px;
    margin-left: 12px;
    color: #f4505b;
  }
  .p2{
    font-family: 'Times New Roman', Times, serif;
    margin-left: 12px;
    color: #f4505b;
  }
</style>