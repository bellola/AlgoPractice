// Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
   
    function largestOfFour(arr) {
   let final = []
   for(let i = 0; i < arr.length; i++){
     let subArr = arr[i]
     let biggest = subArr[0]
     for(let j = 0; j<subArr.length; j++){
       console.log(biggest)
       if(subArr[j] > biggest){
         biggest = subArr[j]
       } 
     }
     final.push(biggest)
   }
   return final
  }
    return arr;
  }

  // Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge,
// we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

 return (str.slice(-(target.length)) === target ? true : false)
 
}

//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  let final = ''
  if(num <= 0){
    return ''
  }
  else{
    while(num > 0){
      final += str
      num--
    }
    return final
  }
  
}

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

function truncateString(str, num) {
  // Clear out that junk in your trunk
 if(str.length <= num){
   return str
 }
 let result = ''
 let count = 0
 while(count<num){
   result += str[count]
   count++

 }
 return result + '...'
}