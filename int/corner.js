let image = [
  [0,0,0,0,0],
  [0,0,1,1,0],
  [0,0,1,1,0],
  [0,0,1,1,0],
  [0,0,0,0,0]
]



const corners = (img) =>{
  let coor = []
  let rows = []
  let height = 0
  let width = 0
  for(let i = 0; i < img.length;i++){
    if(img[i].includes(1)){
      height+=1
      rows.push(img[i])
      
    }
    for(let j = 0; j < img.length;j++){
      if(img[i][j]!=0){
        coor.push([i,j])
      }
    }
  }

  rows[0].forEach(elem => {

    if(elem===1) width++
  })

console.log(width, "WIDTH")
console.log(height, "HEIGTH")
console.log(coor[0], coor[coor.length-1], "BEGINNING AND END")
}



corners(image)
