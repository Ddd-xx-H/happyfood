<template>
 <div>
  <el-table :data="umanageList" stripe border>
    <el-table-column type="index"></el-table-column>
    <el-table-column prop="udata" label="日期" width="180"> </el-table-column>
    <el-table-column prop="uname" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="uaddress" label="地址"> </el-table-column>
    <el-table-column prop="uphone" label="电话"> </el-table-column>
    <el-table-column label="状态">
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row.ustate"
          @change="umanageStateChanged(scope.row)"
        >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template>
        <!-- 修改按钮 -->
        <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
        <!-- 删除按钮 -->
        <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
        <!-- 分配角色按钮 -->
        <el-tooltip
          effect="dark"
          content="分配角色"
          placement="top"
          :enterable="false"
        >
          <el-button
            type="warning"
            icon="el-icon-setting"
            size="small"
          ></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>

  </div>
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
    return {
     
    };
  },
  created() {},
  methods: {
    // 监听switch开关状态的改变
    async umanageStateChanged(umanageinfo) {
      console.log(umanageinfo);
      const { data: res } = await this.$axios.get(
        `/api/umanages/changeState?id=${umanageinfo.id}&ustate=${umanageinfo.ustate}`
      );
      if (!res.result) {
        umanageinfo.ustate = !umanageinfo.ustate;
        return this.$message.error("更新用户状态失败！");
      }
      this.$message.success("更新用户状态成功！");
    },
  },
};
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 20px;
}
</style>