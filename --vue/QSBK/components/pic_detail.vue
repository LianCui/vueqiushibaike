<template>
	<main>
		<header style="width:375px; height:46px; background:rgba(0,0,0,0); position:absolute; top:0px; left:0px;">
			<div class="return-btn" onclick="_hmt.push(['_trackEvent', 'touch_img_return', 'chick']);">
				<i class="return-icon" style="position: absolute;
    display: inline-block;
    width:9px;
    height: 16px;
    left: 0;
    top: 50%;
    margin-top: -.21333333rem;
    background: url(../resource/images/return@3x.png) 50% no-repeat;
    background-size: cover;"></i>
			</div>

			<span class="num hide"><i class="index">1</i><i class="diagonal">/</i>1</span>

		</header>
		<div class="pic-wrapper ">
			<div class="pic full-screen swiper carousel flickity-enabled is-draggable" tabindex="0">

				<div class="flickity-viewport" style="height: 667px; touch-action: pan-y;">
					<div class="flickity-slider" style="left: 0px; transform: translateX(0%);">
						<div class="pic-item vertical carousel-cell flickity-bg-lazyloaded is-selected" data-w="342" data-h="545" style="position: absolute; left: 0%; background-image: url(&quot;https://qb-img.qiushibaike.com/qb_imgs/eadf2ffa5ea652fbecdff5f658885987&quot;);">
							<img class="carousel-cell-image flickity-lazyloaded" data-w="342" data-h="545" alt="" src="https://qb-img.qiushibaike.com/qb_imgs/eadf2ffa5ea652fbecdff5f658885987">
						</div>
					</div>
				</div>
			</div>
			<div class="info-wrapper">
				<h2 class="title">偶遇外星人</h2>
				<!-- <p class="content">晚上躺床上玩手机，突然一女神发来微信消息问我在干嘛？我以为是一哥们，就习惯性的回复了一句</p> -->
			</div>
		</div>
		<div class="switch-wrapper">
			<a href="javascript:void(0)" class="left-btn" data-prev="22065" onclick="_hmt.push(['_trackEvent', 'touch_img_sidebarleft', 'chick'])"></a>
			<a href="javascript:void(0)" class="right-btn" data-next="38825" onclick="_hmt.push(['_trackEvent', 'touch_img_sidebarright', 'chick'])"></a>
		</div>
	</main>
</template>

<script>
</script>

<style scoped>
	.switch-wrapper .left-btn {
    position: absolute;
    left: 0;
    background: url(../resource/images/left@3x.png) 50% no-repeat;
    background-size: cover;
    width:35px;
    height:70px;
}
.switch-wrapper .right-btn {
    position: absolute;
    right: 0;
    background: url(../resource/images/right@3x.png) 50% no-repeat;
    background-size: cover;
    width:35px;
    height:70px;
}
</style>