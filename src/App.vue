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
		padding: 20px;
		margin: 0 auto;
		max-width: 640px;
	}
	
</style>
