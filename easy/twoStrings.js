function twoStrings(s1, s2) {
    let hash = {}
    for(let i = 0;  i < s1.length;i++){
        let val = s1[i]
        if(!hash[val]) hash[val] = true
    }
    for(let i = 0; i < s2.length; i++){
        if(hash[s2[i]] === true)console.log('YES')
        
        
    }
  return NO
}
