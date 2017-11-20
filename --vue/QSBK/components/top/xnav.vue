<template>
	<div>
		<nav class="top-bar clearfix">
			<a href="#/xheader/xnav/indexDetail" :class="{'active':id==1}" @click="clickLight(1)">糗事</a>
			<a href="#/xheader/xnav/indexDetail" :class="{'active':id==2}" @click="clickLight(2)">24小时</a>
			<a href="#/xheader/xnav/indexDetail" :class="{'active':id==3}" @click="clickLight(3)">热图</a>
			<a href="#/xheader/xnav/indexDetail" :class="{'active':id==4}" @click="clickLight(4)">纯文</a>
			<a href="#/xheader/xnav/indexDetail" class="endline" :class="{'active':id==5}" @click="clickLight(5)">穿越</a>
			<a href="#/xheader/gifnav/gif" :class="{'active':id==6}" @click="clickLight(6)">GIF</a>
			<a href="#/xheader/gifnav/gif" :class="{'active':id==7}" @click="clickLight(7)">美女图</a>
			<a href="#/xheader/gifnav/gif" :class="{'active':id==8}" @click="clickLight(8)">邪恶</a>
			<a href="#/xheader/gifnav/gif" :class="{'active':id==9}" @click="clickLight(9)">热门</a>
			<a href="#/xheader/gifnav/gif" class="endline" :class="{'active':id==10}" @click="clickLight(10)">搞笑</a>
			<a href="#/xheader/photo" :class="{'active':id==11}" @click="clickLight(11)">图片</a>
			<a href="#/xheader/photo" :class="{'active':id==12}" @click="clickLight(12)">写真集</a>
			<a href="#/xheader/gifnav/movie" :class="{'active':id==13}" @click="clickLight(13)">视频</a>
			<a href="#/xheader/gifnav/movie" :class="{'active':id==14}" @click="clickLight(14)">美女</a>
			<a href="#/xheader/gifnav/movie" class="endline" :class="{'active':id==15}" @click="clickLight(15)">恶搞</a>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				name:'qd'
			}
		},
		methods:{
			clickLight:function(num){
				this.$store.commit("setLightId",num);
			}
		},
		computed:{
			id:function(){
				return this.$store.getters.getLightId;
			}
		}
	}
	
</script>

<style scoped>
	.top-bar {
		background-color: #fff;
		padding: 6px 0;
		margin: 0;
		display: block;
	}
	
	.top-bar a {
		display: block;
		float: left;
		width: 20%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background-image: url(../../resource/images/colline.png);
		background-repeat: no-repeat;
		background-position: right center
	}
	
	.top-bar .active {
		color: #f93;
		font-weight: 700
	}
	
	.top-bar .endline {
		background-image: none
	}
	
	nav {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		margin-top: 12px;
		padding-bottom: 10px;
		border-bottom: 4px solid #f7f7f7
	}
	
	nav {
		border-bottom: 10px solid #f7f7f7;
	}
	
	nav>div {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
		border-right: 1px solid #f6f5f5;
		font-size: 0
	}
	
	nav>div:last-child {
		border-right-width: 0
	}
	
	nav .title a {
		display: inline-block;
		width: 100%;
		font-size: 16px;
		line-height: 21px;
		color: #464646
	}
	
	nav .active a {
		color: #ffb500
	}
	
	nav a {
		display: inline-block;
		width: 50%;
		font-size: 16px;
		line-height: 24px;
		color: #686868;
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}
	
	nav .group a:nth-child(2) {
		text-align: right;
		padding-right: 3px
	}
	
	nav .group>a:last-child {
		text-align: left;
		padding-left: 3px
	}
</style>