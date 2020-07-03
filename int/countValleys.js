function countingValleys(n, s) {
    let level = 0
    let count = 0
    for(let i = 0;  i < s.length; i++){
       if(s[i] === 'U') level ++
       if(s[i] === 'D') level --
       if(level === 0 && s[i] === 'U') count++
    }
    return count

}