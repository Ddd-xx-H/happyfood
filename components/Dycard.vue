<template>
	<div class="cardBanner">
			<ul>
				<li v-for="(item,index) in cardData" :key="index">
					<a href="#">
						<img :src="item.url" alt="">
						<p>{{item.order}}</p>
					</a>
				</li>
				<div class="arrow-left" @click="toggleFun(-1)">&lt;</div>
				<div class="arrow-right" @click="toggleFun(1)">&gt;</div>
			</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				cardData: [
					{id:1,url:require('../assets/food-12.jpg'),order:('营养蔬菜汤')},
					{id:2,url:require('../assets/food-13.jpg'),order:('香喷喷肉饭')},
					{id:3,url:require('../assets/food-14.jpg'),order:('牛肉暴风堡')},
					{id:4,url:require('../assets/food-15.jpg'),order:('美味营养馄饨')},
					{id:5,url:require('../assets/food-16.jpg'),order:('芝士溏心蛋')}
				]
			}
		},
		methods: {
			//通过函数改变数据从而达到视图的改变
			toggleFun(p){
				this.cardData = this.cardData.map((item,index,array) => {
					if(index===array.length-1&&p===1){
						item = array[0]
					}
					else if(index===0&&p===-1){
						item = array[array.length-1];
					}else{
						item = array[index+p];
					}
					return item;
				})
			}
		}
	}
</script>

<style lang="less" scoped>
   li{
     list-style: none;
 }
li a{
 text-decoration: none;
}
.cardBanner{
	padding: 10px 30px;
	background-color: #fff;
	border: 1px solid #ccc;
    position: relative;
    
}
.cardBanner ul{
	display: flex;
    overflow: scroll;    /*设置滚动条*/
     
}
.cardBanner ul::-webkit-scrollbar{    /*隐藏滚动条*/
	display: none;
}
.cardBanner ul>li{ 
    // width: 31.33333%;
    width: 34.3%;
	flex-shrink: 0;
    padding-right: 50px;
    text-align: center;
    margin-left: -8px;
   
}
//   .cardBanner ul>li:first-child{
//  	padding-left: 0;
// }

.cardBanner ul>li a{
	display: block;
	width: 100%;
	height: 100%;
}
.cardBanner ul>li img{
    width: 400px;
	height: 250px;
	border-radius: 5px;
}
.cardBanner ul>li p{
	margin: 0;
}
[class^='arrow']{
	font-size: 30px;
	transform: scaleX(.7);
	color: #ddd;
}
.arrow-left{
	position: absolute;
	left: 5px;
	top: 50%;
	margin-top: -17px;
}
.arrow-right{
	position: absolute;
	right: 5px;
	top: 50%;
	margin-top: -17px;
}
</style>