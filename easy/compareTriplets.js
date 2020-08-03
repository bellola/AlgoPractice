function compareTriplets(a, b) {
    let first = 0
    let second = 0
    let i = 0
    while(3>i){
        if(a[i]>b[i]) first++
        if(a[i]<b[i]) second++
        i++
    }
    return[first,second]
}