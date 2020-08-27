// function setCookie(name, value, time) {
//     var date = new Date()
//     date.setDate(date.getDate() + time)
//     document.cookie = `${name}=${value};expires=${date}`
// }
// function removeCokie(name){
//     setCookie(name,'',-10)
// }
// function getCookie(key) {
//     let arr = document.cookie.replace(/\s/g, '').split(';')
//     for (let i = 0; i < arr.length; i++) {
//         var newarr = arr[i].split('=')
//         if (key == newarr[0]) {
//             return newarr[1]
//         }
//     }
// }
let Co = {
	parseCookies: function (query) {
		var reg = /([^=; \s]+)[=\s]*([^; \s]*)/g;
		var obj = {};
		while (reg.exec(query)) {
			obj[RegExp.$1] = RegExp.$2;
		}
		return obj;
	},
	//CRUD 
	setCookie: function (k, v, d) {
		let date = new Date()
		date.setDate(date.getDate() + d)
		let cookie = `${k}=${v};expires=${date};path=/`
		document.cookie = cookie;
	},
	getCookie(k) {
		//k=bbb
		let obj = parseCookies(document.cookie)
		return obj[k];
	},
	removeCookie(k) {
		setCookie(k, '', -10)
	},
	getUrlParam: function (name) {
		// 取得url中?后面的字符
		var query = window.location.search.substring(1);
		// 把参数按&拆分成数组
		var param_arr = query.split("&");
		for (var i = 0; i < param_arr.length; i++) {
			var pair = param_arr[i].split("=");
			if (pair[0] == name) {
				return pair[1];
			}
		}
		return (false);
	}
}

export default Co