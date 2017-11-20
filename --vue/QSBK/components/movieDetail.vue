<template>
	<div class="main mainView">
		<div class="image">
			<h1 class="title">{{content.content}}</h1>

			<div class="imageDiv">
				<div id="videoBox" :data-video="video" :data-img="img" data-width="848" data-height="480" data-td="205.915" style="height: 194.151px;">
					<video id="video" controls = "controls" loop="loop" :src="video" autoplay :poster="img" width="343px" height="194.1509433962264px" preload="true" :style="{'display':bool? 'block' : 'none'}">
						<!--<source :src="video" type="video/mp4">-->
					</video>
					<img :style="{'display':!bool? 'block' : 'none'}" :src="img" class="poster" width="343" height="194.1509433962264" /></div>
				<button @click="clickToPlay" class="btn-play" :style="{'display':!bool? 'block' : 'none'}"></button>
			</div>
		</div>

		<div class="control">
			<a class="btn btn_pre" id="btn_pre" href="#">
				<div class="btnTriangle"></div>
				<div class="btnBlock">上一个</div>
			</a>
			<a class="btn btn_pre" id="btn_next" href="#">
				<div class="btnBlock btnBlockRight ">下一个视频</div>
				<div class="btnTriangle btnTriangleRight "></div>
			</a>
		</div>

		<div class="more">
			<ul class="list">
				<li class="item">

					<a href="60000_2889.html" class="images" onclick="_hmt.push(['_trackEvent', 'media_article_meinv', 'chick']); ">

						<div class="imagesDiv" style="background-image:url(//qb-media.qiushibaike.com/snapshot/7a5de161b91abd2c9a5c154cfc1d3e55.jpg)" data-def="/media/static/dist/images/def.jpg?v=2076d7cd8d35f65c1f1700951289da1e" data-src="//qb-media.qiushibaike.com/snapshot/7a5de161b91abd2c9a5c154cfc1d3e55.jpg">
							<button class="btn-play-small"></button>

							<p class="playTd">01:10</p>
						</div>
						<div class="imagesText">开大货车的大美妞直播不仅秀车技，还玩服装秀</div>
					</a>
					<a href="60000_3677.html" class="images" onclick="_hmt.push(['_trackEvent', 'media_article_meinv', 'chick']); ">

						<div class="imagesDiv" style="background-image:url(//qb-media.qiushibaike.com/snapshot/4ee01f9d2f41bc7579cc8b43e3795a8b.jpg)" data-def="/media/static/dist/images/def.jpg?v=2076d7cd8d35f65c1f1700951289da1e" data-src="//qb-media.qiushibaike.com/snapshot/4ee01f9d2f41bc7579cc8b43e3795a8b.jpg">
							<button class="btn-play-small"></button>

							<p class="playTd">00:17</p>
						</div>
						<div class="imagesText">老公不在家小媳妇就偷跑出来，真不赖</div>
					</a>
				</li>
				<li class="item">
					<a href="10000_380309.html" class="images" onclick="_hmt.push(['_trackEvent', 'media_article_four', 'chick']);">
						<div class="imagesDiv" style="background-image:url(//qb-media.qiushibaike.com/snapshot/c3af117d7b817afb8a3eed2cf1edbe60.jpg)" data-def="/media/static/dist/images/def.jpg?v=2076d7cd8d35f65c1f1700951289da1e" data-src="//qb-media.qiushibaike.com/snapshot/c3af117d7b817afb8a3eed2cf1edbe60.jpg">
							<button class="btn-play-small"></button>
							<p class="playTd">02:47</p>
						</div>
						<div class="imagesText">亿万富翁女总裁扮保安，公司视察被恶霸侮辱毒打真是狗眼看人低</div>
					</a>
					<a href="10000_419631.html" class="images" onclick="_hmt.push(['_trackEvent', 'media_article_four', 'chick']);">

						<div class="imagesDiv" style="background-image:url(//qb-media.qiushibaike.com/snapshot/a5ee5d76e2c422d225ebc9abdfef033c.jpg)" data-def="/media/static/dist/images/def.jpg?v=2076d7cd8d35f65c1f1700951289da1e" data-src="//qb-media.qiushibaike.com/snapshot/a5ee5d76e2c422d225ebc9abdfef033c.jpg">
							<button class="btn-play-small"></button>
							<p class="playTd">00:37</p>
						</div>
						<div class="imagesText">这个演员有点儿贱，感谢你们的演出</div>
					</a>
				</li>
				<li class="item">
					<a href="30000_356435.html" class="images" onclick="_hmt.push(['_trackEvent', 'media_article_four', 'chick']);">
						<div class="imagesDiv" style="background-image:url(//qb-media.qiushibaike.com/snapshot/a448809dab5b718a237b2b73f857a9a6.jpg)" data-def="/media/static/dist/images/def.jpg?v=2076d7cd8d35f65c1f1700951289da1e" data-src="//qb-media.qiushibaike.com/snapshot/a448809dab5b718a237b2b73f857a9a6.jpg">
							<button class="btn-play-small"></button>
							<p class="playTd">02:35</p>
						</div>
						<div class="imagesText">国外恶作剧：要吃花生的大象，接下来路人懵了</div>
					</a>
					<a href="10000_416216.html" class="images" onclick="_hmt.push(['_trackEvent', 'media_article_four', 'chick']);">
						<div class="imagesDiv" style="background-image:url(//qb-media.qiushibaike.com/snapshot/fa524cbf2dab9cd0529782fd8270b795.jpg)" data-def="/media/static/dist/images/def.jpg?v=2076d7cd8d35f65c1f1700951289da1e" data-src="//qb-media.qiushibaike.com/snapshot/fa524cbf2dab9cd0529782fd8270b795.jpg">
							<button class="btn-play-small"></button>
							<p class="playTd">01:59</p>
						</div>
						<div class="imagesText">亿万富豪扮乞丐回乡记 穷在深山有远亲！</div>
					</a>
				</li>
			</ul>
		</div>

		<footer>
			<nav class="copyright-nav clearfix">
				<a href="javascript:;" class="game-entry endline" target="_blank" rel="nofollow" onclick="_hmt.push(['_trackEvent', 'head_game', 'chick']);">
					游戏
				</a>
				<a href="/topic" rel="nofollow" onclick="_hmt.push(['_trackEvent', 'head_video', 'chick']);">
					小鸡视频
				</a>

				<a href="/textnew/" onclick="_hmt.push(['_trackEvent', 'foot_2', 'chick']);">
					8小时
				</a>

				<a href="/imgrank/" class="endline" onclick="_hmt.push(['_trackEvent', 'foot_4', 'chick']);">
					搞笑图片
				</a>
			</nav>
			<div class="copyright">
				<a href="http://a.app.qq.com/o/simple.jsp?pkgname=qsbk.app" rel="nofollow" target="_blank" onclick="_hmt.push(['_trackEvent', 'foot_app', 'chick']);">
					手机客户端
				</a>
				<a href="http://a.app.qq.com/o/simple.jsp?pkgname=qsbk.app.remix" rel="nofollow" onclick="_hmt.push(['_trackEvent', 'foot_remix', 'chick']);">
					热猫直播
				</a>
				<a href="/new4/suggest" rel="nofollow" onclick="_hmt.push(['_trackEvent', 'foot_contact', 'chick']);">
					在线反馈
				</a>
				<a href="#" rel="nofollow" onclick="_hmt.push(['_trackEvent', 'foot_top', 'chick']);">
					回到顶部
				</a>
				<p>
					© Qiushibaike.com
				</p>
			</div>
		</footer>
	</div>
