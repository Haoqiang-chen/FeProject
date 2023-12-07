/**
 * 基础数据类型
 */
function baseDataType() {
    // 字符串
    let a = 1, b = 2;
    let resultStr = `字符串是可以实现插值的，比如a+b=${a + b}`
    console.log(resultStr)

    // Symbol（符号）类型
    let sym = Symbol()
    let sym1 = Symbol()
    console.log(typeof sym)
    console.log(sym === sym1)
    let symByDesc = Symbol("描述")

    // Object对象类型，Object也是派生其他类型的基类
    let object = new Object()  // 等价与直接 {}
    console.log("对象构造函数：" + object.constructor)
    console.log("判断对象是否有某个属性：" + object.hasOwnProperty("propertyName"))
    console.log("对象的字符串表示：" + object.toLocaleString())
    console.log("对象的字符串表示：" + object.valueOf())

}

/**
 * 基础引用类型
 */
function baseReferenceType() {
    // 时间类型
    let date = new Date()
    console.log(date.toDateString())

    // String、Number、Boolean对象
    // 当时用字符串、数值、布尔的字面量时，其实都会在后台创建一个对应的包装器类型，然后用完包装器类型对象就会销毁
    // 比如下面的代码就相当于
    // let str = new String("This is a Str")
    // let str1 = str.substring(5)
    // str = null
    let str = "This is a Str"
    let str1 = str.substring(5)
    console.log(str1)

    // 内置对象

}