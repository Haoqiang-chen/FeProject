/**
 * TS中的函数
 * 1. 函数支持默认参数
 * 2. 函数支持可选参数, 但是可选参数不能有默认值
 * 3. 函数支持定义剩余参数，类似java、kotlin的可变参数，只是语法不同
 * 4. TS 也支持JS中内置的Function构造函数来定义函数,其实就是相当于函数的构造函数
 * 5. TS 支持lambda函数,语法与Java Kotlin不同
 * 6. TS 支持函数重载
 */

// 函数定义
// function function_name(val1: Type1 = defaultValue, val2?: Type2, ...otherval:Type): returnType {
//
// }

function testFunc(a: number, b?: string, c: object = {}, ...other: string[]): number {
    console.log(a)
    console.log(b)
    console.log(c)
    return 1
}

testFunc(1)

// 匿名函数
let noNameFunc = function (a: number, b?: string, c: object = {}, ...other: string[]): number {
    console.log(a)
    console.log(b)
    console.log(c)
    return 1
}

// 函数的构造函数
let aFunc = new Function("a", "b", "return a + b")
console.log(aFunc(1, 2))

// lambda,  定义 + 初始化
let aLambda: (a: number, str: string) => void
aLambda = (a, str) => {  // 利用了类型推断
    console.log(a, str)
}
aLambda = (a: number, str: string): void => { // 显示定义类型
    console.log(a, str)
}
aLambda(1, "3")