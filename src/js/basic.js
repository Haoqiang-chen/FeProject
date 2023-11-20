/*js的输出方式*/
function clickToPrint(id) {
    // 输出到浏览器控制台
    console.log("Hello World");
    // 查找到对应标签并修改标签内容
    var element = document.getElementById(id);
    element.innerHTML = "Hello World";
    // 弹出弹窗
    window.alert("Hello World");
    // 直接写入HTML文档 如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖
    document.write("<h6>Hello World</>");
}

/*js中基础语法*/
function clickToGrammar(id) {
    // js中大小写敏感，且使用驼峰命名法,变量的声明以字母、、$、_开头，后面接任意多个字母、数字、$、_
    var ab = new Number(123);
    var aB = "这是字符串";
    var element = document.getElementById(id);
    element.innerHTML = ab + aB;

    // js中的数据类型分为基本类型和引用类型
    // 基本类型：String(字符床)、Number(数字)、Boolean(布尔)、Null（空）、Undefined(未定义，当声明了一个变量但是没有赋值时，该变量就是undefined)、Symbol(ES6新增)
    // 引用类型：Object(对象)、Array(数组)、Function(函数)、RegExp(正则)、Date（日期）等
    var object = {
        name: "张三",
        age: 18,
        // 对象中的方法
        method: function () {
            return "学生：" + this.name + ", 年纪：" + this.age;
        }
    };

    // 类型判断 typeof 可以用于判断出变量的类型
    var type = typeof object
    element.innerHTML = object.method() + `  类型为：${type}`;

    // 构造器属性 constructor可以获取变量的构造器
    console.log(object.constructor);
    console.log(["1"].constructor);
    console.log("Str".constructor);
}

/*js验证表单数据*/
function checkForm() {
    var num = document.forms["testForm"]["num"].value;
    if (num < 0 || num > 10) {
        alert("请输入0-10之间的数字");
    }
}

/*AJAX异步请求*/
function asyncRequest(id) {
    var asyncRequest = new XMLHttpRequest();
    asyncRequest.open("GET", "https://www.runoob.com/try/ajax/demo_test.php");
    asyncRequest.onload = function () {
        document.getElementById(id).innerHTML = `请求成功：${asyncRequest.responseText}`;
    }
    asyncRequest.onerror = function () {
        document.getElementById(id).innerHTML = `请求失败:${asyncRequest.status}`;
    }
    asyncRequest.send();
}

/*Promise异步请求*/
function asyncRequestByPromise(id) {
    var asyncRequestByPromise = new Promise(function (resolve, reject) {
        var asyncRequest = new XMLHttpRequest();
        asyncRequest.open("GET", "https://www.runoob.com/try/ajax/demo_test.php");
        asyncRequest.onload = function () {
            resolve(`请求成功：${asyncRequest.responseText}`);
        }
        asyncRequest.onerror = function () {
            reject(`请请求失败:${asyncRequest.status}`)
        }
        asyncRequest.open("GET", "https://www.runoob.com/try/ajax/demo_test.php");
        asyncRequest.send();
    })
    asyncRequestByPromise.then(function (value) {
        console.log("请求成功");
        document.getElementById(id).innerHTML = value;
    }).catch(function (error) {
        console.log("请求失败");
        document.getElementById(id).innerHTML = error;
    }).finally(function () {
        console.log("请求结束");
    })
}
