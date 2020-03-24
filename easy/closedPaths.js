//if number includes 0,4,6,9 that num represents 1 and if that num is 9 represents 2. How much is the whole num

function closedPaths(number) {
    // Write your code here
    let arr = number.toString(10).split('')
    let result = 0
    console.log(arr)
    for(let i = 0; i<arr.length; i++){
      console.log(typeof(arr[i]))
      let num = parseFloat(arr[i])
        if(num === 0 || num === 4 || num === 6 || num === 9) result += 1
        if(num === 8) result += 2
    }

    return result
}