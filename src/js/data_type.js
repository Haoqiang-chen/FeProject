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

/**
 * 工厂模式创建对象
 * 1. 工厂模式的缺点是使用工厂默认创建的对象没有办法确定对象的类型
 * @param name
 * @param age
 * @param job
 * @returns {{}}
 */
function creatObjectFactory(name, age, job) {
    let o = {};
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        return this.name;
    }
    return o;
}
let objectNew = creatObjectFactory("name", "age", "job")


/**
 * 构造函数模式创建对象
 * 1. 使用构造函数需要将函数名称首字母设置为大写，用于区域普通函数，表明该函数为构造函数
 * 2. 构造函数其实就是普通函数，只有使用了new关键字才有构造函数的功能
 * 3. 构造函数模式的确定是：
 * （1）如果构造函数内部创建的方法是直接创建方法，那么每个用构造函数创建的对象内部其方法都是一个新的对象，其实对于同类型对象，他们方法的处理其实是一样的，没有必要每个对象内部维护的是新的对象
 * （2）如果构造函数内部方法都指向外部函数，那么外部可能就会维护多个函数，导致代码不能内聚
 * @param name
 * @param age
 * @param job
 * @constructor
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    // 构造函数内部创建函数，那么每个对象都会有独立的函数对象
    this.sayName = function () {
        return this.name;
    }
    // 引用外部函数，那么每个对象都是引用的外部函数
    this.getName = getName
}

function getName() {
    return this.name;
}

let person1 = new Person("name1", "age1", "job1");
let person2 = new Person("name2", "age2", "job2");
console.log(person1.sayName === person2.sayName);  // false
console.log(person1.getName === person2.getName);  // true


/**
 * 原型模式
 * 1. 每个函数都会有一个原型属性(prototype)，这个属性是一个对象。这个对象默认情况下只有一个属性constructor，而constructor属性会指向函数
 * 2. 利用函数创建实例后，这个实例会有一个内部特性[[Prototype]],这个特性以_proto_属性方式暴露出来，这个内部特性指向的是构造函数的原型对象
 * 3. 访问对象属性时会先从该对象实例上查找，如果找不到再去该实例指向的圆形对象中查找
 * @returns {string}
 */
function protoTypeFun() {
    return "这是一个测试原型的函数";
}

// 原型函数
let ConstructorFunc = function () {
}

// 原型对象增加属性,这种实现方式，每次增加一个属性都要明确写一个赋值语句，很繁琐
// ConstructorFunc.prototype.selfFunc = protoTypeFun;
// 可以通过包含属性和方法的对象字面量来封装原型对象
ConstructorFunc.prototype = {
    protoType1: "1",
    protoType2: "2",
    protoType3: "3",
    protoTypeFunc: function () {
        return "这是一个测试原型的函数";
    },
}


// 利用函数创建对象
let consObject = new ConstructorFunc()

// console.log(consObject.selfFunc())
console.log(consObject.protoTypeFunc());
console.log(consObject.name);  // 没有查找到该属性