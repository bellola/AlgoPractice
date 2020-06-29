function longestEvenWord(sentence){
    let arr = sentence.split(' ')
    let result = []
    for(let i= 0; i < arr.length; i++){
      if(arr[i].length%2===0) result.push(arr[i])
    }
    return result.sort(function(a, b){return b.length - a.length})[0]
  }
  
  longestEvenWord('Time to write great code')