</template>

<script>

	import css from '../resource/css/app.css';
	import $ from 'jquery';
	export default {
		data: function() {
			return {
				name: 'qd',
				content: {},
				img: '',
				bool: false,
				video: '',
				page:1
			}
		},
		methods: {
			loadMore: function(id) {
				var self = this;
				$.ajax({
					
					//../resource/json/video.json
					//http://10.30.152.63:4000/users/getMes
					url: 'http://10.30.152.63:4000/users/getMes',
					method: 'get',
					data:'type=video&page=' + self.page,
					success: function(data) {
						data = JSON.parse(data);
						for(var i = 0; i < data.items.length; i++) {
							if(data.items[i].id == id) {
								self.content.content = data.items[i].content;
								self.img = data.items[i].pic_loc;
								self.video = data.items[i].high_url;
							}
						}
					}
				})
			},
			clickToPlay: function() {
				this.bool = true;
			}
		},
		mounted: function() {
			
			this.page = this.$store.getters.videoDetailPage;
			console.log(this.$store.getters.videoId);
			console.log(this.page);
			this.loadMore(this.$store.getters.videoId);
		}
	}
</script>

<style scoped>
	.mainView .more .list .item .images .imagesDiv {
		width: 100%;
		height: 112px;
		overflow: hidden;
		background-color: #ddd;
		background-position: center;
		background-size: cover;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
</style>