function moveLargest(a){
    let max = Math.max(...a)
    for(let i = 0; i< a.length; i++){
      if(a[i] === max){
        a.unshift(max)
        a.splice(i+1,1)
        break
      }
    }
   return a
  }
 
 
 
 function slot(a){
   let matrix = []
   let nMatrix = []
   let res = 0
   a.forEach(spin=>{
     matrix.push(spin.split(''))
   })
 
  matrix.forEach(row => {
   nMatrix.push(row.map(Number))
  })
 let i = a[0].length
 while(i>0){
 let maxArr = []
 
 nMatrix.forEach(row => {
   moveLargest(row)
   maxArr.push(row[0])
 })
 nMatrix.forEach(row => {
 
   row.shift()
 })
  res+=Math.max(...maxArr)
 
  maxArr = []
  i--
 }
 
 
 
   return res
 }