function isShuffle(s1,s2,s3){
    console.log(s2)
    if(s1.length+s2.length !== s3.length) return false
  
    if(!s1 || !s2 || !s3){
      if((s1+s2) === s3 ) return true
      else return false
    }
  
    if(s1[0] !== s3[0] && s2[0] !== s3[0]){
      return false
    }
  
  
    if(s1[0] === s3[0]){
        return isShuffle(s1.slice(1), s2, s3.slice(1))
    }
  
  
    if(s2[0] === s3[0]){
      return isShuffle(s1, s2.slice(1), s3.slice(1))
    }
  
  
    return false
  }