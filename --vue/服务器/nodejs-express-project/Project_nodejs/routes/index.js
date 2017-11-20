var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");

var MongoClicent = mongodb.MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/Tips';

/* GET home page. */
//router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express',name:req.session.username});
//});
//router.get('/registor', function(req, res, next) {
//res.render('registor',{});
//});
//router.get('/test', function(req, res, next) {
//res.render('test',{});
//});
//router.get('/login', function(req, res, next) {
//res.render('login',{});
//});
//
//router.get('/comm', function(req, res, next) {
//res.render('comm',{});
//});
//
//
//
//router.get('/showcomm', function(req, res, next) {
//function findData(db) {
//	var conn = db.collection("comm");
//	
//	conn.find().toArray(function(err,results){
//    console.log(results)
//		res.render('showcomm',{"data":results});
//	})
//}
//
//
//MongoClicent.connect(DB_CONN_STR,function(err,db){
//	findData(db);
//})
//
//
//});
router.get('/logout', function(req, res, next) {
  req.session.username = undefined;
  res.redirect('/');
});
module.exports = router;
