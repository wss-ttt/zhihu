export const imgProxy = (imgUrl) => {
	// 图片防盗链问题解决
	return imgUrl && imgUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
}
