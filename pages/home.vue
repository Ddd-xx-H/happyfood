<template>
    <el-container class="home_container">
  <el-header>Header<el-button type="info" @click="ligout">返回</el-button>

  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
    
    
</template>
<script>
export default {
    methods: {
        ligout() {
           window.sessionStorage.clear();
           this.$router.push("/login");
        }
    }
}
</script>
<style lang="less" scoped>
.home_container{
      height: 100vh;
  }
  .el-header{
      background-color: sandybrown;
  }
  .el-aside{
      background-color: skyblue;
  }
  .el-main{
      background-color: springgreen;
  }
  .el-footer{
      background-color: rgb(95, 93, 93);
  }
</style>