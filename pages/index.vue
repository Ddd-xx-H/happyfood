<template>
  <div>
    <div class="title">
      <div class="nav">
        <div class="vv">
          <el-link href="https://element.eleme.io" :underline="false"
            >首页</el-link
          >
          <el-link href="https://element.eleme.io" :underline="false"
            >花样菜谱</el-link
          >
          <el-link href="https://element.eleme.io" :underline="false"
            >营养百科</el-link
          >
          <el-link href="https://element.eleme.io" :underline="false">
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
        </div>
      </div>
    </div>
    <div class="lunbo">
      <Lunbo />
    </div>
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
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 68px;
  background-color: #f4505b;
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
  max-width: 740px;
  // background-color: green;
  margin: 0 auto;
}
.lunbo {
  width: 100%;
  height: 540px;
  min-width: 1200px;
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
  background-color: yellowgreen;
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

  
</style>