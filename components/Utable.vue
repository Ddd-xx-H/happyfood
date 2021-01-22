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
      <template slot-scope="scope">
        <!-- 修改按钮
        <el-button type="primary" icon="el-icon-edit" size="small" @click="showEditDialog(scope.row.uname)"></el-button> -->
        <!-- 删除按钮 -->
        <el-button type="danger" icon="el-icon-delete" size="small" @click="handleDelete(scope.$index, scope.row)"></el-button>
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
     
     <!-- 修改用户的对话框
     <el-dialog
  title="修改用户"
  :visible.sync="editDialogVisible"
  width="50%"
  >
 <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
  <el-form-item label="用户名">
    <el-input v-model="editForm" disabled></el-input>
  </el-form-item>
 </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->
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
    //  async removeUserById(id){
    //   // 删除弹框
    //    const confirmResult = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
    //       confirmButtonText: '确定',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).catch(err => err)

    //     //确认删除，则返回值为字符串 confirm
    //     //取消了删除，则返回值为字符串 cancel
    //     // console.log(confirmResult)
    //     if (confirmResult !== 'confirm') {
    //       return this.$message.info('已取消删除')
    //     }
        
    //      const { data: res } = await this.$axios.post('/api/umanages' + id)
        
    //        if (!res.result) {
    //     return this.$message.error("删除用户失败！");
    //   }
    //   this.$message.success("删除用户成功！");
    //   this.getumanageList()
    //  }
    // 删除
    handleDelete(index, row) {
      this.$confirm("确定要删除 数据 吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.commit("umanage/setRemoveUmanage", row);
          this.$store.dispatch("umanage/removeUmanage", this);
          // this.$message({
          //   type: "success",
          //   message: "删除成功!",
          // });
        })
        .catch((error) => {
          console.error(error);
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    finishRemove(result) {
      console.log("result: %O", result);
      this.$router.go(0);
    },
    
  },
};
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 20px;
}
</style>