let a = [ 
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 7, 8, 9 ] ]
  
    let res = []
  for(let i = 0; i < arr[0].length;i++){
    let row = []
    for(let j = 0; j < arr.length;j++){
      console.log(arr[j][i])
      row.push(arr[j][i])
    }
    res.push(row)
  }

  console.log(res)
  

}