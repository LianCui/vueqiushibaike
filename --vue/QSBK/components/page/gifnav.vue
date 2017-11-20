<template>
	<div>
		<div class="nav">
			<a class="title active" href="#">GIF</a>
			<div class="line"></div>
			<a class="title" href="#">搞笑</a>
			<div class="line"></div>
			<a class="title" href="#">美女</a>
			<div class="line"></div>
			<a class="title" href="#">动物</a>
			<div class="line"></div>
			<a class="title" href="#">宝宝</a>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				name:'qd'
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	.nav {
		overflow: hidden;
	}
	
	.active {
		color: #ff8d16;
	}
	
	.line {
		width: 1px;
		height: 20px;
		background: #ddd;
		display: inline-block;
		float: left;
		transform: rotate(20deg);
	}
	
	.title {
		padding-left: 20px;
		padding-right: 20px;
		float: left;
		font-size: 15px;
	}
</style>