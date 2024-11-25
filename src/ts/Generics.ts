/**
 * TS泛型（泛型一般只在静态类型的语言上存在，以便这些语言能更好的提供类型安全和灵活性
 * 1. TS支持泛型
 */

// 泛型函数
function genericsFunc<T>(val: T) {
}

// 泛型接口
interface IGet<T> {
    get(): T
}

// 泛型类
class GenericClass<T> {
    value: T

    constructor(value: T) {
        this.value = value
    }

    get(): T {
        return this.value
    }
}

// 泛型约束

interface LengthWise {
    length: number
}


// extends约束，必须是实现了制定接口的子对象类型
function printLength<T extends LengthWise>(arg: T) {
    console.log(arg.length)
}

printLength<String>("1234")  // 正确，因为String内部有length属性
// printLength<number>("1234")  // 报错

// 泛型默认参数
function defaultTypeParam<T = String>(arg: T) {
    console.log(typeof arg)
}

defaultTypeParam(true)
defaultTypeParam(123)