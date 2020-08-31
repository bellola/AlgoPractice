
function ls(arr){

    let largest = 0
    let sum = 0
    for(let num of arr){
      console.log(sum)
      if(num>0){
        sum+=num;
        if(sum>largest){
          largest = sum
        }
      } else {
        sum =0
      }
  
    }
    return largest
  }
  