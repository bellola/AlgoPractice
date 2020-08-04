function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0
    let sum2 = 0
    let j = arr.length-1
    for(let i = 0; i< arr.length;i++){
        // console.log(arr[i][j])
        sum1+=arr[i][i]
        sum2+=arr[i][j]
        j--
    }
    // console.log(sum1,sum2)
    return Math.abs(sum1-sum2)
 
    
}

//1 2 3     2 3 4 5     find diff diagonal
//2 3 4     2 3 4 5
//2 3 4     4 5 8 7
//          1 3 7 3