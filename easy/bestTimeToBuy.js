var maxProfit = function(prices) {
    let profit = 0
   for(let i = 0; i<prices.length; i++){
       let price = prices[i]
       let next = prices[i+1]
       if(price<next){
           profit += next-price
       }
   }
   return profit
};