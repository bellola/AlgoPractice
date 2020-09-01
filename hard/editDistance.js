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

//recursive slow

function minDistance (src, tgt) {
    if (!tgt.length) return src.length;
    if (!src.length) return tgt.length;

    return Math.min(
        minDistance( src.slice(1), tgt ) + 1, minDistance( tgt.slice(1), src ) + 1,
        minDistance( src.slice(1), tgt.slice(1) ) + ( src[0] == tgt[0] ? 0 : 1 )
    );
}

function editDistance(str1,str2, m = str1.length , n= str2.length){
   
    if(m===0) return n
    if(n===0) return m
    if(str1[m-1]== str2[n-1]) return editDistance(str1, str2, m-1, n-1) 
    return 1 + Math.min(editDistance(str1, str2, m, n-1),    
                   editDistance(str1, str2, m-1, n),    
                   editDistance(str1, str2, m-1, n-1)    
                   ) 

 
  
}

//dp

function minDistance (src, tgt) {
  let dp = Array(src.length+1).fill(0).map(() => (Array(tgt.length+1).fill(0)))

for(let i = 0; i < dp.length;i++){
  dp[i][0] = i
}

for(let i = 0; i < dp[0].length;i++){
  dp[0][i] = i
}


for (let i = 1;i<dp.length;i++) {
      for (let j=1;j<dp[0].length;j++) {
          dp[i][j] = Math.min(
                          dp[i-1][j]+1, // left
                          dp[i][j-1]+1, // right
                          dp[i-1][j-1] + (src[i-1] != tgt[j-1] ? 1 : 0) // diagonal
                      );
      }
  }

return dp[src.length][tgt.length]
}
