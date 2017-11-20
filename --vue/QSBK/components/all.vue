<template>
	<div>
		<clnew></clnew>
		<gif></gif>
		<xtext></xtext>
		<giffoot></giffoot>
	</div>
</template>

<script>
	import clnew from "./all/clnew.vue"
    import gif from "./all/gif.vue"
    import xtext from "./all/text.vue"
	import giffoot from "./all/giffoot.vue"
	
	
	export default{
     	components:{
		 	clnew,
		    gif,
		    xtext,  
			giffoot	
		}
    }
</script>

<style>
</style>