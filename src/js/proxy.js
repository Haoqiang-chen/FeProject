/**
 * 代理和反射相关知识
 * 1. 代理是指为目标对象定义一个与之关联的代理对象，如果想在操作目标对象进而影响目标对象之前对某些操作进行拦截处理，可以通过代理对象进行操作，从而实现对部分操作进行额外控制的能力
 */


/**
 * 创建空代理对象
 * 1. 创建的空代理对象，是独立于目标对象的对象，但是对目标对象或者代理对象上的操作都会同时操作到对方
 * @type {{name: string}}
 */

// 目标对象
let object = {
    name: "chen"
}

// 捕获器
let handler = {}

// 代理对象
let proxyObject = new Proxy(object, handler)

console.log(object.name)
console.log(proxyObject.name)
proxyObject.age = "15"
console.log(proxyObject.age)
console.log(object.age)


console.log("-------------------")

/**
 * 设置捕获器
 * 1.对代理对象的操作会经过捕获器拦截
 * 2.对目标对象的操作会直接影响目标对象和代理对象
 */

// 目标对象
let object1 = {
    name: "chen"
}

// 捕获器
let handler1 = {
    get() {
        return "捕获器";
    }
}

// 代理对象
let proxyObject1 = new Proxy(object1, handler1)

console.log(object1.name)
console.log(proxyObject1.name)
proxyObject1.age = "15"
console.log(proxyObject1.age)
console.log(object1.age)