<template>
  <el-carousel :interval="4000" arrow="always" height="540px">
    <el-carousel-item v-for="item in 6" :key="item">
     
    </el-carousel-item>
  </el-carousel>
</template>

<style>
 .el-carousel__item{
  background-size: cover;
  
 }
   
  
  .el-carousel__item:nth-child(2n) {
 
   background-image: url(../assets/food-1.jpg);
 
  }

   .el-carousel__item:nth-child(2n+1) {
      
   background-image: url(../assets/food-2.jpg);
   
  }
    .el-carousel__item:nth-child(6) {
       
   background-image: url(../assets/food-3.jpg);
  
  }
     .el-carousel__item:nth-child(5) {
       
   background-image: url(../assets/food-4.jpg);
  }
     .el-carousel__item:nth-child(4) {
     
   background-image: url(../assets/food-5.jpg);
  }
      .el-carousel__item:nth-child(3) {
     
   background-image: url(../assets/food-6.jpg);
  }
  
</style>