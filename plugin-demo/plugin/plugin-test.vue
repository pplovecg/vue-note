<template>
	<div>这是template标签构建的组件,这是插件的具体实现</div>
</template>
<!-- first step 创建组件-->
<script>
	export default{
		name:'myplug',
		methods:{
			con:function(){
				console.log('success!');
			}
		},
		mounted(){
			this.con();
		}
	}
</script>