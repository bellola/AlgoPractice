function matchingStrings(strings, queries) {
    let res = []
    let map = {}
    strings.forEach(s=>{
        if(!map[s]) map[s] = 1
        else map[s]++
    })

    queries.forEach(q=>{
      if(map[q])res.push(map[q])
      else res.push(0)
    })
    
    return res
}