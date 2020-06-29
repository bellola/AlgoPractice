function maxDifference2(arr){
    let maxDif = 0
    let currDif = 0
    
      for(let i = 0;i<arr.length;i++){
        for(let j = 1; j<arr.length;j++){
          if(j>i){
            currDif = arr[j]-arr[i]
            if(currDif>maxDif) maxDif = currDif
          }
        }
      }
      if(maxDif>0) return maxDif
      else return -1
    }