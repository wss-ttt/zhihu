import request from '@/utils/request'

// 获取所有的新闻数据
export function fetchNewsList(query) {
	return request({
		url: '/news',
		method: 'get', // 为get请求方式
		params: query
	})
}

// 获取新闻的详细信息
export function fetchNewsDetails(query){
	return request({
		url:'/newsById',
		method:'get',
		params:query
	})
}


// 获取长评论
export function getLongComments(query){
	return request({
		url:'/longComments',
		method:'get',
		params:query
	})
}


// 获取短评论
export function getShortComments(query){
	return request({
		url:'/shortComments',
		method:'get',
		params:query
	})
}



// 加载更多
export function getMore(query){
	return request({
		url:'/newsByDate',
		method:'get',
		params:query
	})
}