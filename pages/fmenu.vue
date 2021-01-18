<template>
  <div>
    <div class="title">
      <div class="nav">
        <div class="vv">
          <el-link href="/" :underline="false">首页</el-link>
          <el-link href="/fmenu" :underline="false" class="first"
            >花样菜谱</el-link
          >
          <el-link href="/nutrition" :underline="false">营养百科</el-link>
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
    <!-- 主页导航 -->
    <div class="fnav">
      <div class="fnavb mt20 clear jtl">
        <a
          href="https://home.meishichina.com/show-top-type-recipe.html"
          target="_blank"
          title="一周最热"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r01.jpg"
            style="display: block"
          />
          一周最热
        </a>

        <a
          href="https://home.meishichina.com/show-top-type-recipe-order-pop.html"
          target="_blank"
          title="人气菜肴"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r02.jpg"
            style="display: block"
          />
          人气菜肴
        </a>

        <a
          href="https://home.meishichina.com/recipe/chunji/"
          target="_blank"
          title="春季食谱"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/cjsp.png"
            style="display: block"
          />
          春季食谱
        </a>

        <a
          href="https://home.meishichina.com/recipe/gaoyanzhi/"
          target="_blank"
          title="高颜值"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r04.jpg"
            style="display: block"
          />
          高颜值
        </a>

        <a
          href="https://home.meishichina.com/recipe/kuaishoucai/"
          target="_blank"
          title="快手菜"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r05.jpg"
            style="display: block"
          />
          快手菜
        </a>

        <a
          href="https://home.meishichina.com/recipe/zaocan/"
          target="_blank"
          title="早餐"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r06.jpg"
            style="display: block"
          />
          早餐
        </a>

        <a
          href="https://home.meishichina.com/recipe-menu.html"
          target="_blank"
          title="家常菜谱"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r07.jpg"
            style="display: block"
          />
          家常菜谱
        </a>
        <a
          href="https://hongbei.meishichina.com/"
          target="_blank"
          title="烘焙大全"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r08.jpg"
            style="display: block"
          />
          烘焙大全
        </a>
        <a
          href="https://mamapai.meishichina.com/"
          target="_blank"
          title="亲子专区"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r09.jpg"
            style="display: block"
          />
          亲子专区
        </a>
        <a
          href="https://home.meishichina.com/recipe-list.html"
          target="_blank"
          title="所有菜谱"
        >
          <img
            class="imgLoad"
            src="//static.meishichina.com/v6/img/zhen/r10.jpg"
            style="display: block"
          />
          所有菜谱
        </a>
      </div>
    </div>
    <!-- 菜谱卡片翻转 -->
    <div class="fcard">
      <div class="fcarde">
        <h2><img src="../images/xiaoji.jpg" />FANCY MENU</h2>

        <div class="fcardf">
          <el-row>
            <el-col :span="4"
              ><div class="grid-content bg-purple"> 
                <div>
                  <img
                    src="../assets/food-9.jpg"
                    
                  />
                </div>
                <!-- 文字框 -->
                <div class="font">
                  <p>这世界如果有更多的人热爱美食与诗歌胜过爱黄金，这世界会是一个更美好的地方。</p>
                  <span>——托尔金 J.R.R.Tolkien</span>
                </div>
                </div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple-light">
                 <div>
                  <img
                    src="../assets/food-20.jpg"
                   
                  />
                </div>
                 <div class="fontwhite">
                  <p>这世界如果有更多的人热爱美食与诗歌胜过爱黄金，这世界会是一个更美好的地方。</p>
                  <span>——托尔金 J.R.R.Tolkien</span>
                </div>
                </div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple">
                 <div>
                  <img
                    src="../assets/food-9.jpg"
                   
                  />
                </div>
                 <div class="font">
                  <p>这世界如果有更多的人热爱美食与诗歌胜过爱黄金，这世界会是一个更美好的地方。</p>
                  <span>——托尔金 J.R.R.Tolkien</span>
                </div>
                </div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple-light">
                 <div>
                  <img
                    src="../assets/food-20.jpg"
                   
                  />
                </div>
                 <div class="fontwhite">
                  <p>这世界如果有更多的人热爱美食与诗歌胜过爱黄金，这世界会是一个更美好的地方。</p>
                  <span>——托尔金 J.R.R.Tolkien</span>
                </div>
                </div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple">
                 <div>
                  <img
                    src="../assets/food-9.jpg"
                   
                  />
                </div>
                 <div class="font">
                  <p>这世界如果有更多的人热爱美食与诗歌胜过爱黄金，这世界会是一个更美好的地方。</p>
                  <span>——托尔金 J.R.R.Tolkien</span>
                </div>
                </div
            ></el-col>
            <el-col :span="4"
              ><div class="grid-content bg-purple-light">
                 <div>
                  <img
                    src="../assets/food-20.jpg"
                    
                  />
                </div>
                 <div class="fontwhite">
                  <p>这世界如果有更多的人热爱美食与诗歌胜过爱黄金，这世界会是一个更美好的地方。</p>
                  <span>——托尔金 J.R.R.Tolkien</span>
                </div>
                </div
            ></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="fmiddle">
        <div class="fmiddled">
          <!-- 标题 -->
          <div class="fyuan">
          <span class="yuan"><img src="../assets/yuandian.jpg"></span>
            <h2>最新<span>菜谱</span>一定要学会哦！</h2>
          </div>
          <!-- 表格咯 -->
          <div class="ftable">
                <Ftable :FmenuList="fetchFmenuList" />
          </div>
        </div>
    </div>
     <!-- 返回顶部 -->
   
     <a href="javascript:;" onclick="window.scrollTo(0,0);"><img src="../images/top.png"></a>
   
    <!-- footer -->
    <Footer />
  </div>
