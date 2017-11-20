<template>

	<main>
		<header>
			<div class="return-btn" onclick="_hmt.push(['_trackEvent', 'touch_img_return', 'chick']);">
				<a href = "#/photo"><i class="return-icon"></i></a>
			</div>

			<span class="num "><i class="index">{{this.id}}</i><i class="diagonal">/</i>{{this.num}}</span>

		</header>
		<div class="pic-wrapper ">
			<div class="pic full-screen swiper carousel flickity-enabled is-draggable" tabindex="0">

				<div class="flickity-viewport" style="height: 605px; touch-action: pan-y;">
					<div class="flickity-slider" style="left: 0px;">
						<div v-for = 'a in arr[0].imgs' class= "pic-item vertical carousel-cell" v-show = 'id == a.id'>			
							<img class="carousel-cell-image" :src ="a.img" style="height:100%; width:100%;opacity:1" >
						</div>
						
					</div>
				</div>
			</div>
			<div class="info-wrapper">
				<h2 class="title">好看的图片都在这里哦~~</h2>
				<!-- <p class="content">晚上躺床上玩手机，突然一女神发来微信消息问我在干嘛？我以为是一哥们，就习惯性的回复了一句</p> -->
			</div>
		</div>
		<div class="switch-wrapper">
			<a href="javascript:void(0)" @click = 'minusId' class="left-btn" data-prev="9623"></a>
			<a href="javascript:void(0)" @click = 'plusId' class="right-btn" data-next="39805"></a>
		</div>
	</main>
</template>
<script>
	import $ from "jquery";	
	export default {
		data: function() {
			return {
				bool: true,
				arr: [],
				id:1,
				num:null
			}
		},
		methods: {
			loadMore: function(getData) {
				const self = this;
				$.ajax({
					url: "../resource/json/pic.json",
					type: "GET",
					success: function(data) {
						//self.arr = data[0].imgs;
						for(var i=0;i<data.length;i++){
							if(data[i].id == getData){
								self.arr.push(data[i]);
								self.num = data[i].imgs.length;
							}
						}
						//self.arr = self.arr.concat(data);
					}
					
				})
			},
			plusId:function(){
				this.id +=1;
				if(this.id == this.num + 1){
					this.id = 1
				}
				//console.log(this.id);
			},
			minusId:function(){
				this.id -=1;
				if(this.id ==0){
					this.id = this.num
				}
			}
		},
		mounted(){
			
			this.loadMore(this.$store.getters.getId);
			console.log(this.$store.getters.getId);
		}
	}
</script>
<style scoped>




html {
	line-height: 1.15;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%
}

* {
	margin: 0;
	padding: 0
}

article,
aside,
footer,
header,
nav,
section {
	display: block;
	margin: 0;
	padding: 0
}

i {
	font-style: normal
}

figcaption,
figure,
main {
	display: block
}

hr {
	-webkit-box-sizing: content-box;
	box-sizing: content-box;
	height: 0;
	overflow: visible
}

pre {
	font-family: monospace, monospace;
	font-size: 1em
}

a {
	display: inline-block;
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none
}

abbr[title] {
	border-bottom: none;
	text-decoration: underline;
	-webkit-text-decoration: underline dotted;
	text-decoration: underline dotted
}

b,
strong {
	font-weight: inherit;
	font-weight: bolder
}

code,
kbd,
samp {
	font-family: monospace, monospace;
	font-size: 1em
}

dfn {
	font-style: italic
}

mark {
	background-color: #ff0;
	color: #000
}

small {
	font-size: 80%
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}

sub {
	bottom: -.25em
}

sup {
	top: -.5em
}

audio,
video {
	display: inline-block
}

audio:not([controls]) {
	display: none;
	height: 0
}

img {
	border-style: none
}

svg:not(:root) {
	overflow: hidden
}

button,
input,
optgroup,
select,
textarea {
	font-family: sans-serif;
	font-size: 100%;
	line-height: 1.15;
	margin: 0
}

button,
input {
	overflow: visible
}

button,
select {
	text-transform: none
}

[type=reset],
[type=submit],
button,
html [type=button] {
	-webkit-appearance: button
}

[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
	border-style: none;
	padding: 0
}

[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
	outline: 1px dotted ButtonText
}

fieldset {
	padding: .35em .75em .625em
}

legend {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	color: inherit;
	display: table;
	max-width: 100%;
	padding: 0;
	white-space: normal
}

progress {
	display: inline-block;
	vertical-align: baseline
}

