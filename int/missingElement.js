function m(list,list2){
    let hash = {}
    arr2.forEach(val =>{
      hash[val] = true
    })
  
    for(num of list){
     if(!hash[num]) return num
    
    }
  
    return 'no missing values'
  
  }