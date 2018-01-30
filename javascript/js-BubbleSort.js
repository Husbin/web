const arr = [1 , 20 , 10 , 30 , 22 , 11 , 55 , 24 , 31 , 88 , 12 , 100 , 50];

function bubbleSort(arr) {
    for(let i = 0 ; i < arr.length - 1 ; i ++){
        for(let j = 0 ; j < arr.length - 1 - i ; j ++){
            if(arr[j] > arr[j+1]){
                swap(arr,j);
            }
        }
    }
    return arr;
}
function swap(arr , j) {
    let temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
}
console.log(bubbleSort(arr));