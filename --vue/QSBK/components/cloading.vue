<template>
	<div>
		<div id="tips-box" class="show">
			<div class="tips">
				<i class="icon icon-cring"></i>
				<span>没有更多数据了，请手动刷新当前网页</span>
			</div>
			<a @click="loadMore" class="refresh">点击刷新</a>
		</div>
		<footer id="footerBox">
			<p class="text1">请使用当前浏览器底部中间的“<strong>添加书签</strong>”功能进行收藏</p>
			<p class="text2"><strong>糗事百科</strong>-超搞笑的原创糗事笑话分享社区</p>
		</footer>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				name: 'qd'
			}
		},
		methods: {
			loadMore: function() {
				this.$parent.$children[0].loadMore();
			}
		}
	}
</script>

<style scoped>
	#tips-box .tips .icon-cring {
		display: inline-block;
		width: 26px;
		height: 26px;
		margin-right: 9px;
		background: url(../resource/images/cry_icon@3x.png) center center no-repeat;
		background-size: cover;
	}
</style>