textarea {
	overflow: auto
}

[type=checkbox],
[type=radio] {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
	height: auto
}

[type=search] {
	-webkit-appearance: textfield;
	outline-offset: -2px
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
	-webkit-appearance: none
}

::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit
}

details,
menu {
	display: block
}

summary {
	display: list-item
}

canvas {
	display: inline-block
}

[hidden],
template {
	display: none
}

body {
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	font-family: PingFang SC, Helvetica Neue, Helvetica, STHeitiSC-Light, Microsoft YaHei, Arial, sans-serif;
	font-weight: 400;
	font-size: medium!important
}

.hide,
a[title=绔欓暱缁熻] {
	display: none
}

body {
	background-color: #fff
}

main {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow-x: hidden;
	background: #202124
}

main.fullscreen header .return-btn {
	display: none
}

main.fullscreen header span.num {
	color: #fff
}

main.fullscreen .pic .flickity-viewport {
	background: #202124
}

main header {
	position: relative;
	width: 24rem;
	height: 2.226667rem;
	line-height: 2.226667rem;
	text-align: center;
	z-index: 1;
	background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .35)), to(transparent));
	background-image: linear-gradient(-180deg, rgba(0, 0, 0, .35), transparent)
}

main header .return-btn {
	width: 1.33333333rem;
	height: 100%;
	position: absolute;
	left: .42666667rem;
	-webkit-box-sizing: border-box;
	box-sizing: border-box
}

main header i.return-icon {
	position: absolute;
	display: inline-block;
	width: 1.24rem;
	height: 1.426667rem;
	left: 0;
	top: 50%;
	margin-top: -.21333333rem;
	background: url(https://www.qiushibaike.com/img/static/dist/touch/img/return@3x.png) 50% no-repeat;
	background-size: cover
}

main header span.num {
	font-size: 16px;
	color: #fff;
	letter-spacing: 1px;

}

main header span.num .diagonal {
	color: #feb929
}

main header span.num.white-theme {
	color: #fff
}

main .pic-wrapper {
	height: 100%;
	top: 0
}

main .pic-wrapper,
main .pic-wrapper .info-wrapper {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	position: absolute;
	width: 100%
}

main .pic-wrapper .info-wrapper {
	min-height: 60px;
	bottom: 40px;
	padding: .32rem .42666667rem;
	opacity: .7;
	background: rgba(32, 33, 36, .7)
}

main .pic-wrapper .info-wrapper .title {
	margin-bottom: .10666667rem;
	font-size: 16px;
	color: #fff;
	letter-spacing: 0;
	line-height: 22px;
	word-wrap: break-word
}

main .pic-wrapper .info-wrapper .content {
	font-size: 15px;
	color: #fff;
	letter-spacing: 0;
	line-height: 21px
}

main .pic-wrapper .info-wrapper.slideOut {
	-webkit-animation: 1s e forwards;
	animation: 1s e forwards
}

main .pic-wrapper .info-wrapper .slideIn {
	-webkit-animation: 1s f forwards;
	animation: 1s f forwards
}

.pic,
.pic .pic-item {
	position: relative;
	width: 100%;
	height: 100%
}

.pic .pic-item {
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: #202124
}

.pic .pic-item img {
	position: absolute;
	top: 0;
	opacity: 0
}

.pic .flickity-viewport {
	background: #f6f5f5
}

.pic .vertical {
	background-size: cover
}

.pic .horizontal {
	background-size: contain
}

.switch-wrapper {
	position: absolute;
	top: 50%;
	width: 100%;
	height: 0;
	margin-top: -2.32rem;
	z-index: 1
}

.switch-wrapper a {
	display: inline-block;
	width: 1.933333rem;
	height: 3.866667rem
}

.switch-wrapper .left-btn {
	position: absolute;
	left: 0;
	background: url(https://www.qiushibaike.com/img/static/dist/touch/img/left@3x.png) 50% no-repeat;
	background-size: cover
}

.switch-wrapper .left-btn.slideOut {
	-webkit-animation: 1s a forwards;
	animation: 1s a forwards
}

.switch-wrapper .left-btn.slideIn {
	-webkit-animation: 1s b forwards;
	animation: 1s b forwards
}

.switch-wrapper .right-btn {
	position: absolute;
	right: 0;
	background: url(https://www.qiushibaike.com/img/static/dist/touch/img/right@3x.png) 50% no-repeat;
	background-size: cover
}

.switch-wrapper .right-btn.slideOut {
	-webkit-animation: 1s c forwards;
	animation: 1s c forwards
}

.switch-wrapper .right-btn.slideIn {
	-webkit-animation: 1s d forwards;
	animation: 1s d forwards
}

@-webkit-keyframes a {
	0% {
		left: 0
	}
	to {
		left: -1.06666667rem
	}
}

@keyframes a {
	0% {
		left: 0
	}
	to {
		left: -1.06666667rem
	}
}

@-webkit-keyframes b {
	0% {
		left: -1.06666667rem
	}
	to {
		left: 0
	}
}

@keyframes b {
	0% {
		left: -1.06666667rem
	}
	to {
		left: 0
	}
}

@-webkit-keyframes c {
	0% {
		right: 0
	}
	to {
		right: -1.06666667rem
	}
}

@keyframes c {
	0% {
		right: 0
	}
	to {
		right: -1.06666667rem
	}
}

@-webkit-keyframes d {
	0% {
		right: -1.06666667rem
	}
	to {
		right: 0
	}
}

@keyframes d {
	0% {
		right: -1.06666667rem
	}
	to {
		right: 0
	}
}

@-webkit-keyframes e {
	0% {
		opacity: 1
	}
	to {
		opacity: 0
	}
}

@keyframes e {
	0% {
		opacity: 1
	}
	to {
		opacity: 0
	}
}

@-webkit-keyframes f {
	0% {
		opacity: 0
	}
	to {
		opacity: 1
	}
}

@keyframes f {
	0% {
		opacity: 0
	}
	to {
		opacity: 1
	}
}

#floatBtn {
	position: fixed;
	bottom: 108px;
	right: 6px
}

#floatBtn a {
	display: block;
	width: 75px;
	height: 75px;
	margin-bottom: 10px
}

#floatBtn a.bonus {
	background: url(https://www.qiushibaike.com/img/static/dist/touch/img/bonus_icon@2x.png) 50% no-repeat;
	background-size: cover
}

#floatBtn a.hide {
	display: none
}


