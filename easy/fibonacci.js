//Write a func that takes in a int(n) and return the nth fibonacci number.

function getNthFib(n) {
    // Write your code here.
      if(n === 2){
          return 1
      } else if(n === 1){
          return 0
      } else{
          return getNthFib(n-1) + getNthFib(n-2)
      }
  }