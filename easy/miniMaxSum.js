//my sol

function miniMaxSum(arr) {
    let sum = 0
    let res = []
    //calculate sum of all values
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    //push into array sum minus the value at that index so we have an array of every
    //sum minus itself
    for(let i = 0; i < arr.length; i++){
        res.push(sum-arr[i])

    }
    //sort the array from lowest to highest
    let lowestToHighest = res.sort((a, b) => a - b);

    //console log lowest value and highest value
    console.log(`${res[0]} ${res[arr.length-1]}`)
}
