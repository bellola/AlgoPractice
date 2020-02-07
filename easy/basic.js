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