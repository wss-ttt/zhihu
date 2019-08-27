export const imgProxy = (imgUrl) => {
	// 图片防盗链问题解决
	return imgUrl && imgUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
}


// 时间往前推
export const prevDate = (str, idx) => {
	let reg = /^\d*$/
	if (str.length !== 8 || !reg.test(str)) {
	  return false
	}
	let arr = []
	arr.push(str.slice(0, 4))
	arr.push(str.slice(4, 6))
	arr.push(str.slice(6, 8))
	let newDate = new Date(new Date(arr[0], arr[1] - 1, arr[2]) - idx * 24 * 60 * 60 * 1000)
	return newDate.getFullYear().toString() + (newDate.getMonth() + 1 > 9 ? (newDate.getMonth() + 1).toString() : '0' + (newDate.getMonth() + 1).toString()) + (newDate.getDate() > 9 ? newDate.getDate().toString() : '0' + newDate.getDate().toString())
}
