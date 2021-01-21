<template>
  <div>
    <div class="title">
      <div class="nav">
        <div class="vv">
          <el-link href="/" :underline="false" class="first"
            >首页</el-link
          >
          <el-link href="/fmenu" :underline="false"
            >花样菜谱</el-link
          >
          <el-link href="/nutrition" :underline="false"
            >营养百科</el-link
          >
          <el-link href="/" :underline="false">
            <img style="width: 40px; height: 40px" src="../images/logo.png" />
          </el-link>
          <el-link href="/hgame" :underline="false"
            >家庭趣玩</el-link
          >
          <el-link href="/douyin" :underline="false"
            >抖音同款</el-link
          >
          <el-link href="/knowledge" :underline="false"
            >小知识</el-link
          >
        <el-link href="/login" class="login" :underline="false"><img style="width: 22px; height: 33px; margin-bottom:-4px;margin-right:10px" src="../images/login.png" />登录</el-link>
        </div>
      </div>
    </div>
    <div class="lunbo">
      <Lunbo />
    </div>
    <div class="tmiddle">
      <div class="middle">
        <div class="middletext">
          Products to promote
          <div>菜品推介</div>
        </div>
        <div>
          <el-row>
            <el-col :span="12"
              ><div class="grid-content bg-purple">
                <img
                  src="../assets/food-1.jpg"
                  style="width: 600px; height: 300px"
                /></div
            ></el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <img
                  src="../images/food_1.gif"
                  style="width: 300px; height: 150px"
                />
                <img
                  src="../images/food.gif"
                  style="width: 300px; height: 150px"
                />
                <img
                  src="../images/food_2.gif"
                  style="width: 300px; height: 150px"
                />
                <img
                  src="../images/food_3.gif"
                  style="width: 300px; height: 150px"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 今日推荐 -->
    <div class="tsuggest">
      <div class="suggest">
        <h2>今日推荐 : 给亲爱的TA做顿元气满满的早餐吧</h2>
        <div class="pict">
          <el-row>
            <el-col :span="6"
              ><div class="pictgrid-content pict-purple">
                <div>
                  <img
                    src="../assets/food-9.jpg"
                    style="width: 325px; height: 320px"
                  />
                </div>
                <div class="des">
                  <p class="p1">美味圣诞早餐</p>
                  <p class="p2">什锦咖喱烩,营养美翻天</p>
                </div>
                <div class="green">
                  <el-link href="/" :underline="false">补充能量</el-link>
                </div>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="pictgrid-content pict-purple-light">
                <img
                  src="../assets/food-10.jpg"
                  style="width: 325px; height: 320px"
                />
                <div class="des">
                  <p class="p1">无花果美味早餐</p>
                  <p class="p2">无花果面包片,营养棒棒棒</p>
                </div>
                <div class="green">
                  <el-link href="/" :underline="false">营养均衡</el-link>
                </div>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="pictgrid-content pict-purple">
                <div>
                  <img
                    src="../assets/food-11.jpg"
                    style="width: 325px; height: 320px"
                  />
                </div>
                <div class="des">
                  <p class="p1">美味暖冬早餐</p>
                  <p class="p2">鸡蛋桂花米酿,味道美翻天</p>
                </div>
                <div class="green">
                  <el-link href="/" :underline="false">美味营养</el-link>
                </div>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="pictgrid-content pict-purple-light">
                <div>
                  <img
                    src="../assets/food-12.jpg"
                    style="width: 325px; height: 320px"
                  />
                </div>
                <div class="des">
                  <p class="p1">五谷营养早餐</p>
                  <p class="p2">核桃芝麻糊,营养双管齐下</p>
                </div>
                <div class="green">
                  <el-link href="/" :underline="false">维生素</el-link>
                </div>
              </div></el-col
            >
          </el-row>
        </div>
      </div>
    </div>
    <!-- 轮播卡片 -->
    <div class="menu">
      <div class="dmenu">
        <h2 class="h2Title">
          十二月，冬月需养心<el-link
            href="/fmenu"
            :underline="false"
            class="dmore"
            >更多选择>></el-link
          >
        </h2>
        <!-- 卡片 -->
        <div class="acard">
          <div class="dcard">
            <Dcard />
          </div>
          <div class="ecard">
            <Ecard />
          </div>
        </div>
      </div>
    </div>
    <!-- tab -->
    <div class="tab">
      <div class="dtab">
        <h2>时令食材</h2>
        <div class="etab">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="新鲜蔬菜" name="first"
              ><el-link href="/" :underline="false"
                ><img
                  style="width: 200px; height: 200px"
                  src="../images/zishu.jpg"
                /><img
                  style="width: 200px; height: 200px"
                  src="../images/jichi.jpg"
                /><img
                  style="width: 200px; height: 200px"
                  src="../images/banli.jpg"
                /><img
                  style="width: 200px; height: 200px"
                  src="../images/wuji.jpg"
                /><img
                  style="width: 200px; height: 200px"
                  src="../images/bailuobo.jpg"
                /><img
                  style="width: 200px; height: 200px"
                  src="../images/pingguo.jpg"
                /> </el-link
            ></el-tab-pane>
            <el-tab-pane label="时令鲜果" name="second"
              ><el-link href="/" :underline="false"
                ><img
                  style="width: 200px; height: 200px"
                  src="../images/shanyao.jpg"
                />
                <img
                  style="width: 200px; height: 200px"
                  src="../images/pingguo.jpg"
                />
                <img
                  style="width: 200px; height: 200px"
                  src="../images/daiyu.jpg"
                />
                <img
                  style="width: 200px; height: 200px"
                  src="../images/niurou.jpg"
                />
                <img
                  style="width: 200px; height: 200px"
                  src="../images/paigu.jpg"
                />
                 </el-link
            ></el-tab-pane>
            <el-tab-pane label="甜点" name="third"
              ><el-link href="/" :underline="false"
                ><img
                  style="width: 200px; height: 200px"
                  src="../images/daiyu.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/yutou.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/zishu.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/pingguo.jpg"
                /> 
                </el-link
            ></el-tab-pane>
            <el-tab-pane label="奶制品" name="fourth"
              ><el-link href="/" :underline="false"
                ><img
                  style="width: 200px; height: 200px"
                  src="../images/baicai.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/baicai.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/baicai.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/baicai.jpg"
                />     
                </el-link
            ></el-tab-pane>
            <el-tab-pane label="肉禽蛋品" name="five"
              ><el-link href="/" :underline="false"
                ><img
                  style="width: 200px; height: 200px"
                  src="../images/zhuliji.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/zhuliji.jpg"
                />
                <img
                  style="width: 200px; height: 200px"
                  src="../images/zhuliji.jpg"
                />
                <img
                  style="width: 200px; height: 200px"
                  src="../images/zhuliji.jpg"
                />
                </el-link
            ></el-tab-pane>
            <el-tab-pane label="水产品" name="six"
              ><el-link href="/" :underline="false"
                ><img
                  style="width: 200px; height: 200px"
                  src="../images/banli.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/banli.jpg"
                />
                <img
                  style="width: 200px; height: 200px"
                  src="../images/banli.jpg"
                />
                </el-link
            ></el-tab-pane>
            <el-tab-pane label="五谷杂粮" name="seven"
              ><el-link href="/" :underline="false"
                ><img
                  style="width: 200px; height: 200px"
                  src="../images/paigu.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/banli.jpg"
                />
                </el-link
            ></el-tab-pane>
            <el-tab-pane label="热门" name="eigth"
              ><el-link href="/" :underline="false"
                ><img
                  style="width: 200px; height: 200px"
                  src="../images/niurou.jpg"
                /> 
                <img
                  style="width: 200px; height: 200px"
                  src="../images/banli.jpg"
                />
                <img
                  style="width: 200px; height: 200px"
                  src="../images/banli.jpg"
                />
                </el-link
            ></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>

   <!-- 返回顶部 -->
   <div class="indextop">
     <a href="javascript:;" onclick="window.scrollTo(0,0);"><img src="../images/top.png"></a>
   </div>

    <!-- footer -->
    <div class="footer">
      <div class="dfooter">
          <div class="happyfood"><el-link href="/" :underline="false">
            <img style="width: 250px; height: 100px" src="../assets/happyfood.png" />
          </el-link> 
         </div>
         <div class="thappyfood">
         <p>让下厨变得更快乐</p>
         <p>让回家吃饭更幸福</p>
         </div>
          <div class="happypic">
            <el-link href="/" :underline="false">
            <img style="width: 105px; height: 105px" src="../images/weibo.png" />
            </el-link> 
             <el-link href="/" :underline="false">
            <img style="width: 105px; height: 105px" src="../images/qq.jpg" />
            </el-link> 
             <el-link href="/" :underline="false">
            <img style="width: 105px; height: 105px" src="../images/erweima.jpg" />
            </el-link> 
         </div>
          <!-- 友情链接 -->
          <div class="yfooter">
              <h4>友情链接</h4>
              <HR style="margin-top:5px" />
              <a href="#">棒棒美食</a>
              <a href="#">美食天下</a>
              <a href="#">中华美食网</a>
              <a href="#">QQ空间</a>
              <a href="#">网站地图</a>
              <a href="#">365音乐网</a>
              <a href="#">哔哩哔哩</a>
              <a href="#">腾讯视频</a>
              <a href="#">微博</a>
              <a href="#">绿洲</a>
              <a href="#">下厨房</a>
              <a href="#">美食达人</a>
              <br />
              <a href="#">搜狐美食</a>
              <a href="#">体质测试</a>
              <a href="#">中华网军事</a>
              <a href="#">QQ头条</a>
              <a href="#">澎湃新闻</a>
              <a href="#">438游戏网</a>
              <a href="#">网易云音乐</a>
              <HR style="margin-top:5px" />
          </div>
          <div class="bfooter">
             <a href="#">公司简介</a>
             <a href="#">关于我们</a>
             <a href="#">产品下载</a>
             <a href="#">加入我们</a>
             <a href="#">联系我们</a>
             <a href="#">商务合作</a>
             <a href="#">用户协议</a>
             <a href="#">隐私政策</a>
             <div class="lfooter">
                  <a target="_blank" href="https://www.miibeian.gov.cn" class="gray_a">京ICP备14030359号-1/<a target="_blank" href="https://beian.gov.cn/" class="gray_a"><img src="https://st-cn.meishij.net/p2/20180208/20180208111357_93713.png">京公网安备11010802026928Copyright © 2003-2021MEHIJ</a></a> 
             </div>
          </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 68px;
  background-color: #f4505b;
  min-width: 1300px;
  position: relative;

}
.nav {
  width: 100%;
  // margin: 0 auto;
  height: 68px;
  // background-color: gold;
  line-height: 68px;
  min-width: 1200px;
}
.title .el-link {
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
.lunbo {
  width: 100%;
  height: 540px;
  min-width: 1300px;
}
.tmiddle {
  width: 100%;
  // 下一个的最小宽度
  min-width: 1300px;
}
.middle {
  width: 1200px;
  height: 400px;
  // background-color: turquoise;
  margin: 0 auto;
}
.middletext {
  width: 400px;
  height: 50px;
  margin: 0 auto;
  // background-color: yellowgreen;
  text-align: center;
  color: #f4505b;
  margin-top: 30px;
  font-size: 20px;
}
.bg-purple {
  background: #d3dce6;
  height: 300px;
}
.bg-purple-light {
  background: #e5e9f2;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-row {
  margin-top: 30px;
}
.first {
  border-top: 2px solid rgb(255, 217, 147);
}
.login {
  margin-left: 56px;
}
// 今日推荐
.tsuggest {
  width: 100%;
  min-width: 1300px;
}
.suggest {
  width: 1300px;
  height: 400px;
  // background-color: rgb(250, 197, 50);
  margin: 0 auto;
  margin-top: 35px;
}
.tsuggest h2 {
  color: #f4505b;
  text-align: center;
  // background-color: paleturquoise;
}
.pict-purple {
  background: #d3dce6;
  height: 320px;
}
.pictgrid-content {
  min-height: 36px;
  position: relative;
}
.pict-purple-light {
  background: #e5e9f2;
  height: 320px;
}
.suggest .pict {
  position: relative;
}
.suggest .des {
  width: 325px;
  height: 63px;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  bottom: 0;
  left: 0;
}
.p1 {
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: bold;
  height: 36px;
  line-height: 36px;
  margin-left: 12px;
  color: #f4505b;
}
.p2 {
  font-family: "Times New Roman", Times, serif;
  margin-left: 12px;
  color: #f4505b;
}
.green .el-link {
  width: 100px;
  height: 40px;
  background-color: #679603;
  position: absolute;
  bottom: 42px;
  right: 10px;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
}
.menu {
  width: 100%;
  min-width: 1200px;
}
.dmenu {
  width: 1300px;
  height: 400px;
  // background-color: rgb(234, 171, 247);
  margin: 0 auto;
  margin-top: 45px;
}
.menu .h2Title {
  color: #f4505b;
  text-align: center;
  // background-color: rgb(175, 176, 238);
  position: relative;
}
.menu .dmore {
  position: absolute;
  right: 0;
  line-height: 32px;
  color: rgb(227, 159, 248);
  font-size: 15px;
}
// 卡片
.dcard {
  width: 650px;
  height: 165px;
  margin-top: 20px;
}
.ecard {
  width: 620px;
  height: 300px;
  margin-top: 50px;
  margin-left: 30px;
}
.acard {
  display: flex;
}
// tab
.tab {
  width: 100%;
  min-width: 1300px;
}
.dtab {
  width: 1200px;
  height: 380px;
  margin: 0 auto;
  margin-top: 45px;
  // background-color: rgb(227, 159, 248);
}
.dtab h2 {
  color: #f4505b;
  text-align: center;
}
.etab {
  margin-top: 30px;
}

// footer
.footer {
  width: 100%;
  background-color: #f4505b;
  
  
}
.dfooter {
  width: 1300px;
  height: 300px;
  background-color: #f4505b;
  display: flex;
  margin: 0 auto;
  position: relative;
  

}
.dfooter p{
  width: 170px;
  height: 30px;
  color: floralwhite;
  font-size: 19px;
}
.happyfood{
 width: 250px;
 height: 100px;
 position: absolute;
 left: 13%;
  margin-top: 40px;
}
.thappyfood{
  width: 170px;
  height: 100px;
  position: absolute;
  left: 35%;
  line-height: 140px;
}
.happypic{
  position: absolute;
  right: 10%;
  margin-top: 30px;

}
.happypic img{
 margin-right: 30px;
}
.yfooter{
  width: 1000px;
  height: 80px;
  position: absolute;
  // background-color: cornflowerblue;
  top: 54%;
  left: 13%;
}
.yfooter h4{
  color: #ffffff;

}
.yfooter a{
  color: #cdd0d3;
  margin-right: 22px;
  font-size: 14px;
  text-decoration: none;
}
.bfooter{
  width: 700px;
  height: 56px;
  // background-color: coral;
  position: absolute;
  bottom: 0;
  left: 26%;
 
}
.bfooter a{
  color: #cdd0d3;
  margin-right: 22px;
  font-size: 14px;
  text-decoration: none;
  
}
.bfooter a:hover{
  // color: cornflowerblue;
  background-color: cornflowerblue;
}
.lfooter{
  width: 500px;
  height: 26px;
  // background-color: cyan;
  margin-top: 10px;
  position: absolute;
  left: 10%;
  font-size: 2px;
}
.lfooter a{
  font-size: 2px;
}
.lfooter a:hover{
  background-color: rgba(255, 255, 255, 0);
}
</style>