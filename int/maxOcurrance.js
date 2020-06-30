function maxOcurr(str){
    let hash = {}
    // let result = []
    for(let i = 0; i<str.length;i++){
      // console.log(!hash[str[i]])
      if(!hash[str[i]] === true){
        hash[str[i]]= 1
      } else{
        hash[str[i]] += 1
      }
    }
   
   keysSorted = Object.keys(hash).sort(function(a,b){hash[b]-hash[a]})
   return keysSorted[0]
  }