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