var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let res = []
    let [biggest, smallest] = [,]
    
    if(set1.length>=set2.length){
        biggest = set1 
        smallest = set2
    } else {
        biggest = set2
        smallest = set1
    }
       
       smallest.forEach(num=>{
           if(biggest.has(num)){
               res.push(num)
           }
       })
       
       return res
   };

   let map = new Map();
    for(let num of nums1){
        if(!map.has(num))
            map.set(num, true);
    }
    
     return Array.from(new Set(nums2.filter(n => {
        if(map.has(n)){
            return true;
        }
        else return false;
    })));

};