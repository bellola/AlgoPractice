var maxProfit = function(prices) {
    let lowest = prices[0];
     let maxProfit = 0;
     
     for(let i = 0; i<prices.length;i++){
         let curr = prices[i]
         if(curr < lowest){
             lowest = curr
         }
         else if(curr - lowest > maxProfit){
             maxProfit = curr - lowest
         }
         
     }
     
     
     
     return maxProfit
 };
 