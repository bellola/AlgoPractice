var hammingWeight = function(n) {
    let count = 0;
    let str = n.toString(2);
    console.log(str)
    for(let char of str){
        console.log(char)
        if(char === '1') count++
    }
    return count
};