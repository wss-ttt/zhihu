<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	#app{
		margin: 0 auto;
		max-width: 640px;
		box-shadow: 0 0 10px #5d656c;
	}
	body{
		background: #d3d3d3;
		transition: all 1s;
	}
	
</style>
