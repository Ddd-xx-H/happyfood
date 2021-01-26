<template>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</template>


<style lang="less" scoped>
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    height: 200px;
  }

</style>