//simple less efficient sol

var lengthOfLongestSubstring = function(s) {
    var temp = [];
    var maxLength = 0;
    
    for(var i = 0; i < s.length; i++){
        if(temp.indexOf(s[i]) === -1){
            temp.push(s[i]);
            if(temp.length > maxLength)
                maxLength = temp.length;
        }else{
            temp = temp.slice(temp.indexOf(s[i]) + 1,temp.length);
            temp.push(s[i]);
        }
    }
    
    return maxLength;
};

//optimized sol 

function lengthOfLongestSubstring(s) {
  let seen = new Set();
  let longest = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
      seen.delete(s[l]);
      l++;
    }
    seen.add(s[r]);
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
};