</template>
<script>
export default {
   data(){
    return{
      fetchFmenuList:[]
    }
   },
     async fetch(){
    let result = await fetch('/api/fmenus').then((res ) => res.json());
    this.fetchFmenuList =result.list
    console.log('this.fetchFmenuList:O%',this.fetchFmenuList);
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
// 导航
.fnav {
  width: 100%;
}
.fnavb {
  width: 1300px;
  height: 120px;
  margin: 0 auto;
  // background-color: seagreen;
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  margin-top: 40px;
}
.fnavb a {
  text-decoration: none;
  color: rgb(138, 139, 139);
  text-align: center;
}
.fnavb a:hover {
  color: rgb(74, 236, 223);
}
// 菜单卡片
.fcard {
  width: 100%;
}
.fcarde {
  width: 1300px;
  height: 460px;
  // background-color: springgreen;
  margin: 0 auto;
  margin-top: 60px;
}
.fcarde h2 {
  color: #f4505b;
  text-align: center;
}
.bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #ffffff;
  }
  .grid-content {
    min-height: 380px;
  }
  .fcardf{
    margin-top: 40px;
  
  }
  .fcardf img{
    width: 180px;
    height: 220px;
    margin: 20px 18px 20px;
    transform: all 0.6s;
  //  -webkit-transition: 1s;
  //   transition: 1s;
    
  }
  .fcardf img:hover{
    transform: scale(1.2);
    //  -webkit-transform: scale(-1,1);
    //  -moz-transform: scale(-1,1);
  }
  .font{
    width: 180px;
    height: 100px;
    // background-color: aqua;
    margin: 0 0 18px 20px;
    position: relative;
  }
  .font p{
    font-size: 13px;
    text-indent: 2em;
    color: #ffffff;
  }
  .font span{
     color: #ffffff;
     font-size: 13px;
     position: absolute;
     bottom: 0;
     right: 0;
  }
  .fontwhite{
     width: 180px;
    height: 100px;
    // background-color: aqua;
    margin: 0 0 18px 20px;
    position: relative;
  }
  .fontwhite p{
    font-size: 13px;
    text-indent: 2em;
    color: #504e4e;
  }
  .fontwhite span{
     color: #504e4e;
     font-size: 13px;
     position: absolute;
     bottom: 0;
     right: 0;
  }
  // 
  .fmiddle{
    width: 100%;
  }
  .fmiddled{
    width: 1300px;
    height: 980px;
    // background-color: springgreen;
    margin: 0 auto;
    margin-top: 50px;
  }
  .fyuan{
    position: relative;
  }
 .fyuan h2{
   color: #f4505b;
   border-bottom: 3px solid #18d4c5;
   margin-left: 20px;
  
 }
.yuan img{
  position: absolute;
  margin-top: 2px;
 }
 .fyuan h2 span{
    color:  #18d4c5;
 }
</style>