/**
 * TS基础学习
 * 1. TS支持静态类型检测
 * 2. 支持类型自动推断
 * 3. 支持接口（JS不支持）
 * 4. 兼容JS
 * 5. 支持枚举
 */

// TS区分大小写，分号可选
const str = "this is a str"
const STR = "type script"
console.log(str);  // 分号可选
console.log(STR)

// 单行注释
/**
 * 多行注释
 */

/**
 * 以下是TS支持的数据类型
 */

// 字符串
const str1: String = "this is a str"
const str2 = `字符串支持模版字符串，类似kotlin，输出字符串${str1}`
console.log(str2);

// 数字:同时支持整数和浮点数
const num1 = 123
const num2: number = 0.1234
console.log(num2);

// 布尔值
let isTrue: Boolean = false;
let isFalse: boolean = false;
console.log(isTrue)

// 数组，声明方式有两种
let array: number[] = [1, 2, 3, 4]
let strArray: Array<String> = ["a", "b", "c"]
console.log(strArray)

// 元组，元祖的概念和python的概念相似，表示一个固定的数据结构集合
let tuple: [string, number, string, number] = ["a", 1, "b", 2]
console.log(tuple)

// 枚举
enum Color {
    RED, BLUE
}

let enumTest: Color = Color.RED

// Any类型，表示任何类型，会导致自动类型推断失效，类似Kotlin
let a: any = 1
a = "s"
console.log(a)

// void空类型，常用于没有返回值的函数，如果给变量定义为Void类型，这个变量只能赋值为null或者undefined
let aVoid: void = null
let bAvoid: void = undefined


// null, null表示引用为空，但是使用typeof判断返回的是Object
let aNull: null = null
aNull = undefined
console.log(typeof aNull)

// undefined表示变量未赋值
let aUndefined: string
let bUndefined: undefined = undefined
console.log(aUndefined)
console.log(bUndefined)

// never类型, 常用于函数返回值，表示方法不会正常结束或者进入抛出错误，如果变量被声明为never，则只能赋值为never（直接赋值不行，赋值为一个返回never的函数可以）
// function testNever(): never {
//     throw new Error("testNever")
// }
//
// let aNever: never = testNever()
// let bNever: never = never  // 报错

// unknown类型,与Any类型类似，但是如果变量被赋值了数据，就必须使用类型检查，检查之后才能赋值给其他类型的变量
let aUnknown: unknown = "str"
aUnknown = "ssss"
if (typeof aUnknown == "string") {
    let aStr: string = aUnknown
}
// let bStr: string = aUnknown  // 报错

/**
 * 以下是TS中运算符
 * 1. TS运算符和其他语言运算符基本一致
 */

/**
 * 以下是TS中条件控制/循环
 * 1. TS中if条件判断、switch判断，和java一致
 * 2.循环的使用也和Java基本一致
 */
let aIf = 1 + 2;
if (aIf == 1) {

} else if (aIf == 2) {

} else {

}

switch (aIf) {
    case 1: {
        break
    }
    case 2: {
        break
    }
    default: {
        break
    }
}

let aloop: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < aloop.length; i++) {
    console.log(aloop[i])
}

for (let i of aloop) {
    console.log(i)
}

aloop.forEach((index, num) => {
    console.log(num)
})

let index = 0
while (index < aloop.length) {
    console.log(aloop[index])
    index++
}


