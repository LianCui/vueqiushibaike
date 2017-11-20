<template>
	<div>
		<div id="pull">
			<p class="list-tips">今日新增GIF 496 个</p>
			<ul id = "oul">
				<li v-for="a in arr" >
					<a @click="func(a.title,a.pic)" href = "#/xheader/gifnav/clnew"><img :src="a.pic" alt="" /></a>
					<p>{{a.title}}</p>
				</li>
			</ul>
			<div class="pagination">
				第
				<div class="page active">1</div>
				<a class="page" href="/gif/4/page_2/" rel="nofollow">2</a>
				<a class="page" href="/gif/4/page_3/" rel="nofollow">3</a>
				<a class="page" href="/gif/4/page_4/" rel="nofollow">4</a>
				<a class="page" href="/gif/4/page_5/" rel="nofollow">5</a>
				页
			</div>
			<a class="btn-next" href="/gif/4/page_2/">下一页&gt;&gt;</a>
		</div>
		<giffoot></giffoot>
	</div>
</template>

<script>
	import giffoot from './page/giffoot.vue';
	import $ from "jquery";
	export default({
			data: function() {
				return {
					arr: [],
					title:"",
					imgsrc:""
				}
			},
			methods: {
				LodaMore: function() {
					var self = this;
					$.ajax({
						url: "../resource/json/gif.json",
						method:'get',
						success: function(data){
							self.arr = self.arr.concat(data)
						}
					})
				},

				func: function(title,pic) {

					this.$store.commit("setImgsrc",pic);
			        this.$store.commit("setTitle",title);
				}
			
		},
		mounted() {
			this.LodaMore();
			
		},
		components:{
			giffoot:giffoot
		}
	})
</script>

<style scoped>
	ul {
		overflow: hidden;
	}
	
	li {
		float: left;
		width: 50%;
		height: 130px;
		list-style: none;
		margin-bottom: 16px;
	}
	
	#pull {
		padding: 10px 10px 24px;
		overflow: auto;
		width: 100%;
	}
	
	li img {
		width: 172px;
		height: 112px;
	}
	
	li p {
		margin-top: 6px;
		height: 12px;
		line-height: 12px;
		font-size: 0.8em;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #666;
	}
	
	.list-tips {
		margin-bottom: 10px;
		color: #ff8d16;
		background-color: #f1f1f1;
		padding: 3px;
		text-align: center;
		border-radius: 5px;
	}
	
	.pagination {
		margin: 24px 14px 16px;
		height: 30px;
		color: #666;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.pagination .page,
	.pagination span {
		margin-left: 10px;
		height: 28px;
		width: 47px;
		line-height: 28px;
		text-align: center
	}
	
	.pagination .page {
		flex: 1;
		-webkit-flex: 1;
		-webkit-box-flex: 1;
		display: block;
		border: 1px solid #e1e1e1
	}
	
	.pagination span {
		flex: 1;
		-webkit-flex: 1;
		-webkit-box-flex: 1;
		display: block
	}
	
	.pagination .active {
		color: #fff;
		background-color: #ffba15;
		border-color: #ffba15
	}
	
	.pagination .page:last-child {
		margin-right: 10px
	}
	
	.btn-next {
		color: #666;
		margin: 0 6px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background-color: #f6f6f6;
		border-radius: 2px;
		display: block
	}
</style>