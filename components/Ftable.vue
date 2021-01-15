<template>
<div class="ftable">
  <div class="ftable1">
  <el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"><div><a href="/"><img src="../images/huangji.jpg"></a></div>
  <div class="ftext"><span><a href="#">日式凉拌豆腐</a></span><br/><span class="ftextb">心清似水淡若云</span></div>
  </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  </div>

</div>
</template>
<script>
export default {
    

}
</script>
<style lang="less" scoped>
.ftable img{
   width: 200px;
   height: 200px;
}
.ftable1{
    margin-top: 40px;
}
.bg-purple {
    background: #d3dce6;
  }
.grid-content {
    width: 200px;
    height: 200px;
  }
  .ftable1 .ftext{
      width: 200px;
      height: 60px;
      background-color: darkorange;
      text-align: center;
  }
  .ftext a{
      color: #f4505b;
      font-weight: bold; 
      text-decoration: none;
  }
  .ftext{
      position: relative;
      margin-top: 5px;
  }
  .ftextb{
      position: absolute;
     font-size: 13px;
     margin-top: 5px;
     margin-left: -46px;
  }
</style>