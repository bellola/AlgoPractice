var transpose = function(A) {
    let res = []
    for(let i = 0; i < A[0].length;i++){
        let col = []
        for(let j = 0; j< A.length;j++){
            col.push(A[j][i])
        }
        res.push(col)
    }
    
    
    
    
    return res
};

//my sol

function rotateImage(a) {
    let temp = []
    let res = []
    for(let i  = 0; i<a.length;i++){
        for(let j = 0; j < a[i].length;j++){
            temp.push(a[j][i])
        }
        
    }
    
    splitArray(temp, res, a)
  
    res.forEach(arr=>{
        arr.reverse()
    })
    
      return res
}


function splitArray(array, aOa, a) {

    while (array.length > 0) {
        let arrayElement = array.splice(0,a.length);
        aOa.push(arrayElement);
    }
    return aOa;
}

