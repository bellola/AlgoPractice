//Write a function that takes an array and sorts it using bubble sort

function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubbleSort(array) {

for (let i = 0; i < array.length; i++){
        for (let j =0; j < array.length-1; j++){
            if (array[j] > array[j+1]){
                swap(array, j, j+1);
            }
        }
    }

    return array;
}

function countSwaps(a) {
    let count = 0
   for (let i = 0; i < a.length; i++){
        for (let j =0; j < a.length-1; j++){
            if (a[j] > a[j+1]){
                swap(a, j, j+1);
                count ++
            }
        }
    }
    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length-1]}`)
}
