// 闭包
function outter() {
    var privateVar = "我是私有的变量";     // 外部作用域的对象无法访问到此变量
    function inner() {
        console.log(privateVar);            // 函数内部如果找不到某个变量或者对象，会一级一级往外找
    }
    return inner;                           // 返回函数inner才是闭包函数
}

var out = outter();
out();