<template>
	<div id="page">
	    <xheader></xheader>
	    <gifnav></gifnav>
		<gif></gif>
		<giffoot></giffoot>
	</div>
</template>

<script>
	import xheader from "./page/xheader.vue"
	import gifnav from "./page/gifnav.vue"
	import gif from "./page/gif.vue"
	import giffoot from "./page/giffoot.vue"
	
	
	export default{
     	components:{
		 	xheader,
		    gifnav,
		    gif,
			giffoot	
		}
    }
	
	 
</script>

<style>
</style>