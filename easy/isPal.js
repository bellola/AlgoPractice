var isPalindrome = function(x) {
    let arg = x.toString()
      let reversed = ''
      for(let i = arg.length-1;i >= 0 ; i--){
          reversed += arg[i]
      }
      return arg === reversed
      
  };