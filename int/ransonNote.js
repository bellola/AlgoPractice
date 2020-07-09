function ransom(magazine, note){
 
    let hash = {}
    let count = 0
    for(let i = 0; i<magazine.length;i++){
      if(!hash[magazine[i]]) hash[magazine[i]] = 1
      else hash[magazine[i]]++
    }
  
    for(let i = 0; i < note.length; i++){
      if(hash[note[i]]){
        count++
         hash[note[i]]--}
    }
  
    let result = count === note.length ? 'Yes' : 'No'
    console.log(result)
  
  }