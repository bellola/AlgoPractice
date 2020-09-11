var frequencySort = function(s) {
    let ans = ""
    let seen = new Map() 
    
    for(let i of s)
        seen.has(i) ? seen.set(i, seen.get(i) + 1) : seen.set(i, 1)
    
    const pq = Array.from(seen.entries())
 
    pq.sort((a, b) => b[1] - a[1]) 
    
    pq.forEach(el => {
        let times = el[1]
        while(times--)
            ans += el[0]
    })
    
    return ans    
};

//mycode

let hash = new Map()

// console.log(hash) 
let res = ''

hash.set('a', 1)

hash.set('b', 4)

hash.set('c', 2)

let hashIter = Array.from(hash.entries())

hashIter.sort((a, b) => b[1] - a[1]) 

for(let i=0;i<hashIter.length;i++){
  res+= hashIter[i][0].repeat(hashIter[i][1])
  // console.log(hashIter[i][0])
}

console.log(res)