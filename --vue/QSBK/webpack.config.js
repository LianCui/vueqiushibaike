//webpack配置文件

var webpack = require("webpack");

var path = require('path');
//var base = require("./module/base.js");
//
//console.log(base(2,5));

module.exports = {
	//gulp.src   导入一个文件  入口
	entry: './index.js',
	//出口  导出文件
	output: { //绝对路径
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		//loader 就是为了处理飞JS类型的文件
		rules: [{
			//如果匹配一.txt为后缀的文件以raw.loader来处理
			test: /\.txt$/,
			use: 'raw-loader'
		},{
			test: /\.html$/,
			use: 'html-loader'
		},{
			test: /\.json$/,
			use: 'json-loader'
		},{
			test: /\.(png|jpg|gif)$/,
			use: 'url-loader'
		},{
			test: /\.css$/,
			use: ['style-loader','css-loader']
		},{
			test: /\.vue$/,
			use: 'vue-loader'
		},{
			test: /\.scss$/,
			use: 'sass-loader'
		},{
			test: /\.ejs$/,
			use: 'ejs-loader'
		},{
			test: /\.jade$/,
			use: 'jade-loader'
		}]
	},
	//重镜像
	resolve:{
		alias:{
			'vue':'vue/dist/vue.js'
		}
	}
};