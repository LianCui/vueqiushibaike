import Vue from "vue";
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import $ from 'jquery';
Vue.use(Vuex);
Vue.use(VueRouter);

//引入首页内容页组件
import indexDetail from './components/indexDetail.vue';
import loading from './components/loading.vue';
import cloading from './components/cloading.vue';
import xheader from './components/xheader.vue';

//首页详情页组件
import indexContent from './components/indexcontent.vue';
import picDetail from './components/pic_detail.vue';
import share from './components/share.vue';

//视频页面
import movie from './components/movie.vue';
import movieDetail from './components/movieDetail.vue';

//引入崔莲的top文件夹 xheader
import xheader from './components/top/xheader.vue';
import xnav from './components/top/xnav.vue';

//引入崔莲的page文件夹下文件
import gifnav from './components/page/gifnav.vue';
import giffoot from './components/page/giffoot.vue';
import gif from './components/gif.vue';

//引入崔莲all 文件夹下文件
import clnew from './components/all/clnew.vue';
//import pnav from './components/pnav.vue';

//引入鲍雪的文件
import photo from './components/photo.vue';
import photoDetail from './components/photo_detail.vue';

//引入刁春辉登录注册
import register from './components/registor.vue';
import login from './components/login.vue';

//引入首页内容页css
//import css from './resource/css/index.css';
//import css from './resource/css/app.css';
//import css from './resource/css/detail.css';
//import css from './resource/css/flickity.css';

//weui样式
import warning from './components/warining.vue';

//引入banner
import banner from './components/banner.vue';

var router = new VueRouter({
	routes: [{
		path: '/xheader',
		component: xheader,
		children: [{
			path: 'xnav',
			component: xnav,
			children: [{
				path: 'indexDetail',
				component: indexDetail
			}, {
				path: 'indexContent',
				component: indexContent
			}]
		},{
			path:'gifnav',
			component:gifnav,
			children:[{
				path:'gif',
				component:gif
			},{
				path:'clnew',
				component:clnew
			},{
				path:'movie',
				component:movie
			},{
				path: 'movieDetail',
				component: movieDetail
			}]
		},{
			path:'photo',
			component:photo
		}]

	},{
		path:'/photoDetail',
		component:photoDetail
	},{
		path:'/register',
		component:register
	},{
		path:'/login',
		component:login
	},{
		path: '/',
		redirect: '/xheader/xnav/indexDetail'
	}]
});

var store = new Vuex.Store({
	state: {
		bool: false,
		indexdetailId: 0,
		videodetailId: 0,
		videoPage: 1,
		title: "",
		imgsrc: "",
		title:"",
		id:null,
		lightId:1,
		isLogin:false
	},
	getters: {
		sharebool: function(state) {
			return state.bool;
		},
		detailId: function(state) {
			return state.indexdetailId;
		},
		videoId: function(state) {
			return state.videodetailId;
		},
		videoDetailPage: function(state) {
			return state.videoPage;
		},
		getImgsrc: function(state) {
			return state.imgsrc;
		},
		getTitle: function(state) {
			return  state.title ;
		},
		getId:function(state){
			return state.id;
		},
		getLightId:function(state){
			return state.lightId;
		},
		getIsLogin:function(state){
			return state.isLogin;
		}
	},
	mutations: {
		setsharebool: function(state, data) {
			state.bool = data;
		},
		setdetailId: function(state, data) {
			state.indexdetailId = data;
		},
		setVideoId: function(state, data) {
			state.videodetailId = data;
		},
		setvideoPage: function(state, data) {
			state.videoPage = data;
		},
		setImgsrc: function(state, data) {
			state.imgsrc = data;
		},
		setTitle: function(state, data) {
			state.title = data;
		},
		setLightId:function(state,data){
			state.lightId = data;
		},
		setIsLogin:function(state,data){
			state.isLogin = data;
		}
	}
});

new Vue({
	el: '#app',
	store: store,
	router: router,
	data: {
		name: 'qd'
	},
	template: `
		<router-view></router-view>
	`,
	components: {
		indexDetail: indexDetail,
		cloading: cloading,
		loading: loading,
		xheader: xheader,
		indexContent: indexContent,
		picDetail: picDetail,
		share: share,
		movie: movie,
		movieDetail: movieDetail,
		xheader: xheader,
		xnav: xnav,
		gifnav:gifnav,
		gif:gif,
		giffoot:giffoot,
		register:register,
		login:login,
		warning:warning

	}
})
//<router-view></router-view>
//<register></register>
//<warning></warning>