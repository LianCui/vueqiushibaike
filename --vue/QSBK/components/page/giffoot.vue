<template>
	<div>
		<footer class="footer">
			<nav class="copyright-nav">
				<a href="/gif/7.html">真人</a>
				<div class="line"></div>
				<a href="/gif/3.html">体育</a>
				<div class="line"></div>
				<a href="/gif/2.html">交通</a>
				<div class="line"></div>
				<a href="http://www.qiushibaike.com/">糗事</a>
			</nav>
			<div class="copyright">
				<a href="//a.app.qq.com/o/simple.jsp?pkgname=qsbk.app" rel="nofollow" target="_blank">手机客户端</a>
				<a href="//www.qiushibaike.com/new4/suggest" rel="nofollow">在线反馈</a>
				<a href="#" rel="nofollow">回到顶部</a>
				<p>© Qiushibaike.com</p>
			</div>
		</footer>
	</div>
</template>

<script>
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
.flex,
.footer .copyright-nav {
	display: -webkit-box;
	display: -webkit-flex
}

.nav .active {
	color: #ff8d16
}

.footer {
	/*position: fixed;*/
	bottom:0;
	width:100%;
	padding: 16px 12px 52px;
	background-color: #f7f7f7;
	/*font-size: 1.0rem*/
}

.footer .copyright-nav {
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	height: 30px;
	color: #514331;
	text-align: center;
	line-height: 30px;
	border-bottom: 1px #ddd solid
}

.footer .copyright-nav .line {
	width: .1rem;
	height: 15px;
	background-color: #ddd
}

.footer .copyright-nav a {
	flex: 1;
	-webkit-flex: 1;
	-webkit-box-flex: 1;
	display: block;
	color:#939393;
}

.footer .copyright {
	padding: 12px;
	text-align: center;
	color: #999;
	line-height: 1.8
}

.footer .copyright a {
	display: inline-block;
	margin: 0 6px
}

</style>