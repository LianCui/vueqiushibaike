var express = require('express');
var router = express.Router();
var http = require("http")
const session = require('express-session');
var mongodb = require("mongodb");

var MongoClicent = mongodb.MongoClient;

var DB_CONN_STR = 'mongodb://localhost:27017/Tips';

//实现注册页面
router.all('/registor', function(req, res, next) {
	var username = req.query['username'];
	var pwd = req.query['password'];
	var phonenum = req.query["phonenum"]
	
	if(username && pwd) {
		var data = [{
			"username": username,
			"password": pwd,
			"phonenum": phonenum
		}];
		function inserData(db) {

			var conn = db.collection('tips');

			conn.insert(data, function(err, results) {
				if(err) {
					console.log(err)
					return;
				} else {
					
					
					db.close();
				}
			})
		}

		MongoClicent.connect(DB_CONN_STR, function(err, db) {
			/*console.log(results)*/
			if(err) {
				console.log(err);
				return;
			} else {
				res.append('Access-Control-Allow-Origin', '*');
				res.send('already existing');
				inserData(db);
				
			}
		})
	} 
});
//检测是否注册过
router.all("/ajax",function(req,res,next){
	
	var phonenum =req.query['phonenum'];
	var username = req.query['username']
	function findData(db){
		var conn = db.collection("tips");
		//panding shifou weichunshuzi chunshuzishi shoujihao
		//fouzeshi yonghuming
		
		var data = {"phonenum":phonenum};

		conn.find(data,{"phonenum":0}).toArray(function(err,results){	
			if(results.length > 0){
				res.append('Access-Control-Allow-Origin', '*');
				res.send('already existing');
			}
		})
	}

	MongoClicent.connect(DB_CONN_STR, function(err, db) {
	    if(err) {
	      console.log(err);
	       return;
	    } else {
	       findData(db)
	    }
   	})
	
})

router.all("/ajax_username",function(req,res,next){
	

	var username = req.query['username']
	function findData(db){
		var conn = db.collection("tips");
		//panding shifou weichunshuzi chunshuzishi shoujihao
		//fouzeshi yonghuming
		
		var data = {"username":username};

		conn.find(data,{"username":0}).toArray(function(err,results){	
			if(results.length > 0){
				res.append('Access-Control-Allow-Origin', '*');
				res.send('already existing');
			}
		})
	}

	MongoClicent.connect(DB_CONN_STR, function(err, db) {
	    if(err) {
	      console.log(err);
	       return;
	    } else {
	       findData(db)
	    }
   	})
	
})
//实现登录页面
router.all('/login', function(req, res, next) {
	var username = req.query['username'];
	var pwd = req.query['password'];
	res.append('Access-Control-Allow-Origin', '*');
	console.log(username)
	function findData(db) {
		var conn = db.collection("tips");
		//判定传入的数据是手机号还是用户名
		if(/^\+?[1-9][0-9]*$/.test(username)) {
			var data = {
				"phonenum": username,
				"password": pwd
			};
			conn.find(data, {
				"phonenum": 0,
				"password": 0
			}).toArray(function(err, results) {
				
				if(results.length > 0) {
					req.session.username = username;
					
					res.send('success');
					
				} else {
				
					return;
					
				}
			})

		} else {
			var data = {
				"username": username,
				"password": pwd
			};
			conn.find(data, {
				"username": 0,
				"password": 0
			}).toArray(function(err, results) {
				if(results.length > 0) {
					req.session.username = username;
				
					res.send('success');

				} else {
					return;
					
				}
			})
		}

	}
	if(username && pwd) {
		MongoClicent.connect(DB_CONN_STR, function(err, db) {
			if(err) {
				console.log(err);
				return;
			} else {
				findData(db)
			}
		})
	} else {
		return;
	}
})
// 将数据添加到mogodb中
router.all('/comm', function(req, res, next) {
	var title = req.body['title'];
	var count = req.body['count'];
//在appjs中配置的时候注意顺序
	var username = req.session.username;
	if(username) {
		var data = [{
			"title": title,
			"count": count,
			"username": username
		}];

		function inserData(db) {
			var conn = db.collection('comm');
			conn.insert(data, function(err, results) {
				if(err) {
					console.log(err)
					return
				} else {
					res.redirect('/');
					db.close();
				}
			})
		}

		MongoClicent.connect(DB_CONN_STR, function(err, db) {
			/*console.log(results)*/
			if(err) {
				console.log(err);
				return;
			} else {
				console.log("connect success");
				inserData(db);
			}
		})
	} else {
		res.send('<script>alert("Login timeout,please log in again");location.href="/login"</script>');
	}
})


router.all("/ajax_name", function(req, res, next) {
	var username = req.body['username']

	function findData(db) {
		var conn = db.collection("tips");
		//panding shifou weichunshuzi chunshuzishi shoujihao
		//fouzeshi yonghuming
		var data = {
			"username": username
		}
		conn.find(data, {
			"username": 0
		}).toArray(function(err, results) {
			if(results.length > 0) {
				res.send('already existing');
			}
		})
	}

	MongoClicent.connect(DB_CONN_STR, function(err, db) {
		if(err) {
			console.log(err);
			return;
		} else {
			findData(db)
		}
	})

})

router.all("/getMes", function(request, response) {
//用query接收get请求
var page = request.query['page'];
var count = request.query['count'];
var type = request.query['type'];
if(type == undefined){
	type = "refresh"
}
if(count == undefined){
	count = 30
}
if(page == undefined){
	page = 1
}

var url = "http://m2.qiushibaike.com/article/list/"+type+"?page="+page;
console.log(url)
http.get(url, function(res) {
	var data = "";
		res.on("data", function(chunk) {
			data += chunk
//			console.log(data)
		})
		res.on("end", function() {
			//CORS 服务端给权限我们去请求
			response.append('Access-Control-Allow-Origin', '*');
			response.send(data)
		})
})


})
module.exports = router;