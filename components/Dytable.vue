<template>
<div>
<div class="dy1">
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple1"><a href="#"><img src="../assets/lzq1.jpg">李 子 柒</a></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple1"><a href="#"><img src="../assets/xg1.jpeg">滇 西 小 哥</a></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple1"><a href="#"><img src="../assets/gxt1.jpeg">关 晓 彤</a></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple1"><a href="#"><img src="../assets/nana.jpeg">欧 阳 娜 娜</a></div></el-col>
</el-row>
</div>

<div class="dy2">
<el-row :gutter="25">
  <el-col :span="8"><div class="grid-content bg-purple2"><a href="#"><img src="../assets/zct1.gif"></a></div><div class="text2">中餐厅系列(一)</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple2"><a href="#"><img src="../assets/zct2.gif"></a></div><div class="text2">中餐厅系列(二)</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple2"><a href="#"><img src="../assets/zct3.gif"></a></div><div class="text2">中餐厅系列(三)</div></el-col>
</el-row>
</div>

<div class="dy3">
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content3 bg-purple3"><a href="#"><img src="../assets/dm1.gif"></a><div class="text3">动  漫  同  款</div></div></el-col>
  <el-col :span="6"><div class="grid-content3 bg-purple3"><a href="#"><img src="../assets/dm2.gif"></a><div class="text3">动  漫  同  款</div></div></el-col>
  <el-col :span="6"><div class="grid-content3 bg-purple3"><a href="#"><img src="../assets/dm3.gif"></a><div class="text3">动  漫  同  款</div></div></el-col>
  <el-col :span="6"><div class="grid-content3 bg-purple3"><a href="#"><img src="../assets/dm4.gif"></a><div class="text3">动  漫  同  款</div></div></el-col>
</el-row>
</div>

</div>
</template>


<style lang="less" scoped>
  .bg-purple3 {
    background: #fffd79;
    
  }
  .grid-content {
    height: 300px;
  }
   .grid-content3 {
    height: 300px;
  }
   .bg-purple1 {
    background: #bef6fd;
  }
   .bg-purple2 {
    background: #e5e6da;
  }
.dy2{
  margin-top: 30px;
}
.dy3{
  margin-top: 30px;
}
.dy1 img{
  width: 320px;
  height: 220px;
  margin-top: 10px;
}
.dy1 a{
  color: rgb(166, 54, 241);
  text-decoration: none;
  font-size: 18px;
  background-color: chartreuse;
}
.dy2 img{
  width: 400px;
  height: 260px;
  margin: 0px 0px 25px 25px;
  
}
.text2{
  width: 260px;
  height: 30px;
  line-height: 30px;
  background-color: rgb(255, 200, 82);
  text-align: center;
  border-radius: 10px;
  margin-left: 88px;
  margin-top: -14px;
}
.dy3 img{
  width: 280px;
  height: 300px;
}
.text3{
  margin: 70px 60px 15px 15px;
  font-size: 18px;
  // color: rgb(92, 253, 29);
  color: #f4505b;
  font-weight: bold;
  writing-mode: vertical-lr;
  letter-spacing: 10px;
}
 .grid-content3 {
  display: flex;
  }
</style>