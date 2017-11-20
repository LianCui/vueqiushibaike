<template>
	<div>
		<div class="image">
			<div class="imageDiv">
				<div class="imageHref" id="gifImage">
	<img :src="imgsrc"></div>
				<div class="tips title">{{title}}</div>
				<div class="tips">Tips:点击图片进入下一页&amp;长按图片存图</div>
				<div class="tips qqWarning hide">如果GIF动图无法播放，点击“设置”-“省流加速”-关闭“广告过滤”</div>
			</div>
			<a class="btn btnLeft" id="btn_left"><img src="../../resource/images/left.png"></a>
			<a class="btn btnRight" id="btn_right"><img src="../../resource/images/right.png"></a>
		</div>
		<gif></gif>
		<text></text>
		<giffoot></giffoot>
	</div>
</template>

<script>
	import textone from "./text.vue";
	import gif from '../gif.vue';
	import giffoot from '../page/giffoot.vue';
	export default{
		data:function(){
			return{
				title:"",
				imgsrc:""
			}			
		},
		methods:{
			aaa:function(){
 				this.imgsrc = this.$store.state.imgsrc,
 				this.title = this.$store.state.title 

			}
			
		},
		mounted(){
			this.aaa();
		},
		components:{
			gif:gif,
			giffoot:giffoot,
			textone:textone
		}
	}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	border: 0
}

body,
html {
	width: 100%;
	-webkit-font-smoothing: antialiased;
	font-family: "PingFang SC", "Helvetica Neue", Helvetica, STHeitiSC-Light, "Microsoft YaHei", Arial, sans-serif;
	font-size: 10px
}

a {
	text-decoration: none;
	color: inherit
}

.hide {
	display: none
}

  .title {
	color: #666;
	font-size: 16px;
	font-weight: 400;
	text-align: center;
}
.imageDiv {
    padding: 5px 8px;
}
  .image {
	margin: 5px 0;
	position: relative;
	border-bottom: 1px #ddd solid;
}

  .image .imageDiv .imageHref {
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 260px;
	background-color: #f7f7f7;
	margin-bottom: 8px;
	overflow: hidden;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	position: relative
}

  .image .imageDiv .imageHref img {
	position: absolute;
	left: 0;
	top: 0;
	display: block;
	width: 100%;

}

  .image .imageDiv .tips {
	text-align: center;
	font-size: 12px;
	color: #ff8d16
}

  .image .imageDiv .title {
	font-size: 14px
}

  .image .imageDiv .tips.qqWarning {
	color: red;
	margin: 4px 0;
	font-size: 12px
}

  .image .btn {
	position: absolute;
	display: block;
	top: 50%;
	margin-top: -71px
}

  .control .btn,
.spinner {
	position: relative;
	text-align: center
}

  .image .btn img {
	width: 35px;
	height: 70px;
}

  .image .btnLeft {
	left: 8px;
}

  .image .btnRight {
	right: 8px;
}

  .text {
	margin: 0 16px 16px;
	color: #666;
	font-size: 1.2rem;
	line-height: 150%
}

  .text span {
	color: #b9b9b9
}

  .state {
	height: 33px;
	width: 100%;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center
}

  .state .stateItem {
	flex: 1;
	-webkit-flex: 1;
	-webkit-box-flex: 1;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	color: #666;
	font-size: 1.2rem
}

  .state .stateItem img {
	display: block;
	height: 33px;
	margin-right: 10px
}

  .control {
	margin: 16px;
	height: 42px;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center
}

  .control .btn {
	height: 100%;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex
}

  .control .btn .btnTriangle {
	height: 0;
	width: 0;
	border-top: 21px solid transparent;
	border-right: 15px solid #d8d8d8;
	border-bottom: 21px solid transparent
}

  .control .btn .btnTriangleRight {
	border-right: 0;
	border-left: 15px solid #fb0
}

  .control .btn .btnBlock {
	flex: 1;
	-webkit-flex: 1;
	-webkit-box-flex: 1;
	height: 42px;
	line-height: 42px;
	text-align: center;
	color: #fff;
	font-size: 1.6rem;
	font-weight: 900;
	background: #d8d8d8
}

  .control .btn .btnBlockRight {
	background: #fb0
}

  .control .btn_pre {
	flex: 1;
	-webkit-flex: 1;
	-webkit-box-flex: 1;
	margin-right: 15px
}

  .control .btn_next {
	flex: 1.3;
	-webkit-flex: 1.3;
	-webkit-box-flex: 1
}

  .more {
	border-top: 1px #ddd solid;
	padding: 16px 0;
	text-align: center
}

  .more .list .item {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	height: 130px;
	margin-bottom: 16px
}

  .more .list .item .images {
	flex: 1;
	-webkit-flex: 1;
	-webkit-box-flex: 1;
	width: 1%;
	display: block;
	overflow: hidden;
	height: 100%
}

  .more .list .item .images .imagesDiv {
	width: 100%;
	height: 112px;
	overflow: hidden;
	background-color: #ddd;
	background-position: center;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center
}

  .more .list .item .images .imagesDiv img {
	width: 100%
}

  .more .list .item .images .imagesText {
	margin-top: 6px;
	height: 12px;
	line-height: 12px;
	font-size: 1.2rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #666
}

  .more .list .item .images:first-child {
	margin-right: 11px
}

  .more .list .item:last-child {
	margin-bottom: 0
}

@media (max-width:320px) {
	  .more .list .item {
		height: 110px
	}
	  .more .list .item .images .imagesDiv {
		height: 92px
	}
}

  .bootomText {
	padding: 10px;
	background-color: #f6f6f6;
	border-radius: 2px;
	color: #666;
	line-height: 1.5
}

</style>