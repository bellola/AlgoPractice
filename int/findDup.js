//find all the nums that appear more than once in an array

function duplicates(arr){
    let hash = {}
    let results =[]
    for(let i = 0; i<arr.length; i++){
      if(hash[arr[i]]){
        hash[arr[i]]++
      }else{
        hash[arr[i]] = 1
      }
    }
  
      for (let val in hash) {
        if(hash[val] > 1) console.log(val)
    }
  }
  
  
  //

  
  
  arr.filter((e, i, a) => a.indexOf(e) !== i)