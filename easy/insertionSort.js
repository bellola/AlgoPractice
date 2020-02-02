//Write a function that sorts a list using insertion sort

function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function insertionSort(array){
    for(let i = 1; i<array.length; i++){
        let j = i
        while(j > 0 && array[j] < array[j-1]){
            swap(j,j-1,array)
            j -= 1
        }
    }
    return array
}