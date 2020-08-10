const binarySearch = (arr, target) => {

    let left = 0;
    let right = arr.length;
    
    while (left<right) {
      const indexToCheck = Math.floor((left + right) / 2);
      const checking = arr[indexToCheck];
      console.log(`indexToCheck equals: ${indexToCheck}`)
    
      if (checking === target) {
        return indexToCheck;
      } else if(target>checking){
        left = indexToCheck+1
      } else{
        right = indexToCheck
      }
       
    }
    return null
  }