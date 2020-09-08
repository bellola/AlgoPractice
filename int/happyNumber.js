var isHappy = function(n) {
    
    let seen = {}
    while(n !== 1 && !seen[n]){
        seen[n] = true
        n = squaredNum(n)   
    }
    
    return n === 1
};

function squaredNum(num){
    let stringedNum = num.toString()
    let res = 0
    for(let i = 0; i < stringedNum.length;i++){
        res += Math.pow(parseInt(stringedNum[i]), 2)
    }
    return res
}