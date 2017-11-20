<template>
	<div class="js_dialog" id="androidDialog1" style="opacity: 1;">
            <div class="weui-mask"></div>
            <div class="weui-dialog weui-skin_android">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">提示</strong></div>
                <div class="weui-dialog__bd">
                   	请先进行登录或注册
                </div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">登录</a>
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">注册</a>
                </div>
            </div>
        </div>
</template>

<script>
	import css from '../resource/css/weui.css';
	export default{
		data:function(){
			return {
				name:'qd'
			}
		}
	}
</script>

<style>
</style>