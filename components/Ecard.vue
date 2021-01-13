<template>
  <el-carousel height="300px" direction="vertical" :autoplay="true" :interval="800">
    <el-carousel-item v-for="item in 3" :key="item">
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="less" scoped>
.el-carousel__item{
  background-size: cover;
  
 }
  
  .el-carousel__item:nth-child(2n) {
     background-image: url(../assets/food-14.jpg);
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-image: url(../assets/food-15.jpg);
  }
  .el-carousel__item:nth-child(3) {
   background-image: url(../assets/food-16.jpg);
  }
</style>