<template>

	<div id="boxshell">
		<div id="logoBar">
			<div class="logo">
				<a href="/" onclick="_hmt.push(['_trackEvent', 'qiushi_logo', 'chick']);"></a>
			</div>
			<div class="float-nav">

			</div>
		</div>
		<div class="logo">

		</div>
		<form  id="login">
			<p class="login_header">
				<a>账号密码登陆</a>
				<a>手机验证登陆</a>
			</p>
			<br/><br>
			<input type="text" placeholder="手机号/邮箱/用户名" class="username" name="username" v-model="username">
			<p class="username"></p>
			<input type="password" name="password" placeholder="请输入8-16位密码，需要包含字母以及数字" class="password" v-model="password">
			<p class="password"></p>
			<input class="btn" type="button" value="登录" @click = func()>
			<div class="footer">
				<p>没有帐号?
					<a href="/registor">注册</a>
				</p>
			</div>
		</form>
	</div>

</template>
<script>
	import $ from "jquery"
	export default {
		data:function(){
			return{
				username:"",
				password:""
			}
		},
		methods: {
			login: function() {
				
				$("#login").on("blur", "input", function() {
					if($(this).attr("class") == "username") {
						var str = $(this).attr("class");
						if($(this).val() == "") {
							$(this).css("margin-bottom", "0");
							$(this).parent().find('.' + str + '').html("请输入手机号码/邮箱/用户名");
							$(this).val("");
						} else {
							if(/^\+?[1-9][0-9]*$/.test($(this).val())) {
								//验证手机号码的长度
								if($(this).val().length != 11) {
									$(this).css("margin-bottom", "0");
									$(this).parent().find('.' + str + '').html("请输入正确的手机号码");
									$(this).val("");
								} else {
									//正则验证手机号码是否符合规则
									if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($(this).val()))) {
										$(this).css("margin-bottom", "0");
										$(this).val("");
										$(this).parent().find('.' + str + '').html("请输入正确的手机号码")
									} else {
										$(this).css("margin-bottom", "40px");
										$(this).parent().find('.' + str + '').html("")
									}
								}
							} else {
								if(/^[a-zA-Z0-9_-]{4,16}$/.test($(this).val())) {

									$(this).css("margin-bottom", "40px");
									$(this).parent().find('.' + str + '').html("");

								} else {
									if(!($(this).val().length > 4 && $(this).val().length < 16)) {
										$(this).css("margin-bottom", "0px");
										$(this).parent().find('.' + str + '').html("用户名为4-16组成");
										$(this).val("");
									} else {
										$(this).css("margin-bottom", "0px");
										$(this).parent().find('.' + str + '').html("用户名只可由中英文，数字及‘-’‘_’符号组成");
										$(this).val("");
									}

								}
							}
						}
					} else if($(this).attr("class") == "password") {
						var str = $(this).attr("class");
						if($(this).val() == "") {
							$(this).css("margin-bottom", "0px");
							$(this).parent().find('.' + str + '').html("请输入密码");
							$(this).val("");
						} else {
							if(/^[a-zA-Z0-9]{8,16}$/.test($(this).val())) {

								$(this).css("margin-bottom", "40px");
								$(this).parent().find('.' + str + '').html("");

							} else {
								if(!($(this).val().length > 4 && $(this).val().length < 16)) {
									$(this).css("margin-bottom", "0px");
									$(this).parent().find('.' + str + '').html("用户名为4-16组成");
									$(this).val("");
								} else {
									$(this).css("margin-bottom", "0px");
									$(this).parent().find('.' + str + '').html("用户名只可由中英文，数字符号组成");
									$(this).val("");
								}

							}
						}
					}
				})
			},
			func:function(){
				var self  =this;
				var data = `username=${this.username}&password=${this.password}`
				$.ajax({
					method: "get",
					dataType: "text",
					url: "http://10.30.152.63:4000/users/login",
					data: data,
					success: function(data) {
						data = JSON.stringify(data);
						if(data != ""){
							alert("登录成功");
							self.$store.commit("setIsLogin",true);
							location.href="#/xheader/xnav/indexContent";
						}else{
							alert("登陆失败，请重新登录");
							location.reload();
						}
					}
				})
			}
		},
		mounted(){
			this.login()
		}
	}
