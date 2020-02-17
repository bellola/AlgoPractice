// Given a 32-bit signed integer, reverse digits of an integer.



var reverse = function(x) {
    
    const reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    
    if (reversedInt > 2**31) return 0;
    
    return reversedInt * Math.sign(x);
      
  };