<template>
	<div>
		<div id="logoBar">
			<div class="logo">
				<a href="/" onclick="_hmt.push(['_trackEvent', 'qiushi_logo', 'chick']);"></a>
			</div>
			<div class="float-nav">
				<a href="/gif/6.html" rel="nofollow" onclick="_hmt.push(['_trackEvent', 'qiushi_top_button_01', 'chick']);">邪恶Gif</a>
				<a href="/media/" rel="nofollow" onclick="_hmt.push(['_trackEvent', 'qiushi_top_button_02', 'chick']);">视频</a>
				<a href="/news/" rel="nofollow" onclick="_hmt.push(['_trackEvent', 'qiushi_top_button_03', 'chick']);">排行榜</a>
			</div>
		</div>
	</div>

</template>
<script>
</script>
<style scoped>
#logoBar {
	position: relative;
	width: 100%;
	height: 48px;
	background-color: #fb0
}

#logoBar .logo {
	width: 150px;
	height: 48px;
	padding-top: 7.5px;
	padding-bottom: 7.5px;
	background: url(../../resource/images/logo2016.png) center center no-repeat;
	background-size: contain
}

#logoBar .logo a {
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
}
</style>