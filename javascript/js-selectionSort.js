const arr = [1, 20, 10, 30, 22, 11, 55, 24, 31, 88, 12, 100, 50];

function selectionSort(arr) {
    for(let i = 0 ; i < arr.length - 1 ; i++){
        let index = i;
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[index] > arr[j]){
                index = j;
            }
        }
        swap(arr,i,index);
    }
    return arr;
}

function swap(arr,i,index) {
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
}

console.log(selectionSort(arr));