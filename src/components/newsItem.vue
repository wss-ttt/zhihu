<template>	
	<router-link :to="{name:'details',params:{id:item.id}}" >
		<div class="item">
			<!-- <img v-if="item.images" :src="imgProxy(item.images[0])" alt="" /> -->
			<img v-if="item.images" v-lazy="imgProxy(item.images[0])" alt="" />
			<div class="title">{{item.title}}</div>
		</div>
	</router-link>
</template>

<script>
	import { imgProxy } from '@/utils/index.js'
	export default {
		name: 'newsItem',
		data() {
			return {

			}
		},
		props: {
			item: {
				type: Object
			}
		},
		methods: {
			imgProxy
		},
	}
</script>

<style scoped="scoped">
	a{
		text-decoration: none;
		cursor: pointer;
	}
	.item {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 5px;
		color: #333;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
		width: 100%;
		margin:0 auto 20px;
		border-radius: 4px;
		background-color: #fff;
	}
	
	.item img {
		max-height: 100px;
		max-width: 120px;
	}
	
	.item .title {
		font-size: 16px;
		margin-left: 15px;
	}
</style>