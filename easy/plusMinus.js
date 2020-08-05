function plusMinus(arr) {
    let pos = 0
    let neg = 0
    let zero = 0
    for(let i in arr){
        if(arr[i]>0) pos++;
        if(arr[i] === 0) zero++;
        if(arr[i]<0)neg--
    }
    console.log((pos/arr.length).toFixed(6))
    console.log(Math.abs(neg/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))

}