
const state={
	depts:[
		{
			id:1,
			name:'研发部'
		}
	]
};

const getters={
	getDepts(state){
		return state.depts;	
	}
}

const actions={
	addDept({commit},params){
		// console.log('actions:addDept');
		commit('addDept',params);
	},
	delDept(){

	}
};


const mutations={
	addDept(state,params){
		// console.log('mutations:addUser');
		state.depts.push(params);
	},
	delDept(){

	}
};

export default{
	state,
	getters,
	actions,
	mutations
}