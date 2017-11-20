<template>
	<div>
		<nav class="nav">
			<a href="/gif/" class="navItem " onclick="_hmt.push(['_trackEvent', 'gif-menu-gif', 'chick']);">GIF</a>
			<div class="oblique"></div>
			<a href="/gif/1.html" class="navItem " onclick="_hmt.push(['_trackEvent', 'gif-menu-gaoxiao', 'chick']);">搞笑</a>
			<div class="oblique"></div>
			<a href="/gif/6.html" class="navItem " onclick="_hmt.push(['_trackEvent', 'gif-menu-meinv', 'chick']);">美女</a>
			<div class="oblique"></div>
			<a href="/gif/4.html" class="navItem active" onclick="_hmt.push(['_trackEvent', 'gif-menu-dongwu', 'chick']);">动物</a>
			<div class="oblique"></div>
			<a href="/gif/5.html" class="navItem " onclick="_hmt.push(['_trackEvent', 'gif-menu-baobao', 'chick']);">宝宝</a>
		</nav>
		<router-view></router-view>
	</div>

</template>

<script>
	export default{
		data:function(){
			return {
				name:'qd'
			}
		}
	}
</script>

<style scoped>
	.nav {
		width: 100%;
		height: 39px;
		border-bottom: 1px solid #ddd;
		color: #ddd;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center
	}
	
	.nav .oblique {
		width: 1px;
		height: 1px;
		background-color: #ddd;
		transform: rotate(20deg);
		-webkit-transform: rotate(110deg)
	}
	
	.nav .navItem {
		flex: 1;
		-webkit-flex: 1;
		-webkit-box-flex: 1;
		display: block;
		height: 100%;
		line-height: 40px;
		text-align: center;
		font-size: 1em;
		color: #686868
	}
</style>