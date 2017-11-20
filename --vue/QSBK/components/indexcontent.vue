<template>
	<div>
		<article id="article_119729336" class="newArticle mb2">
			<!-- 2.1 当前文章用户的名字头像性别年龄 -->
			<div class="newArticleHead">

				<a class="ablock" href="/users/23653003/" rel="nofollow">
					<img :src="content.thumb" class="avatar s-40 br-l mr-xs" :alt="content.login">
				</a>
				<a class="touch-user-name-link ablock" href="/users/23653003/">
					<span class="touch-user-name-a">{{content.login}}</span>
				</a>
				<div class="articleGender manIcon" v-if="content.gender == 'M'">{{content.age}}</div>
				<div class="articleGender womenIcon" v-else>{{content.age}}</div>

			</div>
			<!-- 2.2 文章内容 -->
			<div class="content-text">
				{{content.content}}
				<img :src="content.imagepic" v-if="content.imagepic">
			</div>
			<!-- 2.3 好笑评论和发布时间 && 点赞踩评论分享四个icon button -->
			<div id="qiushi_counts_119729336">
				<div class="page-nav-list">
					<div  id="single-pre-link" class="page-nav-list-bian page-nav-list-pre">上一条</div>
					<div id="single-next-link" class="page-nav-list-next">下一条，你懂的</div>
					<div id="single-coll" class="page-nav-list-bian page-nav-list-coll">收藏本页面</div>
				</div>
				<span class="article_info" id="score-119729336">
			<span id="pos-score-119729336" class="laugh-comment" data-votes="544">{{content.up}}好笑</span>
				<span class="dot">·</span>
				<span class="comments">{{content.comcot}} 评论</span>

				</span>
				<div class="my-stats-bar">
					<a id="up-119729336" class="vote" rel="nofollow"></a>
					<a  id="dn-119729336" class="down" rel="nofollow"></a>
					<a class="cmt" id="cmt" rel="nofollow"></a>
					<a href="#" class="shareIcon" rel="nofollow" @click="changetoShare"></a>
				</div>
			</div>
		</article>

		<div class="like-user new-like-user">
			<span class="like-user-arrow"></span>

			<a class="like-user-head" href="/users/31382409/">
				<img src="//pic.qiushibaike.com/system/avtnew/3138/31382409/thumb/20160508165310.jpg?imageView2/1/w/90/h/90" alt="雨丶夜孤城">
			</a>

			<a class="like-user-head" href="/users/17582347/">
				<img src="//pic.qiushibaike.com/system/avtnew/1758/17582347/thumb/20170313104823.JPEG?imageView2/1/w/90/h/90" alt="我要改名字123">
			</a>

			<a class="like-user-head" href="/users/6005902/">
				<img src="//pic.qiushibaike.com/system/avtnew/600/6005902/thumb/20140320221321.jpg?imageView2/1/w/90/h/90" alt="wnvpigletj">
			</a>

			<a class="like-user-head" href="/users/33984019/">
				<img src="//pic.qiushibaike.com/system/avtnew/3398/33984019/thumb/20171101085451.JPEG?imageView2/1/w/90/h/90" alt="α杰宝">
			</a>

			<a class="like-user-head" href="/users/19417123/">
				<img src="//pic.qiushibaike.com/system/avtnew/1941/19417123/thumb/20160622201249.jpg?imageView2/1/w/90/h/90" alt="西北风2014">
			</a>

			<a class="like-user-head" href="/users/24156582/">
				<img src="//pic.qiushibaike.com/system/avtnew/2415/24156582/thumb/20171025170837.JPEG?imageView2/1/w/90/h/90" alt="灭世修行不易">
			</a>

			<a class="like-user-head" href="/users/19381543/">
				<img src="//pic.qiushibaike.com/system/avtnew/1938/19381543/thumb/20150514134018.jpg?imageView2/1/w/90/h/90" alt="小萌汪">
			</a>

			<a class="like-user-head" href="/users/31715882/">
				<img src="//pic.qiushibaike.com/system/avtnew/3171/31715882/thumb/20171012172751.JPEG?imageView2/1/w/90/h/90" alt="刺猬偷西瓜">
			</a>

			<a class="like-user-head" href="/users/28690348/">
				<img src="//pic.qiushibaike.com/system/avtnew/2869/28690348/thumb/20150609151849.jpg?imageView2/1/w/90/h/90" alt="听风吹雨落8">
			</a>

			<a class="like-user-head" href="/users/8611383/">
				<img src="//pic.qiushibaike.com/system/avtnew/861/8611383/thumb/20130507030107.jpg?imageView2/1/w/90/h/90" alt="天枢心夜">
			</a>

			<a class="like-user-head" href="/users/3003724/">
				<img src="//pic.qiushibaike.com/system/avtnew/300/3003724/thumb/3003724.jpg?imageView2/1/w/90/h/90" alt="只控萝莉">
			</a>

			<a class="like-user-head" href="/users/31444690/">
				<img src="//pic.qiushibaike.com/system/avtnew/3144/31444690/thumb/20170909045603.JPEG?imageView2/1/w/90/h/90" alt="，胧月">
			</a>

			<a class="like-user-head" href="/users/15786973/">
				<img src="//pic.qiushibaike.com/system/avtnew/1578/15786973/thumb/20170913052748.JPEG?imageView2/1/w/90/h/90" alt="时光飞逝30年">
			</a>

			<a class="like-user-head" href="/users/23269085/">
				<img src="//pic.qiushibaike.com/system/avtnew/2326/23269085/thumb/20141129234619.jpg?imageView2/1/w/90/h/90" alt="跪安吧，，，，，">
			</a>

			<a class="like-user-head" href="/users/33884260/">
				<img src="//pic.qiushibaike.com/system/avtnew/3388/33884260/thumb/2017061219513614.JPEG?imageView2/1/w/90/h/90" alt="于二领">
			</a>

		</div>

		<article class="hotCmt Cmt" id="comment">
			<h3 class="hotCmt-title">评论<span>{{content.comcot}}</span></h3>
			<div class="comments-list" v-for=' a in hotcomment'>
				<div class="comments-list-item">
					<div class="comments-table" id="comment-381960015">
						<div class="comments-table-head">
							<a href="/users/31715882/" rel="nofollow">
								<img :src="a.thumb" class="avatar s-40 br-l" alt="刺猬偷西瓜">
							</a>
						</div>
						<a class="comments-table-main" href="/users/31715882/">
							<div class="main-name">
								<div class="cmt-name">{{a.login}}</div>
								<div class="articleGender manIcon" v-if="a.sexuality=='M'">{{a.age}}</div>
								<div class="articleGender womenIcon" v-else>{{a.age}}</div>
								<div class="likenum">{{a.floor}}</div>
							</div>
							<div class="main-text">{{a.content}}</div>
						</a>
					</div>
					<div class="comment-tips"></div>
				</div>
			</div>
			<div class="cmtMore" id="cmtMore" @click="loadMore" v-show='!bool'>点击加载更多评论</div>
			<div class="cmtMore" id="cmtMore" @click="loadMore" v-show='bool'>加载中...</div>
		</article>

		<div class="cmtControl">
			<div class="cmtSent">
				<input type="hidden" name="_xsrf" value="2|2be06bc6|93007a618ddeb65ded312e1e7e4cc592|1510361654">
				<textarea class="cmtSentText" id="commentText" placeholder="说点什么吧"></textarea>
				<div data-articleid="119683151" class="cmtSentButton" @click="submitCommit">提交</div>
			</div>
		</div>

		<div class="foot_label">
			<input type="radio" name="foot-tab" id="foot_hot" checked="checked">
			<input type="radio" name="foot-tab" id="foot_recomend">
			<input type="radio" name="foot-tab" id="foot_new">
			<input type="radio" name="foot-tab" id="foot_label">
			<ul class="foot_label_head">
				<li class="foot_hot"><label for="foot_hot">热门话题</label></li>
				<li class="foot_recomend"><label for="foot_recomend">推荐话题</label></li>
				<li class="foot_new"><label for="foot_new">最新话题</label></li>
				<li class="foot_label"><label for="foot_label">标签导航</label></li>
			</ul>
			<div class="foot_label_content">
				<ul class="foot_label_list foot_label_list_hot">

					<li class="foot_label_item">
						<a href="/joke/582660/">爱哈啦笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/579177/">校园短笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/577853/">关于六一的笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/574491/">中国的官员笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/574172/">老牛吃嫩草的明星笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/572923/">五年级同音笑话</a>
					</li>

				</ul>
				<ul class="foot_label_list foot_label_list_recomend">

					<li class="foot_label_item">
						<a href="/joke/581933/">女大爷笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/578086/">关于文明的冷笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/577192/">关于考试答题笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/574934/">和茶有关的笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/573350/">关于吃饭的爆笑笑话</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/572927/">五年级语文笑话</a>
					</li>

				</ul>
				<ul class="foot_label_list foot_label_list_new">

					<li class="foot_label_item">
						<a href="/joke/2467551/">我爱家乡山水美650</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/2467554/">我爱家乡的秋天650字</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/2467557/">我爱家乡的抖辣椒</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/2467558/">我爱家乡的辣椒350字</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/2467559/">我爱家乡沈阳题材</a>
					</li>

					<li class="foot_label_item">
						<a href="/joke/2467560/">我爱家乡北海资料</a>
					</li>

				</ul>
				<div class="topic-alphabet">

					<ul class="topic-alphabet-list">

						<a href="/joke/a/">
							<li>A</li>
						</a>

						<a href="/joke/b/">
							<li>B</li>
						</a>

						<a href="/joke/c/">
							<li>C</li>
						</a>

						<a href="/joke/d/">
							<li>D</li>
						</a>

						<a href="/joke/e/">
							<li>E</li>
						</a>

						<a href="/joke/f/">
							<li>F</li>
						</a>

						<a href="/joke/g/">
							<li>G</li>
						</a>

						<a href="/joke/h/">
							<li>H</li>
						</a>

						<a href="/joke/i/">
							<li>I</li>
						</a>

					</ul>

					<ul class="topic-alphabet-list">

						<a href="/joke/j/">
							<li>J</li>
						</a>

						<a href="/joke/k/">
							<li>K</li>
						</a>

						<a href="/joke/l/">
							<li>L</li>
						</a>

						<a href="/joke/m/">
							<li>M</li>
						</a>

						<a href="/joke/n/">
							<li>N</li>
						</a>

						<a href="/joke/o/">
							<li>O</li>
						</a>

						<a href="/joke/p/">
							<li>P</li>
						</a>

						<a href="/joke/q/">
							<li>Q</li>
						</a>

						<a href="/joke/r/">
							<li>R</li>
						</a>

					</ul>

					<ul class="topic-alphabet-list">

						<a href="/joke/s/">
							<li>S</li>
						</a>

						<a href="/joke/t/">
							<li>T</li>
						</a>

						<a href="/joke/u/">
							<li>U</li>
						</a>

						<a href="/joke/v/">
							<li>V</li>
						</a>

						<a href="/joke/w/">
							<li>W</li>
						</a>

						<a href="/joke/x/">
							<li>X</li>
						</a>

						<a href="/joke/y/">
							<li>Y</li>
						</a>

						<a href="/joke/z/">
							<li>Z</li>
						</a>

						<a href="/joke/0-9/">
							<li>0-9</li>
						</a>

					</ul>

					<div class="topic-tips">话题首字母搜索，点击字母链接可直接查看更多话题</div>
				</div>
			</div>
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
		
		<share></share>
	</div>
