/**
 * TS中的类
 * 1. 使用类创建实例化对象需要使用new关键字
 * 2. 类不支持多继承
 * 3. 不支持构造函数重载
 * 4. 支持静态成员,但是静态成员只能通过类名进行调用，所创建的对象不能调用
 * 5. 支持访问控制修饰，public protected private
 */

// 模块导入
import IGetInfo = require("./interface");


class ClassName {
    private val1: String
    private val2: number

    constructor(a: string) {
        this.val1 = ""
        this.val2 = 0
    }
}

let aClassObject = new ClassName("")
console.log(aClassObject)

class SuperClass {
    public static staticVal = "this is a static val"

    private privateVal: string = "super_privateVal"

    protected protectedVal: string = "super_protectedVal"

    toString(): string {
        return this.privateVal + "  " + this.protectedVal
    }
}

class SubClass extends SuperClass implements IGetInfo.IGetInfo {
    // 如果父类中定义了private修饰的属性，那么子类不能进行重写，即不能定义相同名称的属性
    // privateVal : string = "sub_privateVal"  // 报错
    // 重写了父类的属性
    protected protectedVal: string = "sub_protectedVal"

    getNumber(): number {
        return 0;
    }

    getString(): string {
        return "";
    }

}

let subO = new SubClass()
console.log(subO.toString())
console.log(SubClass.staticVal)
// console.log(subO.staticVal)  // 报错，支持实例对象调用静态成员