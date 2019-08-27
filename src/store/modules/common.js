export default {
  namespaced: false,
  state: {
  	msg:'好好学习 天天向上',
  	students:['张三','李四','王五'],
  	age:18,
  },
  getters:{
  	name(state,getters){
  		return getters['info'];
  	},
  	info(){
  		return '我今年18岁'
  	},
  	num(){
  		return 100;
  	}
  },
  mutations: {
  	updateAge(state,{age}){
  		console.log(age)
  		state.age += age;
  	},
  	
  	updateAge2(state,age){
  		console.log(age)
  		state.age += age;
  	},
  }
}