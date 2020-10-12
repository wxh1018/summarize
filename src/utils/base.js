let base = {
    //错误提示
    warn(a, b) {
        a.$message({
            type: "error",
            message: b
        });
    },
    //成功提示
    suc(a, b) {
        a.$message({
            type: 'success',
            message: b
        })
    },
    noti(a, msg) {
        a.$notify({
            title: "系统提示",
            message: msg,
            type: "success",
            duration: 2000
        });
    },
    pipeline: function (...fns) {
        return val => fns.reduce((a, b) => b(a), val)
    },
    // 设置标题
    SetTitle(v) {
        var title = document.querySelector('title')
        title.text = v
    },
    //添加样式
    AddStyle(obj) {
        console.log(obj);
        obj = obj.replace(/;/g, '!important;')
        let style = document.querySelector('style')
        let head = document.querySelector('head')
        if (style) {
            style.append(obj)
        } else {
            let style = '<style></style>'
            head.append(style)
            style.innerHtml = obj
        }
    },
    // 分页器  (每页条数，当前页)
    ChangePage(page_size, current_page, data) {
        page_size = page_size || 10
        let start = page_size * (current_page - 1)
        let end = page_size * (current_page - 1) + page_size
        return data.slice(start, end)
    },
    //获取时间
    GetTime() {
        var year = new Date().getFullYear()
        var month = new Date().getMonth() + 1
        var date = new Date().getDate()
        var h = new Date().getHours();
        month = month < 10 ? ('0' + month) : month
        date = date < 10 ? ('0' + date) : date
        h = h < 10 ? ("0" + h) : h;
        var m = new Date().getMinutes();
        m = m < 10 ? ("0" + m) : m;
        var s = new Date().getSeconds();
        s = s < 10 ? ("0" + s) : s;
        let day = `${year}-${month}-${date}`
        let mon = `${year}-${month}`
        let hour = `${year}-${month}-${date}-${h}`
        let min = `${year}年${month}月${date}号${h}点${m}分`
        let sec = `${year}年${month}月${date}号${h}点${m}分${s}`
        function getMonth() {
            return mon
        }
        function getDate() {
            return day
        }
        function getHour() {
            return hour
        }
        function getMin() {
            return min
        }
        function getSec() {
            return sec
        }
        return {
            getMonth,
            getDate,
            getHour,
            getMin,
            getSec
        }
    },
    month() {
        let arr = [];
        for (let i = 1; i <= 12; i++) {
            arr.push(i + "月");
        }
        return arr;
    },
    //对象转数组
    Obj_arr(obj) {
        obj = obj || { age: 18, name: 'wang' }
        const arr = function () {
            let arr1 = []
            for (var n in obj) {
                arr1.push({ name: n, value: obj[n] })
            }
            return arr1
        }
        return arr()
    },
    //高德转百度
    baidu(bdLng, bdLat) {
        var X_PI = (Math.PI * 3000.0) / 180.0;
        var x = bdLng - 0.0065;
        var y = bdLat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
        var gg_lng = z * Math.cos(theta);
        var gg_lat = z * Math.sin(theta);
        return [gg_lng, gg_lat]
    },
    //隐藏手机号  178****8796
    filter_phone(phone) {
        let center = phone.toString().substr(3, 4);
        var e = new RegExp(center, "g");
        phone = phone.toString().replace(e, '****')
        return phone
    },
    //obj arr 对象的克隆（区分于指针赋值）
    copyObj(obj) {
        var copyObj = function (obj) {
            if (obj.constructor == Array) {
                var a = [];
                for (var i in obj) {
                    a.push(obj[i]);
                }
                return a;
            } else {
                var o = {}
                for (var i in obj) {
                    o[i] = obj[i];
                }
                return o;
            }

        }
    },
    // 按某个属性值 去重数组对象
    replace(arr1, name) {
        let arr = arr1
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i][name] == arr[j][name]) {
                    arr.splice(j, 1)
                    j--
                }
            }
        }
        return arr
    },
    deepClone(obj, parent = null) {
        let result; // 最后的返回结果

        let _parent = parent; // 防止循环引用
        while (_parent) {
            if (_parent.originalParent === obj) {
                return _parent.currentParent;
            }
            _parent = _parent.parent;
        }

        if (obj && typeof obj === "object") { // 返回引用数据类型(null已被判断条件排除))
            if (obj instanceof RegExp) { // RegExp类型
                result = new RegExp(obj.source, obj.flags)
            } else if (obj instanceof Date) { // Date类型
                result = new Date(obj.getTime());
            } else {
                if (obj instanceof Array) { // Array类型
                    result = []
                } else { // Object类型，继承原型链
                    let proto = Object.getPrototypeOf(obj);
                    result = Object.create(proto);
                }
                for (let key in obj) { // Array类型 与 Object类型 的深拷贝
                    if (obj.hasOwnProperty(key)) {
                        if (obj[key] && typeof obj[key] === "object") {
                            result[key] = deepClone(obj[key], {
                                originalParent: obj,
                                currentParent: result,
                                parent: parent
                            });
                        } else {
                            result[key] = obj[key];
                        }
                    }
                }
            }
        } else { // 返回基本数据类型与Function类型,因为Function不需要深拷贝
            return obj
        }
        return result;
    },
    setrules(arr) {
        let obj = {}
        arr.forEach(v => {
            obj[v] = [
                { required: true, message: "请输入该信息", trigger: "change" },
            ]
        });
        return obj
    },
    up_to_low(arr1) {
        let arr = arr1.concat([]);
        let finally1 = [];
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i]
            let newobj = {}
            for (let key in obj) {
                let name = repeat(key)
                newobj[name] = obj[key]
            }
            finally1.push(newobj)
        }
        return finally1
        //检测多个大写字母
        function repeat(key) {
            let str = ''
            str = fil(key, check(key))//替换——小写
            if (check(str)) {
                str = fil(str, check(str))
            }
            return str
        }
        //替换字母
        function fil(b, s) {
            let reg = '/' + s + '/g'
            return b.replace(eval(reg), '_' + s.toLowerCase())
        }
        //返回大写字母
        function check(key) {
            let key1 = key.toLowerCase()
            // console.log(key, key1);
            let arr2 = key.split('') //old
            let arr3 = key1.split('') //new
            //找到大写字母
            let str;
            for (let i = 0; i < arr2.length; i++) {
                if (arr2[i] != arr3[i]) {
                    return arr2[i]
                    // let reg = '/' + arr2[i] + "/g";
                    // str = key.replace(eval(reg), `_${arr3[i]}`)
                    // console.log(str)
                }
            }
        }
    },
    _low_to_up(arr1) {
        let arr = arr1.concat([]);
        return arr.map((v) => {
            let obj = {};
            for (let i in v) {
                obj[re(i)] = v[i];
            }
            return obj;
        });
        //把下滑线替换成大写
        function re(str) {
            if (str.indexOf("_") != -1) {
                let index = str.indexOf("_");
                let sml = str.substr(index + 1, 1);
                let reg = "/_" + sml + "/g";
                let str1 = str.replace(eval(reg), sml.toLocaleUpperCase());
                if (str1.indexOf("_") != -1) {
                    str1 = re(str1)
                }
                return str1;
            } else {
                return str;
            }
        }
    },
    dateFtt(fmt, date) { //Author Liuzr  
        fmt = fmt || 'yyyy-MM-dd hh:mm:ss'
        date = date || new Date()
        var o = {
            "M+": date.getMonth() + 1,                 //月份   
            "d+": date.getDate(),                    //日   
            "h+": date.getHours(),                   //小时   
            "m+": date.getMinutes(),                 //分   
            "s+": date.getSeconds(),                 //秒   
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds()             //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    // 报表下载
    download(id, name) {
        var dom1 = document.querySelector(`#${id}`);
        tableToExcel(dom1, name);
        //替换table数据和worksheet名字
        function format(s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            });
        }
        function base64(s) {
            return window.btoa(unescape(encodeURIComponent(s)));
        }

        function tableToExcel(tableid, sheetName) {
            var uri = "data:application/vnd.ms-excel;base64,";
            var template =
                '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"' +
                'xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>' +
                "<x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets>" +
                "</x:ExcelWorkbook></xml><![endif]-->" +
                ' <style type="text/css">' +
                "table {" +
                "border: .5pt solid black;" +
                " }" +
                "table td {" +
                "border: .5pt solid black;" +
                "width: 100px;" +
                "height: 25px;" +
                " text-align: center;" +
                "font-size: 13px;" +
                " }" +
                "</style>" +
                '</head><body ><table class="excelTable">{table}</table></body></html>';
            var ctx = {
                worksheet: sheetName || "Worksheet",
                table: tableid.innerHTML,
            };
            let a = document.createElement("a");
            //表格名字
            a.download = sheetName || "表格.xls";
            a.href = uri + base64(format(template, ctx));
            a.click();
        }
    },
    replacePart(text, s, r) {
        var pos = text.indexOf(s);
        return text.slice(0, pos) + r + text.slice(pos + 1);
    },
    // 生成一个随机数
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
}
export default base