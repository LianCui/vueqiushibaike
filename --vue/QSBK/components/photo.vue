<template>
	<div>
		<main>
			<div @click = "sendId(a.id)" v-for="a in arr" class="pic-wrapper sexy" data-id="37650">

				<a href = '#/photoDetail' onclick="_hmt.push(['_trackEvent', 'touch_img_xinggan_content', 'chick']); ">
					<div class="img" :style="{'background-image': 'url(' + a.pic +')'}">

						<span class="num">{{a.num}}张</span>
					</div>
					<span class="title">{{a.title}}</span>
				</a>
			</div>

		</main>
		<div class="common-loader" id = "scrollBtn">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<footer id="footerBox">
			<p class="text1">请使用当前浏览器底部中间的“<strong>添加书签</strong>”功能进行收藏</p>
			<p class="text2"><strong>糗事百科</strong>-超搞笑的原创糗事笑话分享社区</p>
		</footer>
	</div>

</template>
<script>
	import $ from "jquery";
	export default {
		data: function() {
			return {
				arr: [],
				bool: false,
				isYes:null
			}
		},
		methods: {
			loadMore: function() {
				const self = this;
				$.ajax({
					url: "../resource/json/photo.json",
					type: "get",
					success: function(data) {
						self.arr = self.arr.concat(data);
						console.log(self.arr);
						self.isYes = false; 
					}
				})
			},
			showPic: function() {
				this.bool = true;
			},
			closePic: function() {
				this.bool = false;
			},
			sendId:function(id){
				this.$store.state.id = id;
				console.log(this.$store.state.id);
			}
			
		},
		updated(){
			var self = this;
			$(window).scroll(function(){
				if($(window).scrollTop() + $(window).height()>= $("#scrollBtn").offset().top){
				if(self.isYes == false){
					self.isYes = true;
					self.loadMore();
					
				}
				
				}
			})
			
		},
		mounted(){
			this.loadMore();
		}
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0
	}
	
	main {
		width: 100%;
		margin: 0 auto
	}
	
	main .pic-wrapper {
		padding-top: 1.53333333rem;
		border-bottom: 4px solid #f6f5f5
	}
	
	main .pic-wrapper a {
		width: 100%;
		text-decoration: none;
	}
	
	main .pic-wrapper .img {
		position: relative;
		height: 12rem;
		margin: 0 auto .32rem;
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover
	}
	
	main .pic-wrapper .img span.num {
		display: block;
		position: absolute;
		right: .16rem;
		bottom: .16rem;
		width: 3rem;
		height: 1rem;
		opacity: .4;
		background: #000;
		border-radius: 2px;
		font-size: 12px;
		color: #fff;
		letter-spacing: 0;
		text-align: center;
		line-height: 1rem
	}
	
	main .pic-wrapper .title {
		display: block;
		margin: 0 auto .42666667rem;
		font-size: 16px;
		color: #464646;
		letter-spacing: 0;
		line-height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	
	.common-loader {
		text-align: center;
		background-color: #f6f5f5;
		padding-top: 10px;
		padding-bottom: 10px
	}
	
	.common-loader>div {
		background-color: #fb0;
		width: 4px;
		height: 35px;
		border-radius: 2px;
		margin: 2px;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		display: inline-block;
		-webkit-animation: a .9s -.6s infinite cubic-bezier(.85, .25, .37, .85);
		animation: a .9s -.6s infinite cubic-bezier(.85, .25, .37, .85)
	}
	
	.common-loader>div:nth-child(2),
	.common-loader>div:nth-child(4) {
		-webkit-animation-delay: -.4s!important;
		animation-delay: -.4s!important
	}
	
	.common-loader>div:first-child,
	.common-loader>div:nth-child(5) {
		-webkit-animation-delay: -.2s!important;
		animation-delay: -.2s!important
	}
	
	@-webkit-keyframes a {
		0% {
			-webkit-transform: scaley(1);
			transform: scaley(1)
		}
		50% {
			-webkit-transform: scaley(.4);
			transform: scaley(.4)
		}
		to {
			-webkit-transform: scaley(1);
			transform: scaley(1)
		}
	}
	
	@keyframes a {
		0% {
			-webkit-transform: scaley(1);
			transform: scaley(1)
		}
		50% {
			-webkit-transform: scaley(.4);
			transform: scaley(.4)
		}
		to {
			-webkit-transform: scaley(1);
			transform: scaley(1)
		}
	}
	
	.hide,
	a[title=绔欓暱缁熻] {
		display: none
	}
	#footerBox {
	width: 100%;
	padding: 20px 0 14px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	background: #f6f5f5;
	text-align: center
}

#footerBox .text1,
#footerBox .text2 {
	font-size: 10px;
	color: #858585;
	letter-spacing: 0
}

#footerBox .text1 {
	margin-bottom: 10px
}
</style>