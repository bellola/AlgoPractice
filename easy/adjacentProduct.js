function adjacentElementsProduct(inputArray) {
    let max = -Infinity;
   for(let i = 0; i < inputArray.length;i++){
      
       let curr = inputArray[i];
       let adj = inputArray[i+1]
       console.log(curr*adj)
       if((curr*adj)>max) max = curr*adj
       
   }
   
   return max
}