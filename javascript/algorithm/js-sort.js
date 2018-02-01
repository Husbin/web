const arr = [1, 20, 10, 30, 22, 11, 55, 24, 31, 88, 12, 100, 50];

console.log(arr.sort());
//[ 1, 10, 100, 11, 12, 20, 22, 24, 30, 31, 50, 55, 88 ]
//默认是根据字符串unicode码进行排序

//若想指定排序方式，则需要使用Array.sort(CompareFunction)
//如果比较的只是数字而非字符串，比较函数为(a-b)可以实现升序排序
function compareFunction(a,b) {
    return a-b;
}
console.log(arr.sort((item1, item2) => item1 - item2)); //[ 1, 10, 11, 12, 20, 22, 24, 30, 31, 50, 55, 88, 100 ]
console.log(arr.sort(compareFunction));                 //与上式等价