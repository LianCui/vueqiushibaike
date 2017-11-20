<template>
	<div>
		<article id="article_119709350" class="newArticle mb2">
			<!-- 2.1 当前文章用户的名字头像性别年龄 -->
			<div class="newArticleHead">

				<a class="ablock" href="/users/12488085/" rel="nofollow">
					<img src="//pic.qiushibaike.com/system/avtnew/1248/12488085/thumb/20170718181359.JPEG?imageView2/1/w/90/h/90" class="avatar s-40 br-l mr-xs" alt="醒醒－灰太">
				</a>
				<a class="touch-user-name-link ablock" href="/users/12488085/">
					<span class="touch-user-name-a">醒醒－灰太狼</span>
				</a>
				<div class="articleGender manIcon">39</div>

			</div>
			<!-- 2.2 文章内容 -->
			<div class="content-text">
				今天上午和媳妇儿上她闺蜜家遛了一圈。回来一会儿，媳妇对我说：我闺蜜可是单身女性，你去过她那里吗？我义正言辞的说：我真的没去过。。媳妇就变脸了！说：她家的那条狗怎么对你那么亲，又摇尾巴，又扒你腿。我说：可能那只狗对我有缘呗。媳妇说：狗的动作会出卖你的，说！你去了多少次！好好想想！你去那里跪着，过一会儿想清楚了再回答。。。我一边跪着一边想：偷着去了七八次，送了几次劳保富余的米和油，还有日用品。。难道暴露了？

			</div>
			<!-- 2.3 好笑评论和发布时间 && 点赞踩评论分享四个icon button -->
			<div id="qiushi_counts_119709350">
				<div class="page-nav-list">
					<div id="single-pre-link" class="page-nav-list-bian page-nav-list-pre">上一条</div>
					<div id="single-next-link" class="page-nav-list-next">下一条，你懂的</div>
					<div id="single-coll" class="page-nav-list-bian page-nav-list-coll">收藏本页面</div>
				</div>
				<span class="article_info" id="score-119709350">
<span id="pos-score-119709350" class="laugh-comment" data-votes="406">406 好笑</span>
				<span class="dot">·</span>
				<span class="comments">6 评论</span>

				<span class="dot">·</span>
				<a href="/history/cea38d405f593e27eb827db0bf2761ec/">

					一周前

				</a>

				</span>
				<div class="my-stats-bar">
					<a href="javascript:vote2m(119709350,1,1)" id="up-119709350" class="vote" rel="nofollow"></a>
					<a href="javascript:vote2m(119709350,-1,1)" id="dn-119709350" class="down" rel="nofollow"></a>
					<a class="cmt" id="cmt" rel="nofollow"></a>
					<a class="shareIcon" rel="nofollow"></a>
				</div>
			</div>
		</article>

		<!--点击出现-->
		<div class="alter_share_page" style="display: none;">
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
				<div class="alter_share_cancle">取消</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import $ from "jquery"
//	 new vue({
//	   el:"#article_119709350",
//	   data:{
//		data:"",
//	   },
//	   methods:{
//	   	LoadMore :function (){
//	   		var self = this
//	   		$.ajax({
//	   		url:"",
//	   		type:"GET",
//	   		success:function(a){
//	   			self.data = a
//	   		 }
//	   	   })
//	     }   	
//	   },   
//	 })
</script>

