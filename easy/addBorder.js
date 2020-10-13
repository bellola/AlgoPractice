function addBorder(picture) {
    let r = '*'.repeat(picture[0].length + 2);
    return [
        r,
        ...picture.map(x => `*${x}*`),
        r
    ];
}



function addBorder(matrix) {
    let res = []
 
 for(let row of matrix){
   console.log(`*${row}*`)
   res.push(`*${row}*`)
 }
 
     
 let border = "*".repeat(res[0].length)
 
 res.push(border)
 res.unshift(border)
 
 return res
 
 }