</template>

<script>
	import $ from 'jquery';
	import share from './share.vue';
	import css from '../resource/css/index.css';
	import css from '../resource/css/app.css';
	export default {
		data: function() {
			return {
				name: 'qd',
				hotcomment: [],
				bool: false,
				content:{},
			}
		},
		components:{
			share:share
		},
		methods: {
			changetoShare: function() {
				this.$store.commit("setsharebool", true);
			},
			submitCommit:function(){
				if(this.$store.getters.getIsLogin == false){
					if(confirm("尚未登录，若有账号请点击确定进行登录，否则进行注册")){
						location.href="#/login";
					}else{
						location.href="#/register";
					}
				}else{
					var html = '<div class="comments-list"><div class="comments-list-item"><div class="comments-table" id="comment-381960015"><div class="comments-table-head"><a href="/users/31715882/" rel="nofollow"><img src="http://pic.qiushibaike.com/system/avtnew/2931/29314260/thumb/2017110210191333.JPEG" class="avatar s-40 br-l"></a></div><a class="comments-table-main" href="/users/31715882/"><div class="main-name"><div class="cmt-name">15205422980</div><div class="articleGender manIcon">18</div><div class="likenum">18</div></div><div class="main-text">' + $("textarea").val() + '</div></a></div><div class="comment-tips"></div></div></div>';
					$(html).insertBefore($("#comment").find(".comments-list").eq(0));
				}
			},
			loadContent:function(id){
				var self = this;
				$.ajax({
					//http://10.30.152.63:4000/users/getMes
					//../resource/json/chunwen.json
					url:'../resource/json/chunwen.json',
					method:'get',
//					data:'type=pic&page=2',
					success:function(data){
//						data=JSON.parse(data);
						for(var i = 0; i < data.items.length; i++ ){
							if(data.items[i].id == id){
								self.content.id = data.items[i].id;
								self.content.thumb = data.items[i].user.thumb;
								self.content.login = data.items[i].user.login;
								self.content.gender = data.items[i].user.gender;
								self.content.age = data.items[i].user.age;
								self.content.content = data.items[i].content;
								self.content.up = data.items[i].votes.up;
								self.content.comcot = data.items[i].comments_count;
								if(data.items[i].format == "image") {
									self.content.imagepic = data.items[i].high_loc;
								}
							}
						}
					}
				})
			},
			loadMore: function() {
				var self = this;
				this.bool = true;
				$.ajax({
					url: '../resource/json/chunwen.json',
					method: 'get',
					success: function(data) {
						setTimeout(function() {
							for(var i = 0; i < 10; i++) {
								if(data.items[i].hot_comment) {
									var obj = {};
									obj.thumb = data.items[i].hot_comment.user.thumb;
									obj.login = data.items[i].hot_comment.user.login;
									obj.age = data.items[i].hot_comment.user.age;
									obj.content = data.items[i].hot_comment.content;
									obj.sexuality = data.items[i].hot_comment.user.gender;
									obj.floor = data.items[i].hot_comment.floor;
									self.hotcomment.push(obj);
								}
							}
							self.bool = false;
						}, 1000);
					}
				})
			}
		},
		mounted: function() {
			this.loadMore();
			this.loadContent(this.$store.getters.detailId);
		}

	}
</script>

<style scoped>
	.my-stats-bar .vote {
		background-image: url(../resource/images/laugh@1.5x.png);
	}
	
	.my-stats-bar .down {
		background-image: url(../resource/images/sad@1.5x.png);
	}
	
	.my-stats-bar .cmt {
		background-image: url(../resource/images/cmt@1.5x.png);
	}
	
	.my-stats-bar .shareIcon {
		float: right;
		margin-right: 0;
		background-image: url(../resource/images/share@1.5x.png);
	}
	
	.manIcon {
		background-image: url(../resource/images/nearby_gender_male@1.5x.png);
	}
	
	.womenIcon {
		background-image: url(../resource/images/nearby_gender_female@1.5x.png);
	}
</style>