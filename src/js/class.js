/**
 * 类和对象
 */

class ClassEx {
    // 实例属性,与实例绑定
    protoName = "protoName";
    constructor(name, age) {
        // 实例属性
        this.name = String(name);
        this.age = age;
    }

    static staticVal = "静态变量"
    static staticFun() {
        console.log("静态方法")
    }

    classFun() {
        console.log("原型方法")
    }
}

let p1 = new ClassEx("p1", 1);
let p2 = new ClassEx("p2", 2);
console.log(p1.protoName === p2.protoName);
console.log(ClassEx.protoName);
p1.classFun()
