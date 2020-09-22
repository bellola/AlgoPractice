var topKFrequent = function(nums, k) {
    console.log(nums[0])
    if(nums.length<2) return nums[0];
    
    let hash = {};
    let res = []
    let final = [];
    for(let num of nums){
        if(!hash[num]) hash[num] = 1;
        else hash[num]++
    }

    for(let key in hash){
       res.push([key, hash[key]]) 
    }
    
    res.sort((a,b) => b[1]-a[1]).splice(k);
    
    res.forEach(elem => {
       final.push(parseInt(elem[0]))
    })
    
    return final
    

};


//better

const topKFrequent = (nums, k) => {
    const map = {};
    for (const n of nums) {
      if (map[n] == null) map[n] = 0;
      map[n]++;
    }
  
    const arr = [];
    for (const n in map) {
      arr.push({ n, count: map[n] });
    }
  
    return arr
      .sort((a, b) => b.count - a.count)
      .slice(0, k)
      .map(a => parseInt(a.n));
  };