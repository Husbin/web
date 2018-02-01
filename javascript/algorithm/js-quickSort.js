const arr = [30, 32, 6, 24, 37, 32, 45, 21, 38, 23, 47];

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let temp = arr[0];
    const left = [];
    const right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > temp){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat([temp], quickSort(right));
}

console.log(quickSort(arr));