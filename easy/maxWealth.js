var maximumWealth = function(accounts) {
    let max = -Infinity
    for(let i = 0; i < accounts.length; i++){
        let acc = accounts[i]
        let money = 0
        for(let j = 0; j < acc.length; j++){
           money+=acc[j] 
        }
        if(money>max){
            max = money
        }
        money = 0
    }
    return max
};