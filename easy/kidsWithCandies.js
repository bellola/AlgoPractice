var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    let highest = (candies.slice().sort((a,b) => b-a))[0]
    // console.log(highest)
    for(let i = 0; i<candies.length;i++){
        console.log(candies[i], highest)
        if(candies[i] + extraCandies >= highest){
            res.push(true)
        } else {
            res.push(false)
        }
    }
    return res

};