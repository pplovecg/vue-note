<template>
	<div class="useplug">
		<lazy-load>
			<h3>lazyload demo</h3>
			<ul>
				<li v-for='imgsrc in imgArr'>
					<img src="##" :datasrc='imgsrc' class="lazyimg">
				</li>
			</ul>
		</lazy-load>
	</div>
</template>

<script>
	export default{
		name:'useplugin',
		data(){
			return{
				imgArr:[
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png',
					'./static/logo.png'
				]
			}
		}
	}
</script>


<style scoaped>
.useplug li{
	display:inline-block;
	width:100px;
	height:100px;
}	
.lazyimg{
	width:100px;
	height:100px;
}
</style>