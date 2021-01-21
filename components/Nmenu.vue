<template>
      <div class="nmain">
                <img src="../assets/paihang.png">
                 <h3>食物营养百科</h3>
                 <div class="npaihang" v-for="item in NmenuList" :key="item.Nmenu_id">
                    <img src="../assets/shu.png">
                   <p>{{ item.Nmenu_desc }}</p>
                   <div class="nall">
                   <div class="nfigure">{{ item.Nmenu_figure }}</div>
                   <div class="ntime">{{ item.Nmenu_time }}</div>
                   </div>
                  
                   <div class="line"></div>
                 </div>
              </div>
</template>
<script>
export default {
      props: {
        NmenuList: {
         type: Array,
         default: function () {
           return [];
      },
    },
    },
     data() {
    return {
      
    }
  },
}
</script>
<style lang="less" scoped>
   .nmain{
    width: 1000px;
    height: 900px;
    // background-color: aqua;
    position: relative;
  }
  .npaihang img{
  margin-top: 30px;
}
.npaihang p{
  margin-left: 30px;
  margin-top: -27px;
  width: 560px;
  font-size: 18px;
  
}
.line{
  border-bottom: 1px dashed #dddddd; 
  margin-top: 10px;
}
.nfigure{
  color: #549E01;
  width: 80px;
  position: absolute;
  left: 170px;
  top: -20px;
}
.ntime{
  width: 150px;
  position: absolute;
  left: 260px;
  top: -20px;
}
 .nmain h3{
    color: #f4505b;
    border-bottom: 1px solid #dddddd;
    margin-top: -27px;
    margin-left: 25px;
  }
  .nall{
      width: 230px;
      height: 20px;
    //   background-color: antiquewhite;
      position: absolute;
      right: 240px;
  }
</style>