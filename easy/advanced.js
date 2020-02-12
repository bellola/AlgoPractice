//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.




function palindrome(str) {
    let val = 'abcdefghijklmnopqrstuvwxyz0123456789'.toLowerCase().split('')
    console.log(val)
    let strArr = str.toLowerCase().split('')
    let finalStr = []
    for(let i = 0; i < strArr.length;i++){
      for(let j = 0; j < val.length; j++){
        if(val[j] === strArr[i]){
          finalStr.push(val[j])
        }
        console.log(finalStr)
      }
    }
  
    
  /////fix down////
  
    let reversed = []
    for(let i = finalStr.length-1; i >= 0;i--){
      reversed.push(finalStr[i])
    }
    console.log(reversed, 'THIS IS REV')
  
  
    return finalStr.join('') === reversed.join('')
  }