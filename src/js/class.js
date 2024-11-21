/**
 * 类和对象
 * 1. 类就是一个特殊的函数，用typeOf判断所定义类的类型，显示就是function
 */

class ClassEx {
    /**
     * 在类体中定义的属性也是定义在类的原型上
     * @type {string}
     */
    protoName = "protoName";

    /**
     * 构造函数，类中如果不声明构造函数，那么则默认生成一个空函数
     * 构造函数中的原型对象就是创建的实例对象中原型指向的原型对象
     * @param name
     * @param age
     */
    constructor(name, age) {
        // 构造函数中声明的属性，都是所创建实例的属性
        // 原始在于，在调用构造函数时，会先创建一个空对象{}.然后把这个对象赋值给this，然后在this上增加属性，最后返回this（当然也可以直接返回其他对象）
        this.name = String(name);
        this.age = age;
    }

    // 静态成员是
    static staticVal = "静态变量"
    static staticFun() {
        console.log("静态方法")
    }

    /**
     * 在类体中定义的方法是定义在类的原型对象上的
     */
    classFun() {
        console.log("原型方法")
    }
}

let p1 = new ClassEx("p1", 1);
let p2 = new ClassEx("p2", 2);
console.log(p1.protoName === p2.protoName);
console.log(ClassEx.staticVal);
console.log(typeof ClassEx)
