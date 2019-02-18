<template>
	<div ref='lazyimgs' v-on:scroll.passive='lazyLoad' class="lazy-wrapper">
		<slot></slot>
	</div>
</template>
<!-- first step 创建组件-->
<script>
	export default{
		name:'lazy-load',
		data(){
			return{
				oldScrollTop:0,
				timer:null
			}
		},
		methods:{
			con:function(){
				console.log('success!');
			},
			shakeOff:function(fn){
				//消抖函数
				clearTimeout(this.timer);
				this.timer = setTimeout(function(){
					fn();
				},300);
			},
			getImgs:function(){
				return this.$refs.lazyimgs.getElementsByClassName('lazyimg');	
			},
			disImgs:function(){
				let imgs = this.getImgs();
				//浏览器滚动条滚过的高度:IE9+及标准浏览器/兼容ie低版本的标准模式/兼容混杂模式
				let scrollTop = window.pagYoffset || document.documentElement.scrollTop || document.body.scrollTop;
				//浏览器可视区域高度:标准浏览器及IE9+/标准浏览器及低版本IE标准模式/低版本混杂模式
				let winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

				for (let i = 0; i < imgs.length; i++){
					 if(imgs[i].offsetTop <= scrollTop + winHeight) {
                    	imgs[i].src = imgs[i].getAttribute("datasrc");   
                	}
				}
			},
			lazyLoad() {
				this.disImgs();
            	// 如果上拉距离大于500px则自动加载
	            if(this.$refs.lazyimgs.scrollTop - this.oldScrollTop > 500) {
	                this.disImgs();
	                this.oldScrollTop = this.$refs.lazyimgs.scrollTop;
	            } else if(this.$refs.lazyimgs.scrollTop - this.oldScrollTop < 0) {  // 如果向下拉则不做操作
	                return ;
	            } else {
	            	this.shakeOff(this.disImgs);
	            }
        	}
		},
		mounted(){
			//this.con();
			this.lazyLoad();
		}
	}
</script>

<style scoaped>
.lazy-wrapper{
	height: 100%;
	overflow: scroll;
}
</style>