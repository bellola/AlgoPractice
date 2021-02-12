var groupAnagrams = function(strs) {
    // dict = {
    //     val=sortedString:[every string in original form inside an array]
    // }
 
     map = {}
     
     for(let i = 0; i<strs.length;i++){
         let sorted = strs[i].split('').sort().join('')
         console.log(sorted)
         if(!map[sorted]){
             map[sorted] = [strs[i]]
         } else {
             map[sorted].push(strs[i])
         }
     }
     
     return Object.values(map)
 };