<template>
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
</template>
<style lang="less" scoped>
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