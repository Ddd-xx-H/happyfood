<template>
  <el-table :data="umanageList" stripe border>
    <el-table-column type="index"></el-table-column>
    <el-table-column prop="udata" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="uname" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="uaddress" label="地址"> </el-table-column>
    <el-table-column prop="uphone" label="电话"> </el-table-column>
    <el-table-column label="状态">
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row.ustate"
        >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    umanageList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 20px;
}
</style>