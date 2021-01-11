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
           <el-link href="https://element.eleme.io" :underline="false"
          >
          <img style="width: 40px; height: 40px" src="../images/logo.png" />
          </el-link
        >
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
     <div class="middletext"></div>
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
  background-color: #F4505B;
}
.nav {
  width: 100%;
  // margin: 0 auto;
  height: 68px;
  // background-color: gold;
  line-height: 68px;
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
.lunbo{
 width: 100%;
}
.middle{
  width: 1200px;
  height: 200px;
  background-color: turquoise;
  margin: 0 auto;
}
.middletext{
   max-width: 400px;
   height: 200px;
   margin: 0 auto;
   background-color: yellowgreen;
}
</style>