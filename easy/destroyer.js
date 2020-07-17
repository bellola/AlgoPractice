function destroyer(arr) {
    
    let hash = {}
    let results = []
    for(let i = 1; i < arguments.length; i++){
      if(!hash[arguments[i]]) hash[arguments[i]] = true
    }
    for(let i = 0; i<arr.length;i++){
      if(!hash[arr[i]]) results.push(arr[i])
    }
  
    return results
   
  }

  //create a map with args set to true
  //if arr elements dont exist in hash push them into results array