function isCryptSolution(crypt, solution) {
    let chars = {};
    let rest = []
    let num1 = ''
    let num2 = ''
    let num3 = ''
    solution.forEach(pair => {
        chars[pair[0]] = (pair[1])
    })
 
     for(i of crypt[0]){
        num1+=chars[i]
    }
    
    console.log(num1)
    
    for(i of crypt[1]){
        num2+=chars[i]
    }
    
    for(i of crypt[2]){
        num3+=chars[i]
    }
    
    if((num1[0] === '0' && num1.length>1) || (num2[0] === '0' && num2.length>1)  || (num3[0] === '0' && num3.length>1) ) return false
   
    
    return(parseInt(num1)+ parseInt(num2)) === parseInt(num3)
}