function commonCharacterCount(s1, s2) {
    let arr = s1.split('')  
      let count = 0 
      let i = arr.length-1
      while(i>=0){
       console.log(i)
          if(s2.includes(arr[i])){
              count++
              s2 = s2.replace(arr[i], '')
          }
          i--
      }
      return count
  }