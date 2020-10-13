
function sortByHeight(a) {
    let sorted = a.filter(val => val>0)
    sorted = sorted.sort((a,b) => a-b)
    console.log(sorted)
        return a.map(p => {
         if (p !== -1) {
             return sorted.shift();
         }
         
         return -1;
     })
   
 }