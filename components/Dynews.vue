<template>
  <div class="dynews">
    <el-row :gutter="15">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-button type="warning" @click="open"> 热门 </el-button>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="15">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-button type="success" @click="open2" class="open2">
            日常
          </el-button>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="15">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-button type="primary" @click="open3" class="open3">
            明星
          </el-button>
        </div></el-col
      >
    </el-row>
  <el-row :gutter="15">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-button type="danger" @click="open4" class="open4">
            小众
          </el-button>
        </div></el-col
      >
    </el-row>
   <el-row :gutter="15">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-button type="info" @click="open5" class="open5">
            家庭
          </el-button>
        </div></el-col
      >
    </el-row>

  </div>
</template>
<style lang="less" scoped>
.dynews {
  position: absolute;
  right: 0;
}
.dynews .el-row {
  margin-top: 10px;
}
// .bg-purple{
//     margin-top: 60px;
// }
.el-button {
  font-weight: bold;
}
</style>

<script>
export default {
  methods: {
    open() {
      const h = this.$createElement;

      this.$notify({
        title: "花好月圆",
        message: h(
          "i",
          { style: "color: teal" },
          "花菇扒时蔬  粤式香炒饭  莲子百合红豆沙  时令生果盘  芦蒿香干  枣圆仁子羹"
        ),
        position: "bottom-right",
      });
    },
    open2() {
      const h = this.$createElement;

      this.$notify({
        title: "美点双辉映",
        message: h(
          "i",
          { style: "color: teal" },
          "丽影瑶池舞  凤凰展彩堂  蒜蓉蒸扇贝  彩椒炒花枝仁  鱼香焗龙虾  大漠风沙鸡"
        ),
        position: "bottom-right",
      });
    },
     open3() {
      const h = this.$createElement;

      this.$notify({
        title: "喜庆满堂",
        message: h(
          "i",
          { style: "color: teal" },
          "鸳鸯翡翠金腰带  避风塘排骨  银燕抱福来  鱼唇炖三宝  酱皇龙凤球  一品烩鲍片"
        ),
        position: "bottom-right",
      });
    },
      open4() {
      const h = this.$createElement;

      this.$notify({
        title: "万紫千红",
        message: h(
          "i",
          { style: "color: teal" },
          "鱼唇炖三宝  珊瑚扒双蔬  生炒糯米饭  杏鲍菰带贝  鸳鸯翡翠金腰带  莲子红豆沙  如意盅"
        ),
        position: "bottom-right",
      });
    },
      open5() {
      const h = this.$createElement;

      this.$notify({
        title: "星光金砂",
        message: h(
          "i",
          { style: "color: teal" },
          "原盅鸡炖翅  瑶池玉女网上鲍  蘑菰嫩羊排  花胶炖北菰  干贝芋头糕  咖哩豆沙酥"
        ),
        position: "bottom-right",
      });
    },
  },
};
</script>