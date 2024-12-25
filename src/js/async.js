/**
 * 异步相关知识学习
 */

/**
 * Promise用于抽象的表示一个异步操作
 */
function  promiseBasic() {
    /**
     * promise的初始化需要传递一个执行器函数
     * 执行器函数有两个函数参数，一个是resolved 一个是rejected
     */
    let p = new Promise((resolve, reject) => {})
    console.log(p)

    /**
     * Promise是有状态的
     * Promise的内部状态有三个：pending、fulfilled、rejected。内部状态封装在Promise的内部，外部不能直接获取。
     * 当调用执行器的两个函数参数时会将Promise的内部状态进行切换
     * - 调用resolved函数会将状态从pending切换为fulfilled
     * - 调用rejected函数会将状态从pending切换为rejected，同时调用rejected函数也会抛出错误
     */
    console.log("准备创建一个Promise对象")
    let pState1 = new Promise((resolve, reject) => {
        resolve()
        console.log("执行器函数是同步执行的，在创建Promise对象时就会执行")
    })
    console.log("完成创建一个Promise对象")
    setTimeout(console.log, 1000, pState1)
    console.log("函数执行完成")
}

// promiseBasic()


function promiseThen() {
    /**
     * Promise的then函数接收两个函数参数，分别对应Promise中状态改变为fulfilled 和 rejected时执行
     * 两个函数参数都是可选的
     */
    console.log("准备创建一个Promise对象")
    let p = new Promise((resolve, reject) => {
        console.log("执行器函数是同步执行的，在创建Promise对象时就会执行111")
        setTimeout(() => {
            console.log("Promise状态开始改变")
            resolve("promise value")
            console.log("Promise状态改变完成")
        }, 3000)
        console.log("执行器函数是同步执行的，在创建Promise对象时就会执行222")
    })
    console.log("完成创建一个Promise对象")
    p.then((value) => {
        console.log("resolve：" + value)
    }, (err) => {
        console.log("rejected：" + err)
    })
    console.log("函数执行完成")
}
// promiseThen()

function promiseCatch() {
    /**
     * catch相当是一个语法糖，就是当then中只传递了rejected函数
     * catch会在promise状态切换为rejected时执行
     */
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(Error("错误"))
        }, 3000)
    })
    p.catch((err) => {
        console.log("当promise的状态切换为rejected时执行：" + err)
    }).then((val) => {
        console.log(val)
    })
}

promiseCatch()


