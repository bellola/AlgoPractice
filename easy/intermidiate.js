//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
//The lowest number will not always come first.

function sumAll(arr) {
    let min = Math.min(arr[0], arr[1])
    let max = Math.max(arr[0], arr[1])
    let result = 0
    for(let i = min; i<=max;i++){
      result += i
    }
    return result;
  }


  //Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
  //In other words, return the symmetric difference of the two arrays.

  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }