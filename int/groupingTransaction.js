let transactions = ['notebook', ,'notebook','keyboard', 'mouse', 'mouse']

//must return ['mouse 2', 'notebook 2', 'keyboard 1']

function numTrans(arr){
  let temp = []
  let final = []
  let hash = {}
  arr.forEach(trans => {
    if(!hash[trans]){
      hash[trans] = 1
    } else {
      hash[trans]++
    }
  })

  for(key in hash){
    temp.push([key, parseInt(hash[key])])
  }

  temp.sort(function(a,b){
    if(a[1] === b[1]){
       if (a[0] < b[0]) return -1;
        else if (a[0] > b[0]) return 1;
        return 0;

    } else{
      return b[1] - a[1]
    }
    return 
  })

  temp.forEach(a => {
    final.push(`${a[0]} ${a[1]}`)
  })
 
  
return final

}