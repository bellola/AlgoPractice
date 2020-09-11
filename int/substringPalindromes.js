function pc(str){
    let reversed = '';
    let l = str.length-1
    while(l>=0){
      reversed+=str[l]
      l--
    }
    return str === reversed
  }
  
  function getAllSubstrings(str) {
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
  }
  
  function ls(str){
  let pal = []
  let unique = [...new Set(getAllSubstrings(str))]
  for(let i = 0; i < unique.length;i++){
    if(pc(unique[i])) pal.push(unique[i])
  }
  return pal.length
  }

  //O(n2*n)

  //optimal sol

  var countSubstrings = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i += 1){
        helper(s, i, i) //found all single number length Palindromic
        helper(s, i, i+1) //found all even number length Palindromic
    }
    return count
    
    function helper(s, low, high){
        while(low>=0 && high<=s.length && s[low]===s[high]){
            count += 1
            low -= 1
            high += 1
        }
    }
};