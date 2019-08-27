
const state={
	users:[
		{
			id:1,
			name:'乔峰',
			age:18
		}
	],  //保存数据的
};

const getters={
	getUsers(state){
		return state.users;	
	}	
}

const actions={
	addUser({commit},params){
		// console.log('actions:addUser');
		commit('addUser',params);
	},
	delUser(){

	}
};


const mutations={
	addUser(state,params){
		// console.log('mutations:addUser');
		state.users.push(params);
	},
	delUser(){

	}
};

export default{
	namespaced:true,
	state,
	getters,
	actions,
	mutations
}