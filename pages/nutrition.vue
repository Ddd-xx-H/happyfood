<template>
  <div>
    <div class="title">
      <div class="nav">
        <div class="vv">
          <el-link href="/" :underline="false">首页</el-link>
          <el-link href="/fmenu" :underline="false">花样菜谱</el-link>
          <el-link href="/nutrition" :underline="false" class="first"
            >营养百科</el-link
          >
          <el-link href="/" :underline="false">
            <img style="width: 40px; height: 40px" src="../images/logo.png" />
          </el-link>
          <el-link href="/hgame" :underline="false">家庭趣玩</el-link>
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

    <!-- 正文 -->
    <div class="nmenu">
      <div class="nbaike">
        <!-- 主体 -->
        <div class="nmain">
          <Nmenu :NmenuList="fetchNmenuList" />
        </div>
        <!-- 右边 -->
        <div class="nymain">
          <div class="nbg">
            <img src="../assets/bao.png" />
            <h3>食物营养百科分类</h3>
            <div class="nline"></div>

            <div class="nflex">
              <!-- <div class="ncircle"><a href="#">全部</a></div>
                  <div class="nwcircle"><a href="#">畜肉类</a></div>
                  <div class="nwcircle"><a href="#">薯类淀粉</a></div>
                  <div class="nwcircle"><a href="#">菌藻类</a></div>
                  <div class="nwcircle"><a href="#">坚果种子</a></div>
                  <div class="nwcircle"><a href="#">奶制品</a></div>
                  <div class="nwcircle"><a href="#">奶制品</a></div>
                  <div class="nwcircle"><a href="#">奶制品</a></div>
                  <div class="nwcircle"><a href="#">奶制品</a></div>
                  
                  <div class="nhcircle"><a href="#">奶制品</a></div>
                  <div class="njcircle"><a href="#">榛果尼</a></div> -->
              <el-row :gutter="15">
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">薯类</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">肉类</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">奶制</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">坚果</a>
                  </div></el-col
                >
              </el-row>
              <el-row :gutter="15">
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">菌类</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">藻类</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">淀粉类</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">禽肉类</a>
                  </div></el-col
                >
              </el-row>
              <el-row :gutter="15">
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">谷类</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">水果</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">乳类</a>
                  </div></el-col
                >
              </el-row>
              <el-row :gutter="15">
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">蛋类</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">软饮料</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">蔬菜</a>
                  </div></el-col
                >
              </el-row>
              <el-row :gutter="15">
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">水产类</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">干豆</a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div class="grid-content bg-purple">
                    <a href="#">油脂</a>
                  </div></el-col
                >
              </el-row>
            </div>
          </div>
        </div>

        <div class="ntmain">
          <div class="ntbg">
            <img src="../assets/jidan.png" />
            <h3>热门食物营养百科</h3>
            <div class="ntline"></div>
            <div class="ntflex">
              <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >不同牛奶适合不同的人群 营养搭配要合</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >维生素B17(苦杏仁苷)</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >细说野山参不定根(艼)之枣核芋</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >人参皂甙类型、人参皂甙成分列表</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >圆白菜不为人知的七大健康功效</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >春季最适合吃什么水果补充人体营养</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >这七种调味品如何用最健康营养(组图)</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >鸡蛋吃法排行榜告诉你怎样吃最营养</a
                    >
                  </div></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >中国历史上人参资源分布</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >春季最适合吃什么水果补充人体营养</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >多吃葡萄可抗衰老 连皮带子吃更营养</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >黑豆五大营养价值 抗衰老治便秘护发</a
                    >
                  </div></el-col
                >
              </el-row>
               <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >各种肉类的营养价值汇总(图)</a
                    >
                  </div></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >黄瓜的类型和品种</a
                    >
                  </div></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="8"
                  ><div class="grid-content bg-purple">
                    <img src="../assets/jiantou.png" /><a href="#"
                      >五谷杂粮要怎样吃才最养身</a
                    >
                  </div></el-col
                >
              </el-row>
            </div>
          </div>
        </div>
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
      fetchNmenuList: [],
    };
  },
  async fetch() {
    let result = await fetch("/api/nmenus").then((res) => res.json());
    this.fetchNmenuList = result.list;
    console.log("this.fetchNmenuList:O%", this.fetchNmenuList);
  },
};
</script>
<style lang="less" scoped>
.title {
  width: 100%;
  height: 68px;
  background-color: #f4505b;
  min-width: 1400px;
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
//  正文
.nmenu {
  width: 100%;
}
.nbaike {
  width: 1400px;
  height: 1000px;
  // background-color: darkorange;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-top: 40px;
}

.nymain {
  width: 300px;
  height: 400px;
  background-color: #effd71;
  // background-color: #f4505b;
  margin-left: 20px;
}
.ntmain {
  width: 300px;
  height: 500px;
  background-color: cornflowerblue;
  position: absolute;
  right: 0;
  bottom: 70px;
}
.nbg {
  width: 280px;
  height: 380px;
  background-color: #ffffff;
  margin: 10px 10px 10px 10px;
}
.nline {
  border-bottom: 1px solid #dddddd;
}
.nbg h3 {
  margin-left: 28px;
  position: absolute;
  top: 7px;
  color: #f4505b;
}
.nflex {
  margin-left: 0px;
}

.nflex .bg-purple {
  background: #549e01;
}

.nflex .grid-content {
  border-radius: 8px;
  min-height: 50px;
  text-align: center;
}
.nflex .el-row {
  margin-top: 18px;
}
.nflex .grid-content a {
  text-decoration: none;
  line-height: 50px;
  color: #ffffff;
}
.nflex .grid-content a:hover {
  color: #2d3d81;
}
// 热门美食营养
.ntbg {
  width: 280px;
  height: 480px;
  background-color: #ffffff;
  margin: 10px 10px 10px 10px;
}
.ntline {
  border-bottom: 1px solid #dddddd;
}
.ntbg h3 {
  margin-left: 28px;
  position: absolute;
  top: 10px;
  color: #f4505b;
}
// .ntflex .bg-purple {
//   background: #d3dce6;
// }
.ntflex .grid-content {
  width: 250px;
  height: 30px;
  margin-left: 30px;
}
.ntflex img {
  width: 20px;
  height: 25px;
  position: absolute;
  left: 0;
}
.ntflex a {
  font-size: 14px;
}
.footer{
  min-width: 1300px;
}
</style>