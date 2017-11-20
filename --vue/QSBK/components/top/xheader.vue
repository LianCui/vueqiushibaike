<template>
	<div>
		<div id="logoBar">
			<div class="logo">
				<a href="/" onclick="_hmt.push(['_trackEvent', 'qiushi_logo', 'chick']);"></a>
			</div>
			<div class="float-nav">
				<a href="#/xheader/gifnav/gif" rel="nofollow" >邪恶Gif</a>
				<a href="#/xheader/gifnav/movie" rel="nofollow" >视频</a>
				<a href="#/xheader/xnav/indexDetail" rel="nofollow" >排行榜</a>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	import xnav from './xnav.vue';
	import indexDetail from "../indexDetail.vue";
	import css from "../../resource/css/index.css";
	
	export default {
		data: function() {
			return {
				name: 'qd'
			}
		},
		components: {
			xnav: xnav,
			indexDetail:indexDetail
		}
	}
</script>
<style scoped>
	/*#logoBar {
	position: relative;
	width: 100%;
	height: 48px;
	background-color: #fb0
}*/
	
	#logoBar .logo {
		width: 150px;
		height: 48px;
		padding-top: 0.5px;
		padding-bottom: 2.5px;
		background: url(../../resource/images/logo2016.png) center center no-repeat;
		background-size: cover
	}
	/*#logoBar .logo a {
	display: block;
	width: 100%;
	height: 100%
}

#logoBar .float-nav {
	position: absolute;
	right: 16px;
	top: calc(50% - 12px);
	font-size: 0
}

#logoBar .float-nav>a {
	display: inline-block;
	width: 54px;
	height: 24px;
	color: #6a3906;
	text-align: center;
	line-height: 24px;
	vertical-align: middle;
	margin-right: 8px;
	font-size: 12px;
	background-color: #fff;
	border-radius: 2px
}

#logoBar .float-nav>a:last-child {
	margin-right: 0
}*/
</style>