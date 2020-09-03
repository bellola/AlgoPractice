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