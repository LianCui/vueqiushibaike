<template>
	<div class="main mainList">
		<ul class="list">
			<li class="item" v-for="a in video">
				<a href="#/xheader/gifnav/movieDetail" class="images" data-id="423059" @click="changeToVideo(a.id)">

					<div class="imagesDiv" :style="{'backgroundImage':'url(' +a.img +')'}" data-def="/media/static/dist/images/def.jpg?v=2076d7cd8d35f65c1f1700951289da1e" data-src="//qb-media.qiushibaike.com/snapshot/5fcdf886a1e344983b8ed1dbcf07b66b.jpg">

						<p class="playTd">{{a.loop}}</p>
					</div>
					<div class="imagesText">{{a.content}}</div>
				</a>
				<a href="#/xheader/gifnav/movieDetail" class="images" data-id="423058" @click="changeToVideo(a.nextid)">

					<div class="imagesDiv" :style="{'backgroundImage':'url(' +a.nextimg +')'}" data-def="/media/static/dist/images/def.jpg?v=2076d7cd8d35f65c1f1700951289da1e" data-src="//qb-media.qiushibaike.com/snapshot/3ad641fabcf5deced0f4dc79b95d542a.jpg">

						<p class="playTd">{{a.nextloop}}</p>
					</div>
					<div class="imagesText">{{a.nextcontent}}</div>
				</a>
			</li>
		</ul>

		<div class="pagination" data-page="1" data-total="84">
			第
			<div class="page" :class='{"active":id==1}' @click="clickPage(1)">1</div>
			<a class="page" rel="nofollow" :class='{"active":id==2}' @click="clickPage(2)">2</a>
			<a class="page"  rel="nofollow" :class='{"active":id==3}' @click="clickPage(3)">3</a>
			<a class="page" rel="nofollow" :class='{"active":id==4}' @click="clickPage(4)">4</a>
			<a class="page"  rel="nofollow" :class='{"active":id==5}' @click="clickPage(5)">5</a>
			页
		</div>

		<a class="btn-next" @click="nextPage">下一页&gt;&gt;</a>
		
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
	import css from "../resource/css/video.css";
	import $ from "jquery";
	export default {
		data: function() {
			return {
				name: 'qd',
				video: [],
				page:1,
				id:1
			}
		},
		methods: {
			loadMore: function() {
				var self = this;
				$.ajax({
					//../resource/json/video.json
					//http://10.30.152.63:4000/users/getMes
					url: 'http://10.30.152.63:4000/users/getMes',
					data: 'type=video&page=' + self.page,
					method: 'get',
					success: function(data) {
						data = JSON.parse(data);
						self.video = [];
						for(var i = 0; i < 14; i = i + 2) {
							var obj = {};
							obj.id = data.items[i].id;
							obj.nextid = data.items[i+1].id;
							obj.content = data.items[i].content;
							obj.nextcontent = data.items[i + 1].content
							obj.loop = data.items[i].loop;
							obj.nextloop = data.items[i + 1].loop;
							obj.img = data.items[i].pic_loc;
							obj.nextimg = data.items[i + 1].pic_loc;
							self.video.push(obj);
						}

					}
				})
			},
			nextPage:function(){
				if(this.page == 5) {
					this.page = 5;
					this.id =5;
					this.$store.commit('setvideoPage',5);
				}else{
					this.page = this.page + 1;
					this.id = this.page;
					var num = this.page;
					this.$store.commit('setvideoPage',num);
					this.loadMore();
				}
				
			},
			clickPage:function(page){
				this.page=page;
				this.id = page;
				this.$store.commit('setvideoPage',page);
				this.loadMore();
			},
			changeToVideo: function(id) {
				this.$store.commit("setVideoId", id);
			}
		},
		mounted: function() {
			this.loadMore();
		}
	}
</script>
<style scoped>

</style>