function birthdayCakeCandles(ar) {
    let highest = 0
    let count = 0
    for(let i in ar){
        if(ar[i]>highest) highest = ar[i]
    }
    for(let i in ar){
        if (ar[i] === highest)count++
    }