//failed attempt

var minDistance = function(word1, word2) {
    let count = 0

    if(word1.length === word2.length){
      


      let i = 0 
      while(word1.length>i){
      let word1Char = word1[i]
      let w1NextChar = word1[i+1]
      let word2Char = word2[i]
        if(word1Char !== word2Char){
          count++
        }
        i++
      }
      return count
    }


    let i = 0
    let shortest = Math.min(word1.length,word2.length)
    while(shortest > i){
      let word1Char = word1[i]
      let w1NextChar = word1[i+1]
      let word2Char = word2[i]
      if(i>0 && word1Char !== word2Char && w1NextChar === word2Char){
       
        word1 = word1.split('')
       
        word1.splice(i,1)
        word1 = word1.join('')
      
        count++
      }
      i++
  }
  
  shortest = Math.min(word1.length,word2.length)
  let diff = Math.abs(word1.length-word2.length);
  count += diff
  let j = 0
  while(shortest>j){
    let word1Char = word1[j]
    let w1NextChar = word1[j+1]
    let word2Char = word2[j]
    if(word1Char !== word2Char){
      count++
    }

    j++
  }


  return count
};

//