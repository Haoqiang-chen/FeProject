/**
 * TS中接口
 * 1. 接口中支持定义属性和方法
 * 2. 接口支持继承
 */

export interface IGetInfo {
    getNumber(): number

    getString(): string
}

let getInfo: IGetInfo = {
    getNumber(): number {
        return 100;
    }, getString(): string {
        return "---";
    }
}
console.log(getInfo.getNumber(), getInfo.getString())

/**
 * 这个相当于定义了一个类型，同时指定了该类型的构造函数类型
 */
interface Test{
    (param1: string, param2: number): boolean;
}

let test : Test = (param1: string, param2: number): boolean=> {
    return true
}

/**
 * 这个相当于定义了一个类型，同时指定了该类型的构造函数类型。但是这种方式指定了创建该类型对象时只能
 */
interface Test1{
    new (param1: string, param2: number): boolean;
}

declare let test1: Test1

let  a = new test1("", 1)
console.log()