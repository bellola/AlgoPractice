
function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = -Infinity
    for(let i = 0; i<inputArray.length;i++){
        console.log('hey')
        let currDiff = Math.abs(inputArray[i] - inputArray[i-1])
        console.log(currDiff)
        if(currDiff>maxDiff){
            maxDiff = currDiff
        }
    }

    return maxDiff
}