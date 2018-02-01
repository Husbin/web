const arr = [1, 20, 10, 30, 22, 11, 55, 24, 0, 31, 88, 12, 100, 50 ,112];

function insertSort(arr){
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        for(let j = 0; j < i; j++){
            if(temp < arr[j] && j === 0){
                arr.splice(i, 1);               //从索引为i的位置删除一项
                arr.unshift(temp);              //unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
                break;
            }else if(temp > arr[j] && temp < arr[j+1] && j < i - 1){
                arr.splice(i, 1);               //从索引为i的位置删除一项
                arr.splice(j+1, 0, temp);       //在索引为j+1的位置插入temp
                break;
            }
        }
    }
    return arr;
}

console.log(insertSort(arr));  //[ 0, 1, 10, 11, 12, 20, 22, 24, 30, 31, 50, 55, 88, 100, 112 ]