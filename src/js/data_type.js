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