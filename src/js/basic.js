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
    // 引用类型：Object(对象)、Array(数组)、Function(函数)、RegExp(正则)、Date（日期）
    var object = {
        name: "张三",
        age: 18,
        method: function () {
            return "学生：" + this.name + ", 年纪：" + this.age;
        }
    };
    element.innerHTML = object.method();
}