</script>
<style scoped>
	#logoBar {
		position: relative;
		width: 100%;
		height: 81px;
		background-color: #fb0;
		top: -70px;
	}
	
	#logoBar .logo {
		width: 150px;
		height: 48px;
		padding-top: 7.5px;
		padding-bottom: 7.5px;
		background: url(../resource/images/logo2016.png) center 10px no-repeat;
		background-size: contain
	}
	
	#logoBar .logo a {
		display: block;
		width: 100%;
		height: 100%
	}
	
	#logoBar .float-nav {
		position: absolute;
		right: 16px;
		top: calc(50% - 12px);
		font-size: 0
	}
	
	#logoBar .float-nav>a {
		display: inline-block;
		width: 54px;
		height: 24px;
		color: #6a3906;
		text-align: center;
		line-height: 24px;
		vertical-align: middle;
		margin-right: 8px;
		font-size: 12px;
		background-color: #fff;
		border-radius: 2px
	}
	
	#logoBar .float-nav>a:last-child {
		margin-right: 0
	}
	
	#login .login_header {
		width: 304px;
		margin: 0 auto;
		display: flex;
	}
	
	body {
		background: #363636;
	}
	
	#login .login_header a {
		display: inline-block;
		width: 50%;
		font-size: 18px;
		font-style: normal;
		text-align: center;
		line-height: 40px;
		color: #999;
		text-decoration: none;
	}
	
	#login .login_header a:first-of-type {
		color: #3f9f5f;
		border-bottom: 2px solid #3f9f5f;
	}
	
	#last {
		margin-top: 40px;
	}
	
	* {
		margin: 0px;
		padding: 0px;
	}
	
	#boxshell {
		height: 500px;
		width: 100%;
		padding: 40px 0px 130px 0px;
		background: url(../resource/images/banner.jpg) top/cover no-repeat;
	}
	
	#boxshell .logo {
		width: 215px;
		margin: 0 auto;
		margin-top: 30px;
		margin-bottom: 40px;
	}
	
	#boxshell img {
		height: 50px;
		width: auto;
		display: inline-block;
		float: left;
	}
	
	#boxshell span {
		font-size: 27px;
		margin-top: 11px;
		display: inline-block;
		color: #fff;
	}
	
	#boxshell form {
		width: 100%;
		margin: 0 auto;
		background: hsla(0, 0%, 100%, .95);
		padding: 54px 0px 48px 0px;
		margin-top: -112px;
	}
	
	#boxshell form p {
		line-height: 39px;
		font-size: 12px;
		color: red;
		width: 30px;
		width: 300px;
		margin: 0 auto;
	}
	
	#boxshell form input {
		border:1px solid #ccc;
		display: block;
		width: 294px;
		margin: 0 auto;
		height: 41px;
		margin-bottom: 39px;
		text-indent: 15px;
		font-size: 13px;
		color: #222;
	}
	
	#boxshell form .btn {
		background: #3f9f5f;
		color: #fff;
	}
	
	#boxshell form .code {
		width: 200px;
		margin-left: 30px;
	}
	
	#boxshell form span {
		display: inline-block;
		width: 80px;
		height: 39px;
		margin-left: 250px;
		float: left;
		margin-top: -73px;
		background: #fff;
		font-size: 14px;
		color: #fff;
		line-height: 40px;
		letter-spacing: 5px;
		text-align: center;
		background: url(../resource/images/bg.jpg) repeat left;
	}
	
	#boxshell .footer {
		margin-top: 15px;
		margin-left: 21px;
		width: 326px;
		display: flex;
		justify-content: space-between;
	}
	
	#boxshell .footer p {
		font-size: 11px;
		color: #666;
	}
	
	#boxshell .footer p a {
		font-size: 11px;
		color: #3f9f5f;
		text-decoration: none;
	}
	
	#boxshell .footer p a:hover {
		text-decoration: underline;
	}
	
	#last {
		width: 100%;
		margin: 0 auto;
		display: flex;
		background: #363636;
	}
	
	#last li {
		list-style: none;
		width: 80px;
		margin: 50px 50px 30px 50px;
	}
	
	#last li:first-of-type {
		margin-left: 150px;
	}
	
	#last li span {
		width: 100%;
		display: block;
		color: #c2c2c2;
		font-size: 12px;
		text-align: center;
	}
	
	#last li a {
		text-decoration: none;
		font-size: 16px;
		line-height: 20px;
		color: #959595;
		font-size: 12px;
	}
	
	#last li a:hover {
		text-decoration: underline;
	}
	
	#last li a img {
		width: 20px;
		height: 20px;
		margin-top: 20px;
	}
	
	#page_bottom {
		width: 100%;
		overflow: hidden;
		width: 950px;
		margin: 0 auto;
		padding-bottom: 40px;
	}
	
	#page_bottom img {
		width: 150px;
		height: auto;
		float: left;
	}
	
	#page_bottom p span {
		font-size: 12px;
		display: block;
		color: #959595;
	}
	
	#page_bottom p {
		float: left;
		padding-top: 15px;
	}
</style>