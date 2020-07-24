var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let common = ''
     let shortest = Infinity
    for(let i in strs){
      if(strs[i].length < shortest) shortest = strs[i].length
    }
    //or let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for(let i = 0; i < shortest; i++){
      let char = strs[0][i]
      if(strs.every(str => str[i] === char)) common += char
      else break
    }
    console.log(shortest)
    return common
};