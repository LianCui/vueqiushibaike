<template>
	<div>
		<main class="main">
			<article v-for="a in arr" class="item tiezi tag_long_0">
				<header>
					<!-- 头像、用户名、年龄 -->
					<a href="/users/22697767/" class="avatar" :style="{'backgroundImage': 'url(' + a.thumb + ')'}" ref="nofollow"></a>
					<a href="/users/22697767/" class="username" ref="nofollow">{{a.login}}</a>
					<div class="ageBox maleBox">
						<i class="icon iconMale"></i>
						<i class="age">{{a.age}}</i>
					</div>
				</header>

				<a href="#/xheader/xnav/indexContent" @click="showContent(a.id)" class="text" onclick="_hmt.push(['_trackEvent', 'list-qiushi-first', 'chick']);">
					{{a.content}}
				</a>
				<a v-if="a.imagepic" href="/article/119719553" rel="nofollow" class="illustration-box" onclick="_hmt.push(['_trackEvent', 'list-qiushi-content', 'chick']);">
					<img :src="a.imagepic" alt="" class="illustration" width="100%" height="auto">
				</a>
				<div class="hotComment" v-if="a.exist">
					<!-- 神评论 -->
					<div class="comment">

						<a href="/article/119707694" alt="" onclick="_hmt.push(['_trackEvent', 'list-qiushi-comment', 'chick']);">
							<div class="item">
								<i class="icon icon-hotcomment"></i>

								<span class="username">{{a.cmtlogin}}:</span>
								<span class="text">{{a.cmtcontent}}</span>
								<span class="favorite-wrapper">
							<i class="icon icon-favorite"></i>
							<i class="num">{{a.like_count}}</i>
						</span>
							</div>
						</a>
					</div>
				</div>
				<div class="iconBox">
					<!-- 笑脸、评论数等 -->
					<div class="box"><i class="icon icon-laugh"></i><i class="num">{{a.up}}</i></div>
					<div class="box"><i class="icon icon-boring"></i><i class="num">{{a.down}}</i></div>
					<div class="box"><i class="icon icon-share"></i><i class="num">{{a.share_count}}</i></div>
					<div class="box"><i class="icon icon-comment"></i><i class="num">{{a.comments_count}}</i></div>
				</div>
			</article>
		</main>
		<loading></loading>
	</div>
</template>

<script>
	import $ from 'jquery';
	import loading from './loading.vue';
	import css from '../resource/css/index.css';
	import css from '../resource/css/app.css';
	import banner from './banner.vue';
	export default {
		data: function() {
			return {
				name: 'qd',
				arr: [],
				num: 0,
				isLogining: false
			}
		},
		components: {
			loading: loading,
			banner:banner
		},
		methods: {
			showContent: function(id) {
				this.$store.commit("setdetailId", id);
			},
			loadMore: function() {
				var self = this;
				$.ajax({
					//../resource/json/chunwen.json
					//http://10.30.152.63:4000/users/getMes
					url: '../resource/json/chunwen.json',
					method: 'get',
//					data:'type=pic&page=2',
					success: function(data){
//						data=JSON.parse(data);
						setTimeout(function() {
							for(var i = 0; i < 10; i++) {
								var obj = {};
								obj.id = data.items[i].id;
								obj.thumb = data.items[i].user.thumb;
								obj.login = data.items[i].user.login;
								obj.age = data.items[i].user.age;
								obj.content = data.items[i].content;
								obj.exist = false;
								if(data.items[i].hot_comment) {
									obj.cmtlogin = data.items[i].hot_comment.user.login;
									obj.cmtcontent = data.items[i].hot_comment.content;
									obj.like_count = data.items[i].hot_comment.like_count;
									obj.exist = true;
								}
								if(data.items[i].format == "image") {
									obj.imagepic = data.items[i].high_loc;
								}
								obj.up = data.items[i].votes.up;
								obj.down = data.items[i].votes.down;
								obj.share_count = data.items[i].share_count;
								obj.comments_count = data.items[i].comments_count;
								self.arr.push(obj);
							}
							self.isLogining = false;
						}, 500)
					}
				})
			}
		},
		mounted: function() {
			this.loadMore();
		},
		updated: function() {
			var self = this;
			$(window).scroll(function() {
				if($(".main").nextAll(".loading").offset().top < ($(window).height() + $(window).scrollTop())) {
					if(!self.isLogining) {
						self.isLogining = true;
						console.log(self.num++);
						self.loadMore();
					}
				}
			})
		}
	}
</script>

<style scoped>
	header .ageBox i.iconMale {
		background: url(../resource/images/male.png) center center no-repeat;
		background-size: cover;
	}
	
	.hotComment .comment .icon-hotcomment {
		display: inline-block;
		width: 13px;
		height: 12.2px;
		margin-right: 4px;
		background: url(../resource/images/cmt_god.png) center center no-repeat;
		background-size: cover;
	}
	
	.hotComment .favorite-wrapper .icon-favorite {
		display: inline-block;
		width: 14px;
		height: 12.5px;
		margin-right: 5px;
		background: url(../resource/images/like@1.5.png) center center no-repeat;
		background-size: cover;
	}
	
	.iconBox .icon-laugh {
		background: url(../resource/images/laugh@3x.png) center center no-repeat;
		background-size: cover;
	}
	
	.iconBox .icon-boring {
		background: url(../resource/images/boring@3x.png) center center no-repeat;
		background-size: cover;
	}
	
	.iconBox .icon-share {
		width: 15px;
		background: url(../resource/images/share@3x.png) center center no-repeat;
		background-size: cover;
	}
	
	.iconBox .icon-comment {
		background: url(../resource/images/comment@3x.png) center center no-repeat;
		background-size: cover;
	}
</style>