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
	},
	{
		path:'/index2',
		name:'index2',
    	component: resolve => require(['@/views/index2.vue'], resolve),
	},
	{
		path:'/index3',
		name:'index3',
		component:resolve=>require(['@/views/index3.vue'],resolve)
	}
  ]
})