#board-img-bottom {
	position: absolute;
	bottom: 0;
	z-index: 1
}

.flickity-enabled {
	position: relative
}

.flickity-enabled:focus {
	outline: 0
}

.flickity-viewport {
	overflow: hidden;
	position: relative;
	height: 100%
}

.flickity-slider {
	position: absolute;
	width: 100%;
	height: 100%
}

.flickity-enabled.is-draggable {
	-webkit-tap-highlight-color: transparent;
	tap-highlight-color: transparent;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.flickity-enabled.is-draggable .flickity-viewport {
	cursor: move;
	cursor: -webkit-grab;
	cursor: grab
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
	cursor: -webkit-grabbing;
	cursor: grabbing
}

.flickity-prev-next-button {
	position: absolute;
	top: 50%;
	width: 44px;
	height: 44px;
	border: none;
	border-radius: 50%;
	background: #fff;
	background: hsla(0, 0%, 100%, .75);
	cursor: pointer;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%)
}

.flickity-prev-next-button:hover {
	background: #fff
}

.flickity-prev-next-button:focus {
	outline: 0;
	box-shadow: 0 0 0 5px #09f
}

.flickity-prev-next-button:active {
	opacity: .6
}

.flickity-prev-next-button.previous {
	left: 10px
}

.flickity-prev-next-button.next {
	right: 10px
}

.flickity-rtl .flickity-prev-next-button.previous {
	left: auto;
	right: 10px
}

.flickity-rtl .flickity-prev-next-button.next {
	right: auto;
	left: 10px
}

.flickity-prev-next-button:disabled {
	opacity: .3;
	cursor: auto
}

.flickity-prev-next-button svg {
	position: absolute;
	left: 20%;
	top: 20%;
	width: 60%;
	height: 60%
}

.flickity-prev-next-button .arrow {
	fill: #333
}

.flickity-page-dots {
	position: absolute;
	width: 100%;
	bottom: -25px;
	padding: 0;
	margin: 0;
	list-style: none;
	text-align: center;
	line-height: 1
}

.flickity-rtl .flickity-page-dots {
	direction: rtl
}

.flickity-page-dots .dot {
	display: inline-block;
	width: 10px;
	height: 10px;
	margin: 0 8px;
	background: #333;
	border-radius: 50%;
	opacity: .25;
	cursor: pointer
}

.flickity-page-dots .dot.is-selected {
	opacity: 1
}
</style>