<style scoped>
	.articleGender {
		width: 35px;
		height: 16px;
		float: left;
		line-height: 16px;
		font-size: 10px;
		text-align: center;
		padding-left: 11px;
		margin-top: 11px;
		margin-left: 8px;
		color: #fff;
		background-size: cover
	}
	
	.manIcon {
		background-image: url(../resource/images/nearby_gender_male@1.5x.png)
	}
	
	.newArticle {
		background: #fff;
		padding: 18px 16px
	}
	
	.newArticle .newArticleHead {
		padding-bottom: 18px;
		overflow: hidden;
		zoom: 1
	}
	
	.newArticle .newArticleHead .ablock {
		display: block;
		float: left
	}
	
	.newArticle .newArticleHead .headerImage {
		width: 38px;
		height: 38px;
		border-radius: 19px;
		background-color: #e3e1de
	}
	
	.newArticle .newArticleHead .touch-user-name-link {
		margin-left: 14px
	}
	
	.newArticle .newArticleHead .touch-user-name-link .touch-user-name-a {
		line-height: 38px;
		width: 100%;
		color: #8f8f95;
		font-size: 16px
	}
	
	.newArticle .newArticleHead .getLike {
		float: right;
		line-height: 38px;
		color: #858585;
		font-size: 12px
	}
	
	.newArticle .content-text {
		font-size: 16px;
		color: #464646;
		line-height: 150%
	}
	
	.newArticle .content-text .contentForAll {
		display: inline-block;
		font-size: 12px;
		border: 1px solid #fb0;
		width: 58px;
		text-align: center;
		line-height: 24px;
		color: #fb0
	}
	
	.newArticle .content-text .contentForImage {
		display: block;
		width: 100%;
		margin-top: 10px;
		max-height: 450px;
		overflow: hidden
	}
	
	.newArticle .content-text .contentForImage img {
		width: 100%
	}
	
	.newArticle .content-text img {
		width: 100%
	}
	
	.newArticle .content-text a {
		font-size: 16px;
		color: #464646;
		line-height: 150%
	}
	
	.newArticle .article_bottom {
		padding-top: 18px
	}
	
	.newArticle .article_info a,
	.newArticle .article_info span {
		color: #858585;
		font-size: 12px
	}
	
	.newArticle .article_info .hp-color-act {
		color: #63625e!important
	}
	
	.newArticle .article_info .hp-color {
		color: #858585!important
	}
	
	.newArticle .page-nav-list {
		width: 100%;
		height: 44px;
		margin: 18px 0;
		overflow: hidden;
		display: -ms-flexbox;
		display: flex;
		display: -webkit-box;
		display: -webkit-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center
	}
	
	.newArticle .page-nav-list .page-nav-list-bian {
		width: 72px;
		height: 34px;
		color: #fb0;
		border: 1px #fb0 solid;
		line-height: 34px;
		text-align: center;
		font-size: 12px
	}
	
	.newArticle .page-nav-list .page-nav-list-pre {
		margin-right: 10px
	}
	
	.newArticle .page-nav-list .page-nav-list-coll {
		margin-left: 10px
	}
	
	.newArticle .page-nav-list .page-nav-list-next {
		-ms-flex: 1;
		flex: 1;
		-webkit-flex: 1;
		-webkit-box-flex: 1;
		height: 44px;
		color: #fff;
		text-align: center;
		background-color: #fb0;
		font-size: 14px;
		line-height: 44px
	}
	
	.newArticle .my-stats-bar {
		padding: 11px 0 0
	}
	
	.newArticle .my-stats-bar a {
		background-size: cover;
		display: inline-block;
		width: 32px;
		height: 23px;
		margin-right: 20px
	}
	
	.newArticle .my-stats-bar .vote {
		background-image: url(../resource/images/laugh@1.5x.png)
	}
	/*.newArticle .my-stats-bar .vote-hover {
	background-image: url(../resource/images/laugh_hover@1.5x.png)
}*/
	
	.newArticle .my-stats-bar .down {
		background-image: url(../resource/images/sad@1.5x.png)
	}
	/*.newArticle .my-stats-bar .down-hover {
	background-image: url(../resource/images/sad_hover@1.5x.png)
}*/
	
	.newArticle .my-stats-bar .cmt {
		background-image: url(../resource/images/cmt@1.5x.png)
	}
	
	.newArticle .my-stats-bar .comments {
		float: right;
		margin-right: 0;
		background-image: url(../resource/images/cmt@1.5x.png)
	}
	
	.newArticle .my-stats-bar .shareIcon {
		float: right;
		margin-right: 0;
		background-image: url(../resource/images/share@1.5x.png)
	}
	
	.listArticle {
		margin-top: 12px
	}
	
	.listArticle:last-child {
		margin-bottom: 12px
	}
	
	.listCenter .newArticle .content-text .contentForImage {
		margin-top: 0
	}
	
	.s-40 {
		width: 40px;
		height: 40px;
	}
	
	.br-l {
		border-radius: 40px;
	}
	
	.mr-xs {
		margin-right: 4px;
	}
	
	.mr-xs {
		margin-right: 4px;
	}
	
	.avatar {
		background-color: #e3e1de;
	}
	
	img {
		vertical-align: middle;
	}
	/*点击出现*/
	
	.alter_share_page {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		background: rgba(0, 0, 0, .5);
		display: none
	}
	
	.alter_share_page .alter_share {
		position: absolute;
		width: 100%;
		height: 180px;
		bottom: 0;
		left: 0;
		background-color: #fff
	}
	
	.alter_share_page .alter_share .alter_share_title {
		width: 100%;
		padding: 14px 0 20px 0;
		text-align: center;
		font-size: 12px;
		color: #aaa
	}
	
	.alter_share_page .alter_share .alter_share_icon {
		padding: 0 26px;
		display: -ms-flexbox;
		display: flex;
		display: -webkit-box;
		display: -webkit-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-justify-content: center
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem {
		-ms-flex: 1;
		flex: 1;
		-webkit-flex: 1;
		-webkit-box-flex: 1;
		display: -ms-flexbox;
		display: flex;
		display: -webkit-box;
		display: -webkit-flex;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareItemText {
		width: 100%;
		text-align: center;
		color: #aaa;
		font-size: 12px
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareItemImage {
		width: 47px;
		height: 47px;
		margin-bottom: 8px;
		background-size: cover;
		background-repeat: no-repeat
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareIconWX {
		background-image: url(../resource/images/wx@1.5x.png)
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareIconpyq {
		background-image: url(../resource/images/pyq@1.5x.png)
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareIconQQ {
		background-image: url(../resource/images/qq@1.5x.png)
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareIconqqkj {
		background-image: url(../resource/images/qqkj@1.5x.png)
	}
	
	.alter_share_page .alter_share .alter_share_icon .shareItem .shareIconwb {
		background-image: url(../resource/images/wb@1.5x.png)
	}
	/*@media (max-width:320px) {
	.alter_share_page .alter_share .alter_share_icon {
		padding: 0 10px
	}
}*/
	
	.alter_share_page .alter_share .alter_share_cancle {
		margin: 20px auto 0;
		font-size: 20px;
		padding: 10px 0;
		width: 50%;
		color: #007aff;
		text-align: center
	}
</style>