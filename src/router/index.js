import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/index',
  	},
    {
    	path:'/index',
    	name:'index',
    	component: resolve => require(['@/views/index.vue'], resolve),
	},
	{
		path:'/details/:id',
		name:'details',
		component:resolve=>require(['@/views/details.vue'],resolve)
	}
  ]
})
