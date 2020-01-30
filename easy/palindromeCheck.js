//Given a non empty string return true if palindrome or f if  not

function isPalindrome(string) {
    // Write your code here.
      let backwards = ''
      for(let i = string.length-1; i >= 0; i--){
          backwards += backwards+string[i]
      }
      console.log(backwards)
      return backwards === string
      
  }