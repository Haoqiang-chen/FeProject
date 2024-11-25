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

