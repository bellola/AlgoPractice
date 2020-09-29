//18/20 test cases
function check(arr){
    arr.sort((a,b) => b-a)
    arr.pop()
    return arr.every( (val, i, arr) => val === arr[0] )
  
  
  }
  
  
  check([1,2,2])
  function isValid(s) {
    let hash = {}
    let count = 0
  
    s.split('').forEach(char=>{
      if(!hash[char]) hash[char] = 1
      else hash[char]++
    })
  
    
    let vals = Object.values(hash)
    let max = Math.max(...vals)
    let min = Math.min(...vals)
  
    if((max-min)>1) return "NO"
  
    for(let i = 0;i<vals.length;i++){
        if(vals[i] === max) count++
    }
  
    console.log(count)
  
    if(check(vals) === true) return 'YES'
    if(count>1) return "NO"
  
  
    return 'YES'
    
  
  }