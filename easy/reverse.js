//two pointers and swap 

var reverseString = function(s) {
    let len = s.length;
    if(!len || len == 1) return s;
    
    let l=0, r=len-1;
    while(l<=r){
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
};

//destructuring

var reverseString = function(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
      // ES6 destructuring assignment
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
  };