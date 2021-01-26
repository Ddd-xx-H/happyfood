<template>
  <el-carousel arrow="never" type="card" :autoplay="false" height="330px" width="325px" indicator-position="none">
    <el-carousel-item v-for="item in 6" :key="item">
     
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.el-carousel__item{
  background-size: cover;
 }
  
  .el-carousel__item:nth-child(2n) {
      
   background-image: url(../assets/food-17.jpg);
  
  }

   .el-carousel__item:nth-child(2n+1) {
       
   background-image: url(../assets/food-18.jpg);
  }
    .el-carousel__item:nth-child(6) {
  
   background-image: url(../assets/food-19.jpg);
  }
     .el-carousel__item:nth-child(5) {
   
   background-image: url(../assets/food-30.jpg);
  }
     .el-carousel__item:nth-child(4) {
       
   background-image: url(../assets/food-31.jpg);
  }
      .el-carousel__item:nth-child(3) {
      
   background-image: url(../assets/food-32.jpg);
  }
  
</style>