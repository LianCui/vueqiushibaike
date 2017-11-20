<template>
	<div class="alter_share_page" :style="{'display': bool? 'block':'none'}">
		<div class="alter_share">
			<div class="alter_share_title">分享给朋友</div>
			<ul class="alter_share_icon">
				<li class="shareItem" style="display: none;">
					<div class="shareItemImage shareIconWX"></div>
					<div class="shareItemText">微信</div>
				</li>
				<li class="shareItem" style="display: none;">
					<div class="shareItemImage shareIconpyq"></div>
					<div class="shareItemText">微信朋友圈</div>
				</li>
				<li class="shareItem">
					<div class="shareItemImage shareIconQQ"></div>
					<div class="shareItemText">QQ</div>
				</li>
				<li class="shareItem">
					<div class="shareItemImage shareIconqqkj"></div>
					<div class="shareItemText">QQ空间</div>
				</li>
				<li class="shareItem">
					<div class="shareItemImage shareIconwb"></div>
					<div class="shareItemText">微博</div>
				</li>
			</ul>
			<div class="alter_share_cancle" @click="cancelShare">取消</div>
		</div>
	</div>
</template>

<script>
	export default {
		data:function() {
			return {
				
			}
		},
		methods:{
			cancelShare:function(){
				this.$store.commit("setsharebool",false);
			}
		},
		computed:{
			bool:function(){
				return this.$store.getters.sharebool;
			}
		}
	}
</script>

<style scoped>
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareIconQQ {
		background-image: url(../resource/images/qq@1.5x.png);
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareIconqqkj {
		background-image: url(../resource/images/qqkj@1.5x.png);
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareIconwb {
		background-image: url(../resource/images/wb@1.5x.png);
	}
</style>