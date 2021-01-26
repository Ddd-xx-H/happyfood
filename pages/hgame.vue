<template>
  <div>
    <div class="title">
      <div class="nav">
        <div class="vv">
          <el-link href="/" :underline="false">首页</el-link>
          <el-link href="/fmenu" :underline="false">花样菜谱</el-link>
          <el-link href="/nutrition" :underline="false">营养百科</el-link>
          <el-link href="/" :underline="false">
            <img style="width: 40px; height: 40px" src="../images/logo.png" />
          </el-link>
          <el-link href="/hgame" :underline="false" class="first"
            >家庭趣玩</el-link
          >
          <el-link href="/douyin" :underline="false">抖音同款</el-link>
          <el-link href="/knowledge" :underline="false">小知识</el-link>
          <el-link href="/login" class="login" :underline="false"
            ><img
              style="
                width: 22px;
                height: 33px;
                margin-bottom: -4px;
                margin-right: 10px;
              "
              src="../images/login.png"
            />登录</el-link
          >
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="hgame">
      <div class="hgame1">
        <div class="tab">
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-coffee-cup"></i> 大人的</span>
              <img src="../assets/food-17.jpg">
              <img src="../assets/food-30.jpg">
              <img src="../assets/bg_2.jpg">
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><i class="el-icon-sugar"></i> 小朋友的</span>
                <img src="../assets/food-11.jpg">
                <img src="../assets/dm5.jpeg">
                <img src="../assets/food-3.jpg">
            </el-tab-pane>
           <el-tab-pane>
              <span slot="label"><i class="el-icon-fork-spoon"></i> 老年人的</span>
                <img src="../assets/bg_6.jpg">
                <img src="../assets/bg_3.jpg">
                <img src="../assets/food-18.jpg">
            </el-tab-pane>
           <el-tab-pane>
              <span slot="label"><i class="el-icon-cold-drink"></i> 综合的</span>
              <img src="../assets/food-10.jpg">
                <img src="../assets/food-4.jpg">
                <img src="../assets/food-16.jpg">
                
            </el-tab-pane>
          </el-tabs>
        </div>
        
      </div>
      <div class="zhedie">
           <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="大人的 Adult" name="1">
    <div>虾皮富含蛋白质、钙、钾、碘、镁、磷等微量元素及维生素、氨茶碱等成份，素有“钙库”的美称，</div>
    <div>能很好地保护心血管系统，对于预防动脉硬化、高血压及心肌梗死有一定的作用。家常菜中的虾皮烧豆腐、虾皮烧冬瓜、虾皮萝卜汤、虾皮拌菠菜等等，均不失为美味佳肴。</div>
  </el-collapse-item>
  <el-collapse-item title="小朋友的 Children's" name="2">
    <div>在宝宝6个月大时引入酸奶是非常合适的，酸奶可以提高人的免疫力并且有益大脑和心脏。</div>
    <div>注册营养师和营养学系名誉教授Nancy Hudson说“它是钙和维生素D的绝佳来源，也有助于发展健康的骨骼和牙齿。”可选择一些知名的品牌，最好是无糖的原味酸奶。</div>
  </el-collapse-item>
  <el-collapse-item title="老年人的 The elderly" name="3">
    <div>禽肉多半含蛋白质较多而脂肪较少，畜肉更适合老年人食用。禽肉细嫩易于消化。</div>
    <div>鱼肉较畜肉一更易于消化，蛋白质含量多，海鱼中有二十碳五烯酸和二十二碳六烯酸，</div>
    <div>对防治高脂血症和动脉粥样硬化有一定作用。海鱼中含碘多，虾米皮含钙多，均宜于多用。</div>
  </el-collapse-item>
  <el-collapse-item title="综合 Comprehensive" name="4">
    <div>带馅面食是我国的传统食品，它最大的优点是营养素齐全，符合人体需要。</div>
    <div>既是主食，又兼副食；既有荤菜，又有素菜。一种馅中可以加入七八种原料，实现了多种食物原料搭配的膳食平衡要求。</div>
  </el-collapse-item>
</el-collapse>
        </div>
    </div>

    <!-- footer -->
    <div class="footer"><Footer /></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       activeName: '1'
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  width: 100%;
  height: 68px;
  background-color: #f4505b;
  min-width: 1300px;
}
.nav {
  width: 100%;
  // margin: 0 auto;
  height: 68px;
  // background-color: gold;
  line-height: 68px;
  min-width: 1200px;
}
.el-link {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;

  color: #ffffff;
}
.vv {
  max-width: 900px;
  // background-color: green;
  margin: 0 auto;
}
.first {
  border-top: 2px solid rgb(255, 217, 147);
}
.login {
  margin-left: 56px;
}
// 内容
.hgame {
  width: 100%;
}
.hgame1 {
  width: 1300px;
  height: 400px;
  background-color: coral;
  margin: 0 auto;
  min-width: 1300px;
  margin-top: 30px;
}
.tab{
  position: absolute;
  margin-top: 40px;
  margin-left: 80px;
}
.el-tabs{
  height: 300px;
  width: 1140px;
 
}
.tab span:hover {
  color: coral;
}
.tab img{
  width: 280px;
  height:220px;
  border-radius: 60%;
  margin-right: 10px;
}
.zhedie{
  width: 1300px;
  margin: 0 auto;
  margin-top: 40px;
}
.footer{
  margin-top: 40px;
}

</style>