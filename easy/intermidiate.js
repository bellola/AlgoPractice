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