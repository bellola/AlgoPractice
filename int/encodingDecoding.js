function encoding(str){
    let seen = ''
    let count = 0
    let result = ''
    for (let i = 0; i <= str.length; i++) {
      if (seen == str[i]) {
        count++
      } else {
        //the first time we run this we will get an extra zero that we'll need to remove
        result += count + seen
        seen = str[i]
        count = 1
      }
    }
    //finally remove the leading zero
  return result.slice(1)
    
  }
  
  encoding("AAAABBBCCDAA")
  
  function decoding(str){
    let numStr = ''
    let result = ''
    for(let i in str){
      if(parseInt(str[i])){
        numStr+=str[i]
      } else {
        result+=str[i].repeat(parseInt(numStr))
        numStr = ''
      }
    }
  
    return result
  }
  
  
  decoding('4A3B2C1D2A')