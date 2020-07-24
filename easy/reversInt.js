// Given a 32-bit signed integer, reverse digits of an integer.



var reverse = function(x) {
    
    const reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    
    if (reversedInt > 2**31) return 0;
    
    return reversedInt * Math.sign(x);
      
  };



  //alt 

  
  var reverse = function(x) {
    const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};