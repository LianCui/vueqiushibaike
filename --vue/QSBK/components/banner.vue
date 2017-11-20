<template>
	<a href="#">
		<img src="../resource/images/banner.jpg" />
	</a>
</template>
<script>
	import $ from "jquery";
	export default{
		data:function(){
			return {
				name:'qd'
			}
		},
		methods:{
			cancel:function(){
				setTimeout(function(){
					$("a").css("display","none");
				},1000);
			}
		},
		mounted:function(){
			this.cancel();
		}
	}
</script>
<style  scoped>
	img {
		margin-top: 42px;
		width: 100%;
		height: 100%;
	}
	a {
		display: block;
		position:absolute;
		top:0px;
		left:0px;
	}
	
</style>